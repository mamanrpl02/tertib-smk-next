import { Search, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold">Beranda</h1>
      <div className="flex gap-3">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Search size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}
