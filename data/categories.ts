export type Category = {
  id: string
  name: string
  description: string
  imagePath: string
}

// NOTE: deskripsi di bawah ini DUMMY copy — PRD Open Question #4
// menandai kelima deskripsi kategori sebagai [KONFIRMASI]. Ganti
// dengan copy final dari tim Makloona sebelum production.
export const categories: Category[] = [
  {
    id: 'face-care',
    name: 'Face Care',
    description: '(Dummy) Rangkaian perawatan wajah — dari pembersih hingga serum — diformulasikan sesuai kebutuhan dan target pasar brand Anda.',
    imagePath: '/images/categories/facecare.jpg',
  },
  {
    id: 'body-care',
    name: 'Body Care',
    description: '(Dummy) Produk perawatan tubuh seperti lotion, body wash, dan scrub yang diproduksi dengan standar mutu terjaga.',
    imagePath: '/images/categories/body-care.jpg',
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    description: '(Dummy) Solusi perawatan rambut — sampo, kondisioner, hingga serum — yang dapat disesuaikan dengan konsep brand Anda.',
    imagePath: '/images/categories/hair-care.jpg',
  },
  {
    id: 'collagen',
    name: 'Collagen & Supplement',
    description: '(Dummy) Produk suplemen dan collagen untuk kebutuhan kecantikan dari dalam, mulai dari konsep hingga formula siap edar.',
    imagePath: '/images/categories/collagen.jpg',
  },
  {
    id: 'natural-organic',
    name: 'Natural & Organic Product',
    description: '(Dummy) Lini produk berbahan alami dan organik bagi brand yang ingin mengusung konsep ramah lingkungan dan natural.',
    imagePath: '/images/categories/natural-organic.jpg',
  },
]
