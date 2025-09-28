export default function LegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: "var(--primary)" }}>Legal</h1>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">Terms of Service, Privacy Policy, and Consent notes.</p>
      </header>

      <section className="mt-10 space-y-10">
        <article className="rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Terms of Service</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Use of our services implies agreement with our operating procedures, payment terms, and locality-specific regulations. Emergency bookings may require deposits. Rituals are conducted by certified officiants aligned to the family’s tradition.</p>
        </article>
        <article className="rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Privacy Policy</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">We collect essential information to coordinate services. Personal data is handled with strict confidentiality and not shared except for service fulfillment or as required by law. OTP verification is used for contact authenticity.</p>
        </article>
        <article className="rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Consent Notes</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">For livestreams and digital memorials, the family provides explicit consent for recording and streaming. Content moderation is applied to ensure dignity and respect.</p>
        </article>
      </section>
    </main>
  );
}