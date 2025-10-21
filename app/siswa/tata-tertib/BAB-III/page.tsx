"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Link from "next/link";

export default function TataTertibBABIII() {
  const [pasals, setPasals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/pasal") // ✅ ubah dari /pasals ke /pasal
      .then((res) => {
        setPasals(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal mengambil data pasal:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Memuat data pasal...</p>;
  }

  return (
    <>
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">BAB III</h2>
        <p>SANKSI ANGKA PELANGGARAN</p>
      </div>

      <div className="bagian">
        <h1 className="font-medium mt-6 mb-4">Pasal - Pasal</h1>

        {pasals.map((item: any, i: number) => {
          // ✅ buat slug otomatis dari nama_pasal (contoh: "Pasal 1" → "pasal-1")
          const slug = item.nama_pasal.toLowerCase().replace(" ", "-");

          return (
            <Link
              key={i}
              href={`/siswa/tata-tertib/BAB-III/${slug}`} // ✅ arahkan ke slug
            >
              <div className="flex items-center bg-white p-3 rounded-lg shadow mt-2 hover:bg-gray-50 transition">
                <div className="ml-3 flex-1">
                  <p className="font-medium">{item.nama_pasal}</p>
                  <p className="text-sm text-gray-500">
                    {item.judul || "Tanpa Judul"}
                  </p>
                </div>
                <span className="text-xl text-gray-400 hover:text-black transition">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
