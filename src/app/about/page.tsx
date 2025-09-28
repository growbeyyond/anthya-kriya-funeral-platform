import { PageBanner } from "@/components/PageBanner";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/dignified%2c-serene-view-of-kashi-%28var-6c192590-20250926173740.jpg?"
        alt="About Anthya Kriya — dignity across faiths"
      />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: "var(--primary)" }}>About Us</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Dignity in the Final Journey — Across Faiths, With Compassion.</p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Founder's Story</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              In moments of loss, families need gentle guidance and reliable support. Anthya Kriya was founded to uphold tradition
              and compassion while simplifying logistics, so families can focus on remembrance.
            </p>
          </div>
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Mission & Vision</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Mission: Seamless, culturally authentic end-of-life services. Vision: A world where every family finds dignity and clarity, enabled by caring teams and thoughtful technology.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>CSR — Anthya Kriya Foundation</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Every booking contributes to supporting low-income families with essential services.</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Pilot operations in Hyderabad; expanding to more cities soon.</p>
        </section>
      </main>
    </>
  );
}