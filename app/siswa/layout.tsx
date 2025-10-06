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
  const [siswa, setSiswa] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    // 🔒 Verifikasi token ke backend Laravel
    fetch("http://127.0.0.1:8000/api/siswa", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Token invalid");
        const data = await res.json();
        setSiswa(data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-gray-600 text-lg animate-pulse">Memuat...</div>
      </div>
    );
  }

  if (!siswa) return null;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Topbar />

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

      <BottomNav />
      <ScrollTopButton />
    </div>
  );
}
