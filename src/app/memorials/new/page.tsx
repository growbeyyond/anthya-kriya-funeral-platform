"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/PageBanner";

export default function NewMemorialPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    personName: "",
    birthDate: "",
    deathDate: "",
    bio: "",
    isPrivate: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.title || !form.personName) {
      setError("Title and Person name are required.");
      return;
    }
    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : null;
      const payload = {
        title: form.title.trim(),
        personName: form.personName.trim(),
        description: form.bio || null,
        coverImageUrl: null,
        dateOfBirth: form.birthDate ? new Date(form.birthDate).getTime() : null,
        dateOfPassing: form.deathDate ? new Date(form.deathDate).getTime() : null,
      };

      const res = await fetch("/api/memorials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || data?.message || "Failed to create memorial");
      router.push(`/memorials/${data.id}`);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/tasteful-still-life-of-glowing-candles-a-c85a9c01-20250926173443.jpg?"
        alt="Create a respectful memorial"
      />
      <main className="mx-auto max-w-2xl px-6 py-10 space-y-6">
        <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Create Memorial</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="title">Title</label>
            <input
              id="title"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="personName">Person Name</label>
            <input
              id="personName"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={form.personName}
              onChange={(e) => setForm({ ...form, personName: e.target.value })}
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="birthDate">Birth Date</label>
              <input
                id="birthDate"
                type="date"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                value={form.birthDate}
                onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="deathDate">Death Date</label>
              <input
                id="deathDate"
                type="date"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                value={form.deathDate}
                onChange={(e) => setForm({ ...form, deathDate: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="bio">Short Bio</label>
            <textarea
              id="bio"
              rows={4}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="isPrivate"
              type="checkbox"
              checked={form.isPrivate}
              onChange={(e) => setForm({ ...form, isPrivate: e.target.checked })}
            />
            <label htmlFor="isPrivate" className="text-sm">Private memorial</label>
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <div className="flex gap-3">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create"}
            </Button>
            <Button type="button" variant="secondary" onClick={() => history.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}