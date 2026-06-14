export type ProcessStep = {
  stepNumber: number
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Konsultasi Awal',
    description: 'Diskusi konsep produk & kebutuhan produksi.',
  },
  {
    stepNumber: 2,
    title: 'Pemetaan & Seleksi Pabrik',
    description: 'Pencarian mitra makloon yang paling sesuai dengan kebutuhan brand.',
  },
  {
    stepNumber: 3,
    title: 'R&D & Sampling',
    description: 'Pengembangan formula dan pengujian hasil sampel.',
  },
  {
    stepNumber: 4,
    title: 'Produksi & Legalisasi',
    description: 'Eksekusi produksi massal & pengurusan izin resmi (BPOM, Halal, dll).',
  },
  {
    stepNumber: 5,
    title: 'Produk Siap Edar',
    description: 'Serah terima hasil produksi, siap untuk distribusi dan pemasaran.',
  },
]
