import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    const expectedPassword = process.env.ADMIN_PASSWORD || "vsm@luxury2025";

    if (!password || password !== expectedPassword) {
      return NextResponse.json(
        { error: "Invalid administrator password. Access denied." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful.",
    });

    // Set secure cookie for session
    response.cookies.set("vsm_admin_auth", "authenticated_vsm_session_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal authentication error" },
      { status: 500 }
    );
  }
}
