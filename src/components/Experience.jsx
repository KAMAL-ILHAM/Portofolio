import { motion } from 'framer-motion'
import {
  Briefcase, BookOpen, Calendar, Users, Code, Shield, Cloud, ExternalLink
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'

const experiences = [
  {
    type: 'org',
    role: 'Staf Media Kreatif',
    org: 'HIMATIKA UMKT',
    period: '2024 – Sekarang',
    description: 'Memproduksi konten visual, mengelola media sosial, dan mengoordinasikan aset desain untuk berbagai acara dan kampanye himpunan.',
    tags: ['Desain', 'Media Sosial', 'Kreatif'],
    icon: Users,
  },
  {
    type: 'study',
    role: 'Teknik Informatika',
    org: 'Universitas Muhammadiyah Kalimantan Timur',
    period: '2024 – Sekarang',
    description: 'Mempelajari mata kuliah inti seperti algoritma, struktur data, rekayasa perangkat lunak, sistem basis data, dan jaringan komputer.',
    tags: ['Mahasiswa Aktif'],
    icon: BookOpen,
  },
]

const certifications = [
  {
    name: 'Software Engineering',
    issuer: 'Parallaxnet USA',
    year: '2026',
    icon: Code,
    link: 'https://learn.parallaxnet.com/admin/tool/certificate/index.php?code=2576734137KI'
  },
  {
    name: 'Cybersecurity Principles',
    issuer: 'Parallaxnet USA',
    year: '2026',
    icon: Shield,
    link: 'https://learn.parallaxnet.com/admin/tool/certificate/index.php?code=1428717375KI'
  },
  {
    name: 'Basic Cloud Computing',
    issuer: 'Parallaxnet USA',
    year: '2026',
    icon: Cloud,
    link: 'https://learn.parallaxnet.com/admin/tool/certificate/index.php?code=0748452614KI'
  },
]

export default function Experience() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.1)}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="section-label">
              <Briefcase size={12} strokeWidth={2.5} />
              Riwayat
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-black/8 to-transparent max-w-xs" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="heading-lg mb-3">
            Perjalanan Akademik & Sertifikasi
          </motion.h2>
          <motion.p variants={fadeUp} className="body-text mb-14 max-w-lg">
            Organisasi tempat saya berkontribusi dan sertifikasi yang telah saya capai selama proses pembelajaran.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Timeline */}
            <div>
              <motion.h3 variants={fadeUp} className="text-xs font-bold tracking-widest uppercase text-muted mb-6"
                style={{ letterSpacing: '0.15em' }}>
                Organisasi & Pendidikan
              </motion.h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-black/10 via-black/10 to-transparent" />

                <div className="flex flex-col gap-8">
                  {experiences.map((exp) => (
                    <motion.div
                      key={exp.role}
                      variants={scaleIn}
                      className="relative pl-12"
                    >
                      {/* Dot */}
                      <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-white bg-ink shadow-sm" />

                      <div className="glass-card rounded-2xl p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className="skill-icon-ring w-8 h-8">
                              <exp.icon size={14} className="text-ink-soft" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-ink-soft">{exp.role}</h4>
                              <p className="text-xs text-muted">{exp.org}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-muted whitespace-nowrap ml-2">
                            <Calendar size={10} />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-xs text-muted leading-relaxed mb-3">{exp.description}</p>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/5 text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.h3 variants={fadeUp} className="text-xs font-bold tracking-widest uppercase text-muted mb-6"
                style={{ letterSpacing: '0.15em' }}>
                Sertifikasi
              </motion.h3>

              <motion.div
                variants={staggerContainer(0.08)}
                className="flex flex-col gap-3"
              >
                {certifications.map((cert) => {
                  // Membungkus kartu menjadi tag <a> jika ada link
                  const CardWrapper = cert.link ? motion.a : motion.div
                  
                  return (
                    <CardWrapper
                      key={cert.name}
                      href={cert.link}
                      target={cert.link ? "_blank" : undefined}
                      rel={cert.link ? "noopener noreferrer" : undefined}
                      variants={scaleIn}
                      className={`glass-card rounded-2xl p-4 flex items-center gap-3 group ${cert.link ? 'cursor-pointer hover:bg-black/5' : ''}`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="skill-icon-ring w-9 h-9 flex-shrink-0 group-hover:shadow-md transition-shadow">
                        <cert.icon size={14} className="text-ink-soft" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-ink-soft leading-snug mb-0.5 line-clamp-2">
                          {cert.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <p className="text-[11px] text-muted">{cert.issuer}</p>
                          <span className="text-[10px] font-semibold text-muted tabular-nums ml-2 flex-shrink-0">
                            {cert.year}
                          </span>
                        </div>
                      </div>
                      {/* Icon penanda link eksternal */}
                      {cert.link && (
                        <ExternalLink size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                      )}
                    </CardWrapper>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}