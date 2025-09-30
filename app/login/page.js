export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Bagian kiri untuk desktop: gambar */}
      <div className="hidden md:flex md:w-2/5 h-screen">
        <img
          src="/login.jpeg"
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian kanan: form dengan background biru */}
      <div className="flex flex-1 flex-col justify-center items-center p-6 bg-blue-500">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Selamat datang di Tertib-SMK!</h1>
            <p className="text-sm mt-2 text-gray-600">
              Laporkan teman anda yang melanggar tatatertib sekolah, dengan aman 
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
              <input
                type="password"
                placeholder="Kata Sandi"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <span>Ingat saya</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">Lupa Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Masuk
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Yuk, mulai dari hal kecil setiap hari.
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-white/80">
          © 2025 Tertib-SMK. Semua hak cipta dilindungi.
        </p>
      </div>
    </div>
  );
}
