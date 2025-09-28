import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HandHeart, Building2, Phone, HeartHandshake, Users, FileText } from "lucide-react";

export default function CSRPage() {
  return (
    <main id="main-content" className="min-h-[70vh]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/tasteful-still-life-of-glowing-candles-a-c85a9c01-20250926173443.jpg?"
            alt="Gentle candles background"
            fill
            className="object-cover opacity-70"
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklch, var(--background) 70%, transparent) 0%, transparent 40%, color-mix(in oklch, var(--background) 92%, transparent) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border bg-[var(--card)]/70 backdrop-blur px-3 py-1 text-xs text-[var(--muted-foreground)]">
            <Building2 className="size-3.5" aria-hidden /> CSR & Social Impact
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold" style={{ color: "var(--primary)" }}>
            Helping Families in Need with Dignity
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--muted-foreground)]">
            Through Anthya Kriya Foundation, we provide subsidized or fully covered rituals and logistics for low‑income
            families. Partners and donors enable swift, respectful support when it matters most.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/contact?topic=csr">Request Subsidized Support</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/vendors-partners?topic=csr">Partner / Donate</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            Hotline: <a className="underline inline-flex items-center gap-1" href="tel:+918886435558"><Phone className="size-4" aria-hidden /> +91 8886435558</a>
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-lg font-medium inline-flex items-center gap-2" style={{ color: "var(--primary)" }}>
            <HandHeart className="size-5" aria-hidden /> What We Cover
          </h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted-foreground)] space-y-1">
            <li>Ambulance & immediate coordination</li>
            <li>Ritual officiants across faiths</li>
            <li>Basic samagri / essentials</li>
            <li>Documentation support</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-lg font-medium inline-flex items-center gap-2" style={{ color: "var(--primary)" }}>
            <Users className="size-5" aria-hidden /> Who Qualifies
          </h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            Low‑income families, cases referred by hospitals/NGOs, and verified hardship situations. We aim to decide within
            2 hours of request.
          </p>
        </div>
        <div className="rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-lg font-medium inline-flex items-center gap-2" style={{ color: "var(--primary)" }}>
            <FileText className="size-5" aria-hidden /> How to Apply
          </h2>
          <ol className="mt-3 list-decimal pl-5 text-sm text-[var(--muted-foreground)] space-y-1">
            <li>Call hotline or submit the request form</li>
            <li>Provide basic identity & situation details</li>
            <li>We verify and confirm coverage</li>
          </ol>
        </div>
      </section>

      {/* Callouts */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border bg-[var(--secondary)] text-[var(--secondary-foreground)] p-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-medium inline-flex items-center gap-2"><HeartHandshake className="size-5" aria-hidden /> For Partners & Donors</h3>
            <p className="mt-2 text-sm opacity-80">
              Collaborate with us to fund dignified farewells: corporate CSR, temples, trusts, individuals. Transparent reporting provided.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="/vendors-partners?topic=csr">Become a Partner</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact?topic=donation">Talk to our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}