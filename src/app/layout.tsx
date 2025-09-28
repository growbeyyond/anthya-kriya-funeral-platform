import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anthya Kriya — Dignity in the Final Journey",
  description:
    "Anthya Kriya offers dignified, culturally respectful funeral and ritual services with 24/7 emergency support across faiths. Now serving: Hyderabad (pilot).",
  // SEO: OpenGraph & Twitter cards
  openGraph: {
    title: "Anthya Kriya — Dignity in the Final Journey",
    description:
      "Dignified, culturally respectful funeral and ritual services with 24/7 emergency support across faiths. Now serving: Hyderabad (pilot).",
    url: "https://www.anthyakriya.com",
    siteName: "Anthya Kriya",
    images: [
      {
        url:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/dignified%2c-serene-view-of-kashi-%28var-6c192590-20250926173740.jpg?",
        width: 1200,
        height: 630,
        alt: "Anthya Kriya — Dignity in the Final Journey",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthya Kriya — Dignity in the Final Journey",
    description:
      "Dignified, culturally respectful funeral and ritual services with 24/7 emergency support across faiths.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/dignified%2c-serene-view-of-kashi-%28var-6c192590-20250926173740.jpg?",
    ],
    creator: "@anthyakriya",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        {/* Resource hints for faster LCP image/script hosts */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" crossOrigin="anonymous" />
        {/* Fonts preconnects to speed up Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* LocalBusiness JSON-LD */}
        <Script id="ak-schema" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Anthya Kriya',
            url: 'https://www.anthyakriya.com',
            telephone: '+918886435558',
            areaServed: 'Hyderabad, India',
            description:
              'Dignified, culturally respectful funeral and ritual services with 24/7 emergency support across faiths.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hyderabad',
              addressCountry: 'IN',
            },
            sameAs: ['https://wa.me/918886435558'],
          })}
        </Script>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="antialiased pb-16 sm:pb-0">
        {/* Skip link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[var(--accent)] focus:text-[var(--accent-foreground)] focus:px-3 focus:py-2 focus:rounded-md">Skip to main content</a>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {/* Top navigation */}
        <header className="border-b bg-[var(--card)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--card)]/70">
          <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--primary)]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/ChatGPT%20Image%20Sep%2026,%202025,%2008_53_56%20PM-1758900244242.png"
                alt="Anthya Kriya logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                priority
              />
              <span>Anthya Kriya</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-4 text-sm text-[color:oklch(0.28_0.08_20_/_85%)]">
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/vendors-partners" className="hover:underline">Vendors & Partners</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/csr" className="hover:underline">CSR</Link>
              <Link href="/legal" className="hover:underline">Legal</Link>
              {/* Donate/Partner CTA */}
              <Link
                href="/csr"
                className="ml-1 inline-flex items-center rounded-full bg-[var(--accent)] px-3 py-1.5 text-[var(--accent-foreground)] hover:opacity-90"
              >
                Donate / Partner
              </Link>
              {/* Language toggle */}
              <div className="ml-2 hidden md:flex items-center gap-2" aria-label="Language selector">
                <Link className="hover:underline" href="?lang=en">EN</Link>
                <span aria-hidden="true">|</span>
                <Link className="hover:underline" href="?lang=te">TE</Link>
                <span aria-hidden="true">|</span>
                <Link className="hover:underline" href="?lang=hi">HI</Link>
              </div>
            </nav>
            {/* Minimal mobile header actions */}
            <div className="sm:hidden flex items-center gap-2 text-sm">
              <a href="tel:+918886435558" className="rounded-full border px-3 py-1">Call</a>
              <a
                href="https://wa.me/918886435558?text=Hello%20Anthya%20Kriya%2C%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 text-white px-3 py-1"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>
        {children}
        {/* Footer */}
        <footer className="mt-16 border-t bg-[var(--card)]/60">
          <div className="mx-auto max-w-6xl px-6 py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-sm">
            <div>
              <div className="flex items-center gap-2 font-semibold text-[var(--primary)]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/ChatGPT%20Image%20Sep%2026,%202025,%2008_53_56%20PM-1758900244242.png"
                  alt="Anthya Kriya logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <span>Anthya Kriya</span>
              </div>
              <p className="mt-2 text-[color:oklch(0.28_0.08_20_/_75%)]">
                24/7 Hotline: <a className="underline" href="tel:+918886435558">+91 8886435558</a>
              </p>
            </div>
            <div>
              <div className="font-medium">Explore</div>
              <ul className="mt-2 space-y-1 text-[color:oklch(0.28_0.08_20_/_80%)]">
                <li><Link className="hover:underline" href="/services">Services</Link></li>
                <li><Link className="hover:underline" href="/vendors-partners">Vendors & Partners</Link></li>
                <li><Link className="hover:underline" href="/csr">CSR</Link></li>
                <li><Link className="hover:underline" href="/about">About</Link></li>
                <li><Link className="hover:underline" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Company</div>
              <ul className="mt-2 space-y-1 text-[color:oklch(0.28_0.08_20_/_80%)]">
                <li><Link className="hover:underline" href="/terms">Terms</Link></li>
                <li><Link className="hover:underline" href="/privacy">Privacy</Link></li>
                <li><Link className="hover:underline" href="/legal">Legal</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Language</div>
              <div className="mt-2 flex items-center gap-3 text-[color:oklch(0.28_0.08_20_/_80%)]">
                <Link className="hover:underline" href="?lang=en">English</Link>
                <Link className="hover:underline" href="?lang=te">తెలుగు</Link>
                <Link className="hover:underline" href="?lang=hi">हिन्दी</Link>
              </div>
            </div>
          </div>
          <div className="border-t">
            <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-[color:oklch(0.28_0.08_20_/_65%)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>© {new Date().getFullYear()} Anthya Kriya. All rights reserved.</span>
              <span>Made with dignity and care.</span>
            </div>
          </div>
        </footer>
        {/* Mobile sticky emergency bar */}
        <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t bg-[var(--card)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--card)]/80">
          <div className="mx-auto max-w-6xl px-4 py-2 grid grid-cols-3 gap-2 text-sm">
            <Link href="/emergency-booking" className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-3 py-2">🚑 Emergency</Link>
            <a href="tel:+918886435558" className="inline-flex items-center justify-center rounded-md border px-3 py-2">📞 Call</a>
            <a href="https://wa.me/918886435558?text=Hello%20Anthya%20Kriya%2C%20I%20need%20assistance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-green-600 text-white px-3 py-2">💬 WhatsApp</a>
          </div>
        </div>
        {/* Global floating Emergency CTA */}
        <Link
          href="/emergency-booking"
          className="hidden sm:inline-flex fixed bottom-4 right-4 z-50 items-center gap-2 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-5 py-3 shadow-lg shadow-black/10 hover:opacity-90 focus-visible:outline focus-visible:outline-[var(--ring)]"
          aria-label="Book Emergency Now"
        >
          <span className="hidden sm:inline">Book Emergency Now</span>
          <span className="sm:hidden">Emergency</span>
        </Link>
        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/918886435558?text=Hello%20Anthya%20Kriya%2C%20I%20need%20assistance"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex fixed bottom-4 left-4 z-50 items-center gap-2 rounded-full bg-green-600 text-white px-5 py-3 shadow-lg hover:bg-green-700 focus-visible:outline focus-visible:outline-[var(--ring)]"
          aria-label="Chat on WhatsApp"
        >
          WhatsApp
        </a>
        <Toaster position="top-right" richColors closeButton />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}