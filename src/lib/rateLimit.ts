const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const item = hits.get(ip);

  if (!item || item.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (item.count >= limit) return { ok: false };

  item.count += 1;
  hits.set(ip, item);
  return { ok: true };
}
