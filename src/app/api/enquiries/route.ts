import { NextRequest, NextResponse } from "next/server";
import { createEnquiry, getEnquiries } from "@/lib/db";
import { getWhatsAppUrlForEnquiry } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      full_name,
      phone,
      whatsapp,
      event_type,
      event_date,
      location,
      guest_count,
      estimated_budget,
      decoration_preferences,
      additional_requirements,
    } = body;

    // Strict Server-side Validation
    if (!full_name || typeof full_name !== "string" || full_name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 9) {
      return NextResponse.json(
        { error: "Please enter a valid phone number with area code." },
        { status: 400 }
      );
    }

    if (!event_type || typeof event_type !== "string") {
      return NextResponse.json(
        { error: "Please select an event type." },
        { status: 400 }
      );
    }

    if (!event_date || typeof event_date !== "string") {
      return NextResponse.json(
        { error: "Please select your preferred event date." },
        { status: 400 }
      );
    }

    if (!location || typeof location !== "string") {
      return NextResponse.json(
        { error: "Please choose an event location." },
        { status: 400 }
      );
    }

    if (!guest_count || typeof guest_count !== "string") {
      return NextResponse.json(
        { error: "Please provide an estimated guest count." },
        { status: 400 }
      );
    }

    if (!estimated_budget || typeof estimated_budget !== "string") {
      return NextResponse.json(
        { error: "Please select your estimated budget range." },
        { status: 400 }
      );
    }

    // Save directly to the database layer
    const enquiry = await createEnquiry({
      full_name,
      phone,
      whatsapp: whatsapp || phone,
      event_type,
      event_date,
      location,
      guest_count,
      estimated_budget,
      decoration_preferences,
      additional_requirements,
    });

    // Generate personalized WhatsApp follow-up URL
    const whatsappUrl = getWhatsAppUrlForEnquiry({
      full_name,
      phone,
      whatsapp: whatsapp || phone,
      event_type,
      event_date,
      location,
      guest_count,
      estimated_budget,
      decoration_preferences,
      additional_requirements,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received and saved successfully. Our senior planners will contact you shortly.",
      enquiry,
      whatsappUrl,
    });
  } catch (error: any) {
    console.error("Enquiry submission error:", error);
    const msg = error?.message || String(error);
    if (msg.includes("Duplicate submission")) {
      return NextResponse.json(
        { error: "A recent enquiry with these details was already recorded. We will call you shortly!" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please check your details or contact us directly on WhatsApp." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiries = await getEnquiries();
    return NextResponse.json({ enquiries });
  } catch (error) {
    console.error("Failed to fetch enquiries:", error);
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 });
  }
}
