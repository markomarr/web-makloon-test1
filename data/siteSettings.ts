// ============================================================
// DUMMY siteSettings — mirrors the future Sanity `siteSettings`
// singleton (see prd.md §5) so this can be swapped for a live
// GROQ fetch without touching any component.
//
// Values below are PLACEHOLDERS pending business confirmation:
//   - whatsappNumber / whatsappDefaultMessage → PRD Open Question #5
//     (number reused from brand/brand-guide.md "Kontak" table —
//     confirm it is still active before launch)
//   - contactEmail / contactPhone / address / socials → PRD Open Question #6
// ============================================================

export const siteSettings = {
  whatsappNumber: '6282146121397', // [KONFIRMASI] — verifikasi nomor masih aktif
  whatsappDefaultMessage:
    'Halo Makloona, saya tertarik untuk berdiskusi mengenai produksi produk saya. Bisa dibantu?', // [KONFIRMASI]
  contactEmail: 'makloona@darinari.co.id', // [KONFIRMASI]
  contactPhone: '+62 821 4612 1397', // [KONFIRMASI]
  address: 'Jakarta, Indonesia', // [KONFIRMASI — alamat lengkap menyusul dari tim Makloona]
  socialFacebook: 'https://facebook.com/makloona.id',
  socialInstagram: 'https://instagram.com/makloona.id',
  socialTiktok: 'https://tiktok.com/@makloona.id',
  showTestimonials: true,
}
