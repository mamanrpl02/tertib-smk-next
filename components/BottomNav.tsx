import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-inner flex justify-around items-center py-2 lg:hidden z-50">
      <Link href="/siswa/beranda" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <i className="bi bi-house-fill text-xl"></i>
        <span className="text-xs">Beranda</span>
      </Link>
      <Link href="/siswa/riwayat" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <i className="bi bi-bookmark-fill text-xl"></i>
        <span className="text-xs">Riwayat</span>
      </Link>
      <Link href="/siswa/peringkat" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <i className="bi bi-bar-chart-fill text-xl"></i>
        <span className="text-xs">Peringkat</span>
      </Link>
      <Link href="/siswa/tata-tertib" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <i className="bi bi-journal-bookmark-fill text-xl"></i>
        <span className="text-xs">Tata Tertib</span>
      </Link>
      <Link href="/siswa/saya" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <i className="bi bi-person-fill text-xl"></i>
        <span className="text-xs">Saya</span>
      </Link>
    </nav>
  );
}
