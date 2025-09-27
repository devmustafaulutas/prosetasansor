// type Bucket = { count: number; ts: number };

// const buckets = new Map<string, Bucket>();

// export function rateLimitByIp(ip: string, limit = 5, windowMs = 10 * 60 * 1000) {
//   const now = Date.now();
//   const prev = buckets.get(ip);

//   if (!prev || now - prev.ts > windowMs) {
//     buckets.set(ip, { count: 1, ts: now });
//     return { ok: true, remaining: limit - 1, retryAfter: 0 };
//   }

//   if (prev.count >= limit) {
//     const retryAfter = Math.ceil((prev.ts + windowMs - now) / 1000);
//     return { ok: false, remaining: 0, retryAfter };
//   }

//   prev.count++;
//   return { ok: true, remaining: limit - prev.count, retryAfter: 0 };
// }
