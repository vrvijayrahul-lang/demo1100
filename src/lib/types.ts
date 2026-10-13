export type EnquiryStatus =
  | "New"
  | "Contacted"
  | "Quotation Sent"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export interface Enquiry {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  whatsapp: string;
  event_type: string;
  event_date: string;
  location: string;
  guest_count: string;
  estimated_budget: string;
  decoration_preferences?: string;
  additional_requirements?: string;
  status: EnquiryStatus;
  admin_notes?: string;
}

export interface EnquiryInput {
  full_name: string;
  phone: string;
  whatsapp: string;
  event_type: string;
  event_date: string;
  location: string;
  guest_count: string;
  estimated_budget: string;
  decoration_preferences?: string;
  additional_requirements?: string;
}
