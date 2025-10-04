"use client";

import Link from "next/link";
import { CameraFill, PencilSquare } from "react-bootstrap-icons";

export default function ProfilPage() {
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
      <form className="space-y-6 bg-white p-6 rounded-lg shadow text-center">
        {/* Foto Profil */}
        <div className="relative w-28 h-28 mx-auto">
          <img
            src="/maman.jpg"
            alt="Foto Profil"
            className="w-28 h-28 rounded-full object-cover border"
          />
          {/* Tombol ubah foto */}
          <label
            htmlFor="fotoProfil"
            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow cursor-pointer hover:bg-blue-700 transition"
          >
            <CameraFill className="text-sm" />
            <input type="file" id="fotoProfil" className="hidden" />
          </label>
        </div>

        {/* Nama */}
        <div className="text-left">
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama"
            value="Maman RPL"
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="text-left">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value="maman@example.com"
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Jenis Kelamin */}
        <div className="text-left">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Jenis Kelamin
          </label>
          <input
            type="text"
            id="gender"
            value="Laki-laki"
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Wali Kelas */}
        <div className="text-left">
          <label
            htmlFor="walikelas"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Wali Kelas
          </label>
          <input
            type="text"
            id="walikelas"
            value="Bu Siti"
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Kelas & Jurusan */}
        <div className="flex gap-4 text-left">
          <div className="flex-1">
            <label
              htmlFor="kelas"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Kelas
            </label>
            <input
              type="text"
              id="kelas"
              value="XII RPL B"
              readOnly
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="jurusan"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Jurusan
            </label>
            <input
              type="text"
              id="jurusan"
              value="Rekayasa Perangkat Lunak"
              readOnly
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700"
            />
          </div>
        </div>

        {/* Password */}
        <div className="text-left">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
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
          Perubahan mengenai data diatas yang tidak bisa diubah silahkan hubungi wali kelas
        </p>

        {/* Tombol */}
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
