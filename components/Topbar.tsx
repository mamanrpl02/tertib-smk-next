"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "../lib/axios";
import { useState, useEffect } from "react";

export default function Topbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // 🔹 Ambil user dari localStorage atau API
  useEffect(() => {
    const token = localStorage.getItem("token_siswa");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (token) {
      axios
        .get("/siswa/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch(() => {
          console.warn("Gagal memuat data siswa, logout otomatis.");
          localStorage.removeItem("token_siswa");
          router.replace("/login");
        });
    }
  }, [router]);

  // 🔹 Dengarkan event perubahan profil (misal setelah upload foto)
  useEffect(() => {
    const handleUserUpdate = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    };
    window.addEventListener("userUpdated", handleUserUpdate);
    return () => window.removeEventListener("userUpdated", handleUserUpdate);
  }, []);
  
  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/siswa/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_siswa")}`,
        },
      });
      localStorage.removeItem("token_siswa");
      localStorage.removeItem("user");
      router.push("/login");
    } catch (error: any) {
      console.error("Gagal logout:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Gagal logout, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-3">
      <span className="font-bold text-lg">Tertib SMK</span>

      <div className="hidden md:block w-1/2 text-center">
        <span className="font-bold text-lg">Beranda</span>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/siswa/saya/pengaturan/">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="hidden md:block font-medium">
              {user ? `Halo, ${user.nama}` : "Memuat..."}
            </span>
            <img
              src={user?.foto_profile || "/maman.jpg"}
              alt="Profile"
              className="w-8 h-8 rounded-full border object-cover"
            />
          </div>
        </Link>

        <button
          onClick={handleLogout}
          disabled={loading}
          className={`text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-300 transition ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-red-500 hover:text-white"
          }`}
        >
          {loading ? "Keluar..." : "Logout"}
        </button>
      </div>
    </header>
  );
}
