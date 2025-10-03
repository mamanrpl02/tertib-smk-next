export default function Topbar() {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-3">
      <span className="font-bold text-lg">Tertib SMK</span>
      <div className="hidden md:block w-1/2">
        <span className="font-bold text-lg">Beranda</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden md:block font-medium">Hello, Maman</span>
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
