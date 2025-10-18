"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  CameraFill,
  PencilSquare,
  CheckCircleFill,
} from "react-bootstrap-icons";

export default function ProfilPage() {
  const [siswa, setSiswa] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [popup, setPopup] = useState(false); // ✅ state untuk popup sukses

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:8000/api/siswa/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Gagal mengambil data siswa");
        const data = await res.json();

        setSiswa({
          ...data,
          foto:
            data.foto && data.foto.startsWith("http")
              ? data.foto  
              : data.foto
              ? `http://localhost:8000/storage/${data.foto}`
              : null,
        });
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Fungsi upload foto tanpa tombol submit
  const handleFotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    const formData = new FormData();
    formData.append("foto", file);

    setUploading(true);

    try {
      const res = await fetch("http://localhost:8000/api/siswa/update-foto", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setSiswa((prev: any) => ({ ...prev, foto: data.foto }));
        Swal.fire({
          title: "Foto berhasil diperbarui! 🎉",
          text: "Jangan bosen bosen yah untuk laporin temen yang bandel",
          icon: "success",
          confirmButtonText: "Oke",
          confirmButtonColor: "#2563eb", // biru Tailwind
          background: "#ffffff",
          color: "#1f2937",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInDown
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutUp
          `,
          },
        }).then(() => {
          // window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Gagal!",
          text: data.message || "Terjadi kesalahan.",
          icon: "error",
          confirmButtonText: "Coba Lagi",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Tidak dapat terhubung ke server.",
        icon: "error",
        confirmButtonText: "Tutup",
      });
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Memuat data profil...
      </div>
    );
  }

  if (!siswa) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Gagal memuat data siswa.
      </div>
    );
  }

  return (
    <main
      className="flex-1 overflow-y-auto p-6 space-y-4 relative pb-48"
      id="mainContent"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Profil Saya</h2>
      </div>

      {/* Form Profil */}
      <form className="space-y-6 bg-white p-6 rounded-lg shadow text-center relative">
        {/* Foto Profil */}
        <div className="relative w-28 h-28 mx-auto">
          <img
            src={siswa.foto || ""}
            alt="Foto Profil"
            className={`w-28 h-28 rounded-full object-cover border ${
              uploading ? "opacity-50" : ""
            }`}
          />
          <label
            htmlFor="fotoProfil"
            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow cursor-pointer hover:bg-blue-700 transition"
          >
            {uploading ? (
              <span className="text-xs animate-pulse">...</span>
            ) : (
              <CameraFill className="text-sm" />
            )}
            <input
              type="file"
              id="fotoProfil"
              className="hidden"
              onChange={handleFotoChange}
            />
          </label>
        </div>

        {/* Nama Lengkap */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={siswa.nama || "-"}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={siswa.email || "-"}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Jenis Kelamin */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jenis Kelamin
          </label>
          <input
            type="text"
            value={siswa.jenis_kelamin || "Belum diisi"}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Kelas & Jurusan */}
        <div className="flex gap-4 text-left">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kelas
            </label>
            <input
              type="text"
              value={siswa.kelas ?? "-"}
              readOnly
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jurusan
            </label>
            <input
              type="text"
              value={siswa.jurusan ?? "-"}
              readOnly
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
            />
          </div>
        </div>

        {/* Wali Kelas */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Wali Kelas
          </label>
          <input
            type="text"
            value={siswa.wali_kelas ?? "-"}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Password */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              value="********"
              readOnly
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700 pr-10"
            />
            <Link
              href="/siswa/saya/pengaturan/ubah-password"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600 hover:text-blue-800"
            >
              <PencilSquare className="text-lg" />
            </Link>
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center">
          Perubahan data di atas yang tidak bisa diubah silakan hubungi wali
          kelas.
        </p>

        <div className="flex justify-end">
          <Link
            href="/siswa/saya"
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm"
          >
            Kembali
          </Link>
        </div>
      </form>
    </main>
  );
}
