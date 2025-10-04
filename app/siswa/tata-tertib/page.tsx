"use client";

const sections = [
  {
    title: "Pendahuluan",
    items: [
      { label: "Kata Pengantar", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "Visi & Misi", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "Mars SMKN 1 Pusakanagara", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "Yel Yel", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "Contoh Potongan Rambut", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "Contoh Seragam & Atribut", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
    ],
  },
  {
    title: "Tata Tertib & Sanksi",
    items: [
      { label: "BAB I", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "BAB II", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "BAB III", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "BAB IV", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
      { label: "BAB V", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor ipsam dolorem?" },
    ],
  },
];

export default function TataTertibPage() {
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
            <div
              key={i}
              className="flex items-center bg-white p-3 rounded-lg shadow mt-2"
            >
              <div className="ml-3 flex-1">
                <p className="font-medium">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <span className="text-xl text-gray-500 hover:text-black transition">
                <a href="#">
                  <i className="bi bi-chevron-right"></i>
                </a>
              </span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
