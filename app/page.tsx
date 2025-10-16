'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import StateSection from '@/components/statesection';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#6D94C5] via-[#5C84B5] to-[#CBDCEB] text-white overflow-hidden">
        
        {/* Navbar di atas hero */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Hero Section Content */}
        <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
              Bangun Karakter Siswa Lewat Pelaporan Digital
            </h1>
            <p className="text-lg text-blue-100 max-w-md mx-auto lg:mx-0">
              Pantau dan kembangkan karakter siswa dengan sistem poin positif dan negatif yang modern, transparan, dan mudah digunakan oleh guru.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#5C84B5] px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition"
            >
              Coba Sekarang
            </motion.button>
          </motion.div>

          {/* RIGHT: Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative justify-center hidden lg:flex"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="relative"
            >
              <Image
                src="/smk.png"
                alt="Tampilan aplikasi"
                width={380}
                height={380}
                className="drop-shadow-2xl rounded-2xl transform rotate-0"
              />
              <div className="absolute -z-10 blur-3xl bg-blue-200/40 w-[300px] h-[300px] rounded-full top-10 left-10"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Statistik Section */}
      <StateSection />

      {/* About Section */}
      <About />

      {/* Footer Section */}
      <footer className="relative bg-gradient-to-br from-[#5C84B5] via-[#6D94C5] to-[#CBDCEB] text-white pt-20 pb-10 mt-0 overflow-hidden">
        {/* Wave separator */}
        <div className="absolute -top-[60px] left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66 83.59C906.67 48.92 823.78 29.06 739.68 21.85 625.66 11.48 512.67 28.44 398.71 52.49 285.15 76.38 170.94 106.26 57.56 99.16c-19.57-1.25-39.13-3.63-57.56-7.55v128h1200V0c-70.49 32.92-147.83 60.12-214.34 83.59z"
              fill="#f9f8f6"
            ></path>
          </svg>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">TertibSMK</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Membangun karakter siswa dengan sistem pelaporan digital yang transparan dan mudah digunakan.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold mb-3">Navigasi</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Tentang</a></li>
              <li><a href="#">Fitur</a></li>
              <li><a href="#">Kontak</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold mb-3">Kontak Kami</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>📧 info@tertibsmk.id</li>
              <li>📞 +62 812 3456 7890</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="font-semibold mb-3">Ikuti Kami</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-blue-200">🌐</a>
              <a href="#" className="hover:text-blue-200">📘</a>
              <a href="#" className="hover:text-blue-200">📷</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400/30 mt-10 pt-5 text-center text-blue-100 text-sm">
          © 2025 <span className="font-semibold">TertibSMK</span>. Semua hak dilindungi.
        </div>
      </footer>
    </>
  );
}
