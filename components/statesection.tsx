'use client';
import { motion } from 'framer-motion';
import { BarChart3, Users, Award, AlertCircle } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      label: 'Poin Positif Minggu Ini',
      value: '320',
      color: 'bg-green-100',
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      label: 'Poin Negatif Minggu Ini',
      value: '120',
      color: 'bg-red-100',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      label: 'Guru Aktif',
      value: '25',
      color: 'bg-blue-100',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      label: 'Siswa Tercatat',
      value: '540',
      color: 'bg-yellow-100',
    },
  ];

  return (
    <section className="bg-[#F5EFE6] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#5C84B5]"
        >
          Pantau Perilaku Siswa Secara Real-Time
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          Lihat perkembangan karakter siswa melalui poin positif dan negatif yang tercatat otomatis.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`rounded-2xl ${item.color} p-6 shadow-lg hover:shadow-xl transition`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white rounded-full shadow">{item.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800">{item.value}</h3>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
