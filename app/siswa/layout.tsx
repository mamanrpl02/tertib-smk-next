"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/Topbar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import BottomNav from "@/components/BottomNav";
import ScrollTopButton from "@/components/ScrollTopButton";
import axios from "@/lib/axios";

export default function SiswaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [siswa, setSiswa] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token_siswa");

    // 🔹 Jika belum login → arahkan ke /login
    if (!token) {
      router.replace("/login");
      return;
    }

    // 🔹 Verifikasi token via Laravel API
    const verifyToken = async () => {
      try {
        const res = await axios.get("/siswa"); // otomatis pakai Bearer token dari interceptor
        setSiswa(res.data);

        // Jika user sedang di /login tapi sudah login → arahkan ke beranda siswa
        if (window.location.pathname === "/login") {
          router.replace("/siswa/beranda");
        }
      } catch (error) {
        // Token invalid → hapus token dan kembalikan ke login
        console.warn("Token tidak valid, redirect ke login");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
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
