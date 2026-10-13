import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/data/siteConfig";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function formatDateTime(dateTimeString: string): string {
  try {
    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) return dateTimeString;
    return date.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateTimeString;
  }
}

export interface WhatsAppFormPayload {
  full_name: string;
  phone: string;
  whatsapp?: string;
  event_type: string;
  event_date: string;
  location: string;
  guest_count: string;
  estimated_budget: string;
  decoration_preferences?: string;
  additional_requirements?: string;
}

export function generateWhatsAppMessageFromForm(data: WhatsAppFormPayload): string {
  const lines: string[] = [
    `✨ *New Event Enquiry — VSM Events* ✨`,
    ``,
    `*Client Name:* ${data.full_name}`,
    `*Phone:* ${data.phone}`,
    data.whatsapp && data.whatsapp !== data.phone ? `*WhatsApp:* ${data.whatsapp}` : ``,
    `*Event Type:* ${data.event_type}`,
    `*Preferred Date:* ${formatDate(data.event_date)}`,
    `*Location:* ${data.location}`,
    `*Expected Guests:* ${data.guest_count}`,
    `*Estimated Budget:* ${data.estimated_budget}`,
    data.decoration_preferences ? `*Decor Preferences:* ${data.decoration_preferences}` : ``,
    data.additional_requirements ? `*Special Notes:* ${data.additional_requirements}` : ``,
    ``,
    `_Sent via VSM Events Online Booking Portal_`
  ].filter(line => Boolean(line));

  return lines.join("\n");
}

export function getWhatsAppUrlForEnquiry(data: WhatsAppFormPayload): string {
  const text = generateWhatsAppMessageFromForm(data);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
