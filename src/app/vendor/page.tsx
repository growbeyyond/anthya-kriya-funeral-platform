"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VendorHomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Vendor Portal</h1>
        <div className="flex gap-2">
          <Button asChild variant="secondary"><Link href="/vendor/onboarding">Onboarding</Link></Button>
          <Button asChild><Link href="/vendor/jobs">Jobs</Link></Button>
          <Button asChild variant="outline"><Link href="/vendor/wallet">Wallet</Link></Button>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader><CardTitle>Complete KYC</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Upload documents to get verified and receive assignments.</p>
            <Button asChild size="sm"><Link href="/vendor/onboarding">Start</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Accept Jobs</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Browse new requests and accept matches in your city.</p>
            <Button asChild size="sm"><Link href="/vendor/jobs">View Jobs</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Wallet</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Track payouts and withdraw earnings to your bank.</p>
            <Button asChild size="sm" variant="outline"><Link href="/vendor/wallet">Open Wallet</Link></Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}