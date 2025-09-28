"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.password || !form.confirm) {
      toast.error("Please fill all fields");
      return;
    }
    if (form.password !== form.confirm) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const { error } = await authClient.signUp.email({
        email: form.email.trim(),
        name: form.name.trim(),
        password: form.password,
      });

      if (error?.code) {
        const map: Record<string, string> = {
          USER_ALREADY_EXISTS: "Email already registered",
        };
        toast.error(map[error.code] || "Registration failed");
        return;
      }

      toast.success("Account created! Please check your email to verify.");
      router.push("/login?registered=true");
    } catch (err: any) {
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Create your account</h1>
      <p className="mt-1 text-sm text-[var(--muted-foreground)]">Already have an account? <Link href="/login" className="underline">Log in</Link></p>

      <form onSubmit={handleRegister} className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" value={form.password} onChange={onChange} type="password" autoComplete="off" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Confirm password</Label>
          <Input id="confirm" name="confirm" value={form.confirm} onChange={onChange} type="password" autoComplete="off" />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>{loading ? "Creating account..." : "Create account"}</Button>
      </form>
    </div>
  );
}