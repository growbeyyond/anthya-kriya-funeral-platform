"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";

  // Show notice if coming from registration
  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      toast.success("Account created. Please log in.");
    }
  }, [searchParams]);

  const sendOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/otp/send", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ phone }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.message || "Failed to send OTP");
      setOtpSent(true);
      toast.success("OTP sent", { description: "Use code 123456 (demo)" });
    } catch (e: any) {
      toast.error(e.message || "Error sending OTP");
    } finally { setLoading(false); }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/otp/verify", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ phone, otp }) });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.message || "Invalid OTP");
      if (data?.token) localStorage.setItem("bearer_token", data.token);
      toast.success("Logged in successfully");
      router.push(redirect);
    } catch (e: any) {
      toast.error(e.message || "Error verifying OTP");
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Login with OTP</h1>
      <p className="text-sm text-[var(--muted-foreground)]">
        New here? <Link href="/register" className="underline">Create an account</Link>
      </p>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" placeholder="e.g. +91 98765 43210" value={phone} onChange={(e)=>setPhone(e.target.value)} />
      </div>
      {!otpSent ? (
        <Button onClick={sendOtp} disabled={!phone || loading}>{loading?"Sending...":"Send OTP"}</Button>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP</Label>
            <Input id="otp" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="6-digit code" />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={()=>setOtpSent(false)}>Edit phone</Button>
            <Button onClick={verifyOtp} disabled={!otp || loading}>{loading?"Verifying...":"Verify & Continue"}</Button>
          </div>
        </div>
      )}
    </div>
  );
}