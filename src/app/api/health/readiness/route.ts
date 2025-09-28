export const dynamic = "force-dynamic";

export async function GET() {
  const uptimeMs = Math.floor(process.uptime() * 1000);
  const body = {
    status: "ok",
    type: "readiness",
    service: "anthya-kriya-web",
    ready: true,
    uptimeMs,
    timestamp: new Date().toISOString(),
  };

  return Response.json(body, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}