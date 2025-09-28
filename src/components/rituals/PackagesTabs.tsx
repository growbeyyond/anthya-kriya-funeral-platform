"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FAITHS = [
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Jain",
  "Buddhist",
  "Parsi",
] as const;

const content: Record<(typeof FAITHS)[number], { inclusions: string[]; price: string; duration: string; languages: string[] }> = {
  Hindu: {
    inclusions: ["Antyesti coordination", "Priest & samagri", "Cremation slot", "Asthi/Śrāddha guidance"],
    price: "₹7,999+",
    duration: "3–5 hrs",
    languages: ["Sanskrit", "Hindi", "Telugu", "Kannada"],
  },
  Muslim: {
    inclusions: ["Ghusl & Kafan", "Janazah prayer", "Burial logistics", "Community coordination"],
    price: "₹6,999+",
    duration: "2–4 hrs",
    languages: ["Urdu", "Hindi", "English"],
  },
  Christian: {
    inclusions: ["Church coordination", "Liturgy support", "Choir (optional)", "Cremation/Burial scheduling"],
    price: "₹8,499+",
    duration: "3–5 hrs",
    languages: ["English", "Telugu", "Hindi"],
  },
  Sikh: {
    inclusions: ["Paath & Kirtan coordination", "Cremation logistics", "Bhog/Antim Ardas guidance"],
    price: "₹7,499+",
    duration: "3–4 hrs",
    languages: ["Punjabi", "Hindi", "English"],
  },
  Jain: {
    inclusions: ["Shanti Vidhi support", "Cremation logistics", "Certified officiant"],
    price: "₹7,999+",
    duration: "3–4 hrs",
    languages: ["Gujarati", "Hindi", "English"],
  },
  Buddhist: {
    inclusions: ["Monk coordination", "Chanting support", "Cremation/Burial logistics"],
    price: "₹7,499+",
    duration: "2–4 hrs",
    languages: ["Pali", "Sinhala", "English"],
  },
  Parsi: {
    inclusions: ["Doongerwadi coordination (where applicable)", "Ritual materials", "Documentation"],
    price: "₹9,499+",
    duration: "2–4 hrs",
    languages: ["Gujarati", "English", "Hindi"],
  },
};

export const PackagesTabs = () => {
  const [active, setActive] = useState<(typeof FAITHS)[number]>("Hindu");
  const pkg = content[active];

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {FAITHS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={
              "rounded-full border px-3 py-1.5 text-sm transition " +
              (active === f
                ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]"
                : "bg-background hover:bg-muted")
            }
            aria-pressed={active === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="rounded-xl border bg-[var(--card)] p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>
              {active} Ritual Package
            </h3>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              Duration: {pkg.duration} · Starting: {pkg.price}
            </p>
            <ul className="mt-3 list-disc pl-6 text-sm text-[var(--muted-foreground)]">
              {pkg.inclusions.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[var(--muted-foreground)]">
              Languages supported: {pkg.languages.join(", ")}
            </p>
          </div>
          <div className="shrink-0">
            <Button asChild>
              <Link href={`/emergency-booking?type=ritual&faith=${encodeURIComponent(active)}`}>
                Book {active} Ritual
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};