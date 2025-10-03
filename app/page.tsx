export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Selamat Datang di Tertib SMK 🎓</h1>
      <p className="mt-2 text-gray-600">Aplikasi Tata Tertib untuk siswa SMK</p>

      <a
        href="/siswa/beranda"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Masuk ke Dashboard Siswa
      </a>
    </main>
  );
}
