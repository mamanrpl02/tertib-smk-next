"use client";
import Link from "next/link";

const sections = [
  {
    title: "Pendahuluan",
    items: [
      {
        label: "Kata Pengantar",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?",
        link: "/siswa/tata-tertib/kata-pengantar",
      },
      {
        label: "Visi & Misi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?",
        link: "/siswa/tata-tertib/visi-misi",
      },
      {
        label: "Mars SMKN 1 Pusakanagara",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?",
        link: "/siswa/tata-tertib/mars-smkn1pusakanagara",
      },
      {
        label: "Yel Yel",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?",
        link: "/siswa/tata-tertib/yel-yel",
      },
      {
        label: "Contoh Potongan Rambut",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?",
        link: "/siswa/tata-tertib/contoh-potongan-rambut",
      },
      {
        label: "Contoh Seragam & Atribut",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?",
        link: "/siswa/tata-tertib/contoh-seragam-atribut",
      },
    ],
  },
  {
    title: "Tata Tertib & Sanksi",
    items: [
      {
        label: "BAB I",
        desc: "KETENTUAN UMUM",
        link: "/siswa/tata-tertib/BAB-I",
      },
      {
        label: "BAB II",
        desc: "PENILAIAN PELANGGARAN",
        link: "/siswa/tata-tertib/BAB-II",
      },
      {
        label: "BAB III",
        desc: "SANKSI ANGKA PELANGGARAN",
        link: "/siswa/tata-tertib/BAB-III",
      },
      {
        label: "BAB IV",
        desc: "MEKANISME SANKSI",
        link: "/siswa/tata-tertib/BAB-IV",
      },
      {
        label: "BAB V",
        desc: "MEKANISME REMISI",
        link: "/siswa/tata-tertib/BAB-V",
      },
    ],
  },
];

export default function TataTertibBABI() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Tata Tertib Siswa</h2>
      </div>

      {/* Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="bagian">
          <h1 className="font-bold mt-6 mb-4">{section.title}</h1>

          {section.items.map((item, i) => (
            <Link href={item.link} key={i}>
              <div
                key={i}
                className="flex items-center bg-white p-3 rounded-lg shadow mt-2"
              >
                <div className="ml-3 flex-1">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <span className="text-xl text-gray-500 hover:text-black transition">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
