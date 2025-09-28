"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PackagesTabs } from "@/components/rituals/PackagesTabs";
import { PageBanner } from "@/components/PageBanner";
import { Flame, Moon, Church, Flower } from "lucide-react";

export default function MultiFaithPage() {
  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/respectful-collage-style-photograph-show-770deb7f-20250926173451.jpg?"
        alt="Multi-faith rituals and traditions"
      />
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-8 pb-24 sm:pb-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Multi-faith Rituals</h1>
          <Select defaultValue="en">
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Language" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिन्दी</SelectItem>
              <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
            </SelectContent>
          </Select>
        </header>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs text-[color:oklch(0.28_0.08_20_/_80%)]">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="underline-offset-2 hover:underline">Home</Link></li>
            <li aria-hidden className="opacity-50">/</li>
            <li><Link href="/services" className="underline-offset-2 hover:underline">Services</Link></li>
            <li aria-hidden className="opacity-50">/</li>
            <li aria-current="page" className="font-medium text-foreground">Multi-faith Rituals</li>
          </ol>
        </nav>

        <section className="space-y-3 text-sm leading-6">
          <p>We coordinate rites and customs across traditions with cultural sensitivity and certified officiants.</p>
          <ul className="list-disc pl-6">
            <li>Hindu — Antyesti, Shraddha, Asthi Visarjan</li>
            <li>Muslim — Janazah prayers and burial</li>
            <li>Christian — Funeral service and burial/cremation</li>
            <li>Sikh, Jain, Buddhist, Parsi — Dedicated rites</li>
          </ul>
        </section>

        <PackagesTabs />

        {/* Faith-specific highlights */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2" style={{ color: "var(--primary)" }}>
              <Flame className="size-5 text-[color:oklch(0.6_0.18_25)]" aria-hidden />
              Hindu Rites
            </h2>
            <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_85%)]">Antyesti arrangements, priest coordination, samagri, venue booking, and post-cremation rituals like Shraddha and Asthi Visarjan.</p>
          </div>
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2" style={{ color: "var(--primary)" }}>
              <Moon className="size-5 text-[color:oklch(0.6_0.18_25)]" aria-hidden />
              Muslim Rites
            </h2>
            <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_85%)]">Janazah preparation, ghusl, kafan, funeral prayer coordination, and burial logistics with community guidelines.</p>
          </div>
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2" style={{ color: "var(--primary)" }}>
              <Church className="size-5 text-[color:oklch(0.6_0.18_25)]" aria-hidden />
              Christian Rites
            </h2>
            <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_85%)]">Church coordination, liturgy planning, choir arrangements, and cemetery/cremation scheduling.</p>
          </div>
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2" style={{ color: "var(--primary)" }}>
              <Flower className="size-5 text-[color:oklch(0.6_0.18_25)]" aria-hidden />
              Sikh, Jain, Buddhist, Parsi
            </h2>
            <p className="mt-2 text-sm text-[color:oklch(0.28_0.08_20_/_85%)]">Dedicated rites with authentic officiants and materials, aligned to each tradition's practices.</p>
          </div>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>How we support</h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-4 text-sm">
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">1. Understand</span><br/>We document your family's tradition and preferences.</li>
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">2. Arrange</span><br/>Book venues, officiants, logistics, and materials.</li>
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">3. Guide</span><br/>On-site coordination with compassionate care.</li>
            <li className="rounded-xl border p-5 bg-[var(--card)]"><span className="font-medium">4. Follow-up</span><br/>Support for memorials and documentation.</li>
          </ol>
        </section>

        {/* CTAs */}
        <section className="flex flex-wrap gap-3">
          <Button asChild><Link href="/emergency-booking">Emergency Booking</Link></Button>
          <Button asChild variant="secondary"><Link href="/plan-ahead">Plan Ahead</Link></Button>
          <Button asChild variant="secondary"><Link href="/memorials/new">Create Memorial</Link></Button>
        </section>

        {/* FAQs */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>FAQs</h2>
          <div className="grid gap-3 text-sm">
            <div className="rounded-lg border p-4 bg-[var(--card)]"><p className="font-medium">Can you arrange priests and materials?</p><p className="text-[color:oklch(0.28_0.08_20_/_80%)]">Yes, we coordinate certified officiants and samagri as per tradition.</p></div>
            <div className="rounded-lg border p-4 bg-[var(--card)]"><p className="font-medium">Do you support multilingual ceremonies?</p><p className="text-[color:oklch(0.28_0.08_20_/_80%)]">We work with officiants across languages and regional practices.</p></div>
          </div>
        </section>

        {/* Contact banner */}
        <section className="rounded-xl border bg-[var(--card)] p-6 text-center">
          <p className="text-sm">Need guidance now? Call our 24/7 line: <a className="underline" href="tel:+918886435558">+91 8886435558</a></p>
        </section>

        {/* Mobile sticky CTA bar */}
        <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden bg-[var(--card)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:oklch(1_0_0_/_80%)] border-t">
          <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-3 gap-2">
            <Button asChild size="sm"><Link href="/emergency-booking">Emergency</Link></Button>
            <Button asChild size="sm" variant="secondary"><a href="tel:+918886435558" aria-label="Call helpline">Call</a></Button>
            <Button asChild size="sm" variant="secondary"><a href="https://wa.me/918886435558?text=Need%20guidance%20for%20multi-faith%20rituals" aria-label="WhatsApp helpline">WhatsApp</a></Button>
          </div>
        </div>
      </main>
    </>
  );
}