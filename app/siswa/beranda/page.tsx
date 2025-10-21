"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

// ✅ Tambahkan tipe data untuk item informasi
interface Informasi {
  id: number;
  nama: string;
  deskripsi: string;
  status: string;
  foto_informasi: string | null;
  valid_to: string | null;
  created_at: string;
}

export default function BerandaPage() {
  const [informasi, setInformasi] = useState<Informasi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInformasi = async () => {
      try {
        const res = await axios.get("/informasi");
        setInformasi(res.data.data);
      } catch (error) {
        console.error("Gagal memuat informasi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInformasi();
  }, []);

  if (loading) {
    return <p className="text-center py-4 text-gray-500">Memuat data...</p>;
  }

  if (!informasi || informasi.length === 0) {
    return (
      <p className="text-center py-4 text-gray-500">Belum ada informasi.</p>
    );
  }

  return (
    <>
      {informasi.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="flex items-center px-4 py-3 border-b justify-between">
            <div className="flex items-center">
              <img
                src="/fotoDefault.png"
                alt={item.nama}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">Admin</p>
                <p className="text-xs text-gray-500">Informasi Sekolah</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">
                {new Date(item.created_at).toLocaleString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Gambar post */}
          <img
            src={
              item.foto_informasi
                ? `http://localhost:8000/storage/${item.foto_informasi}`
                : "/fotoDefault.png"
            }
            alt={item.nama}
            className="w-full"
          />

          {/* Aksi */}
          <div className="px-4 py-2 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition">
                  <i className="bi bi-heart text-lg"></i>
                  <span className="text-sm">Like</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition">
                  <i className="bi bi-share text-lg"></i>
                  <span className="text-sm">Share</span>
                </button>
              </div>
              <p className="text-sm text-gray-500">0 Likes</p>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="px-4 pb-4">
            <h2 className="font-bold">{item.nama}</h2>
            <p className="text-sm mt-2">{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </>
  );
}
