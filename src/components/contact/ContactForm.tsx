"use client";

import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    otp: "",
  });
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const sendOtp = async () => {
    if (!form.phone) {
      toast.error("Enter phone number to receive OTP");
      return;
    }
    try {
      setSendingOtp(true);
      const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : null;
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ phone: form.phone }),
      });
      if (!res.ok) throw new Error("Failed to send OTP");
      toast.success("OTP sent to your phone");
    } catch (e: any) {
      toast.error(e.message || "Unable to send OTP");
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtp = async () => {
    if (!form.phone || !form.otp) {
      toast.error("Enter phone and OTP to verify");
      return;
    }
    try {
      setVerifying(true);
      const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : null;
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ phone: form.phone, code: form.otp }),
      });
      if (!res.ok) throw new Error("Invalid OTP");
      toast.success("Phone verified");
    } catch (e: any) {
      toast.error(e.message || "Verification failed");
    } finally {
      setVerifying(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission; can be extended to POST to an API route
    setSubmitted(true);
    toast.success("Request submitted. We will contact you shortly.");
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium" htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" required />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
          <div className="mt-1 flex gap-2">
            <input id="phone" name="phone" value={form.phone} onChange={onChange} className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="10-digit" required />
            <button type="button" onClick={sendOtp} disabled={sendingOtp} className="rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-3 py-2 text-xs hover:opacity-90 disabled:opacity-50">{sendingOtp ? "Sending..." : "Send OTP"}</button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="service">Service Type</label>
          <select id="service" name="service" value={form.service} onChange={onChange} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm">
            <option value="">Select service</option>
            <option value="emergency">Emergency</option>
            <option value="rituals">Rituals & Ceremonies</option>
            <option value="memorials">Memorials & Tributes</option>
            <option value="plan">Plan Ahead</option>
            <option value="support">Support & Counseling</option>
            <option value="nri">Global / NRI Support</option>
            <option value="eco">Eco-Friendly</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={onChange} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm min-h-28" placeholder="Share any details that can help us support you" />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="otp">OTP</label>
        <div className="mt-1 flex gap-2">
          <input id="otp" name="otp" value={form.otp} onChange={onChange} className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="6-digit code" />
          <button type="button" onClick={verifyOtp} disabled={verifying} className="rounded-md border px-3 py-2 text-xs disabled:opacity-50">{verifying ? "Verifying..." : "Verify"}</button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="inline-flex items-center rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 text-sm hover:opacity-90">Submit</button>
        <a className="inline-flex items-center rounded-md border px-4 py-2 text-sm" href="https://wa.me/918886435558?text=Hello%20Anthya%20Kriya%2C%20I%20need%20assistance" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      {submitted ? (
        <p className="text-xs text-[var(--muted-foreground)]">We have received your details. Our team will reach out shortly.</p>
      ) : null}
    </form>
  );
};