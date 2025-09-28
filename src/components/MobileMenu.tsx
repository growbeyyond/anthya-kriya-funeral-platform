"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  // Close on route change (hash or query) by listening to popstate
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden flex items-center gap-2 text-sm">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border px-3 py-1"
      >
        Menu
      </button>
      <a href="tel:+918886435558" className="rounded-full border px-3 py-1">Call</a>
      <a
        href="https://wa.me/918886435558?text=Hello%20Anthya%20Kriya%2C%20I%20need%20assistance"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-green-600 text-white px-3 py-1"
      >
        WhatsApp
      </a>

      {/* Backdrop */}
      {open ? (
        <button
          aria-hidden
          tabIndex={-1}
          onClick={close}
          className="fixed inset-0 z-[180] bg-black/20 animate-in fade-in-50"
        />
      ) : null}

      {/* Panel */}
      {open ? (
        <div className="fixed inset-x-2 top-16 bottom-2 rounded-lg border bg-[var(--card)] p-4 shadow-lg z-[200] overflow-y-auto animate-in slide-in-from-top-2 fade-in-50 duration-200">
          <nav className="grid gap-2 text-[var(--foreground)]" onClick={close}>
            {/* Primary actions */}
            <Link href="/emergency-booking" className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-3 py-2">🚑 Emergency Booking</Link>
            <Link href="/plan-ahead" className="rounded-md border px-3 py-2">Plan Ahead</Link>
            <Link href="/multi-faith-rituals" className="rounded-md border px-3 py-2">Multi‑faith Rituals</Link>
            <Link href="/memorials" className="rounded-md border px-3 py-2">Memorials</Link>
            <Link href="/memorials/new" className="rounded-md border px-3 py-2">Create Memorial</Link>

            <div className="pt-2 border-t mt-2" />

            {/* Explore / informational */}
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/vendors-partners" className="hover:underline">Vendors & Partners</Link>
            <Link href="/partner" className="hover:underline">Partner with Us</Link>
            <Link href="/vendor" className="hover:underline">Vendor Portal</Link>
            <Link href="/vendor/onboarding" className="hover:underline">Vendor Onboarding</Link>
            <Link href="/vendor/jobs" className="hover:underline">Vendor Jobs</Link>
            <Link href="/vendor/wallet" className="hover:underline">Vendor Wallet</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/csr" className="hover:underline">CSR</Link>

            <div className="pt-2 border-t mt-2" />

            {/* Auth */}
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>

            <div className="pt-2 border-t mt-2" />

            {/* Policies */}
            <Link href="/legal" className="hover:underline">Legal</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>

            <div className="pt-2 border-t mt-2" />

            {/* Language selector */}
            <div className="flex items-center gap-3" aria-label="Language selector">
              <Link className="hover:underline" href="?lang=en">EN</Link>
              <Link className="hover:underline" href="?lang=te">TE</Link>
              <Link className="hover:underline" href="?lang=hi">HI</Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;