import { NextResponse } from "next/server";
import { getEnquiries } from "@/lib/db";

export async function GET() {
  try {
    const enquiries = await getEnquiries();

    // CSV Headers
    const headers = [
      "ID",
      "Submission Date",
      "Client Name",
      "Phone",
      "WhatsApp",
      "Event Type",
      "Event Date",
      "Location",
      "Guest Count",
      "Estimated Budget",
      "Status",
      "Decoration Preferences",
      "Special Notes",
      "Admin Notes",
    ];

    const escapeCsv = (val: any) => {
      if (val === undefined || val === null) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = enquiries.map((e) => [
      escapeCsv(e.id),
      escapeCsv(new Date(e.created_at).toLocaleDateString("en-IN")),
      escapeCsv(e.full_name),
      escapeCsv(e.phone),
      escapeCsv(e.whatsapp),
      escapeCsv(e.event_type),
      escapeCsv(e.event_date),
      escapeCsv(e.location),
      escapeCsv(e.guest_count),
      escapeCsv(e.estimated_budget),
      escapeCsv(e.status),
      escapeCsv(e.decoration_preferences),
      escapeCsv(e.additional_requirements),
      escapeCsv(e.admin_notes || ""),
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join(
      "\r\n"
    );

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="vsm_events_enquiries_${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
      },
    });
  } catch (error) {
    console.error("CSV Export error:", error);
    return NextResponse.json(
      { error: "Failed to generate CSV export" },
      { status: 500 }
    );
  }
}
