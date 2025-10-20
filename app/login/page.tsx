"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "@/lib/axios";

export default function LoginSiswaPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // 🔁 Cek apakah siswa sudah login
  useEffect(() => {
    const token = localStorage.getItem("token_siswa");
    if (token) router.replace("/siswa/beranda");
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔹 Kirim request ke Laravel
      const { data } = await axios.post("/login-siswa", form);

      // 🔹 Ambil token & data siswa
      const { access_token, siswa } = data;

      // 🔹 Simpan ke localStorage
      localStorage.setItem("token_siswa", access_token);
      localStorage.setItem("siswa", JSON.stringify(siswa));

      // 🔹 Tampilkan notifikasi
      await Swal.fire({
        icon: "success",
        title: "Login Berhasil!",
        text: `Selamat datang, ${siswa.nama}`,
        timer: 1500,
        showConfirmButton: false,
      });

      // 🔹 Redirect ke dashboard siswa
      router.push("/siswa/beranda");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: error.response?.data?.message || "Email atau password salah.",
        confirmButtonColor: "#5C84B5",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Panel kiri */}
      <div className="hidden md:flex md:w-1/2 bg-[#6D94C5] items-center justify-center">
        <div className="text-center text-white px-8">
          <Image
            src="/illustration-login.png"
            alt="Ilustrasi login"
            width={300}
            height={300}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-3">Selamat Datang!</h1>
          <p>Akses akunmu dan bantu wujudkan budaya disiplin di sekolah.</p>
        </div>
      </div>

      {/* Panel kanan */}
      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo Sekolah" width={80} height={80} />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Login Siswa
          </h2>
          <p className="text-gray-500 mb-8 text-sm text-center">
            Masukkan email dan password untuk melanjutkan.
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
                placeholder="nama@sekolah.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C84B5] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C84B5] outline-none"
              />
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
        </div>
      </div>
    </div>
  );
}
