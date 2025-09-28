import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import {
  Ambulance,
  Flame,
  FileText,
  Flower2,
  MessageCircle,
  CalendarCheck,
  Globe2,
  Leaf,
  Package,
  HandHeart,
  PawPrint,
} from "lucide-react";

export default function ServicesPage() {
  // Route plan for scalable CTAs — swap paths as new pages go live
  const routes = {
    legal: "/legal", // later: "/services/legal"
    support: "/contact", // later: "/services/support"
    csr: "/contact", // later: "/csr"
    insurance: "/vendors-partners", // later: "/partners/insurance"
  } as const;

  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/tasteful-still-life-of-glowing-candles-a-c85a9c01-20250926173443.jpg?"
        alt="Services overview — dignified support"
      />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: "var(--primary)" }}>Services</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Seamless, dignified support across faiths and needs.</p>
        </header>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mx-auto mt-4 max-w-6xl text-xs text-[var(--muted-foreground)]">
          <Link href="/" className="underline-offset-2 hover:underline">Home</Link>
          <span className="px-2">›</span>
          <span className="text-foreground/80">Services</span>
        </nav>

        {/* Compact TOC */}
        <div className="sticky top-0 z-20 mt-6 -mx-6 border-b bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <p className="text-xs text-[var(--muted-foreground)] mb-2">"Select a service below to learn more, or scroll through the complete journey."</p>
            <nav className="flex gap-2 overflow-x-auto whitespace-nowrap text-xs">
              <a href="#emergency" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Emergency</a>
              <a href="#rituals" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Rituals & Ceremonies</a>
              <a href="#legal" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Legal & Documentation</a>
              <a href="#memorials" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Memorials & Tributes</a>
              <a href="#support" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Support & Counseling</a>
              <a href="#plan" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Plan Ahead</a>
              <a href="#nri" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Global / NRI</a>
              <a href="#eco" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Eco-Friendly</a>
              <a href="#kits" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Ritual Kits</a>
              <a href="#csr" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Community & CSR</a>
              <a href="#future" className="rounded-full border px-3 py-1 hover:bg-[var(--secondary)]">Pet Memorials</a>
            </nav>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2 motion-safe:[&>div]:animate-in motion-safe:[&>div]:fade-in-50 motion-safe:[&>div]:slide-in-from-bottom-2 motion-safe:[&>div]:duration-700">
          <div id="emergency" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <Ambulance className="h-5 w-5 text-[var(--chart-1)]" aria-hidden />
              Emergency Services
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Immediate coordination: ambulance, documentation, cremation/burial slots. Add-ons: priest, freezer, ritual kits, counseling, eco options. Includes SLA-backed response.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="/emergency-booking" className="inline-flex items-center rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 text-sm hover:opacity-90">Book Emergency</Link>
              <Link href="/plan-ahead" className="inline-flex items-center rounded-md border px-4 py-2 text-sm">Plan Ahead</Link>
            </div>
          </div>
          <div id="rituals" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <Flame className="h-5 w-5 text-[var(--chart-2)]" aria-hidden />
              Rituals & Ceremonies
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Multi-faith rites: Hindu, Muslim, Christian, Sikh, Jain, Buddhist, Parsi. Funeral, 11th/13th day, annual shraddha, temple offerings, with auto-reminders for annual rituals.
            </p>
            <Link href="/multi-faith-rituals" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Explore Rituals</Link>
          </div>
          <div id="legal" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <FileText className="h-5 w-5 text-[var(--chart-3)]" aria-hidden />
              Legal & Documentation
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Death certificate, police NOC/hospital release, pension & PF, insurance claims, bank/nominee transfer, heirship certificate assistance.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-[var(--muted-foreground)]">
              <span className="rounded-full border px-2 py-0.5">Partnered with GHMC</span>
              <span className="rounded-full border px-2 py-0.5">SBI Insurance Allied</span>
            </div>
            <Link href={routes.legal} className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">See Legal Support</Link>
          </div>
          <div id="memorials" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <Flower2 className="h-5 w-5 text-[var(--chart-4)]" aria-hidden />
              Memorials & Tributes
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Digital memorial pages with premium options (video, gallery, livestream archive) and eco memorials (tree planting). Includes digital vault for letters/videos.</p>
            <Link href="/memorials" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Create / View Memorials</Link>
          </div>
          <div id="plan" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <CalendarCheck className="h-5 w-5 text-[var(--chart-5)]" aria-hidden />
              Plan Ahead
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Subscriptions: Basic ₹499, Premium ₹999; document wishes and preferences, will & nominee mapping via partners, UPI autopay.</p>
            <Link href="/plan-ahead" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Start Planning</Link>
          </div>
          <div id="support" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <MessageCircle className="h-5 w-5 text-[var(--chart-1)]" aria-hidden />
              Support & Counseling
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">1:1 grief therapy, support groups, curated articles and healing guides.</p>
            <Link href={routes.support} className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Request Support</Link>
          </div>
          <div id="nri" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <Globe2 className="h-5 w-5 text-[var(--chart-2)]" aria-hidden />
              Global / NRI Support
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Repatriation (airport → India), embassy coordination, translation services, NRI-specific packages.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Contact Us</Link>
          </div>
          <div id="eco" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <Leaf className="h-5 w-5 text-[var(--chart-3)]" aria-hidden />
              Eco-Friendly Farewells
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Tree planting, eco urns, green cremations.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Learn More</Link>
          </div>
          <div id="kits" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <Package className="h-5 w-5 text-[var(--chart-4)]" aria-hidden />
              Ritual Kits & Merchandise
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Puja kits, mats, kalash, clothing and more. Delivered to home.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Order / Enquire</Link>
          </div>
          <div id="csr" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <HandHeart className="h-5 w-5 text-[var(--chart-5)]" aria-hidden />
              Community & CSR
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Subsidized funerals for low-income families, donor sponsorships (sponsor a cremation/ritual), Anthya Kriya Foundation initiatives.</p>
            <Link href={routes.csr} className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Partner / Sponsor</Link>
          </div>
          <div id="future" className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold" style={{ color: "var(--primary)" }}>
              <PawPrint className="h-5 w-5 text-[var(--chart-1)]" aria-hidden />
              Future Scope (Optional)
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Pet memorials, digital insurance tie-ups for instant claims, and an AI-powered grief companion.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm">Express Interest</Link>
          </div>
        </section>

        {/* Mobile sticky CTA bar */}
        <div className="fixed bottom-4 left-0 right-0 z-30 mx-auto w-full max-w-6xl px-6 md:hidden">
          <div className="grid grid-cols-3 gap-2 rounded-xl border bg-[var(--card)] p-2 shadow-lg">
            <Link href="/emergency-booking" className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-2 py-2 text-xs font-medium text-[var(--accent-foreground)]">Emergency</Link>
            <a href="tel:+918886435558" className="inline-flex items-center justify-center rounded-lg border px-2 py-2 text-xs font-medium">Call</a>
            <a href="https://wa.me/918886435558" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border px-2 py-2 text-xs font-medium">WhatsApp</a>
          </div>
        </div>
      </main>
    </>
  );
}