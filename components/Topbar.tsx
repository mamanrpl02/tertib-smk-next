"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "../lib/axios";
import { useState, useEffect } from "react";

export default function Topbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Ambil nama user dari localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (token) {
      // kalau user belum disimpan di localStorage, ambil dari API
      axios
        .get("/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch(() => {
          console.warn("Gagal memuat data user.");
        });
    }
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "/logout", // ✅ tanpa /api di depan
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      localStorage.removeItem("token");
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
          <div className="flex items-center gap-3">
            <span className="hidden md:block font-medium">
              {/* {user ? `Hello, ${user.name}` : "Memuat..."} */} Hallo, Maman
            </span>
            <img
              src="/maman.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border"
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
