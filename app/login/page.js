export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Bagian kiri: gambar */}
      <div className="hidden md:flex w-1/4 h-screen">
        <img
          src="/login.jpeg"
          alt="Login Illustration"
          className="max-w-[7000px]"
        />
      </div>

      {/* Bagian kanan: form login */}
      <div className="flex w-full md:w-4/5 items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center w-full max-w-xl p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Masuk dengan akun anda
          </h1>
          <h5 className="text-base mb-6 text-center text-gray-600">
            Laporkan teman anda yang melanggar tata tertib sekolah, dengan aman
          </h5>
          <form className="w-full space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg"
            />

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
