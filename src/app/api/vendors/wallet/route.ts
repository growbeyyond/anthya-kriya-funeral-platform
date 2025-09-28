import { NextResponse } from "next/server";

let BALANCE = 12500; // mock balance in INR

export async function GET() {
  return NextResponse.json({ ok: true, balance: BALANCE });
}

export async function POST() {
  // mock withdrawal of a fixed amount with simple guard
  const amount = 2000;
  if (BALANCE < amount) {
    return NextResponse.json({ ok: false, message: "Insufficient balance", balance: BALANCE }, { status: 400 });
  }
  BALANCE -= amount;
  return NextResponse.json({ ok: true, balance: BALANCE, withdrawn: amount });
}