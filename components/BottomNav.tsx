"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const menus = [
    { href: "/siswa/beranda", label: "Beranda", icon: "bi-house-fill" },
    { href: "/siswa/riwayat", label: "Riwayat", icon: "bi-bookmark-fill" },
    { href: "/siswa/peringkat", label: "Peringkat", icon: "bi-bar-chart-fill" },
    { href: "/siswa/tata-tertib", label: "Tata Tertib", icon: "bi-journal-bookmark-fill" },
    { href: "/siswa/saya", label: "Saya", icon: "bi-person-fill" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border border-gray-200 shadow-inner flex justify-around items-center py-2 lg:hidden z-50">
      {menus.map((menu) => {
        const isActive = pathname.startsWith(menu.href);
        return (
          <Link
            key={menu.href}
            href={menu.href}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <i className={`bi ${menu.icon} text-xl`} />
            <span>{menu.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
