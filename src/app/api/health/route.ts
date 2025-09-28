import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const uptimeSeconds = Math.floor(process.uptime());

  return NextResponse.json({
    status: "ok",
    service: "Anthya Kriya",
    time: now.toISOString(),
    uptimeSeconds,
  });
}