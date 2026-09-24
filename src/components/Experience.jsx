import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase, BookOpen, Calendar, Users, Code, Shield, Cloud, ExternalLink, Award, Network, X
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'

const experiences = [
  {
    type: 'work',
    role: 'Arsiparis (Magang)',
    org: 'Biro Kesra Setda Prov Kaltim',
    period: 'Juli – Sep 2026',
    description: 'Berperan sebagai arsiparis dalam pengelolaan surat dan arsip melalui SRIKANDI dan E-Setda Kaltim. Mengembangkan DOCMAN untuk membantu ekstraksi informasi agenda dari surat dinas dan pencatatannya secara terstruktur.',
    tags: ['Web App', 'OCR', 'Manajemen Data'],
    icon: Briefcase,
  },
  {
    type: 'org',
    role: 'Sekretaris Departemen Media Kreatif',
    org: 'HIMATIKA UMKT',
    period: '2026 – 2027',
    description: 'Mengelola administrasi departemen, mengoordinasikan program kerja, dan memastikan kelancaran operasional tim media kreatif.',
    tags: ['Kepemimpinan', 'Administrasi'],
    icon: Users,
  },
  {
    type: 'org',
    role: 'Staf Media Kreatif',
    org: 'HIMATIKA UMKT',
    period: '2025 – 2026',
    description: 'Mengelola konten visual dan media sosial HIMATIKA UMKT serta terlibat dalam kebutuhan media kreatif pada berbagai kegiatan, seperti LDK, Makrab, TechnoFest, dan PKKMB.',
    tags: ['Desain', 'Media Sosial', 'Kreatif'],
    icon: Users,
  },
  {
    type: 'study',
    role: 'Teknik Informatika',
    org: 'Universitas Muhammadiyah Kalimantan Timur',
    period: '2024 – Sekarang',
    description: 'Menempuh pendidikan S1 Teknik Informatika dengan peminatan pada Komputasi Cerdas. Mempelajari pengembangan perangkat lunak, kecerdasan buatan, pengolahan data, basis data, serta jaringan komputer. Menerapkan materi perkuliahan melalui berbagai proyek berbasis web, mobile, dan AI.',
    tags: ['Mahasiswa Aktif'],
    icon: BookOpen,
  },
]

const certifications = [
  {
    name: 'Siswa Tersertifikasi Gemini',
    issuer: 'Google for Education',
    year: '2026',
    icon: Award,
    link: '/sertifikat/gemini.pdf' 
  },
  {
    name: 'Sertifikat Magang (Sangat Baik)',
    issuer: 'Biro Kesra Setda Prov Kaltim',
    year: '2026',
    icon: Briefcase,
    link: '/sertifikat/magang-kesra.pdf' 
  },
  {
    name: 'Introduction to Python',
    issuer: 'Parallaxnet USA',
    year: '2026',
    icon: Code,
    link: 'https://learn.parallaxnet.com/admin/tool/certificate/index.php?code=0571504519KI'
  },
  {
    name: 'Introduction to Networks',
    issuer: 'Parallaxnet USA',
    year: '2026',
    icon: Network,
    link: 'https://learn.parallaxnet.com/admin/tool/certificate/index.php?code=3213987399KI'
  },
  {
    name: 'How to build a Business Plan',
    issuer: 'Parallaxnet USA',
    year: '2026',
    icon: Briefcase,
    link: 'https://learn.parallaxnet.com/admin/tool/certificate/index.php?code=6437746432KI'
  },
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
  const [selectedPdf, setSelectedPdf] = useState(null)

  return (
    <>
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
              Perjalanan & Pencapaian
            </motion.h2>
            <motion.p variants={fadeUp} className="body-text mb-14 max-w-lg">
              Rekam jejak pengalaman magang, organisasi, dan sertifikasi profesional yang telah saya capai.
            </motion.p>

            {/* Timeline Pengalaman */}
            <div className="mb-20 max-w-3xl">
              <motion.h3 variants={fadeUp} className="text-xs font-bold tracking-widest uppercase text-muted mb-8"
                style={{ letterSpacing: '0.15em' }}>
                Pengalaman & Organisasi
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
                        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                          <div className="flex items-center gap-2.5">
                            <div className="skill-icon-ring w-8 h-8">
                              <exp.icon size={14} className="text-ink-soft" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-ink-soft">{exp.role}</h4>
                              <p className="text-xs text-muted">{exp.org}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-muted whitespace-nowrap md:ml-2">
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

            {/* Grid Sertifikasi */}
            <div>
              <motion.h3 variants={fadeUp} className="text-xs font-bold tracking-widest uppercase text-muted mb-6"
                style={{ letterSpacing: '0.15em' }}>
                Sertifikasi Profesional
              </motion.h3>

              <motion.div
                variants={staggerContainer(0.08)}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {certifications.map((cert) => {
                  // Cek apakah link adalah file PDF lokal
                  const isPdf = cert.link && cert.link.endsWith('.pdf');
                  
                  // Jika PDF, gunakan tag <button>, jika link luar gunakan tag <a>
                  const CardWrapper = cert.link ? (isPdf ? motion.button : motion.a) : motion.div;
                  
                  // Properti khusus berdasarkan tipe tombol/link
                  const wrapperProps = cert.link ? {
                    onClick: isPdf ? () => setSelectedPdf(cert.link) : undefined,
                    href: !isPdf ? cert.link : undefined,
                    target: !isPdf ? "_blank" : undefined,
                    rel: !isPdf ? "noopener noreferrer" : undefined,
                  } : {};

                  return (
                    <CardWrapper
                      key={cert.name}
                      {...wrapperProps}
                      variants={scaleIn}
                      className={`text-left w-full glass-card rounded-2xl p-4 flex items-center gap-3 group ${cert.link ? 'cursor-pointer hover:bg-black/5' : ''}`}
                      whileHover={cert.link ? { y: -4 } : {}}
                    >
                      <div className="skill-icon-ring w-9 h-9 flex-shrink-0 group-hover:shadow-md transition-shadow">
                        <cert.icon size={14} className="text-ink-soft" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-ink-soft leading-snug mb-0.5 line-clamp-2">
                          {cert.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <p className="text-[11px] text-muted truncate">{cert.issuer}</p>
                          <span className="text-[10px] font-semibold text-muted tabular-nums ml-2 flex-shrink-0">
                            {cert.year}
                          </span>
                        </div>
                      </div>
                      {cert.link && (
                        <ExternalLink size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
                      )}
                    </CardWrapper>
                  )
                })}
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Pop-up Modal untuk PDF */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8">
          {/* Tombol Tutup */}
          <button
            onClick={() => setSelectedPdf(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
            aria-label="Tutup PDF"
          >
            <X size={32} />
          </button>

          {/* Kontainer PDF */}
          <div className="w-full max-w-4xl h-[80vh] sm:h-[90vh] bg-white rounded-xl overflow-hidden relative shadow-2xl">
            <iframe
              src={selectedPdf}
              className="w-full h-full border-0"
              title="Sertifikat PDF"
            />
          </div>
        </div>
      )}
    </>
  )
}