import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { phone, otp } = await request.json().catch(() => ({} as any));
  if (!phone || !otp) {
    return NextResponse.json({ ok: false, message: "Phone and OTP required" }, { status: 400 });
  }
  const valid = otp === "123456"; // mock verification
  if (!valid) return NextResponse.json({ ok: false, message: "Invalid OTP" }, { status: 401 });
  // Issue a mock session token (for demo only)
  return NextResponse.json({ ok: true, token: "mock-session-token" });
}