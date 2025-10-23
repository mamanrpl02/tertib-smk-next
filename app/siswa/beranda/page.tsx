"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

// 🧱 Tipe data
interface Informasi {
  id: number;
  nama: string;
  deskripsi: string;
  status: string;
  foto_informasi: string | null;
  valid_to: string | null;
  created_at: string;
}

interface LaporanPelanggaran {
  id: number;
  deskripsi: string;
  bukti_pelanggaran: string | null;
  fl_toleransi: boolean;
  status_laporan: string;
  created_at: string;
  pelanggaran?: {
    nama_pelanggaran: string;
  };
}

export default function BerandaPage() {
  const [informasi, setInformasi] = useState<Informasi[]>([]);
  const [laporan, setLaporan] = useState<LaporanPelanggaran[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosting = async () => {
      try {
        const res = await axios.get("/posting");
        setInformasi(res.data.informasi || []);
        setLaporan(res.data.laporan_pelanggaran || []);
      } catch (error) {
        console.error("Gagal memuat posting:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosting();
  }, []);

  if (loading) {
    return <p className="text-center py-4 text-gray-500">Memuat data...</p>;
  }

  if (
    (!informasi || informasi.length === 0) &&
    (!laporan || laporan.length === 0)
  ) {
    return (
      <p className="text-center py-4 text-gray-500">
        Belum ada postingan saat ini.
      </p>
    );
  }

  return (
    <>
      {/* === Informasi Sekolah === */}
      {informasi.map((item) => (
        <div key={`info-${item.id}`} className="bg-white rounded-lg shadow mb-6">
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

          {item.foto_informasi && (
            <img
              src={`http://localhost:8000/storage/${item.foto_informasi}`}
              alt={item.nama}
              className="w-full"
            />
          )}

          <div className="px-4 pb-4">
            <h2 className="font-bold mt-2">{item.nama}</h2>
            <p className="text-sm mt-1">{item.deskripsi}</p>
          </div>
        </div>
      ))}

      {/* === Laporan Pelanggaran === */}
      {laporan.map((lap) => (
        <div
          key={`lap-${lap.id}`}
          className="bg-white rounded-lg shadow mb-6 border border-red-200"
        >
          <div className="flex items-center px-4 py-3 border-b justify-between bg-red-50">
            <div className="flex items-center">
              <img
                src="/warning-icon.png"
                alt="Laporan Pelanggaran"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold text-red-600">
                  {lap.pelanggaran?.nama_pelanggaran || "Pelanggaran"}
                </p>
                <p className="text-xs text-gray-500">Laporan Pelanggaran</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">
                {new Date(lap.created_at).toLocaleString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {lap.bukti_pelanggaran && (
            <img
              src={`http://localhost:8000/storage/${lap.bukti_pelanggaran}`}
              alt="Bukti Pelanggaran"
              className="w-full"
            />
          )}

          <div className="px-4 pb-4">
            <p className="text-sm mt-2">{lap.deskripsi}</p>
            <p className="text-xs text-gray-500 mt-2">
              Status:{" "}
              <span
                className={
                  lap.status_laporan === "approved"
                    ? "text-green-600"
                    : lap.status_laporan === "pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }
              >
                {lap.status_laporan}
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
