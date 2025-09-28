import { ContactForm } from "@/components/contact/ContactForm";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/dignified%2c-serene-view-of-kashi-%28var-6c192590-20250926173740.jpg?"
        alt="Contact Anthya Kriya — we're here 24/7"
      />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: "var(--primary)" }}>We're Here for You, 24/7</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Reach us anytime for immediate assistance or guidance.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a className="inline-flex items-center rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 hover:opacity-90" href="tel:+918886435558" aria-label="Call hotline">📞 +91 8886435558</a>
            <a className="inline-flex items-center rounded-md border px-4 py-2" href="https://wa.me/918886435558?text=Hello%20Anthya%20Kriya%2C%20I%20need%20assistance" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>
            <a className="inline-flex items-center rounded-md border px-4 py-2" href="mailto:support@anthyakriya.com" aria-label="Send email">support@anthyakriya.com</a>
          </div>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>Contact Form</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">We typically respond within minutes.</p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
          <div className="rounded-xl border bg-[var(--card)] p-0 overflow-hidden">
            <iframe
              title="Anthya Kriya Office Location"
              aria-label="Google Map showing our office location"
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.458003818599!2d78.486671!3d17.436927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c0cf8b0e73%3A0x0000000000000000!2sHyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mt-10 rounded-xl border bg-[var(--secondary)] text-[var(--secondary-foreground)] p-6 text-center">
          <p className="text-sm">Every booking helps support low-income families through <span className="font-semibold">Anthya Kriya Foundation</span>.</p>
        </section>

        <section className="mt-10 text-center text-sm">
          <Link href="/legal" className="hover:underline">Consent note for memorials & livestreams</Link>
        </section>
      </main>
    </>
  );
}