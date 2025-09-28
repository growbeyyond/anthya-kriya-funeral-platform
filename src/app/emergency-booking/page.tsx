"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useLocalDraft } from "@/hooks/useLocalDraft";
import { PageBanner } from "@/components/PageBanner";

export default function EmergencyBookingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { draft: form, setDraft: setForm, reset } = useLocalDraft({
    callerName: "",
    phone: "",
    location: "",
    address: "",
    deceasedName: "",
    age: "",
    gender: "",
    faith: "hindu",
    notes: "",
  });

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = async () => {
    // Basic required fields check based on API contract
    if (!form.phone || !form.address) {
      toast.error("Phone and address are required");
      setStep((s) => (form.phone ? (form.address ? s : 2) : 1));
      return;
    }

    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : null;
      const payload = {
        contactName: form.callerName?.trim() || "",
        contactPhone: form.phone?.trim() || "",
        locationAddress: form.address?.trim() || "",
        city: form.location?.trim() || undefined, // defaults to Hyderabad on API side
        faithTradition: form.faith || undefined,
        // Include extra context in notes for now
        notes: [
          form.notes && `Notes: ${form.notes}`,
          form.deceasedName && `Deceased: ${form.deceasedName}`,
          form.age && `Age: ${form.age}`,
          form.gender && `Gender: ${form.gender}`,
        ]
          .filter(Boolean)
          .join(" | ") || undefined,
      };

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || data?.message || "Failed to submit");

      toast.success("Booking created", { description: `Reference ID: ${data.id}` });
      reset();
      setStep(1);
    } catch (e: any) {
      toast.error(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/dignified%2c-serene-view-of-kashi-%28var-6c192590-20250926173740.jpg?"
        alt="Kashi ghats — dignified support, 24/7 emergency"
      />
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>24/7 Emergency Booking</h1>
          <p className="text-sm">Hotline: <a className="underline" href="tel:+918886435558">+91 8886435558</a></p>
        </header>

        <ol className="flex items-center justify-center gap-2 text-xs">
          {[1,2,3,4,5].map((i) => (
            <li key={i} className={`px-3 py-1 rounded-full border ${step===i?"bg-[var(--accent)] text-[var(--accent-foreground)]":"bg-[var(--secondary)]"}`}>Step {i}</li>
          ))}
        </ol>

        {step === 1 && (
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Caller details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="callerName">Your name</Label>
                <Input id="callerName" value={form.callerName} onChange={(e) => setForm({ ...form, callerName: e.target.value })} placeholder="Full name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 98765 43210" />
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Location</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">City</Label>
                <Input id="location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="City" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Address / Landmark</Label>
                <Input id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Address, landmark" />
              </div>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Deceased details</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="deceasedName">Full name</Label>
                <Input id="deceasedName" value={form.deceasedName} onChange={(e) => setForm({ ...form, deceasedName: e.target.value })} placeholder="Full name" />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input id="age" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} placeholder="Age" />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={form.gender} onValueChange={(v) => setForm({ ...form, gender: v })}>
                  <SelectTrigger id="gender"><SelectValue placeholder="Select gender" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="nonbinary">Non-binary</SelectItem>
                    <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Ritual preferences</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="faith">Faith / Tradition</Label>
                <Select value={form.faith} onValueChange={(v) => setForm({ ...form, faith: v })}>
                  <SelectTrigger id="faith"><SelectValue placeholder="Select faith" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="sikh">Sikh</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                    <SelectItem value="buddhist">Buddhist</SelectItem>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="parsi">Parsi / Zoroastrian</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any special instructions" />
              </div>
            </div>
          </section>
        )}

        {step === 5 && (
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Review</h2>
            <div className="text-sm bg-[var(--secondary)] p-4 rounded-lg">
              <pre className="whitespace-pre-wrap">{JSON.stringify(form, null, 2)}</pre>
            </div>
          </section>
        )}

        <div className="flex justify-between pt-2">
          <Button variant="secondary" onClick={back} disabled={step===1}>Back</Button>
          {step < 5 ? (
            <Button onClick={next}>Next</Button>
          ) : (
            <Button onClick={submit} disabled={loading}>{loading?"Submitting...":"Submit Booking"}</Button>
          )}
        </div>
      </div>
    </>
  );
}