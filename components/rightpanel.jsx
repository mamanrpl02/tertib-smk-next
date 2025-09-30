export default function RightPanel() {
  const data = [
    { name: "Teknik Kendaraan Ringan Otomotif (TKRO)", score: 52 },
    { name: "Teknik dan Bisnis Sepeda Motor (TBSM)", score: 46 },
    { name: "Teknik Alat Berat (TAB)", score: 42 },
    { name: "Rekayasa Perangkat Lunak (RPL)", score: 31 },
    { name: "Agribisnis Tanaman Pangan dan Hortikultura (ATPH)", score: 20 },
    { name: "Agribisnis Pengolahan Hasil Pertanian (APHP)", score: 19 },
    { name: "Teknik Logistik (TL)", score: 11 },
  ];

  return (
    <aside className="w-80 bg-white border-l p-4 overflow-y-auto">
      <h2 className="font-bold text-lg mb-4">Peringkat Pelanggaran Per Jurusan</h2>

      {/* blok 1 */}
      <div className="mb-6">
        <h3 className="font-semibold text-sm text-gray-600 mb-3">Point Negative</h3>
        <ul className="space-y-3">
          {data.map((item, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* logo jurusan placeholder */}
                <img
                  src="/logo-smk.png"
                  alt={item.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="font-semibold">{item.score}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* blok 2 */}
      <div>
        <h3 className="font-semibold text-sm text-gray-600 mb-3">Point Negative</h3>
        <ul className="space-y-3">
          {data.map((item, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/logo-smk.png"
                  alt={item.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="font-semibold">{item.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
