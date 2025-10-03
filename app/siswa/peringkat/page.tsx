type Siswa = {
  id: number;
  nama: string;
  kelas: string;
  poin: number;
  avatar: string;
};

const dataSiswa: Siswa[] = [
  {
    id: 1,
    nama: "Andi",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 75,
    avatar: "https://i.pravatar.cc/50?img=11",
  },
  {
    id: 2,
    nama: "Rizky",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 30,
    avatar: "https://i.pravatar.cc/50?img=16",
  },
  {
    id: 3,
    nama: "Andi",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 75,
    avatar: "https://i.pravatar.cc/50?img=11",
  },
  {
    id: 4,
    nama: "Rizky",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 30,
    avatar: "https://i.pravatar.cc/50?img=16",
  },
  {
    id: 5,
    nama: "Andi",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 75,
    avatar: "https://i.pravatar.cc/50?img=11",
  },
  {
    id: 6,
    nama: "Rizky",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 30,
    avatar: "https://i.pravatar.cc/50?img=16",
  },
  {
    id: 7,
    nama: "Andi",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 75,
    avatar: "https://i.pravatar.cc/50?img=11",
  },
  {
    id: 8,
    nama: "Rizky",
    kelas: "X-B Rekayasa Perangkat Lunak",
    poin: 30,
    avatar: "https://i.pravatar.cc/50?img=16",
  },
];

export default function PeringkatPage() {
  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-4 pb-48 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Peringkat Siswa</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded bg-green-100 text-green-700 hover:bg-green-200 transition">
            Positif
          </button>
          <button className="px-3 py-1 text-sm rounded bg-red-100 text-red-700 hover:bg-red-200 transition">
            Negatif
          </button>
        </div>
      </div>

      {/* List siswa */}
      {dataSiswa.map((siswa) => (
        <div
          key={siswa.id}
          className="flex items-center bg-white p-3 rounded-lg shadow"
        >
          <img
            src={siswa.avatar}
            alt={siswa.nama}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3 flex-1">
            <p className="font-medium">{siswa.nama}</p>
            <p className="text-xs text-gray-500">{siswa.kelas}</p>
          </div>
          <span
            className={`font-bold ${
              siswa.poin >= 50 ? "text-green-600" : "text-red-600"
            }`}
          >
            {siswa.poin} Poin
          </span>
        </div>
      ))}
    </main>
  );
}
