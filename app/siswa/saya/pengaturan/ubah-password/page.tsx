"use client";

import Link from "next/link";

export default function UbahPassword() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Profil Saya</h2>
      </div>

      {/* Form Profil */}
      <form className="space-y-6 bg-white p-6 rounded-lg shadow">
        {/* Kata Sandi Lama */}
        <div>
          <label
            htmlFor="katasandi-lama"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Kata Sandi Lama
          </label>
          <div className="relative">
            <input
              type="password"
              id="katasandi-lama"
              placeholder="Masukan Katasandi Lama"
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700 pr-10"
            />
          </div>
        </div>

        {/* Kata Sandi Baru */}
        <div>
          <label
            htmlFor="katasandi-baru"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password Baru
          </label>
          <div className="relative">
            <input
              type="password"
              id="katasandi-baru"
              placeholder="Masukan Kata Sandi Baru"
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700 pr-10"
            />
          </div>
        </div>

        {/* Konfirmasi Password */}
        <div>
          <label
            htmlFor="konfirm-katasandi"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Konfirmasi Password Baru
          </label>
          <div className="relative">
            <input
              type="password"
              id="konfirm-katasandi"
              placeholder="Konfirmasi Kata Sandi Baru"
              className="w-full border rounded-lg p-2 bg-gray-100 text-gray-700 pr-10"
            />
          </div>
        </div>

        {/* Lupa Password */}
        <div>
          <Link href="#" className="text-blue-700 text-sm hover:underline">
            Lupa Kata Sandi?
          </Link>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-between">
          <Link
            href="/siswa/saya/pengaturan"
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm"
          >
            Kembali
          </Link>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
          >
            Ubah
          </button>
        </div>
      </form>
    </>
  );
}
