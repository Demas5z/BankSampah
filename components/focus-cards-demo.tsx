import { FocusCards } from "@/components/ui/focus-cards"

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Penimbangan Sampah",
      src: "/Kegiatan1.jpg",
    },
    {
      title: "Pembuatan Sabun Minyak Jelantah",
      src: "/Kegiatan3.jpg",
    },
    {
      title: "Kupas Tuntas",
      src: "/Kegiatan5.jpg",
    },
    {
      title: "Penimbangan Sampah",
      src: "/Kegiatan2.jpg",
    },
    {
      title: "Pembuatan Ecoenzym dari Kulit Buah bersama anak UNDIP",
      src: "/Kegiatan4.jpg",
    },
    {
      title: "Kupas Tuntas bersama anak UNDIP",
      src: "/Kegiatan6.jpg",
    },
  ]

  return <FocusCards cards={cards} />
}
