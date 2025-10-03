"use client";

import { useState } from "react";

export default function RiwayatPage() {
  // state untuk filter: "all", "positive", "negative"
  const [filter, setFilter] = useState<"all" | "positive" | "negative">("all");

  const data = [
    { id: 1, name: "Andi", kelas: "X-B RPL", poin: 75 },
    { id: 2, name: "Rizky", kelas: "X-B RPL", poin: -30 },
    { id: 3, name: "Budi", kelas: "X-B RPL", poin: 50 },
    { id: 4, name: "Siti", kelas: "X-B RPL", poin: -20 },
  ];

  const filteredData = data.filter((item) => {
    if (filter === "positive") return item.poin > 0;
    if (filter === "negative") return item.poin < 0;
    return true; // all
  });

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-4 pb-48">
      {/* Header + Filter */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Poin Anda</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("positive")}
            className={`px-3 py-1 text-sm rounded flex items-center gap-1 transition ${
              filter === "positive"
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {" "}
            <i className="bi bi-hand-thumbs-up"></i>
          </button>
          <button
            onClick={() => setFilter("negative")}
            className={`px-3 py-1 text-sm rounded flex items-center gap-1 transition ${
              filter === "negative"
                ? "bg-red-600 text-white"
                : "bg-red-100 text-red-700 hover:bg-red-200"
            }`}
          >
            {/* <i className="bi bi-dash-lg"></i> */}
            <i className="bi bi-hand-thumbs-down"></i>
          </button>
        </div>
      </div>

      {/* Card list */}
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white p-3 rounded-lg shadow"
        >
          <img
            src={`https://i.pravatar.cc/50?img=${item.id + 10}`}
            alt={item.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3 flex-1">
            <p className="font-medium">{item.name}</p>
            <p className="text-xs text-gray-500">{item.kelas}</p>
          </div>
          <span
            className={`font-bold ${
              item.poin > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.poin > 0 ? `+${item.poin}` : item.poin} Poin
          </span>
        </div>
      ))}
    </main>
  );
}
