// ============================================================
// DUMMY testimonials — mirrors the future Sanity `testimonial`
// document type (see prd.md §5 / Fitur 7).
//
// ⚠️ GANTI DENGAN TESTIMONI ASLI sebelum production — PRD Open
// Question #2 menetapkan minimum 3 testimoni asli (dengan
// persetujuan klien) sebelum launch, atau section ini di-hide.
// Nama, brand, dan kutipan di bawah ini FIKTIF, dibuat semata
// untuk kebutuhan QA tampilan carousel.
// ============================================================

export type Testimonial = {
  id: string
  quote: string
  clientName: string
  clientBrand?: string
  order: number
  published: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'testi-1',
    quote:
      '(Dummy) Makloona membantu kami menemukan pabrik yang tepat dalam waktu singkat — prosesnya transparan dari awal sampai produk siap edar.',
    clientName: 'Sarah Amalia',
    clientBrand: 'Glowin Skincare',
    order: 1,
    published: true,
  },
  {
    id: 'testi-2',
    quote:
      '(Dummy) Tim Makloona sangat kolaboratif. Setiap progress bisa kami pantau dan masukan kami selalu didengarkan selama tahap R&D.',
    clientName: 'Bagas Wirawan',
    clientBrand: 'Nuvo Personal Care',
    order: 2,
    published: true,
  },
  {
    id: 'testi-3',
    quote:
      '(Dummy) Sebagai brand baru, kami benar-benar terbantu dengan pendampingan dari konsultasi hingga pengurusan BPOM. Prosesnya jadi jauh lebih mudah.',
    clientName: 'Citra Dewanti',
    clientBrand: 'Lumora Beauty',
    order: 3,
    published: true,
  },
  {
    id: 'testi-4',
    quote:
      '(Dummy) Kualitas hasil produksi konsisten dan sesuai standar yang kami harapkan. Komunikasi dengan tim Makloona juga selalu responsif.',
    clientName: 'Reza Pratama',
    clientBrand: 'Arken Grooming',
    order: 4,
    published: true,
  },
]
