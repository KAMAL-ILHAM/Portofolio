import { motion } from 'framer-motion'
import { User, GraduationCap, MapPin, Code2, Database, Brain } from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, slideRight } from '../hooks/useScrollReveal'

export default function About() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.12)}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12">
            <span className="section-label">
              <User size={12} strokeWidth={2.5} />
              Tentang Saya
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-black/8 to-transparent max-w-xs" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Text side */}
            <div>
              <motion.h2 variants={fadeUp} className="heading-lg mb-6">
                Membangun aplikasi dan
                <br />
                <em className="not-italic text-gradient">mempelajari teknologi.</em>
              </motion.h2>

              <motion.p variants={fadeUp} className="body-text text-[15px] mb-5">
                Saya mahasiswa Teknik Informatika Universitas Muhammadiyah Kalimantan Timur dengan peminatan Komputasi Cerdas. Saya mengembangkan berbagai proyek aplikasi sebagai bagian dari perkuliahan maupun proyek personal.
              </motion.p>

              <motion.p variants={fadeUp} className="body-text text-[15px] mb-8">
                Minat saya mencakup rekayasa perangkat lunak, kecerdasan buatan, dan pengolahan informasi. Melalui berbagai proyek, saya mempelajari proses pengembangan dari perancangan aplikasi hingga implementasi sistem cerdas.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                {[
                  { icon: GraduationCap, text: 'Teknik Informatika, UMKT — Samarinda' },
                  { icon: MapPin, text: 'Samarinda, Kalimantan Timur' },
                  { icon: Code2, text: 'Pengembangan Web, Mobile & AI' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="skill-icon-ring w-8 h-8 flex-shrink-0">
                      <Icon size={14} className="text-muted" />
                    </div>
                    <span className="text-sm text-muted">{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Cards side */}
            <motion.div variants={staggerContainer(0.1)} className="flex flex-col gap-4">
              {[
                {
                  icon: Code2,
                  title: 'Pengembangan Aplikasi',
                  desc: 'Membangun aplikasi web dan perangkat bergerak (mobile) dengan memperhatikan struktur arsitektur, tampilan, dan kemudahan penggunaan.',
                },
                {
                  icon: Database,
                  title: 'Struktur Data & Backend',
                  desc: 'Menerapkan algoritma yang efisien dan mengelola basis data untuk memastikan bagian backend aplikasi berjalan dengan optimal.',
                },
                {
                  icon: Brain,
                  title: 'Komputasi Cerdas',
                  desc: 'Menerapkan kecerdasan buatan dalam beberapa proyek dan mempelajari penggunaannya untuk mendukung fitur dalam aplikasi.',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={slideRight}
                  className="glass-card rounded-2xl p-5 flex gap-4"
                >
                  <div className="skill-icon-ring flex-shrink-0 w-10 h-10">
                    <card.icon size={16} className="text-ink-soft" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-soft mb-1">{card.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}