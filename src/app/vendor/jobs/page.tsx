"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MOCK_JOBS = [
  { id: "J-1001", city: "Bengaluru", type: "Hearse Transport", time: "Within 60 mins" },
  { id: "J-1002", city: "Hyderabad", type: "Priest Service", time: "Today 5 PM" },
  { id: "J-1003", city: "Mumbai", type: "Cremation Slot Assist", time: "Tomorrow 10 AM" },
];

export default function VendorJobsPage() {
  const [accepted, setAccepted] = useState<string[]>([]);

  const accept = async (id: string) => {
    try {
      const res = await fetch("/api/vendors/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("bearer_token") || ""}`,
        },
        body: JSON.stringify({ id, action: "accept" }),
      });
      const data = await res.json();
      if (res.ok && data?.ok) {
        setAccepted((arr) => [...arr, id]);
        toast.success(`Job ${id} accepted`);
      } else {
        toast.error(data?.message || "Failed to accept job");
      }
    } catch (e: any) {
      toast.error(e.message || "Error");
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 space-y-6">
      <h1 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Available Jobs</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {MOCK_JOBS.map((j) => (
          <Card key={j.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{j.type}</span>
                <span className="text-sm text-muted-foreground">{j.id}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>City: {j.city}</p>
              <p>When: {j.time}</p>
              <Button size="sm" onClick={()=>accept(j.id)} disabled={accepted.includes(j.id)}>
                {accepted.includes(j.id)?"Accepted":"Accept"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}