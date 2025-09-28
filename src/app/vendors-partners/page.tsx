import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";

export default function VendorsPartnersPage() {
  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/respectful-collage-style-photograph-show-770deb7f-20250926173451.jpg?"
        alt="Vendors and partners — serve with dignity"
      />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: "var(--primary)" }}>Vendors & Partners</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Join our compassionate network to serve families with dignity.</p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Vendors</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Priests, drivers, freezer providers, florists, ceremony teams. Complete KYC to start receiving jobs.</p>
            <div className="mt-4 flex gap-3">
              <Link href="/vendor/onboarding" className="inline-flex items-center rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 text-sm hover:opacity-90">Join as Vendor</Link>
              <Link href="/vendor" className="inline-flex items-center rounded-md border px-4 py-2 text-sm">Vendor Console</Link>
            </div>
          </div>

          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Partners</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Hospitals, temples, NGOs, community organizations. Refer families or collaborate for on-ground support.</p>
            <div className="mt-4 flex gap-3">
              <Link href="/partner" className="inline-flex items-center rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 text-sm hover:opacity-90">Become a Partner</Link>
              <Link href="/partner" className="inline-flex items-center rounded-md border px-4 py-2 text-sm">Refer a Family</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}