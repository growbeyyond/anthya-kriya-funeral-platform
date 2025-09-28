import Link from "next/link";
import { Phone, ArrowLeft, Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-center">
      <div className="mx-auto max-w-xl rounded-2xl border bg-[var(--card)] p-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)]">
          <HomeIcon className="size-6" aria-hidden />
        </div>
        <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Page not found</h1>
        <p className="mt-3 text-sm text-[color:oklch(0.28_0.08_20_/_80%)]">
          The page you are looking for doesn’t exist or may have moved.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 bg-[var(--card)] hover:bg-[var(--secondary)]"
            aria-label="Go back home"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to Home
          </Link>
          <Link
            href="/emergency-booking"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90"
          >
            Book Emergency Now
          </Link>
        </div>

        <p className="mt-6 text-sm text-[color:oklch(0.28_0.08_20_/_75%)]">
          Need immediate help? Call our 24/7 hotline: {" "}
          <a className="underline inline-flex items-center gap-1" href="tel:+918886435558">
            <Phone className="size-4" aria-hidden /> +91 8886435558
          </a>
        </p>
      </div>
    </main>
  );
}