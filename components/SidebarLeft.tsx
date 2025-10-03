import Link from "next/link";

export default function SidebarLeft() {
  return (
    <aside className="hidden md:block bg-white w-64 p-4 border-r overflow-y-auto">
      <nav className="space-y-2">
        <Link href="/siswa/beranda" className="block px-3 py-2 rounded hover:bg-gray-200">
          <i className="bi bi-house-fill"></i> Beranda
        </Link>
        <Link href="/siswa/riwayat" className="block px-3 py-2 rounded hover:bg-gray-200">
          <i className="bi bi-bookmark-fill"></i> Riwayat
        </Link>
        <Link href="/siswa/peringkat" className="block px-3 py-2 rounded hover:bg-gray-200">
          <i className="bi bi-bar-chart-fill"></i> Peringkat
        </Link>
        <Link href="/siswa/tata-tertib" className="block px-3 py-2 rounded hover:bg-gray-200">
          <i className="bi bi-journal-bookmark-fill"></i> Tata Tertib
        </Link>
        <Link href="/siswa/saya" className="block px-3 py-2 rounded hover:bg-gray-200">
          <i className="bi bi-person-fill"></i> Saya
        </Link>
      </nav>
    </aside>
  );
}
