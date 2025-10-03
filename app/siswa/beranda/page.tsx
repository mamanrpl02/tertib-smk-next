export default function BerandaPage() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center px-4 py-3 border-b justify-between">
        <div className="flex items-center">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold">A******* H****</p>
            <p className="text-xs text-gray-500">Jurusan RPL</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Rabu, 01-10-25</p>
          <p className="text-xs text-gray-500">08:00</p>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
        alt="post"
        className="w-full"
      />

      <div className="px-4 py-2 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition">
              <i className="bi bi-heart text-lg"></i>
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition">
              <i className="bi bi-share text-lg"></i>
              <span className="text-sm">Share</span>
            </button>
          </div>
          <p className="text-sm text-gray-500">20 Likes</p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="text-sm mt-2">
          <span className="font-semibold">Maman</span> Lagi latihan coding buat project sekolah 💻🔥
        </p>
      </div>
    </div>
  );
}
