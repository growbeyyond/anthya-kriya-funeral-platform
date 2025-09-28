import { NextResponse } from "next/server";

const JOBS = [
  { id: "J-1001", city: "Bengaluru", type: "Hearse Transport", time: "Within 60 mins", status: "open" },
  { id: "J-1002", city: "Hyderabad", type: "Priest Service", time: "Today 5 PM", status: "open" },
  { id: "J-1003", city: "Mumbai", type: "Cremation Slot Assist", time: "Tomorrow 10 AM", status: "open" },
];

export async function GET() {
  return NextResponse.json({ ok: true, jobs: JOBS });
}

export async function POST(request: Request) {
  const { id, action } = await request.json().catch(() => ({ id: "", action: "" }));
  if (!id || !action) return NextResponse.json({ ok: false, message: "id and action required" }, { status: 400 });
  const job = JOBS.find((j) => j.id === id);
  if (!job) return NextResponse.json({ ok: false, message: "Job not found" }, { status: 404 });
  if (action === "accept") {
    if (job.status !== "open") return NextResponse.json({ ok: false, message: "Job not available" }, { status: 409 });
    job.status = "accepted";
    return NextResponse.json({ ok: true, job });
  }
  return NextResponse.json({ ok: false, message: "Unsupported action" }, { status: 400 });
}