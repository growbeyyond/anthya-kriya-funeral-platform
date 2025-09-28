import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Anthya Kriya",
  description:
    "Learn how Anthya Kriya collects, uses, and protects your personal information, including booking details and communications.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-[color:oklch(0.28_0.08_20_/_80%)]">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="prose prose-neutral max-w-none mt-8">
        <p>
          Your privacy matters to us. This policy describes how Anthya Kriya collects,
          uses, shares, and protects your information when you use our website and
          services.
        </p>
        <h2>Information We Collect</h2>
        <ul>
          <li>Contact details (name, phone, email)</li>
          <li>Booking information and service preferences</li>
          <li>Location data for dispatch and coordination</li>
          <li>Communications (calls, messages) for support and compliance</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>
          We use your data to coordinate services, ensure service quality, comply with
          regulations, and improve our offerings. With your consent, we may enable
          livestreams or memorial pages with appropriate privacy settings.
        </p>
        <h2>Sharing</h2>
        <p>
          We share information with verified partners (e.g., vendors, facilities) only
          as needed to provide requested services, and with authorities when legally
          required.
        </p>
        <h2>Data Security & Retention</h2>
        <p>
          We implement reasonable safeguards to protect your data and retain it only as
          long as necessary for service, legal, and audit purposes.
        </p>
        <h2>Your Choices</h2>
        <p>
          You may request access, correction, or deletion of your data, subject to
          applicable law and operational requirements.
        </p>
        <h2>Contact</h2>
        <p>
          Questions? <Link className="underline" href="/contact">Contact us</Link> or call
          {" "}
          <a className="underline" href="tel:+918886435558">+91 8886435558</a>.
        </p>
      </div>
    </main>
  );
}