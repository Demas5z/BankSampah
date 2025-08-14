import { FocusCards } from "@/components/ui/focus-cards"

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Sosialisasi Lingkungan",
      src: "/Kegiatan1.jpg",
    },
    {
      title: "Kerajinan dari Limbah",
      src: "/Kegiatan2.jpg",
    },
    {
      title: "Gerebek Sampah",
      src: "/Kegiatan3.jpg",
    },
    {
      title: "Program Lingkungan",
      src: "/Program1.jpg",
    },
    {
      title: "Pengelolaan Sampah",
      src: "/Program2.jpg",
    },
    {
      title: "Kegiatan Komunitas",
      src: "/Program3.jpg",
    },
  ]

  return <FocusCards cards={cards} />
}
