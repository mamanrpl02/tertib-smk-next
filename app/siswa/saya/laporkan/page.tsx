"use client";

import { useState } from "react";
import { ArrowLeft, Send } from "react-bootstrap-icons";
import Link from "next/link";

export default function Page() {
  const [siswa, setSiswa] = useState("");
  const [pelanggaran, setPelanggaran] = useState("");
  const [beranda, setBeranda] = useState("");
  const [toleransi, setToleransi] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [bukti, setBukti] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ siswa, pelanggaran, beranda, toleransi, keterangan, bukti });
    alert("Laporan berhasil dikirim!");
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Laporkan Siswa</h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow"
      >
        {/* Pilih Siswa */}
        <div>
          <label htmlFor="siswa" className="block text-sm font-medium text-gray-700 mb-1">
            Pilih Siswa
          </label>
          <input
            list="siswaList"
            id="siswa"
            value={siswa}
            onChange={(e) => setSiswa(e.target.value)}
            placeholder="Ketik nama siswa..."
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <datalist id="siswaList">
            <option value="Maman RPL" />
            <option value="Dinda MM" />
            <option value="Andi" />
            <option value="Siti" />
          </datalist>
        </div>

        {/* Pilih Pelanggaran */}
        <div>
          <label htmlFor="pelanggaran" className="block text-sm font-medium text-gray-700 mb-1">
            Pilih Pelanggaran
          </label>
          <input
            list="pelanggaranList"
            id="pelanggaran"
            value={pelanggaran}
            onChange={(e) => setPelanggaran(e.target.value)}
            placeholder="Ketik jenis pelanggaran..."
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <datalist id="pelanggaranList">
            <option value="Terlambat masuk kelas" />
            <option value="Tidak memakai seragam" />
            <option value="Mengganggu teman" />
            <option value="Tidak mengerjakan tugas" />
          </datalist>
        </div>

        {/* Radio */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Tampil di beranda?</p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="beranda" value="ya" checked={beranda==="ya"} onChange={(e)=>setBeranda(e.target.value)} />
              <span>Ya</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="beranda" value="tidak" checked={beranda==="tidak"} onChange={(e)=>setBeranda(e.target.value)} />
              <span>Tidak</span>
            </label>
          </div>
        </div>

        {/* Toleransi */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Toleransi?</p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="toleransi" value="ya" checked={toleransi==="ya"} onChange={(e)=>setToleransi(e.target.value)} />
              <span>Ya</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="toleransi" value="tidak" checked={toleransi==="tidak"} onChange={(e)=>setToleransi(e.target.value)} />
              <span>Tidak</span>
            </label>
          </div>
        </div>

        {/* Textarea */}
        <div>
          <label htmlFor="keterangan" className="block text-sm font-medium text-gray-700 mb-1">
            Keterangan
          </label>
          <textarea
            id="keterangan"
            rows={4}
            value={keterangan}
            onChange={(e)=>setKeterangan(e.target.value)}
            placeholder="Tulis keterangan tambahan..."
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* File */}
        <div>
          <label htmlFor="bukti" className="block text-sm font-medium text-gray-700 mb-1">
            Upload Bukti
          </label>
          <input
            type="file"
            id="bukti"
            onChange={(e)=>setBukti(e.target.files ? e.target.files[0] : null)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tombol */}
        <div className="flex justify-between">
          <Link
            href="/siswa/saya"
            className="flex items-center gap-2 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 hover:text-white transition text-sm"
          >
            <ArrowLeft size={16}/> Kembali
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
          >
            <Send size={16}/> Laporkan
          </button>
        </div>
      </form>
    </>
  );
}
