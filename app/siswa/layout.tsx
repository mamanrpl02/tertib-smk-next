import Topbar from "@/components/Topbar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import BottomNav from "@/components/BottomNav";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function SiswaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Topbar */}
      <Topbar />

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        <SidebarLeft />
        <main
          id="mainContent"
          className="flex-1 overflow-y-auto p-6 space-y-6 relative"
        >
          {children}
        </main>
        <SidebarRight />
      </div>

      {/* Bottom Navigation (mobile) */}
      <BottomNav />

      {/* Scroll To Top */}
      <ScrollTopButton />
    </div>
  );
}
