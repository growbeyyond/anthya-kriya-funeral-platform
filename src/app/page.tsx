import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import dynamic from "next/dynamic";
import { Phone, MessageCircle, ArrowRight, Sparkles, Ambulance, BookOpen, Calendar, Flower, HandHeart, Scale, ShieldCheck, Globe, Leaf, Package, Building2, FileText, HelpingHand } from "lucide-react";
import Script from "next/script";

const TrustStrip = dynamic(() => import("@/components/trust/TrustStrip").then((m) => m.TrustStrip), {
  loading: () => <div className="h-12" />
});
const Testimonials = dynamic(() => import("@/components/trust/Testimonials").then((m) => m.Testimonials), {
  loading: () => <div className="h-40" />
});

export default function Home({ searchParams }: {searchParams?: {lang?: string;};}) {
  const lang = searchParams?.lang || "en";
  const tagline =
  lang === "te" ?
  "చివరి ప్రయాణంలో గౌరవం — ప్రతి మతం, ప్రతి సంప్రదాయం." :
  lang === "hi" ?
  "अंतिम यात्रा में गरिमा — हर धर्म, हर परंपरा के साथ।" :
  "Across Faiths, Across Families";

  const t = {
    services: lang === "te" ? "సేవలు" : lang === "hi" ? "सेवाएँ" : "Services",
    how: lang === "te" ? "ఇది ఎలా పనిచేస్తుంది" : lang === "hi" ? "कैसे काम करता है" : "How it works",
    faqs: lang === "te" ? "తరచుగా అడిగే ప్రశ్నలు" : lang === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "FAQs",
    faq1: lang === "te" ? "మీరు 24/7 పనిచేస్తారా?" : lang === "hi" ? "क्या आप 24/7 संचालित होते हैं?" : "Do you operate 24/7?",
    faq2: lang === "te" ? "మీరు భిన్న మతాలకు మద్దతు ఇస్తారా?" : lang === "hi" ? "क्या आप विभिन्न धर्मों का समर्थन करते हैं?" : "Can you support different faiths?",
    faq3: lang === "te" ? "నేను ముందుగా ఎలా ప్లాన్ చేయాలి?" : lang === "hi" ? "मैं पहले से योजना कैसे बनाऊँ?" : "How do I plan ahead?",
    ans1:
    lang === "te" ?
    "అవును. మా హాట్‌లైన్ ఎల్లపుడూ అందుబాటులో ఉంటుంది:" :
    lang === "hi" ?
    "हाँ। हमारी हेल्पलाइन 24/7 उपलब्ध है:" :
    "Yes. Our hotline is always on:",
    ans2:
    lang === "te" ?
    "ఖచ్చితంగా. చూడండి" :
    lang === "hi" ?
    "बिल्कुल। देखें" :
    "Absolutely. See",
    ans3:
    lang === "te" ?
    "మీ అభిరుచులను నమోదు చేయడానికి మా" :
    lang === "hi" ?
    "अपनी प्राथमिकताएँ दर्ज करने के लिए हमारे" :
    "Use our"
  };

  return (
    <main id="main-content" className="min-h-[80vh]">
      <section className="relative overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/dignified%2c-serene-view-of-kashi-%28var-6c192590-20250926173740.jpg?"
          alt="Kashi (Varanasi) ghats at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "grayscale(30%)" }}
          unoptimized />

        <div className="absolute inset-0 opacity-70"
        style={{
          background:
          "radial-gradient(120% 80% at 50% 20%, color-mix(in oklch, var(--primary) 16%, transparent) 0%, transparent 55%, color-mix(in oklch, var(--primary) 28%, transparent) 100%)",
          mixBlendMode: "multiply"
        }} />

        <div className="relative z-10">
          <div
            style={{
              background:
              "linear-gradient(180deg, color-mix(in oklch, var(--primary) 70%, transparent) 0%, color-mix(in oklch, var(--accent) 55%, transparent) 100%)"
            }}>

            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 text-center text-white">
              <div className="flex items-center justify-between gap-4 text-sm opacity-95">
                <p className="inline-flex items-center gap-2">
                  <Phone className="size-4" aria-hidden />
                  24/7 Hotline: <a className="underline" href="tel:+918886435558">+91 8886435558</a>
                </p>
                <div className="inline-flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-2 py-1 text-white backdrop-blur-md">
                    <Link href="?lang=en" className={`px-2 py-0.5 rounded-full ${lang === "en" ? "bg-white/20" : "hover:bg-white/10"}`}>EN</Link>
                    <Link href="?lang=te" className={`px-2 py-0.5 rounded-full ${lang === "te" ? "bg-white/20" : "hover:bg-white/10"}`}>TE</Link>
                    <Link href="?lang=hi" className={`px-2 py-0.5 rounded-full ${lang === "hi" ? "bg-white/20" : "hover:bg-white/10"}`}>HI</Link>
                  </div>
                  <ThemeToggle />
                </div>
              </div>

              <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight md:leading-[1.1] animate-in fade-in-50 duration-700 !whitespace-pre-line">
                {tagline}
              </h1>
              <div className="mt-3 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs sm:text-sm text-white/90 ring-1 ring-white/20 animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
                  <Sparkles className="size-3.5" aria-hidden />
                  Now serving: Hyderabad (pilot) · More cities soon
                </span>
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/90 animate-in fade-in-50 slide-in-from-bottom-2 duration-700 delay-100">
                Anthya Kriya provides dignified, culturally respectful funeral and ritual
                services across faiths. Immediate assistance, end-to-end coordination,
                and compassionate support for families.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild className="w-full sm:w-auto bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
                  <Link href="/emergency-booking" className="inline-flex items-center gap-2">Book Emergency Now <ArrowRight className="size-4" aria-hidden /></Link>
                </Button>
                <Button asChild variant="secondary" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
                  <Link href="/plan-ahead" className="inline-flex items-center gap-2">Plan Ahead <ArrowRight className="size-4" aria-hidden /></Link>
                </Button>
                <Button asChild variant="secondary" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
                  <Link href="/multi-faith-rituals" className="inline-flex items-center gap-2">Multi-faith Rituals <ArrowRight className="size-4" aria-hidden /></Link>
                </Button>
                <Button asChild variant="secondary" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
                  <Link href="https://wa.me/918886435558?text=Hello%20Anthya%20Kriya%2C%20I%20need%20assistance" aria-label="WhatsApp support" className="inline-flex items-center gap-2"><MessageCircle className="size-4" aria-hidden /> WhatsApp</Link>
                </Button>
              </div>

              <div className="mt-6 text-sm text-white/80">
                Prefer to speak now? Call <a className="underline inline-flex items-center gap-1" href="tel:+918886435558"><Phone className="size-4" aria-hidden /> +91 8886435558</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-[var(--border)]">
        <div className="rounded-xl border bg-[var(--card)] p-8">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Founder's Note</h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            In moments of loss, clarity and compassion matter most. Anthya Kriya was born from
            a simple promise: every family deserves dignified support that honors their faith and
            traditions. We are here to stand beside you and carry the logistics, so you can hold your loved ones.
          </p>
        </div>
      </section>

      <Reveal as="div" className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3 border-t border-[var(--border)]">
        <div className="rounded-xl border bg-[var(--card)] p-6">
          <h3 className="text-lg font-medium inline-flex items-center gap-2" style={{ color: "var(--primary)" }}><Ambulance className="size-5" aria-hidden /> Immediate Response</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Dispatch in 30 minutes within Hyderabad. Rapid coordination of transport,
            documentation, cremation/burial slots, and priest/official support.
          </p>
        </div>
        <div className="rounded-xl border bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40">
          <h3 className="text-lg font-medium inline-flex items-center gap-2" style={{ color: "var(--primary)" }}><BookOpen className="size-5" aria-hidden /> Across Traditions</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Hindu, Muslim, Christian, Sikh, Jain, Buddhist, Parsi — authentic rites with
            cultural sensitivity.
          </p>
        </div>
        <div className="rounded-xl border bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40">
          <h3 className="text-lg font-medium inline-flex items-center gap-2" style={{ color: "var(--primary)" }}><Calendar className="size-5" aria-hidden /> Memorial & Support</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Online memorials, grief resources, and ongoing ceremony planning.
          </p>
        </div>
      </Reveal>

      {/* Mission & Vision */}
      <Reveal as="div" className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-2 border-t border-[var(--border)]">
        <div className="rounded-xl border bg-[var(--card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/respectful-collage-style-photograph-show-770deb7f-20250926173451.jpg?"
            alt="Multi-faith support"
            width={800}
            height={450}
            className="mb-4 w-full h-40 object-cover rounded-lg border"
            unoptimized />

          <h2 className="text-2xl font-semibold inline-flex items-center gap-2" style={{ color: "var(--primary)" }}><HandHeart className="size-5" aria-hidden /> Our Mission</h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            To ensure every final journey is handled with dignity, compassion, and cultural fidelity
            while easing the logistical burden on families.
          </p>
        </div>
        <div className="rounded-xl border bg-[var(--card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40">
          <h2 className="text-2xl font-semibold inline-flex items-center gap-2" style={{ color: "var(--primary)" }}><HandHeart className="size-5" aria-hidden /> Family Promise</h2>
          <ul className="mt-3 text-sm text-[var(--muted-foreground)] list-disc pl-5 space-y-1">
            <li>Dignity and respect for every family, every faith.</li>
            <li>Transparent pricing and clear communication — no surprises.</li>
            <li>24/7 response with rapid coordination (Hyderabad pilot).</li>
            <li>Compassionate, end‑to‑end support so you can be with your loved ones.</li>
          </ul>
        </div>
      </Reveal>

      {/* Services Overview */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>{t.services}</h2>
        {/* Mini TOC / quick jump */}
        <nav aria-label="Services quick navigation" className="mt-3 overflow-x-auto">
          <ul className="flex gap-2 text-xs sm:text-sm whitespace-nowrap">
            <li><a href="#emergency" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Emergency</a></li>
            <li><a href="#rituals" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Rituals</a></li>
            <li><a href="#plan" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Plan Ahead</a></li>
            <li><a href="#memorials" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Memorials</a></li>
            <li><a href="#legal" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Legal</a></li>
            <li><a href="#support" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Support</a></li>
            <li><a href="#nri" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Global / NRI</a></li>
            <li><a href="#eco" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Eco</a></li>
            <li><a href="#kits" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">Ritual Kits</a></li>
            <li><a href="#csr" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-[var(--card)] hover:bg-[var(--secondary)]">CSR</a></li>
          </ul>
        </nav>
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/tasteful-still-life-of-glowing-candles-a-c85a9c01-20250926173443.jpg?"
          alt="Memorial candles"
          width={1200}
          height={500}
          className="mt-4 w-full h-40 sm:h-56 object-cover rounded-xl border"
          unoptimized />

        <Reveal as="div" className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
          <div id="emergency" className="min-w-[85%] snap-start md:min-w-0 rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><Ambulance className="size-4" aria-hidden /> Emergency Coordination</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Ambulance, documentation, cremation/burial slots.</p>
            <Button asChild size="sm" className="mt-3"><Link href="/emergency-booking" className="inline-flex items-center gap-2">Book Emergency <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="rituals" className="min-w-[85%] snap-start md:min-w-0 rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><BookOpen className="size-4" aria-hidden /> Multi-faith Rituals</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Authentic rites with certified officiants.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3 transition-transform duration-200 hover:scale-[1.02] active:scale-95"><Link href="/multi-faith-rituals" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="plan" className="min-w-[85%] snap-start md:min-w-0 rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><Calendar className="size-4" aria-hidden /> Plan Ahead</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Document preferences for peace of mind.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3 transition-transform duration-200 hover:scale-[1.02] active:scale-95"><Link href="/plan-ahead" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="memorials" className="min-w-[85%] snap-start md:min-w-0 rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><Flower className="size-4" aria-hidden /> Memorials</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Create online tributes and ceremony timelines.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3 transition-transform duration-200 hover:scale-[1.02] active:scale-95"><Link href="/memorials" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
        </Reveal>
        {/* Expanded services */}
        <Reveal as="div" className="mt-6 grid gap-6 md:grid-cols-3">
          <div id="legal" className="rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><FileText className="size-4" aria-hidden /> Legal & Documentation</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Death certificate, permits, and formalities.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3"><Link href="/legal" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="support" className="rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><HelpingHand className="size-4" aria-hidden /> Support & Counseling</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Grief resources and community support.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3"><Link href="/contact?topic=support" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="nri" className="rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><Globe className="size-4" aria-hidden /> Global / NRI</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Remote coordination and repatriation support.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3"><Link href="/contact?topic=nri" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="eco" className="rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><Leaf className="size-4" aria-hidden /> Eco‑Friendly Farewells</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Sustainable options and green materials.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3"><Link href="/services#eco" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="kits" className="rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><Package className="size-4" aria-hidden /> Ritual Kits & Merchandise</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Samagri kits and essentials by tradition.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3"><Link href="/contact?topic=kits" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
          <div id="csr" className="rounded-xl border p-6 bg-[var(--card)]">
            <h3 className="font-medium inline-flex items-center gap-2"><Building2 className="size-4" aria-hidden /> CSR & Social Impact</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Subsidized support via our foundation.</p>
            <Button asChild size="sm" variant="secondary" className="mt-3"><Link href="/csr" className="inline-flex items-center gap-2">Learn More <ArrowRight className="size-4" aria-hidden /></Link></Button>
          </div>
        </Reveal>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>{t.how}</h2>
        <Reveal as="ol" className="mt-6 grid gap-6 md:grid-cols-4 text-sm">
          <li className="rounded-xl border p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40"><span className="font-medium">1. Reach us</span><br />Call or book online 24/7</li>
          <li className="rounded-xl border p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40"><span className="font-medium">2. Guidance</span><br />We assign a care manager</li>
          <li className="rounded-xl border p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40"><span className="font-medium">3. Coordination</span><br />Rituals, logistics, documentation</li>
          <li className="rounded-xl border p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40"><span className="font-medium">4. Follow-up</span><br />Memorials and ongoing support</li>
        </Reveal>
      </section>

      {/* CSR Banner */}
      <section className="mx-auto max-w-6xl px-6 py-10 border-t border-[var(--border)]">
        <div className="rounded-xl border bg-[var(--secondary)] text-[var(--secondary-foreground)] p-6 text-center">
          <p className="text-sm sm:text-base">
            Every booking helps support low-income families through <span className="font-semibold">Anthya Kriya Foundation</span>.
          </p>
        </div>
      </section>

      {/* Theme & Values */}
      <Reveal as="div" className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3 border-t border-[var(--border)]">
        <div className="rounded-xl border p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40">
          <h3 className="font-medium inline-flex items-center gap-2"><HandHeart className="size-5" aria-hidden /> Compassion</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Warm, human-first support throughout.</p>
        </div>
        <div className="rounded-xl border p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40">
          <h3 className="font-medium inline-flex items-center gap-2"><Scale className="size-5" aria-hidden /> Respect</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Cultural fidelity across traditions.</p>
        </div>
        <div className="rounded-xl border p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]/40">
          <h3 className="font-medium inline-flex items-center gap-2"><ShieldCheck className="size-5" aria-hidden /> Reliability</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">24/7 availability and clear SLAs.</p>
        </div>
      </Reveal>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>{t.faqs}</h2>
        <Reveal className="mt-6 grid gap-4 text-sm">
          <div className="rounded-xl border p-4 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--accent)]/40">
            <p className="font-medium">{t.faq1}</p>
            <p className="text-[var(--muted-foreground)]">{t.ans1} <a className="underline" href="tel:+918886435558">+91 8886435558</a>.</p>
          </div>
          <div className="rounded-xl border p-4 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--accent)]/40">
            <p className="font-medium">{t.faq2}</p>
            <p className="text-[var(--muted-foreground)]">{t.ans2} <Link className="underline" href="/multi-faith-rituals">Multi-faith Rituals</Link>.</p>
          </div>
          <div className="rounded-xl border p-4 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--accent)]/40">
            <p className="font-medium">{t.faq3}</p>
            <p className="text-[var(--muted-foreground)]">{t.ans3} <Link className="underline" href="/plan-ahead">Plan Ahead</Link> form to record preferences.</p>
          </div>
        </Reveal>
        {/* FAQPage JSON-LD for SEO */}
        <Script id="faq-schema" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
            {
              '@type': 'Question',
              name: t.faq1,
              acceptedAnswer: { '@type': 'Answer', text: `${t.ans1} +91 8886435558.` }
            },
            {
              '@type': 'Question',
              name: t.faq2,
              acceptedAnswer: { '@type': 'Answer', text: `${t.ans2} Multi-faith Rituals.` }
            },
            {
              '@type': 'Question',
              name: t.faq3,
              acceptedAnswer: { '@type': 'Answer', text: `${t.ans3} Plan Ahead form.` }
            }]

          })}
        </Script>
      </section>

      {/* Vendors & Partners CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-[var(--border)]">
        <div className="rounded-xl border bg-[var(--card)] p-8 text-center">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Serve with us</h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            Become a priest, service vendor, or hospital/temple partner. Earn by offering your services with dignity.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/vendor/onboarding">Become a Vendor</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/partner">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Reveal as="div" className="mx-auto max-w-6xl px-6 py-8">
        <TrustStrip />
      </Reveal>
      <Reveal as="div" className="mx-auto max-w-6xl px-6 py-12">
        <Testimonials />
      </Reveal>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center border-t border-[var(--border)]">
        <h2 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>We're here when you need us</h2>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">Speak with our care team or start a request online.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild><Link href="/emergency-booking" className="inline-flex items-center gap-2">Book Emergency Now <ArrowRight className="size-4" aria-hidden /></Link></Button>
          <Button asChild variant="secondary"><Link href="/plan-ahead" className="inline-flex items-center gap-2">Plan Ahead <ArrowRight className="size-4" aria-hidden /></Link></Button>
          <Button asChild variant="secondary"><Link href="/memorials/new" className="inline-flex items-center gap-2">Create Memorial <ArrowRight className="size-4" aria-hidden /></Link></Button>
        </div>
        <p className="mt-4 text-sm">Hotline: <a className="underline inline-flex items-center gap-1" href="tel:+918886435558"><Phone className="size-4" aria-hidden /> +91 8886435558</a></p>
      </section>
    </main>);

}