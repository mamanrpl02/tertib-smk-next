"use client";
import { HandThumbsUp, HandThumbsDown, Link } from "react-bootstrap-icons";

export default function TukarPoinPage() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Tukar Poin</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {/* Poin Positif */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <HandThumbsUp className="text-2xl text-green-500" />
          <p className="mt-2 font-semibold text-lg">50</p>
          <p className="text-sm text-gray-500">Poin Positif</p>
        </div>

        {/* Poin Negatif */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <HandThumbsDown className="text-2xl text-red-500" />
          <p className="mt-2 font-semibold text-lg">30</p>
          <p className="text-sm text-gray-500">Poin Negatif</p>
        </div>
      </div>

      {/* Info + Action */}
      <div className="px-2">
        <div className="text mt-2">
          <p className="text-gray-600 text-sm">
            Setiap <span className="font-semibold">5 Poin Positif</span> dapat
            ditukar untuk menghapus{" "}
            <span className="font-semibold">1 Poin Negatif</span>.
          </p>
        </div>

        {/* Button Action */}
        <div className="action flex justify-between pt-6">
          <Link
            href="/siswa/saya"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition text-sm"
          >
            Kembali
          </Link>
          <Link
            href="/siswa/saya"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
          >
            Tukarkan Poin
          </Link>
        </div>
      </div>
    </>
  );
}
