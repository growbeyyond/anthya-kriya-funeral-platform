"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-xs">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
};