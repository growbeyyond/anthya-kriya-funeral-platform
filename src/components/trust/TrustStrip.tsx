export const TrustStrip = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 border-t border-[var(--border)]">
      <div className="grid gap-3 sm:grid-cols-3 text-center text-sm">
        <div className="rounded-xl border bg-[var(--card)] px-4 py-3">
          <span className="font-medium" style={{ color: "var(--primary)" }}>24/7 Dispatch</span>
          <p className="mt-1 text-[var(--muted-foreground)]">Immediate coordination any time, any day</p>
        </div>
        <div className="rounded-xl border bg-[var(--card)] px-4 py-3">
          <span className="font-medium" style={{ color: "var(--primary)" }}>Certified Officiants</span>
          <p className="mt-1 text-[var(--muted-foreground)]">Across Hindu, Muslim, Christian, Sikh, Jain, Buddhist, Parsi</p>
        </div>
        <div className="rounded-xl border bg-[var(--card)] px-4 py-3">
          <span className="font-medium" style={{ color: "var(--primary)" }}>Govt-compliant Docs</span>
          <p className="mt-1 text-[var(--muted-foreground)]">End-to-end paperwork guidance</p>
        </div>
      </div>
    </section>
  );
};