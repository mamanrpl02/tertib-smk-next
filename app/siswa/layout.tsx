"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/Topbar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import BottomNav from "@/components/BottomNav";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function SiswaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    // ✅ Cek token ke backend (endpoint Laravel /api/user)
    fetch("http://127.0.0.1:8000/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Token invalid");
        }
        const data = await res.json();
        setUser(data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        router.push("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-gray-600 text-lg animate-pulse">Memuat...</div>
      </div>
    );
  }

  if (!user) return null; // jika user belum ter-load

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Topbar dengan nama user */}
      <Topbar />

      {/* Konten utama */}
      <div className="flex flex-1 overflow-hidden">
        <SidebarLeft />
        <main
          id="mainContent"
          className="flex-1 overflow-y-auto p-6 space-y-6 relative scrollbar-thin scrollbar-thumb-gray-300/60 scrollbar-track-transparent 
          hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full transition-all duration-300 backdrop-blur-sm pb-48"
        >
          {children}
        </main>
        <SidebarRight />
      </div>

      {/* Bottom Navigation (mobile) */}
      <BottomNav />

      {/* Tombol scroll ke atas */}
      <ScrollTopButton />
    </div>
  );
}
