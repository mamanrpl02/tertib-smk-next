"use client";
import { FileEarmarkText, ChevronRight } from "react-bootstrap-icons";
import Link from "next/link"; 

export default function ProfilPage() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Profil Saya</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Poin Positif */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <i className="bi bi-hand-thumbs-up text-2xl text-green-500"></i>
          <p className="mt-2 font-semibold text-lg">50</p>
          <p className="text-sm text-gray-500">Poin Positif</p>
        </div>

        {/* Poin Negatif */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <i className="bi bi-hand-thumbs-down text-2xl text-red-500"></i>
          <p className="mt-2 font-semibold text-lg">30</p>
          <p className="text-sm text-gray-500">Poin Negatif</p>
        </div>

        {/* Sisa Toleransi */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <i className="bi bi-shield-check text-2xl text-yellow-500"></i>
          <p className="mt-2 font-semibold text-lg">20</p>
          <p className="text-sm text-gray-500">Sisa Toleransi</p>
        </div>

        {/* Jumlah Laporan */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <i className="bi bi-file-earmark-text text-2xl text-blue-500"></i>
          <p className="mt-2 font-semibold text-lg">5</p>
          <p className="text-sm text-gray-500">Jumlah Laporan</p>
        </div>
      </div>

      {/* Menu Bawah */}
      <div className="mt-6 space-y-3">
        {/* Laporkan Siswa */}
        <Link
          href="/siswa/saya/laporkan"
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <FileEarmarkText className="text-xl text-blue-500" />
            <span className="font-medium">Laporkan Siswa</span>
          </div>
          <ChevronRight className="text-gray-400" />
        </Link>

        {/* Riwayat Poin */}
        <Link
          href="/siswa/riwayat"
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <i className="bi bi-clock-history text-xl text-green-500"></i>
            <span className="font-medium">Riwayat Poin</span>
          </div>
          <i className="bi bi-chevron-right text-gray-400"></i>
        </Link>

        {/* Tukar Poin */}
        <Link
          href="/siswa/saya/tukar-poin"
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <i className="bi bi-arrow-repeat text-xl text-yellow-500"></i>
            <span className="font-medium">Tukar Poin</span>
          </div>
          <i className="bi bi-chevron-right text-gray-400"></i>
        </Link>

        {/* Pengaturan */}
        <Link
          href="/siswa/saya/pengaturan"
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <i className="bi bi-gear text-xl text-gray-500"></i>
            <span className="font-medium">Pengaturan</span>
          </div>
          <i className="bi bi-chevron-right text-gray-400"></i>
        </Link>
      </div>
    </>
  );
}
