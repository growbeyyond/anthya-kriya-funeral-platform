"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type BookingDraft = {
  contact?: {
    name: string;
    phone: string;
    relation?: string;
  };
  deceased?: {
    name: string;
    age?: string;
    faith?: string;
  };
  location?: {
    addressLine1: string;
    addressLine2?: string;
    city?: string;
    pincode?: string;
  };
  package?: {
    type?: string;
    notes?: string;
  };
};

const DRAFT_KEY = "emergency_booking_draft";

export function useLocalDraft<T extends object = BookingDraft>(initial: T) {
  const [draft, setDraft] = useState<T>(initial);
  const hydrated = useRef(false);

  // hydrate once from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setDraft((d) => ({ ...(d as any), ...(parsed as any) }));
      }
    } catch {}
    hydrated.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist on change (debounced)
  const timeout = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!hydrated.current) return;
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      } catch {}
    }, 300);
    return () => window.clearTimeout(timeout.current);
  }, [draft]);

  const reset = useCallback(() => {
    setDraft(initial);
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {}
  }, [initial]);

  return useMemo(() => ({ draft, setDraft, reset }), [draft, reset]);
}