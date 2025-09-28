import { notFound } from "next/navigation";
import Image from "next/image";
import { PageBanner } from "@/components/PageBanner";

interface PageProps { params: { id: string } }

export default async function MemorialDetailPage({ params }: PageProps) {
  const { id } = params;

  let memorial: any | null = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/memorials/${id}`, {
      // Revalidate frequently for now; adjust as needed
      next: { revalidate: 30 },
    });

    if (res.status === 404) return notFound();
    if (!res.ok) throw new Error(await res.text());
    memorial = await res.json();
  } catch (e) {
    // If anything goes wrong fetching/parsing, show 404 for now
    return notFound();
  }

  const dob = memorial?.dateOfBirth ? new Date(memorial.dateOfBirth).toLocaleDateString() : null;
  const dop = memorial?.dateOfPassing ? new Date(memorial.dateOfPassing).toLocaleDateString() : null;
  const created = memorial?.createdAt ? new Date(memorial.createdAt).toLocaleString() : null;

  return (
    <>
      <PageBanner
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/64f06611-28ff-4cfd-81e4-a847777207a4/generated_images/tasteful-still-life-of-glowing-candles-a-c85a9c01-20250926173443.jpg?"
        alt="Memorial details"
      />
      <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>
            {memorial?.title || `Memorial #${id}`}
          </h1>
          {memorial?.personName && (
            <p className="text-sm text-[var(--muted-foreground)]">For: {memorial.personName}</p>
          )}
          {(dob || dop) && (
            <p className="text-xs text-[var(--muted-foreground)]">
              {dob ? `Born: ${dob}` : null}
              {dob && dop ? " • " : null}
              {dop ? `Passed: ${dop}` : null}
            </p>
          )}
          {created && (
            <p className="text-xs text-[var(--muted-foreground)]">Created: {created}</p>
          )}
        </header>

        {memorial?.coverImageUrl ? (
          <div className="relative w-full h-64">
            <Image
              src={memorial.coverImageUrl}
              alt={memorial.personName || memorial.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover rounded-xl border"
              priority={false}
            />
          </div>
        ) : null}

        {memorial?.description ? (
          <section className="rounded-xl border bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>About</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] whitespace-pre-wrap">{memorial.description}</p>
          </section>
        ) : null}

        {/* Placeholder for future messages/timeline */}
        <section className="rounded-xl border bg-[var(--card)] p-6">
          <h2 className="text-lg font-medium">Guest Messages</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Coming soon.</p>
        </section>
      </main>
    </>
  );
}