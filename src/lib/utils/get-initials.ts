/**
 * First letter of the first and last word, uppercased. A single word gives a
 * single letter; anything with no letters in it gives an empty string.
 */
export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean)

  if (words.length === 0) return ""
  if (words.length === 1) return words[0].charAt(0).toUpperCase()

  const first = words[0].charAt(0)
  const last = words[words.length - 1].charAt(0)

  return `${first}${last}`.toUpperCase()
}
