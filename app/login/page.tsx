"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "../../lib/axios";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // 🔒 Kalau sudah login, langsung lempar ke dashboard siswa
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/siswa/beranda");
    }
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔥 Login ke Laravel (pakai route /login-siswa)
      const res = await axios.post("/login-siswa", form);
      const { access_token, siswa } = res.data;

      // ✅ Simpan token dan data siswa di localStorage
      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(siswa));

      // ✅ Arahkan ke halaman utama siswa
      router.push("/siswa/beranda");
    } catch (error: any) {
      console.error("Login gagal:", error);
      alert(error.response?.data?.message || "Email atau password salah.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Bagian kiri: gambar */}
      <div className="hidden md:flex md:w-2/5 h-screen">
        <img
          src="/login.jpeg"
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian kanan: form login */}
      <div className="flex flex-1 flex-col justify-center items-center p-6 bg-blue-500">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">
              Selamat datang di Tertib-SMK!
            </h1>
            <p className="text-sm mt-2 text-gray-600">
              Laporkan teman anda yang melanggar tata tertib sekolah dengan
              aman.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi
              </label>
              <input
                type="password"
                placeholder="Kata Sandi"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Ingat saya</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Lupa Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-500 text-white py-3 rounded-lg transition-colors font-medium ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Daftar di sini
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-white/80">
          © 2025 Tertib-SMK. Semua hak cipta dilindungi.
        </p>
      </div>
    </div>
  );
}
