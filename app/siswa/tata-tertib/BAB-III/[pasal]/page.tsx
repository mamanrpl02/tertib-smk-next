"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Pelanggaran = {
  ayat: string;
  poin: number;
};

type PasalDetail = {
  id: number;
  nama_pasal: string;
  judul: string;
  deskripsi: string;
  pelanggaran: Pelanggaran[];
};

export default function DetailPasal() {
  const params = useParams();
  const pasalParam = params?.pasal as string;

  const [data, setData] = useState<PasalDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPasal() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/pasal/${pasalParam}`
        );

        if (!res.ok) throw new Error("Gagal memuat data");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    if (pasalParam) fetchPasal();
  }, [pasalParam]);

  if (loading)
    return (
      <div className="text-center mt-10 text-gray-600">
        Memuat data pasal...
      </div>
    );

  if (!data)
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

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">BAB III</h2>
        <p>SANKSI ANGKA PELANGGARAN</p>
      </div>

      <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden border border-blue-100">
        <div className="px-6 py-4 bg-blue-100 border-b border-blue-200">
          <h2 className="text-lg font-semibold text-gray-800">
            {data.nama_pasal}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{data.judul}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-blue-50 text-gray-700 text-xs uppercase tracking-wide">
                <th className="px-6 py-3 text-left font-semibold border-b border-blue-200">
                  Ayat :
                </th>
                <th className="px-6 py-3 text-left font-semibold border-b border-blue-200">
                  Poin
                </th>
              </tr>
            </thead>
            <tbody>
              {data.pelanggaran.map((row, i) => (
                <tr
                  key={i}
                  className={`transition ${
                    i % 2 === 0 ? "bg-white" : "bg-blue-50/60"
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
