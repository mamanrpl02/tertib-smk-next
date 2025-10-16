'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-[#F5EFE6] text-gray-800 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/Smk.png" // ganti sesuai gambar kamu
            alt="Tentang Aera"
            width={420}
            height={420}
            className="rounded-2xl drop-shadow-xl"
          />
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-[#6D94C5]">
            Tentang <span className="text-[#5C84B5]">Karakterin</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Karakterin adalah platform pelaporan digital yang membantu sekolah
            membangun karakter siswa melalui sistem poin positif dan negatif.
            Guru dapat mencatat perilaku siswa dengan cepat, memantau
            perkembangan mereka, dan menghasilkan laporan otomatis.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Dengan Aera, proses evaluasi karakter menjadi lebih mudah, efisien,
            dan transparan — mendukung terciptanya lingkungan belajar yang lebih
            baik dan berimbang antara kedisiplinan dan penghargaan.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
