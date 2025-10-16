"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "../../lib/axios";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) router.replace("/siswa/beranda");
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/login-siswa", form);
      const { access_token, siswa } = res.data;
      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(siswa));
      router.push("/siswa/beranda");
    } catch (error: any) {
      alert(error.response?.data?.message || "Email atau password salah.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-[#f9fafb] overflow-hidden">
      {/* 🔹 Logo pojok kiri atas */}
      <div className="absolute top-6 left-6 z-20">
        <Image src="/logo.png" alt="Logo Tertib SMK" width={120} height={120} />
      </div>

      {/* Panel kiri - desain baru */}
      <div className="hidden md:flex md:w-1/2 relative bg-[#6D94C5] items-center justify-center overflow-hidden">
        {/* Pola background halus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.2),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-10 mix-blend-overlay" />

        {/* Lapisan warna lembut */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C84B5]/90 via-[#6D94C5]/70 to-[#CBDCEB]/40" />

        {/* Konten tengah */}
        <div className="relative z-10 text-center px-10">
          <Image
            src="/illustration-login.png"
            alt="Ilustrasi siswa login"
            width={300}
            height={300}
            className="mx-auto mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-md">
            Selamat Datang!
          </h1>
          <p className="text-blue-50/90 max-w-sm mx-auto">
            Akses akunmu dan bantu wujudkan budaya disiplin di sekolah.
          </p>
        </div>

        {/* Dekorasi bulatan blur */}
        <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute top-10 right-10 w-[180px] h-[180px] bg-white/20 blur-2xl rounded-full" />
      </div>

      {/* Panel kanan */}
      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          {/* Logo atas form */}
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo Tertib SMK" width={80} height={80} />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Login
          </h2>
          <p className="text-gray-500 mb-8 text-sm text-center">
            Masukkan akunmu untuk melanjutkan.
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="nama@sekolah.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C84B5] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C84B5] outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#5C84B5] border-gray-300 rounded"
                />
                <span>Ingat saya</span>
              </label>
              <a href="#" className="text-[#5C84B5] hover:underline">
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#5C84B5] text-white py-3 rounded-lg font-semibold transition-all ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#4a6ea2]"
              }`}
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <Link href="/register" className="text-[#5C84B5] hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
