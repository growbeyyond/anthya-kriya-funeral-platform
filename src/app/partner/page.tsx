"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function PartnerDashboardPage() {
  const [referrals, setReferrals] = useState<Array<{id:string,name:string,phone:string,status:string}>>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/partners/referrals", {
        headers: { Authorization: `Bearer ${localStorage.getItem("bearer_token") || ""}` },
      });
      const data = await res.json();
      if (res.ok) setReferrals(data.referrals || []);
    })();
  }, []);

  const submit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/partners/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("bearer_token") || ""}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed");
      setReferrals((arr) => [data.referral, ...arr]);
      setForm({ name: "", phone: "" });
      toast.success("Referral submitted");
    } catch (e: any) {
      toast.error(e.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Partner Dashboard</h1>
        <div className="text-sm">Total Referrals: <strong>{referrals.length}</strong></div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Create Referral</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="rname">Name</Label>
              <Input id="rname" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Family contact name" />
            </div>
            <div>
              <Label htmlFor="rphone">Phone</Label>
              <Input id="rphone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="e.g. 98765 43210" />
            </div>
            <div className="flex justify-end">
              <Button onClick={submit} disabled={loading || !form.name || !form.phone}>{loading?"Submitting...":"Submit"}</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Overview</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Track your referred families and the status of their assistance.</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Submitted: pending review</li>
              <li>Engaged: our team is assisting</li>
              <li>Completed: service delivered</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle>Recent Referrals</CardTitle></CardHeader>
          <CardContent>
            <div className="divide-y">
              {referrals.length === 0 && (
                <p className="text-sm text-muted-foreground">No referrals yet.</p>
              )}
              {referrals.map((r) => (
                <div key={r.id} className="flex items-center justify-between py-3 text-sm">
                  <div>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-muted-foreground">{r.phone}</p>
                  </div>
                  <span className="rounded-full border px-3 py-1">{r.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}