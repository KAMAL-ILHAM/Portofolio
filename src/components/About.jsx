import { motion } from 'framer-motion'
import { User, GraduationCap, MapPin, Code2 } from 'lucide-react'
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
              Tentang
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-black/8 to-transparent max-w-xs" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Text side */}
            <div>
              <motion.h2 variants={fadeUp} className="heading-lg mb-6">
                Menciptakan solusi untuk
                <br />
                <em className="not-italic text-gradient">web terbuka.</em>
              </motion.h2>

              <motion.p variants={fadeUp} className="body-text text-[15px] mb-5">
                Saya adalah mahasiswa Teknik Informatika tahun ketiga di Universitas Muhammadiyah Kalimantan Timur, 
                yang berfokus pada perancangan aplikasi web siap-produksi dengan arsitektur yang rapi dan desain yang matang.
              </motion.p>

              <motion.p variants={fadeUp} className="body-text text-[15px] mb-8">
                Pendekatan saya memadukan fundamental yang kuat dalam algoritma dan struktur data dengan 
                pengembangan full-stack modern — membangun antarmuka yang nyaman digunakan serta API yang mudah dikelola.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                {[
                  { icon: GraduationCap, text: 'Teknik Informatika, UMKT — Samarinda' },
                  { icon: MapPin, text: 'Kalimantan Timur, Indonesia' },
                  { icon: Code2, text: 'Mengutamakan Frontend, terampil di Full-Stack' },
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
                  title: 'Fokus Frontend',
                  desc: 'UI yang presisi (pixel-perfect) dengan React, TypeScript, dan CSS modern — performa dan aksesibilitas dibangun sejak awal.',
                },
                {
                  icon: GraduationCap,
                  title: 'Backend & API',
                  desc: 'Layanan RESTful dengan Node.js dan Express, didukung oleh PostgreSQL atau MySQL — skema database rapi, autentikasi tepat, dan penanganan error yang solid.',
                },
                {
                  icon: User,
                  title: 'Pemahaman Sistem',
                  desc: 'Docker untuk container, Git untuk kontrol versi, dan selalu memikirkan bagaimana setiap komponen bekerja sama dalam skala besar.',
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