export default function BerandaPage() {
  const posts = [
    {
      id: 1,
      name: "A******* H****",
      jurusan: "Rekayasa Perangkat Lunak",
      date: "Rabu, 01-10-25",
      time: "08:00",
      avatar: "https://i.pravatar.cc/40?img=3",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      likes: 20,
      caption: "Lagi latihan coding buat project sekolah 💻🔥",
    },
    {
      id: 2,
      name: "Dinda",
      jurusan: "DKV",
      date: "Kamis, 02-10-25",
      time: "09:30",
      avatar: "https://i.pravatar.cc/40?img=5",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      likes: 35,
      caption: "Belajar desain UI hari ini! 🎨✨",
    },
    {
      id: 3,
      name: "Rizky",
      jurusan: "TKJ",
      date: "Jumat, 03-10-25",
      time: "07:45",
      avatar: "https://i.pravatar.cc/40?img=8",
      image:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=800&q=80",
      likes: 15,
      caption: "Setup jaringan lab sekolah 🖥️🔌",
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="flex items-center px-4 py-3 border-b justify-between">
            <div className="flex items-center">
              <img
                src={post.avatar}
                alt={post.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">{post.name}</p>
                <p className="text-xs text-gray-500">{post.jurusan}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">{post.date}</p>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
          </div>

          {/* Gambar post */}
          <img src={post.image} alt="post" className="w-full" />

          {/* Aksi */}
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
              <p className="text-sm text-gray-500">{post.likes} Likes</p>
            </div>
          </div>

          {/* Caption */}
          <div className="px-4 pb-4">
            <p className="text-sm mt-2">
              <span className="font-semibold">{post.name}</span> {post.caption}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
