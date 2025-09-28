import { NextResponse } from "next/server";

let KYC_COUNTER = 1000;

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({} as any));
  const required = ["name", "phone", "city", "service"] as const;
  for (const key of required) {
    if (!body?.[key]) {
      return NextResponse.json({ ok: false, message: `Missing field: ${key}` }, { status: 400 });
    }
  }
  const id = `KYC-${++KYC_COUNTER}`;
  return NextResponse.json({ ok: true, id, status: "submitted" });
}