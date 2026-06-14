/**
 * Builds a `wa.me` deep link with a pre-filled, URL-encoded message.
 * `phoneNumber` must be in international format without `+` (e.g. "6282146121397").
 */
export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
