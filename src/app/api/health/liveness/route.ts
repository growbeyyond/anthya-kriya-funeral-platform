export const dynamic = "force-dynamic";

export async function GET() {
  const body = {
    status: "ok",
    type: "liveness",
    service: "anthya-kriya-web",
    timestamp: new Date().toISOString(),
  };

  return Response.json(body, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}