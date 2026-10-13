import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get("vsm_admin_auth");
  const isAuthenticated = authCookie?.value === "authenticated_vsm_session_token";

  return NextResponse.json({ authenticated: isAuthenticated });
}
