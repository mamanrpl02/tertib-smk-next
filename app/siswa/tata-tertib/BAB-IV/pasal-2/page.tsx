"use client";

import Link from "next/link";

type DataTertib = {
  ayat: string;
  poin: string;
};

const dataTataTertib: DataTertib[] = [
  { poin: "2", ayat: "1. Siswa wajib hadir tepat waktu di sekolah." },
  {
    poin: "2",
    ayat: "2. Siswa wajib mengenakan seragam lengkap sesuai ketentuan.",
  },
  {
    poin: "3",
    ayat: "3. Siswa dilarang membawa barang terlarang ke lingkungan sekolah.",
  },
  {
    poin: "3",
    ayat: "4. Siswa wajib menjaga kebersihan dan ketertiban kelas.",
  },
  {
    poin: "3",
    ayat: "5. Siswa wajib mengikuti upacara bendera setiap hari Senin.",
  },
];

export default function TataTertibBABIII() {
  return (
    <>
      <div className="babIII text-center mb-6">
        <h2 className="text-xl font-bold">BAB III</h2>
        <p>SANKSI ANGKA PELANGGARAN</p>
      </div>
      <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden border border-blue-100">
        {/* Header */}
        <div className="px-6 py-4 bg-blue-100 border-b border-blue-200">
          <h2 className="text-lg font-semibold text-gray-800">Pasal 2</h2>
          <p className="text-sm text-gray-600 mt-1">KETERLAMBATAN</p>
        </div>

        {/* Tabel */}
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
              {dataTataTertib.map((row, index) => (
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

        {/* Tombol Kembali */}
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
