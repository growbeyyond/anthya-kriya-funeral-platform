"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageBanner } from "@/components/PageBanner";

export default function PlanAheadPage() {
  return (
    <> 
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/tasteful-still-life-of-glowing-candles-a-c85a9c01-20250926173443.jpg?"
        alt="Calm memorial candles"
      />
      <main className="mx-auto max-w-3xl px-4 py-10 space-y-6">
        <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Plan Ahead</h1>
        <p className="text-sm">Document preferences in advance for peace of mind.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="e.g. +91 98765 43210" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="notes">Notes / Preferences</Label>
            <Input id="notes" placeholder="Cremation/Burial, faith, city, etc." />
          </div>
        </div>
        <div className="flex gap-2">
          <Button>Save Preferences</Button>
          <Button asChild variant="secondary"><Link href="/login">Login to sync</Link></Button>
        </div>

        {/* Why Plan Ahead */}
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Why plan ahead?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-[var(--card)] p-5">
              <p className="text-sm">Reduces emotional and logistical burden for family members.</p>
            </div>
            <div className="rounded-xl border bg-[var(--card)] p-5">
              <p className="text-sm">Ensures cultural and personal wishes are honored.</p>
            </div>
            <div className="rounded-xl border bg-[var(--card)] p-5">
              <p className="text-sm">Provides clarity on documentation and financial choices.</p>
            </div>
            <div className="rounded-xl border bg-[var(--card)] p-5">
              <p className="text-sm">Allows time to compare options and inform loved ones.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>How it works</h2>
          <ol className="grid gap-3 text-sm">
            <li className="rounded-lg border p-4 bg-[var(--card)]"><span className="font-medium">1. Record preferences</span> — rites, location, officiants, contacts.</li>
            <li className="rounded-lg border p-4 bg-[var(--card)]"><span className="font-medium">2. Share with family</span> — provide access or print summary.</li>
            <li className="rounded-lg border p-4 bg-[var(--card)]"><span className="font-medium">3. Update anytime</span> — revisit as needs evolve.</li>
            <li className="rounded-lg border p-4 bg-[var(--card)]"><span className="font-medium">4. We assist when needed</span> — emergency team coordinates end-to-end.</li>
          </ol>
        </section>

        {/* What we cover */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>What we cover</h2>
          <ul className="grid gap-3 text-sm">
            <li className="rounded-lg border p-4 bg-[var(--card)]">Ritual preferences across faiths</li>
            <li className="rounded-lg border p-4 bg-[var(--card)]">Preferred facilities and locations</li>
            <li className="rounded-lg border p-4 bg-[var(--card)]">Authorized contacts and documentation</li>
            <li className="rounded-lg border p-4 bg-[var(--card)]">Memorial service ideas and digital tribute</li>
          </ul>
        </section>

        {/* Learn more and CTAs */}
        <section className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button asChild><Link href="/multi-faith-rituals">See Multi-faith Rituals</Link></Button>
            <Button asChild variant="secondary"><Link href="/memorials">Create Memorial</Link></Button>
            <Button asChild variant="secondary"><Link href="/emergency-booking">Emergency Booking</Link></Button>
          </div>
          <p className="text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">Questions? Call our 24/7 line: <a className="underline" href="tel:+918886435558">+91 8886435558</a></p>
        </section>
      </main>
    </>
  );
}