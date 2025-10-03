"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600); // lama animasi 0.6s
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 relative">
        {loading && <PageLoader />}
        {children}
      </body>
    </html>
  );
}
