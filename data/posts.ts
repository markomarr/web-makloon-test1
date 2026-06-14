// ============================================================
// DUMMY blog posts — mirrors the future Sanity `post` document
// type (see prd.md §5 / Fitur 8). `body` is modeled as a small
// typed block union that maps 1:1 onto Portable Text block
// kinds (paragraph, heading, image, list, blockquote, code,
// inline link) — so swapping in `@portabletext/react` later is
// a drop-in replacement for `PostBody`.
//
// ⚠️ Semua judul, isi, dan penulis di bawah ini DUMMY — PRD Open
// Question #10 meminta minimal 3–5 artikel asli siap publish
// saat launch. "Kategori" blog sengaja TIDAK disertakan di sini
// (PRD Open Question #11 — taksonomi lama "Healthcare" tidak
// relevan dan kategori baru belum ditentukan).
// ============================================================

export type ContentBlock =
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; style: 'bullet' | 'number'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'code'; code: string; language?: string }

export type PostAuthor = {
  name: string
  bio: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  coverImage: { src: string; alt: string }
  author: PostAuthor
  publishedAt: string
  published: boolean
  seoTitle?: string
  seoDescription?: string
  body: ContentBlock[]
}

const tim: PostAuthor = {
  name: 'Tim Makloona',
  bio: 'Redaksi Makloona — berbagi insight seputar manufaktur, branding, dan regulasi produk.',
}

const dina: PostAuthor = {
  name: 'Dina Kusuma',
  bio: 'Content writer yang fokus pada topik industri kecantikan dan personal care di Indonesia.',
}

