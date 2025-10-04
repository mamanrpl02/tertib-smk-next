export default function SidebarRight() {
  // 🧩 Data Poin
  const poinPositif = [
    { nama: "Rekayasa Perangkat Lunak (RPL)", poin: 50, avatar: "/smk.png" },
    { nama: "Teknik Logistik (TL)", poin: 42, avatar: "/smk.png" },
    {
      nama: "Agribisnis Tanaman Pangan dan Hortikultura (ATPH)",
      poin: 38,
      avatar: "/smk.png",
    },
    {
      nama: "Agribisnis Pengolahan Hasil Pertanian (APHP)",
      poin: 33,
      avatar: "/smk.png",
    },
    { nama: "Teknik Alat Berat (TAB)", poin: 29, avatar: "/smk.png" },
    {
      nama: "Teknik Kendaraan Ringan dan Otomotif (TKRO)",
      poin: 15,
      avatar: "/smk.png",
    },
    {
      nama: "Teknik dan Bisnis Sepeda Motor (TBSM)",
      poin: 10,
      avatar: "/smk.png",
    },
  ];

  const poinNegatif = [
    {
      nama: "Teknik Kendaraan Ringan dan Otomotif (TKRO)",
      poin: 50,
      avatar: "/smk.png",
    },
    {
      nama: "Teknik dan Bisnis Sepeda Motor (TBSM)",
      poin: 42,
      avatar: "/smk.png",
    },
    {
      nama: "Teknik Alat Berat (TAB)",
      poin: 38,
      avatar: "/smk.png",
    },
    {
      nama: "Rekayasa Perangkat Lunak (RPL)",
      poin: 33,
      avatar: "/smk.png",
    },
    {
      nama: "Agribisnis Tanaman Pangan dan Hortikultura (ATPH)",
      poin: 29,
      avatar: "/smk.png",
    },
    {
      nama: "Agribisnis Pengolahan Hasil Pertanian (APHP)",
      poin: 15,
      avatar: "/smk.png",
    },
    {
      nama: "Teknik Logistik (TL)",
      poin: 10,
      avatar: "/smk.png",
    },
  ];

  // 🧱 Component Card
  const CardItem = ({
    nama,
    poin,
    avatar,
    warna,
  }: {
    nama: string;
    poin: number;
    avatar: string;
    warna: "green" | "red";
  }) => (
    <div className="flex items-center bg-gray-50 p-2 rounded shadow-sm">
      <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
      <p className="ml-2 text-sm flex-1">{nama}</p>
      <span className={`font-semibold text-xs text-${warna}-600`}>{poin}</span>
    </div>
  );

  return (
    <main
      id="mainContent"
      className="hidden lg:block w-72 bg-white border border-gray-200 p-3 
  overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent 
  hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full transition-all duration-300"
    >
      <h2 className="font-semibold text-sm mb-3 mt-4">
        Jumlah Poin Per Jurusan Semester Ini
      </h2>

      <div className="space-y-3">
        {/* Poin Positif */}
        <div>
          <h3 className="text-gray-700 font-semibold text-sm mb-2 mt-4">
            Poin Positif
          </h3>
          <div className="space-y-2">
            {poinPositif.map((item, index) => (
              <CardItem
                key={index}
                nama={item.nama}
                poin={item.poin}
                avatar={item.avatar}
                warna="green"
              />
            ))}
          </div>
        </div>

        {/* Poin Negatif */}
        <div>
          <h3 className="text-gray-700 font-semibold text-sm mb-2">
            Poin Negatif
          </h3>
          <div className="space-y-2">
            {poinNegatif.map((item, index) => (
              <CardItem
                key={index}
                nama={item.nama}
                poin={item.poin}
                avatar={item.avatar}
                warna="red"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
