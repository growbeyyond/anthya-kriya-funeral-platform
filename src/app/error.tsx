"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optional: log to your monitoring service
    // console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="min-h-[60vh] mx-auto max-w-2xl px-6 py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold" style={{ color: "var(--primary)" }}>
            Something went wrong
          </h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            An unexpected error occurred. You can try again or return to the homepage.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="inline-flex items-center rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Try again
            </button>
            <a
              href="/"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
            >
              Go home
            </a>
          </div>
          {process.env.NODE_ENV !== "production" && error?.digest && (
            <p className="mt-4 text-xs text-[var(--muted-foreground)]">Error ID: {error.digest}</p>
          )}
        </main>
      </body>
    </html>
  );
}