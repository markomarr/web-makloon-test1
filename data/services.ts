// iconName mengacu pada nama komponen dari lucide-react
// Semua icon tersedia di: https://lucide.dev/icons/

export type Service = {
  id: string
  title: string
  description: string
  iconName: string
}

export const services: Service[] = [
  {
    id: 'konsultasi',
    title: 'Konsultasi & Strategi Produk',
    description:
      'Pendampingan awal dalam menentukan jenis produk, positioning, dan perkiraan biaya produksi.',
    iconName: 'MessageCircle',
  },
  {
    id: 'seleksi-pabrik',
    title: 'Pencarian & Seleksi Pabrik Makloon',
    description:
      'Pencocokan kebutuhan brand dengan pabrik yang tepat berdasarkan kategori produk, kapasitas, dan sertifikasi.',
    iconName: 'Building2',
  },
  {
    id: 'formula-sampling',
    title: 'Pendampingan Formula & Sampling',
    description:
      'Koordinasi dengan tim R&D untuk pengembangan formula dan pembuatan sampel produk.',
    iconName: 'FlaskConical',
  },
  {
    id: 'legal-regulatory',
    title: 'Legal & Regulatory Support',
    description:
      'Bantuan pengurusan perizinan BPOM, Halal, HKI, dan dokumen wajib lainnya.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'production-qc',
    title: 'Production & Quality Control',
    description:
      'Pengawasan proses produksi agar hasil sesuai spesifikasi dan standar kualitas.',
    iconName: 'ScanLine',
  },
  {
    id: 'packaging-fulfillment',
    title: 'Packaging & Fulfillment Assistance',
    description:
      'Rekomendasi vendor kemasan, label, hingga kesiapan produk siap jual.',
    iconName: 'Package',
  },
]
