"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function VendorOnboardingPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: "transport",
    pan: "",
    gst: "",
  });

  const submit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/vendors/kyc", { method: "POST", headers: {"Content-Type":"application/json", Authorization: `Bearer ${localStorage.getItem("bearer_token") || ""}`}, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed");
      toast.success("KYC submitted: " + data.id);
    } catch (e:any) { toast.error(e.message || "Error"); }
    finally { setLoading(false); }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <h1 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Vendor Onboarding</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Business / Person Name</Label>
          <Input id="name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Full legal name" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="e.g. 98765 43210" />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})} placeholder="City" />
        </div>
        <div>
          <Label htmlFor="service">Service</Label>
          <Select value={form.service} onValueChange={(v)=>setForm({...form, service:v})}>
            <SelectTrigger id="service"><SelectValue placeholder="Select service" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="transport">Hearse Transport</SelectItem>
              <SelectItem value="priest">Priest / Officiant</SelectItem>
              <SelectItem value="venue">Crematorium / Venue</SelectItem>
              <SelectItem value="support">Attendant Support</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="pan">PAN</Label>
          <Input id="pan" value={form.pan} onChange={(e)=>setForm({...form, pan:e.target.value})} placeholder="ABCDE1234F" />
        </div>
        <div>
          <Label htmlFor="gst">GST</Label>
          <Input id="gst" value={form.gst} onChange={(e)=>setForm({...form, gst:e.target.value})} placeholder="22ABCDE1234F1Z5" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={submit} disabled={loading}>{loading?"Submitting...":"Submit KYC"}</Button>
      </div>
    </main>
  );
}