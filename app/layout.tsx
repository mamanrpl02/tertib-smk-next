import "./globals.css";

export const metadata = {
  title: "Tertib SMK",
  description: "Landingpage aplikasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
