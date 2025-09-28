"use client";
import Image from "next/image";
import React from "react";

interface PageBannerProps {
  src: string;
  alt: string;
  heightClass?: string; // e.g., "h-36 sm:h-48 md:h-56"
}

export const PageBanner: React.FC<PageBannerProps> = ({ src, alt, heightClass = "h-36 sm:h-48 md:h-56" }) => {
  return (
    <section className={`relative w-full ${heightClass} overflow-hidden`}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: "grayscale(25%)" }}
        unoptimized
        priority={false}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 20%, color-mix(in oklch, var(--primary) 16%, transparent) 0%, transparent 55%, color-mix(in oklch, var(--primary) 28%, transparent) 100%)",
          mixBlendMode: "multiply",
        }}
      />
    </section>
  );
};