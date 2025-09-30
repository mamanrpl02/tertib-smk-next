import "./globals.css";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import RightPanel from "@/components/rightpanel";

export default function RootLayout() {
  return (
    <html lang="id">
      <body className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <main className="flex-1 flex flex-col">
          {/* Topbar */}
          <Topbar />

          {/* Tengah kosong, hanya RightPanel */}
          <div className="flex flex-1">
            <div className="flex-1 p-4"> {/* bisa kasih konten default di sini */}             
            </div>
            <RightPanel />
          </div>
        </main>
      </body>
    </html>
  );
}