export const posts: Post[] = [
  {
    slug: 'apa-itu-maklon-dan-kenapa-brand-owner-perlu-paham',
    title: 'Apa Itu Maklon dan Mengapa Brand Owner Perlu Memahaminya?',
    excerpt:
      '(Dummy) Maklon menjadi jalan pintas favorit brand owner untuk memproduksi tanpa membangun pabrik sendiri. Berikut yang perlu Anda ketahui sebelum memulai.',
    coverImage: { src: '/images/sections/production-lab.png', alt: 'Proses pengujian kualitas produk di laboratorium produksi' },
    author: tim,
    publishedAt: '2026-05-12T03:00:00.000Z',
    published: true,
    seoDescription:
      '(Dummy) Kenali konsep maklon (contract manufacturing), keuntungannya bagi brand owner, dan hal-hal yang wajib dipersiapkan sebelum bekerja sama dengan pabrik.',
    body: [
      {
        type: 'paragraph',
        text:
          '(Dummy) Bagi banyak calon pemilik brand, mendirikan pabrik sendiri adalah investasi besar yang penuh risiko. Di sinilah konsep maklon — atau contract manufacturing — menjadi solusi: Anda menitipkan produksi pada pabrik yang sudah punya fasilitas, izin, dan tim ahli, sementara Anda fokus membangun merek.',
      },
      { type: 'heading', level: 2, text: 'Bagaimana cara kerjanya?' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Secara sederhana, brand owner membawa konsep produk — mulai dari kategori, target pasar, hingga gambaran formula — lalu pabrik maklon membantu mewujudkannya menjadi produk jadi yang siap dipasarkan, lengkap dengan kemasan dan legalitas.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          '(Dummy) Konsultasi konsep & positioning produk',
          '(Dummy) Pengembangan formula dan sampel (R&D)',
          '(Dummy) Produksi massal sesuai standar mutu',
          '(Dummy) Pengurusan legalitas seperti BPOM dan Halal',
        ],
      },
      {
        type: 'blockquote',
        text:
          '(Dummy) "Bagi brand baru, memahami alur maklon sejak awal akan menghemat waktu, biaya, dan menghindari kesalahan yang sering terjadi di tahap produksi pertama." — Tim Makloona',
      },
      {
        type: 'paragraph',
        text:
          '(Dummy) Pelajari lebih lanjut tentang [layanan pendampingan produksi kami](/#layanan) atau hubungi tim kami untuk konsultasi awal yang tidak mengikat.',
      },
    ],
  },
  {
    slug: 'lima-hal-disiapkan-sebelum-produksi-skincare',
    title: '5 Hal yang Perlu Disiapkan Sebelum Memulai Produksi Skincare',
    excerpt:
      '(Dummy) Sebelum menghubungi pabrik maklon, ada beberapa hal mendasar yang sebaiknya sudah Anda pikirkan agar proses produksi berjalan lebih lancar.',
    coverImage: { src: '/images/sections/skincare-cream.jpg', alt: 'Tekstur krim skincare dengan bunga kamboja sebagai elemen pendukung' },
    author: dina,
    publishedAt: '2026-05-02T03:00:00.000Z',
    published: true,
    body: [
      {
        type: 'paragraph',
        text:
          '(Dummy) Banyak brand owner pemula yang langsung "loncat" ke tahap produksi tanpa menyiapkan fondasi yang jelas. Padahal, lima hal berikut akan sangat membantu mempercepat dan merapikan keseluruhan proses.',
      },
      { type: 'heading', level: 2, text: '1. Kejelasan kategori & target pasar' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Tentukan dahulu kategori produk — misalnya face care, body care, hair care, atau suplemen — beserta segmen pasar yang ingin Anda sasar. Ini akan memengaruhi pemilihan pabrik dan formula.',
      },
      { type: 'heading', level: 2, text: '2. Gambaran formula atau benchmark produk' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Anda tidak harus menjadi ahli kimia. Cukup siapkan referensi produk yang Anda sukai sebagai titik awal diskusi dengan tim R&D pabrik.',
      },
      { type: 'heading', level: 2, text: '3. Estimasi anggaran & skala produksi' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Mengetahui kisaran anggaran dan target jumlah produksi akan membantu tim maklon merekomendasikan opsi yang realistis bagi bisnis Anda.',
      },
      { type: 'heading', level: 2, text: '4. Identitas brand awal' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Nama brand, nuansa visual, hingga value yang ingin disampaikan — meskipun belum final, gambaran ini membantu proses desain kemasan berjalan lebih cepat.',
      },
      { type: 'heading', level: 2, text: '5. Linimasa peluncuran' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Tentukan target waktu peluncuran agar tim produksi dapat menyusun jadwal R&D, produksi, dan legalitas secara realistis.',
      },
    ],
  },
  {
    slug: 'panduan-singkat-pengurusan-bpom-produk-kosmetik',
    title: 'Panduan Singkat: Memahami Alur Pengurusan BPOM untuk Produk Kosmetik',
    excerpt:
      '(Dummy) Legalitas adalah salah satu tahap paling krusial sebelum produk bisa beredar. Berikut gambaran umum alur notifikasi BPOM yang perlu Anda pahami.',
    coverImage: { src: '/images/sections/formula-research.jpg', alt: 'Sampel formula kosmetik sedang diteliti di laboratorium' },
    author: tim,
    publishedAt: '2026-04-18T03:00:00.000Z',
    published: true,
    body: [
      {
        type: 'paragraph',
        text:
          '(Dummy) Setiap produk kosmetik yang beredar di Indonesia wajib memiliki nomor notifikasi dari BPOM. Proses ini memastikan produk aman digunakan dan telah memenuhi standar yang berlaku.',
      },
      { type: 'heading', level: 2, text: 'Tahapan umum yang perlu dilalui' },
      {
        type: 'list',
        style: 'number',
        items: [
          '(Dummy) Penyiapan dokumen formula dan data pendukung produk',
          '(Dummy) Pengujian produk di laboratorium yang terakreditasi',
          '(Dummy) Pengajuan notifikasi melalui sistem resmi BPOM',
          '(Dummy) Proses verifikasi dan penerbitan nomor notifikasi',
        ],
      },
      {
        type: 'paragraph',
        text:
          '(Dummy) Durasi setiap tahap dapat bervariasi tergantung kelengkapan dokumen dan kategori produk. Mendampingi proses ini sejak awal akan membantu menghindari revisi berulang.',
      },
      {
        type: 'code',
        language: 'text',
        code: 'Contoh format nomor notifikasi BPOM kosmetik:\nNA18XXXXXXXXXX',
      },
      {
        type: 'paragraph',
        text:
          '(Dummy) Tim legal & regulatory kami terbiasa mendampingi brand owner dari penyusunan dokumen hingga produk dinyatakan lolos notifikasi.',
      },
    ],
  },
  {
    slug: 'tips-memilih-pabrik-maklon-yang-tepat',
    title: 'Tips Memilih Pabrik Maklon yang Tepat untuk Brand Anda',
    excerpt:
      '(Dummy) Tidak semua pabrik maklon cocok untuk semua jenis brand. Simak beberapa pertimbangan penting sebelum menentukan mitra produksi.',
    coverImage: { src: '/images/sections/collagen-drink.jpg', alt: 'Produk minuman collagen siap konsumsi di atas meja produksi' },
    author: dina,
    publishedAt: '2026-04-05T03:00:00.000Z',
    published: true,
    body: [
      {
        type: 'paragraph',
        text:
          '(Dummy) Memilih mitra produksi bukan sekadar soal harga termurah. Ada beberapa faktor yang sebaiknya Anda pertimbangkan agar kerja sama berjalan baik dalam jangka panjang.',
      },
      { type: 'heading', level: 3, text: 'Sertifikasi dan kepatuhan standar' },
      {
        type: 'paragraph',
        text: '(Dummy) Pastikan pabrik memiliki sertifikasi seperti CPKB/GMP yang relevan dengan kategori produk Anda.',
      },
      { type: 'heading', level: 3, text: 'Pengalaman di kategori produk yang sama' },
      {
        type: 'paragraph',
        text: '(Dummy) Pabrik dengan portofolio di kategori serupa biasanya lebih memahami tantangan formula dan tren di pasar Anda.',
      },
      { type: 'heading', level: 3, text: 'Transparansi proses dan komunikasi' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Kemampuan pabrik untuk memberi update progres secara berkala adalah indikator penting dari profesionalisme kerja sama.',
      },
      {
        type: 'blockquote',
        text:
          '(Dummy) "Kecocokan jangka panjang sering kali lebih penting daripada harga termurah di awal." — Tim Makloona',
      },
    ],
  },
  {
    slug: 'dari-konsep-ke-rak-toko-memahami-timeline-produksi',
    title: 'Dari Konsep ke Rak Toko: Memahami Linimasa Produksi Kosmetik',
    excerpt:
      '(Dummy) Berapa lama sebenarnya proses dari ide produk hingga siap dijual? Berikut gambaran umum tahapan dan estimasi waktunya.',
    coverImage: { src: '/images/sections/collagen-products.png', alt: 'Jajaran produk collagen hasil produksi siap edar' },
    author: tim,
    publishedAt: '2026-03-22T03:00:00.000Z',
    published: true,
    body: [
      {
        type: 'paragraph',
        text:
          '(Dummy) Salah satu pertanyaan yang paling sering diajukan brand owner baru adalah: "Berapa lama sampai produk saya bisa dijual?" Jawabannya bergantung pada beberapa tahapan berikut.',
      },
      { type: 'heading', level: 2, text: 'Tahap 1 — Konsultasi & pemetaan pabrik' },
      { type: 'paragraph', text: '(Dummy) Diskusi awal untuk memahami kebutuhan brand dan mencocokkannya dengan mitra produksi yang sesuai.' },
      { type: 'heading', level: 2, text: 'Tahap 2 — R&D dan sampling' },
      { type: 'paragraph', text: '(Dummy) Tahap pengembangan formula dan pembuatan sampel — biasanya melalui beberapa kali revisi sebelum disetujui.' },
      { type: 'heading', level: 2, text: 'Tahap 3 — Produksi dan legalisasi' },
      { type: 'paragraph', text: '(Dummy) Produksi massal berjalan beriringan dengan pengurusan izin edar seperti BPOM dan Halal.' },
      { type: 'heading', level: 2, text: 'Tahap 4 — Produk siap edar' },
      {
        type: 'paragraph',
        text:
          '(Dummy) Produk yang telah lolos quality control dan memiliki izin resmi siap untuk didistribusikan dan dipasarkan ke pelanggan Anda.',
      },
      {
        type: 'image',
        src: '/images/sections/products-collection.png',
        alt: 'Jajaran produk skincare hasil produksi yang siap dipasarkan',
        caption: '(Dummy) Ilustrasi — lineup produk hasil kolaborasi produksi.',
      },
    ],
  },
]
