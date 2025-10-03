export default function SidebarRight() {
  return (
    <aside className="hidden lg:block w-72 bg-white border-l p-3 overflow-y-auto">
      <h2 className="font-semibold text-sm mb-3">Peringkat Pelanggaran Per Jurusan</h2>

      <div className="space-y-3">
        <div>
          <h3 className="text-gray-700 font-semibold text-sm mb-2">Poin Positif</h3>
          <div className="space-y-2">
            <div className="flex items-center bg-gray-50 p-2 rounded shadow-sm">
              <img src="/smk.png" alt="avatar" className="w-8 h-8 rounded-full" />
              <p className="ml-2 text-sm flex-1">Andi</p>
              <span className="text-green-600 font-semibold text-xs">50</span>
            </div>
            <div className="flex items-center bg-gray-50 p-2 rounded shadow-sm">
              <img src="/smk.png" alt="avatar" className="w-8 h-8 rounded-full" />
              <p className="ml-2 text-sm flex-1">Dinda</p>
              <span className="text-green-600 font-semibold text-xs">42</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-700 font-semibold text-sm mb-2">Poin Negatif</h3>
          <div className="space-y-2">
            <div className="flex items-center bg-gray-50 p-2 rounded shadow-sm">
              <img src="/smk.png" alt="avatar" className="w-8 h-8 rounded-full" />
              <p className="ml-2 text-sm flex-1">Rizky</p>
              <span className="text-red-600 font-semibold text-xs">30</span>
            </div>
            <div className="flex items-center bg-gray-50 p-2 rounded shadow-sm">
              <img src="/smk.png" alt="avatar" className="w-8 h-8 rounded-full" />
              <p className="ml-2 text-sm flex-1">Siti</p>
              <span className="text-red-600 font-semibold text-xs">25</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
