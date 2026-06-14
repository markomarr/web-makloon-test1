export type FaqItem = {
  id: string
  question: string
  answer: string
}

// STATUS JAWABAN:
// ✅ = jawaban sudah ada dari situs lama
// [KONFIRMASI] = jawaban belum ada, isi dari tim Makloona

export const faq: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Untuk siapa Makloona didesain?', // ✅
    answer:
      'Makloona didesain untuk: Brand Owner Baru yang ingin membuat produk tanpa pusing urusan pabrik, Entrepreneur yang ingin ekspansi ke kategori baru tanpa investasi besar, Perusahaan Existing yang ingin outsourcing lini produk tertentu, dan Influencer/Public Figure yang ingin memiliki produk personal brand.',
  },
  {
    id: 'faq-2',
    question: 'Saya belum punya merek, apakah bisa mulai dari nol di Makloona?', // ✅
    answer:
      'Tentu bisa! Makloona siap mendampingi dari tahap awal hingga brand siap diluncurkan ke pasaran. Kami menyediakan layanan One Stop Makloon Service — mulai dari konsultasi ide produk, pembuatan formula, desain kemasan, perizinan (BPOM & Halal), hingga strategi peluncuran brand.',
  },
  {
    id: 'faq-3',
    question: 'Apakah bisa rebranding dari produk yang sudah ada?', // ✅
    answer:
      'Ya, tentu bisa! Makloona menyediakan layanan rebranding lengkap bagi yang sudah memiliki produk namun ingin memperbarui tampilan, konsep, atau identitas brand. Kami bantu mulai dari penyegaran desain kemasan, pembaruan formula, hingga strategi komunikasi baru.',
  },
  {
    id: 'faq-4',
    question: 'Apakah Makloona bisa bantu pembuatan brand guideline dan packaging mockup?', // ✅
    answer:
      'Tentu bisa! Makloona tidak hanya fokus pada produksi, tetapi juga membantu membangun identitas brand yang kuat dan konsisten. Tim kreatif kami siap membuat brand guideline mencakup logo, warna, tipografi, dan tone komunikasi agar brand punya karakter yang jelas dan profesional.',
  },
  {
    id: 'faq-5',
    question: 'Apa minimum order quantity (MOQ) untuk produksi di Makloona?', // [KONFIRMASI]
    answer: '[KONFIRMASI — isi jawaban dari tim Makloona]',
  },
  {
    id: 'faq-6',
    question: 'Berapa lama proses dari konsep produk sampai siap edar?', // [KONFIRMASI]
    answer: '[KONFIRMASI — isi jawaban dari tim Makloona]',
  },
  {
    id: 'faq-7',
    question: 'Apakah Makloona membantu pengurusan BPOM dan sertifikasi Halal?', // [KONFIRMASI]
    answer: '[KONFIRMASI — isi jawaban dari tim Makloona]',
  },
  {
    id: 'faq-8',
    question: 'Berapa estimasi biaya untuk satu produk?', // [KONFIRMASI]
    answer: '[KONFIRMASI — isi jawaban dari tim Makloona]',
  },
]
