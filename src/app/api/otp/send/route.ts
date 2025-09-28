import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { phone } = await request.json().catch(() => ({ phone: "" }));
  if (!phone) return NextResponse.json({ ok: false, message: "Phone required" }, { status: 400 });
  // Mock: always send 123456 as OTP
  return NextResponse.json({ ok: true, otp: "123456", message: "OTP sent" });
}