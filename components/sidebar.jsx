import Link from "next/link";
import { Home, BookOpen, BarChart2, FileText, User } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Beranda", href: "/", icon: <Home size={18} /> },
    { name: "Riwayat", href: "/riwayat", icon: <BookOpen size={18} /> },
    { name: "Peringkat", href: "/peringkat", icon: <BarChart2 size={18} /> },
    { name: "Tata Tertib", href: "/tatatertib", icon: <FileText size={18} /> },
    { name: "Saya", href: "/saya", icon: <User size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-4 font-bold text-lg">Tertib SMK</div>
      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
