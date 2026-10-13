import { NextRequest, NextResponse } from "next/server";
import { updateEnquiryStatus, deleteEnquiry } from "@/lib/db";
import { EnquiryStatus } from "@/lib/types";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, admin_notes } = body;

    const validStatuses: EnquiryStatus[] = [
      "New",
      "Contacted",
      "Quotation Sent",
      "Confirmed",
      "Completed",
      "Cancelled",
    ];

    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const updated = await updateEnquiryStatus(id, status, admin_notes);
    if (!updated) {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    return NextResponse.json({ error: "Failed to update enquiry" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const success = await deleteEnquiry(id);
    return NextResponse.json({ success });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return NextResponse.json({ error: "Failed to delete enquiry" }, { status: 500 });
  }
}
