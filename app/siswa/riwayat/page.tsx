export default function RiwayatPage() {
  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-4 pb-48 bg-gray-50">
      {/* Header + Filter */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Poin Anda</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded bg-green-100 text-green-700 hover:bg-green-200 transition">
            Positif
          </button>
          <button className="px-3 py-1 text-sm rounded bg-red-100 text-red-700 hover:bg-red-200 transition">
            Negatif
          </button>
        </div>
      </div>

      {/* Data siswa (static contoh) */}
      <div className="flex items-center bg-white p-3 rounded-lg shadow">
        <img
          src="https://i.pravatar.cc/50?img=11"
          alt="siswa"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-3 flex-1">
          <p className="font-medium">Andi</p>
          <p className="text-xs text-gray-500">X-B Rekayasa Perangkat Lunak</p>
        </div>
        <span className="text-green-600 font-bold">75 Poin</span>
      </div>

      <div className="flex items-center bg-white p-3 rounded-lg shadow">
        <img
          src="https://i.pravatar.cc/50?img=16"
          alt="siswa"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-3 flex-1">
          <p className="font-medium">Rizky</p>
          <p className="text-xs text-gray-500">X-B Rekayasa Perangkat Lunak</p>
        </div>
        <span className="text-red-600 font-bold">30 Poin</span>
      </div>

      {/* Duplicate card untuk contoh */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center bg-white p-3 rounded-lg shadow"
        >
          <img
            src={`https://i.pravatar.cc/50?img=${i % 2 === 0 ? 11 : 16}`}
            alt="siswa"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3 flex-1">
            <p className="font-medium">{i % 2 === 0 ? "Andi" : "Rizky"}</p>
            <p className="text-xs text-gray-500">
              X-B Rekayasa Perangkat Lunak
            </p>
          </div>
          <span
            className={`font-bold ${
              i % 2 === 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {i % 2 === 0 ? "75 Poin" : "30 Poin"}
          </span>
        </div>
      ))}
    </main>
  );
}
