"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLeft() {
  const pathname = usePathname();

  const menus = [
    { href: "/siswa/beranda", label: "Beranda", icon: "bi-house-fill" },
    { href: "/siswa/riwayat", label: "Riwayat", icon: "bi-bookmark-fill" },
    { href: "/siswa/peringkat", label: "Peringkat", icon: "bi-bar-chart-fill" },
    { href: "/siswa/tata-tertib", label: "Tata Tertib", icon: "bi-journal-bookmark-fill" },
    { href: "/siswa/saya", label: "Saya", icon: "bi-person-fill" },
  ];

  return (
    <aside className="hidden md:block bg-white w-64 p-4 border border-gray-300 overflow-y-auto">
      <nav className="space-y-2">
        {menus.map((menu) => {
          const isActive = pathname.startsWith(menu.href);
          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center px-3 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <i className={`bi ${menu.icon} mr-2`} />
              {menu.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
