"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

type DataTertib = {
  ayat: string;
  poin: string;
};

// Semua data pasal
const dataPerPasal: Record<
  string,
  { title: string; desc: string; data: DataTertib[] }
> = {
  "pasal-1": {
    title: "Pasal 1",
    desc: "KETERLAMBATAN",
    data: [
      {
        ayat: "1. Siswa yang datang terlambat dikenakan sanksi sesuai peraturan.",
        poin: "2",
      },
      {
        ayat: "2. Keterlambatan lebih dari 3 kali akan dipanggil orang tua.",
        poin: "3",
      },
    ],
  },
  "pasal-2": {
    title: "Pasal 2",
    desc: "KEHADIRAN",
    data: [
      { ayat: "1. Siswa wajib hadir tepat waktu di sekolah.", poin: "2" },
      { ayat: "2. Siswa wajib mengikuti seluruh pelajaran.", poin: "2" },
      { ayat: "3. Tanpa keterangan dianggap alpa.", poin: "3" },
    ],
  },
  "pasal-3": {
    title: "Pasal 3",
    desc: "PAKAIAN",
    data: [
      {
        ayat: "1. Siswa wajib mengenakan seragam lengkap sesuai ketentuan.",
        poin: "2",
      },
      {
        ayat: "2. Dilarang memakai atribut selain yang ditentukan sekolah.",
        poin: "3",
      },
    ],
  },
  "pasal-4": {
    title: "Pasal 4",
    desc: "KEPRIBADIAN",
    data: [
      {
        ayat: "1. Siswa wajib berperilaku sopan terhadap guru dan teman.",
        poin: "2",
      },
      { ayat: "2. Siswa dilarang berkata kasar atau menghina.", poin: "3" },
    ],
  },
  "pasal-5": {
    title: "Pasal 5",
    desc: "KETERTIBAN",
    data: [
      { ayat: "1. Siswa wajib menjaga ketertiban di dalam kelas.", poin: "2" },
      {
        ayat: "2. Tidak boleh membuat keributan selama pelajaran berlangsung.",
        poin: "3",
      },
    ],
  },
  "pasal-6": {
    title: "Pasal 6",
    desc: "KEBERSIHAN",
    data: [
      { ayat: "1. Siswa wajib menjaga kebersihan ruang kelas.", poin: "2" },
      { ayat: "2. Membuang sampah pada tempatnya.", poin: "1" },
    ],
  },
  "pasal-7": {
    title: "Pasal 7",
    desc: "MEROKOK",
    data: [
      { ayat: "1. Siswa dilarang merokok di lingkungan sekolah.", poin: "5" },
      {
        ayat: "2. Barang bukti rokok akan disita oleh pihak sekolah.",
        poin: "3",
      },
    ],
  },
  "pasal-8": {
    title: "Pasal 8",
    desc: "PORNOGRAFI",
    data: [
      {
        ayat: "1. Siswa dilarang membawa atau menyebarkan konten pornografi.",
        poin: "10",
      },
      {
        ayat: "2. Siswa dilarang membuka situs yang mengandung unsur pornografi.",
        poin: "8",
      },
    ],
  },
  "pasal-9": {
    title: "Pasal 9",
    desc: "SENJATA TAJAM",
    data: [
      {
        ayat: "1. Siswa dilarang membawa senjata tajam ke sekolah.",
        poin: "10",
      },
      {
        ayat: "2. Pelanggaran akan dilaporkan ke pihak berwenang.",
        poin: "10",
      },
    ],
  },
  "pasal-10": {
    title: "Pasal 10",
    desc: "NARKOBA DAN MINUMAN KERAS",
    data: [
      {
        ayat: "1. Siswa dilarang membawa atau mengonsumsi narkoba.",
        poin: "20",
      },
      { ayat: "2. Siswa dilarang membawa minuman keras.", poin: "20" },
    ],
  },
  "pasal-11": {
    title: "Pasal 11",
    desc: "TAWURAN",
    data: [
      {
        ayat: "1. Siswa dilarang ikut serta dalam kegiatan tawuran.",
        poin: "15",
      },
      {
        ayat: "2. Siswa wajib menjaga nama baik sekolah di luar lingkungan sekolah.",
        poin: "5",
      },
    ],
  },
  "pasal-12": {
    title: "Pasal 12",
    desc: "INTIMIDASI / ANCAMAN DAN KEKERASAN",
    data: [
      {
        ayat: "1. Siswa dilarang melakukan intimidasi terhadap teman atau guru.",
        poin: "10",
      },
      {
        ayat: "2. Siswa dilarang melakukan tindakan kekerasan fisik maupun verbal.",
        poin: "15",
      },
    ],
  },
  "pasal-13": {
    title: "Pasal 13",
    desc: "PERBUATAN ASUSILA",
    data: [
      {
        ayat: "1. Siswa dilarang melakukan tindakan asusila di lingkungan sekolah.",
        poin: "20",
      },
      {
        ayat: "2. Pelanggar akan diberi sanksi berat dan pembinaan khusus.",
        poin: "15",
      },
    ],
  },
  "pasal-14": {
    title: "Pasal 14",
    desc: "TEKNOLOGI INFORMASI",
    data: [
      {
        ayat: "1. Siswa dilarang menyebarkan informasi hoax di media sosial.",
        poin: "5",
      },
      {
        ayat: "2. Siswa wajib menggunakan teknologi secara positif.",
        poin: "2",
      },
    ],
  },
};

export default function DetailPasal() {
  const params = useParams();
  const pasal = params?.pasal as string;
  const pasalData = dataPerPasal[pasal];

  // Jika pasal tidak ditemukan
  if (!pasalData) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-lg font-semibold text-gray-700">
          Pasal tidak ditemukan.
        </h2>
        <Link
          href="/siswa/tata-tertib/BAB-III"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          ← Kembali
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">BAB III</h2>
        <p>SANKSI ANGKA PELANGGARAN</p>
      </div>

      <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden border border-blue-100">
        <div className="px-6 py-4 bg-blue-100 border-b border-blue-200">
          <h2 className="text-lg font-semibold text-gray-800">
            {pasalData.title}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{pasalData.desc}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-blue-50 text-gray-700 text-xs uppercase tracking-wide">
                <th className="px-6 py-3 text-left font-semibold border-b border-blue-200">
                  Ayat
                </th>
                <th className="px-6 py-3 text-left font-semibold border-b border-blue-200">
                  Poin
                </th>
              </tr>
            </thead>
            <tbody>
              {pasalData.data.map((row, index) => (
                <tr
                  key={index}
                  className={`transition ${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50/60"
                  } hover:bg-blue-100/60`}
                >
                  <td className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100">
                    {row.ayat}
                  </td>
                  <td className="px-6 py-3 font-semibold text-blue-700 border-b border-gray-100">
                    {row.poin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end px-6 py-4 bg-blue-50 border-t border-blue-100">
          <Link
            href="/siswa/tata-tertib/BAB-III"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            ← Kembali
          </Link>
        </div>
      </div>
    </>
  );
}
