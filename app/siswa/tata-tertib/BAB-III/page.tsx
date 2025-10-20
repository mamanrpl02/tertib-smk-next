"use client";
import Link from "next/link";

const sections = [
  {
    title: "Pasal - Pasal",
    items: [
      {
        label: "Pasal 1",
        desc: "KETERLAMBATAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-1",
      },
      {
        label: "Pasal 2",
        desc: "KEHADIRAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-2",
      },
      {
        label: "Pasal 3",
        desc: "PAKAIAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-3",
      },
      {
        label: "Pasal 4",
        desc: "KEPRIBADIAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-4",
      },
      {
        label: "Pasal 5",
        desc: "KETERTIBAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-5",
      },
      {
        label: "Pasal 6",
        desc: "KEBERSIHAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-6",
      },
      {
        label: "Pasal 7",
        desc: "MEROKOK",
        link: "/siswa/tata-tertib/BAB-III/pasal-7",
      },
      {
        label: "Pasal 8",
        desc: "PORNOGRAFI",
        link: "/siswa/tata-tertib/BAB-III/pasal-8",
      },
      {
        label: "Pasal 9",
        desc: "SEJATA TAJAM",
        link: "/siswa/tata-tertib/BAB-III/pasal-9",
      },
      {
        label: "Pasal 10",
        desc: "NARKOBA DAN MINUMAN KERAS",
        link: "/siswa/tata-tertib/BAB-III/pasal-10",
      },
      {
        label: "Pasal 11",
        desc: "TAWURAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-11",
      },
      {
        label: "Pasal 12",
        desc: "INTIMIDASI / ANCAMAN DAN KEKERANSAN",
        link: "/siswa/tata-tertib/BAB-III/pasal-12",
      },
      {
        label: "Pasal 13",
        desc: "PERBUATAN ASUSILA",
        link: "/siswa/tata-tertib/BAB-III/pasal-13",
      },
      {
        label: "Pasal 14",
        desc: "TEKNOLOGI INFORMASI ",
        link: "/siswa/tata-tertib/BAB-III/pasal-14",
      },
    ],
  },
];

export default function TataTertibBABIII() {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">BAB III</h2>
        <p>SANKSI ANGKA PELANGGARAN</p>
      </div>

      {/* Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="bagian">
          <h1 className="font-medium mt-6 mb-4">{section.title}</h1>

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
