import { NextResponse } from "next/server";

let COUNTER = 1;
const REFERRALS: Array<{id:string,name:string,phone:string,status:string,createdAt:string}> = [];

export async function GET() {
  return NextResponse.json({ ok: true, referrals: REFERRALS });
}

export async function POST(request: Request) {
  const { name, phone } = await request.json().catch(() => ({ name: "", phone: "" }));
  if (!name || !phone) {
    return NextResponse.json({ ok: false, message: "name and phone are required" }, { status: 400 });
  }
  const referral = { id: `PR-${String(COUNTER++).padStart(4, "0")}`, name, phone, status: "submitted", createdAt: new Date().toISOString() };
  REFERRALS.unshift(referral);
  return NextResponse.json({ ok: true, referral });
}