"use client";
import { useEffect, useRef, useState } from "react";

const SEED = [
  {
    name: "Ravi K.",
    text:
      "Compassionate and organized. They handled everything with dignity when we were overwhelmed.",
  },
  {
    name: "Fatima S.",
    text:
      "They understood our traditions and coordinated the Janazah seamlessly.",
  },
  {
    name: "Anita D.",
    text:
      "Clear guidance, punctual team, and respectful officiants. Thank you.",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SEED.length);
    }, 6000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + SEED.length) % SEED.length);
  const next = () => setIndex((i) => (i + 1) % SEED.length);

  const item = SEED[index];

  return (
    <section
      className="mx-auto max-w-6xl px-6 py-8 border-t border-[var(--border)]"
      aria-label="Testimonials"
    >
      <div
        className="rounded-xl border bg-[var(--card)] p-6 sm:p-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)]">
              “{item.text}”
            </p>
            <p className="text-sm font-medium" style={{ color: "var(--primary)" }}>
              — {item.name}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <button
              aria-label="Previous testimonial"
              className="h-8 w-8 rounded-full border bg-background hover:bg-muted transition"
              onClick={prev}
            >
              ‹
            </button>
            <button
              aria-label="Next testimonial"
              className="h-8 w-8 rounded-full border bg-background hover:bg-muted transition"
              onClick={next}
            >
              ›
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {SEED.map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={
                "h-1.5 w-1.5 rounded-full " +
                (i === index ? "bg-[var(--primary)]" : "bg-[var(--border)]")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};