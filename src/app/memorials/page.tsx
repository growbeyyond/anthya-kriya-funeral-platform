"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/PageBanner";

export default function MemorialsPage() {
  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/tasteful-still-life-of-glowing-candles-a-c85a9c01-20250926173443.jpg?"
        alt="Calm memorial candles"
      />
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Memorials</h1>
          <div className="flex gap-2">
            <Button asChild variant="secondary"><Link href="/emergency-booking">Emergency Help</Link></Button>
            <Button asChild><Link href="/plan-ahead">Plan Ahead</Link></Button>
          </div>
        </header>

        {/* Intro */}
        <section className="space-y-3 text-sm leading-6">
          <p>
            Create a respectful online memorial to honor your loved one, gather memories from friends and family,
            and coordinate ceremonies and anniversaries with ease.
          </p>
          <p className="text-[color:oklch(0.28_0.08_20_/_80%)]">
            Anthya Kriya memorials are private by default, easy to share, and aligned with cultural traditions.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>What you can do</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6 bg-[var(--card)]">
              <h3 className="font-medium">Tribute Page</h3>
              <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_80%)]">A dedicated page with biography, photos, videos, and messages.</p>
            </div>
            <div className="rounded-xl border p-6 bg-[var(--card)]">
              <h3 className="font-medium">Guest Messages</h3>
              <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_80%)]">Invite family and friends to post memories and condolences.</p>
            </div>
            <div className="rounded-xl border p-6 bg-[var(--card)]">
              <h3 className="font-medium">Ceremony Timeline</h3>
              <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_80%)]">Plan rituals and anniversaries with reminders and checklists.</p>
            </div>
          </div>
        </section>

        {/* Templates */}
        <section>
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Templates by tradition</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-4">
            <div className="rounded-xl border p-5 bg-[var(--card)]">
              <h4 className="font-medium">Hindu</h4>
              <p className="mt-1 text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">Shraddha, Asthi Visarjan, monthly tithis.</p>
            </div>
            <div className="rounded-xl border p-5 bg-[var(--card)]">
              <h4 className="font-medium">Muslim</h4>
              <p className="mt-1 text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">Duas, community prayers, burial customs.</p>
            </div>
            <div className="rounded-xl border p-5 bg-[var(--card)]">
              <h4 className="font-medium">Christian</h4>
              <p className="mt-1 text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">Service liturgy, hymns, vigil arrangements.</p>
            </div>
            <div className="rounded-xl border p-5 bg-[var(--card)]">
              <h4 className="font-medium">Sikh / Jain / Buddhist / Parsi</h4>
              <p className="mt-1 text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">Aligned to each faith's practices.</p>
            </div>
          </div>
          <div className="mt-4">
            <Button asChild variant="secondary"><Link href="/multi-faith-rituals">See Multi-faith Rituals</Link></Button>
          </div>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>How it works</h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-4 text-sm">
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">1. Create</span><br/>Start a memorial and add basic details.</li>
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">2. Invite</span><br/>Share with family and friends to contribute.</li>
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">3. Plan</span><br/>Use ceremony timelines and reminders.</li>
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">4. Honor</span><br/>Keep memories alive with ongoing tributes.</li>
          </ol>
        </section>

        {/* Pricing hint (placeholder content) */}
        <section className="rounded-xl border bg-[var(--card)] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-medium">Free memorials, premium customization coming soon</h3>
              <p className="text-sm text-[color:oklch(0.28_0.08_20_/_80%)]">Start free. Advanced themes and custom domains will be available later.</p>
            </div>
            <div className="flex gap-2">
              <Button asChild><Link href="/memorials">Create Memorial</Link></Button>
              <Button asChild variant="secondary"><Link href="/plan-ahead">Plan Ahead</Link></Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>What families say</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3 text-sm">
            <blockquote className="rounded-xl border p-6 bg-[var(--card)]">"A beautiful space to share memories."<br/><span className="text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">— Bengaluru</span></blockquote>
            <blockquote className="rounded-xl border p-6 bg-[var(--card)]">"Helped us coordinate rituals with clarity."<br/><span className="text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">— Mumbai</span></blockquote>
            <blockquote className="rounded-xl border p-6 bg-[var(--card)]">"Simple, respectful, and private."<br/><span className="text-xs text-[color:oklch(0.28_0.08_20_/_75%)]">— Delhi</span></blockquote>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>FAQs</h2>
          <div className="grid gap-3 text-sm">
            <div className="rounded-lg border p-4 bg-[var(--card)]"><p className="font-medium">Is the memorial private?</p><p className="text-[color:oklch(0.28_0.08_20_/_80%)]">Yes, it is private by default. You choose who can view and contribute.</p></div>
            <div className="rounded-lg border p-4 bg-[var(--card)]"><p className="font-medium">Can we manage rituals from here?</p><p className="text-[color:oklch(0.28_0.08_20_/_80%)]">Yes. Use the ceremony timeline and reminders, or contact us for full coordination.</p></div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: "var(--primary)" }}>Create a memorial or get immediate help</h2>
          <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_85%)]">We're here to support your family with compassion and clarity.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild><Link href="/emergency-booking">Emergency Booking</Link></Button>
            <Button asChild variant="secondary"><Link href="/multi-faith-rituals">Multi-faith Rituals</Link></Button>
            <Button asChild variant="secondary"><Link href="/plan-ahead">Plan Ahead</Link></Button>
          </div>
          <p className="mt-3 text-sm">24/7 Hotline: <a className="underline" href="tel:+918886435558">+91 8886435558</a></p>
        </section>
      </main>
    </>
  );
}