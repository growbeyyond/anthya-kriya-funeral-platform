import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Anthya Kriya",
  description:
    "Read the Terms & Conditions for using Anthya Kriya's services, including bookings, payments, refunds, and responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>
        Terms & Conditions
      </h1>
      <p className="mt-3 text-sm text-[color:oklch(0.28_0.08_20_/_80%)]">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="prose prose-neutral max-w-none mt-8">
        <p>
          Welcome to Anthya Kriya. By accessing and using our website and services,
          you agree to the following terms. Please read them carefully.
        </p>
        <h2>1. Services</h2>
        <p>
          We coordinate funeral, ritual, and memorial services across traditions through
          verified partners. Availability may vary by location and partner capacity.
        </p>
        <h2>2. Bookings & Cancellations</h2>
        <p>
          Bookings are confirmed upon receipt of required details and applicable deposits.
          Cancellations and changes are governed by partner and facility rules.
        </p>
        <h2>3. Payments & Refunds</h2>
        <p>
          Payments may include deposits held in escrow and released post-service (e.g., T+3).
          Refund eligibility depends on service progress, third-party policies, and SLAs.
        </p>
        <h2>4. Conduct & Compliance</h2>
        <p>
          Users agree to comply with all applicable laws, facility guidelines, and cultural
          sensitivities. We reserve the right to refuse service for misuse or unlawful activity.
        </p>
        <h2>5. Liability</h2>
        <p>
          While we strive for timely, dignified services, certain factors (traffic, slots,
          government processes) are outside our control. Our liability is limited to fees paid
          by you for the affected service.
        </p>
        <h2>6. Changes</h2>
        <p>
          We may update these terms from time to time. Continued use constitutes acceptance of
          the latest version.
        </p>
        <p className="mt-8">
          Questions? <Link className="underline" href="/contact">Contact us</Link> or call
          {" "}<a className="underline" href="tel:+918886435558">+91 8886435558</a>.
        </p>
      </div>
    </main>
  );
}