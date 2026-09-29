const MIN_LATENCY_MS = 400;
const MAX_LATENCY_MS = 700;

/**
 * Resolves with `value` after 400–700ms, standing in for a network round
 * trip. Every stub in lib/api goes through this, so latency behaves the same
 * everywhere and a real client can replace it one function at a time.
 */
export function simulate<T>(value: T): Promise<T> {
  const latency =
    MIN_LATENCY_MS + Math.random() * (MAX_LATENCY_MS - MIN_LATENCY_MS);

  return new Promise((resolve) => {
    setTimeout(() => resolve(value), latency);
  });
}
