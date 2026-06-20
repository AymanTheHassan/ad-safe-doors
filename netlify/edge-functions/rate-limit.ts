const WINDOW_MS = 60_000;
const MAX_REQUESTS = 60;

const ipLog = new Map<string, { count: number; reset: number }>();

function cleanup() {
  const now = Date.now();
  for (const [ip, entry] of ipLog) {
    if (now > entry.reset) ipLog.delete(ip);
  }
}

export default async function handler(request: Request) {
  const ip =
    request.headers.get("x-nf-client-connection-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  const now = Date.now();

  if (ipLog.size > 10_000) cleanup();

  let entry = ipLog.get(ip);
  if (!entry || now > entry.reset) {
    entry = { count: 0, reset: now + WINDOW_MS };
    ipLog.set(ip, entry);
  }

  entry.count++;

  if (entry.count > MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.reset - now) / 1000);
    return new Response("Too many requests. Please try again shortly.", {
      status: 429,
      headers: {
        "Retry-After": String(retryAfter),
        "Content-Type": "text/plain",
      },
    });
  }

  return undefined;
}

export const config = { path: "/*" };
