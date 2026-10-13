import fs from "fs/promises";
import path from "path";
import { Enquiry, EnquiryInput, EnquiryStatus } from "./types";
import { supabaseAdmin, isSupabaseConfigured } from "./supabase";

const DATA_DIR = path.join(process.cwd(), "data");
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");

// Initial Seed Data for immediate testing
const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: "enq-101",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    full_name: "Rajesh Varma",
    phone: "+91 98490 11223",
    whatsapp: "+91 98490 11223",
    event_type: "Luxury Wedding Planning",
    event_date: "2026-11-20",
    location: "Tirupati",
    guest_count: "800 - 1,200",
    estimated_budget: "₹15 Lakhs - ₹25 Lakhs",
    decoration_preferences: "Temple Gopuram floral mandap with gold pillars and tuberose garlands",
    additional_requirements: "Need bridal entrance carriage and dhol coordination for Muhurtham",
    status: "New",
    admin_notes: "High priority lead. Client requested callback before 6 PM."
  },
  {
    id: "enq-102",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(),
    full_name: "Sneha Swaminathan",
    phone: "+91 94441 55667",
    whatsapp: "+91 94441 55667",
    event_type: "Wedding Stage Decoration",
    event_date: "2026-12-05",
    location: "Vellore",
    guest_count: "500 - 800",
    estimated_budget: "₹8 Lakhs - ₹12 Lakhs",
    decoration_preferences: "Rose gold and ivory stage with crystal chandeliers at GRT Grand",
    additional_requirements: "Pre-event 3D walkthrough needed",
    status: "Quotation Sent",
    admin_notes: "Initial quote sent on WhatsApp. Follow up on Monday."
  },
  {
    id: "enq-103",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    full_name: "Harish Chandra",
    phone: "+91 99802 33445",
    whatsapp: "+91 99802 33445",
    event_type: "Birthday Party Planning",
    event_date: "2026-10-30",
    location: "Bengaluru",
    guest_count: "100 - 200",
    estimated_budget: "₹3 Lakhs - ₹5 Lakhs",
    decoration_preferences: "Jungle Safari theme with 3D animal figures & balloon arch",
    additional_requirements: "Need kids activities and theme cake table",
    status: "Confirmed",
    admin_notes: "Advance received. Fabrication team assigned."
  },
  {
    id: "enq-104",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
    full_name: "D. Venugopal Naidu",
    phone: "+91 94401 77889",
    whatsapp: "+91 94401 77889",
    event_type: "Haldi & Mehendi Decorations",
    event_date: "2026-11-14",
    location: "Chittoor",
    guest_count: "250 - 400",
    estimated_budget: "₹4 Lakhs - ₹6 Lakhs",
    decoration_preferences: "Traditional yellow marigolds with brass uruli and floral swing",
    additional_requirements: "Courtyard home setup in Chittoor",
    status: "Contacted",
    admin_notes: "Spoke with client. Site inspection scheduled for this weekend."
  }
];

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(ENQUIRIES_FILE);
    } catch {
      await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(INITIAL_ENQUIRIES, null, 2), "utf-8");
    }
  } catch (error) {
    console.error("Error creating data directory:", error);
  }
}

export async function getEnquiries(): Promise<Enquiry[]> {
  // If Supabase is connected, query Supabase
  if (isSupabaseConfigured && supabaseAdmin) {
    try {
      const { data, error } = await supabaseAdmin
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) {
        return data as Enquiry[];
      }
    } catch (err) {
      console.warn("Supabase query failed, falling back to local storage:", err);
    }
  }

  // Fallback to local JSON file
  await ensureDataFile();
  try {
    const raw = await fs.readFile(ENQUIRIES_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return INITIAL_ENQUIRIES;
  }
}

export async function createEnquiry(input: EnquiryInput): Promise<Enquiry> {
  const newEnquiry: Enquiry = {
    id: `enq-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
    created_at: new Date().toISOString(),
    full_name: input.full_name.trim(),
    phone: input.phone.trim(),
    whatsapp: input.whatsapp ? input.whatsapp.trim() : input.phone.trim(),
    event_type: input.event_type,
    event_date: input.event_date,
    location: input.location,
    guest_count: input.guest_count,
    estimated_budget: input.estimated_budget,
    decoration_preferences: input.decoration_preferences?.trim() || "",
    additional_requirements: input.additional_requirements?.trim() || "",
    status: "New",
  };

  // If Supabase is configured
  if (isSupabaseConfigured && supabaseAdmin) {
    try {
      const { data, error } = await supabaseAdmin
        .from("enquiries")
        .insert([{
          full_name: newEnquiry.full_name,
          phone: newEnquiry.phone,
          whatsapp: newEnquiry.whatsapp,
          event_type: newEnquiry.event_type,
          event_date: newEnquiry.event_date,
          location: newEnquiry.location,
          guest_count: newEnquiry.guest_count,
          estimated_budget: newEnquiry.estimated_budget,
          decoration_preferences: newEnquiry.decoration_preferences,
          additional_requirements: newEnquiry.additional_requirements,
          status: newEnquiry.status,
        }])
        .select()
        .single();
      if (!error && data) {
        return data as Enquiry;
      }
    } catch (err) {
      console.warn("Supabase insert failed, saving to local store:", err);
    }
  }

  // Local storage save
  await ensureDataFile();
  const current = await getEnquiries();
  // Check for duplicate submission within 30 seconds
  const isDuplicate = current.some(
    (e) =>
      e.phone === newEnquiry.phone &&
      e.event_date === newEnquiry.event_date &&
      Date.now() - new Date(e.created_at).getTime() < 30000
  );

  if (isDuplicate) {
    throw new Error("Duplicate submission detected. Your enquiry was already received.");
  }

  const updated = [newEnquiry, ...current];
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(updated, null, 2), "utf-8");
  return newEnquiry;
}

export async function updateEnquiryStatus(
  id: string,
  status: EnquiryStatus,
  admin_notes?: string
): Promise<Enquiry | null> {
  if (isSupabaseConfigured && supabaseAdmin) {
    try {
      const updatePayload: { status: EnquiryStatus; admin_notes?: string } = { status };
      if (admin_notes !== undefined) updatePayload.admin_notes = admin_notes;

      const { data, error } = await supabaseAdmin
        .from("enquiries")
        .update(updatePayload)
        .eq("id", id)
        .select()
        .single();
      if (!error && data) {
        return data as Enquiry;
      }
    } catch (err) {
      console.warn("Supabase update failed:", err);
    }
  }

  await ensureDataFile();
  const current = await getEnquiries();
  const index = current.findIndex((e) => e.id === id);
  if (index === -1) return null;

  current[index].status = status;
  if (admin_notes !== undefined) {
    current[index].admin_notes = admin_notes;
  }
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(current, null, 2), "utf-8");
  return current[index];
}

export async function deleteEnquiry(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabaseAdmin) {
    try {
      const { error } = await supabaseAdmin.from("enquiries").delete().eq("id", id);
      if (!error) return true;
    } catch (err) {
      console.warn("Supabase delete failed:", err);
    }
  }

  await ensureDataFile();
  const current = await getEnquiries();
  const filtered = current.filter((e) => e.id !== id);
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
