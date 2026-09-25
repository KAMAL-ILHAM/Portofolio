import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FolderCode, ExternalLink, Github,
  Globe, Zap, Server, ArrowUpRight, 
  Brain, Smartphone, Database, QrCode, Box, Cloud, FileCode,
  Image as ImageIcon, X, ChevronLeft, ChevronRight
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Educational Intelligence Organizer (EIO)',
    description: 'Sistem web berbasis kecerdasan buatan yang dirancang untuk membantu proses pembelajaran mahasiswa secara terstruktur. Menyediakan fitur peringkasan materi otomatis, kuis adaptif, serta manajemen pembelajaran yang terintegrasi.',
    tech: [
      { name: 'Django / Python', icon: FileCode },
      { name: 'React', icon: Zap },
      { name: 'AI Integration', icon: Brain },
      { name: 'Database', icon: Database },
    ],
    github: 'https://github.com/KAMAL-ILHAM/Educational-Intelligence-Organizer-EIO-',
    demo: 'https://eio.pythonanywhere.com/',
    featured: true,
    tag: 'Full-Stack / AI',
    images: [
      '/images/Educational Intelligence Organizer (EIO)/1.png',
      '/images/Educational Intelligence Organizer (EIO)/2.png',
      '/images/Educational Intelligence Organizer (EIO)/3.png',
      '/images/Educational Intelligence Organizer (EIO)/4.png',
      '/images/Educational Intelligence Organizer (EIO)/5.png',
      '/images/Educational Intelligence Organizer (EIO)/6.png',
      '/images/Educational Intelligence Organizer (EIO)/7.png',
    ] 
  },
  {
    title: 'AI Healthcare Platform',
    description: 'Platform kesehatan berbasis web yang memanfaatkan kecerdasan buatan untuk membantu analisis informasi kesehatan dan memberikan rekomendasi awal secara digital. Berfokus pada akses informasi medis secara cepat dan interaktif.',
    tech: [
      { name: 'Next.js / TS', icon: Zap },
      { name: 'Prisma ORM', icon: Database },
      { name: 'AI Model', icon: Brain },
      { name: 'Tailwind CSS', icon: Box },
    ],
    github: 'https://github.com/KAMAL-ILHAM/ai-healthcare-platform',
    demo: 'https://ai-healthcare-platform.vercel.app/',
    featured: false,
    tag: 'Web AI',
    images: [
      '/images/AI Healthcare Platform/1.png',
      '/images/AI Healthcare Platform/2.png',
      '/images/AI Healthcare Platform/3.png',
      '/images/AI Healthcare Platform/4.png',
      '/images/AI Healthcare Platform/5.png',
      '/images/AI Healthcare Platform/tampilan mobile 1.png',
      '/images/AI Healthcare Platform/tampilan mobile 2.png',
    ]
  },
  {
    title: 'FIX IT (Aplikasi Admin)',
    description: 'Aplikasi Android khusus Admin untuk mengelola sistem pelaporan fasilitas kampus. Memiliki fitur login admin, dashboard antrean laporan, penugasan teknisi, serta manajemen profil dan keamanan akun.',
    tech: [
      { name: 'Android Studio', icon: Smartphone },
      { name: 'Java/Kotlin', icon: FileCode },
      { name: 'Firebase', icon: Database },
    ],
    demo: null,
    featured: false,
    tag: 'Mobile App',
    images: [
      '/images/FIX IT (Aplikasi Admin)/1.png',
      '/images/FIX IT (Aplikasi Admin)/2.png',
      '/images/FIX IT (Aplikasi Admin)/3.png',
    ]
  },
  {
    title: 'FIX IT (Aplikasi User)',
    description: 'Aplikasi Android pendamping FIX IT yang memfasilitasi pelaporan kondisi fasilitas kampus oleh mahasiswa. Memungkinkan pengguna melaporkan kerusakan secara cepat dan terstruktur agar dapat ditindaklanjuti oleh admin.',
    tech: [
      { name: 'Android Studio', icon: Smartphone },
      { name: 'Java/Kotlin', icon: FileCode },
      { name: 'Firebase', icon: Database },
    ],
    github: 'https://github.com/KAMAL-ILHAM/Pelaporan-Fasilitas-Kampus',
    demo: null,
    featured: false,
    tag: 'Mobile App',
    images: [
      '/images/FIX IT (Aplikasi User)/3.png',
      '/images/FIX IT (Aplikasi User)/4.png',
      '/images/FIX IT (Aplikasi User)/5.png',
      '/images/FIX IT (Aplikasi User)/6.png',
      '/images/FIX IT (Aplikasi User)/7.png',
      '/images/FIX IT (Aplikasi User)/8.png',
    ]
  },
  {
    title: 'QR AI Healthcare System',
    description: 'Sistem berbasis web yang dilengkapi QR Code sebagai media akses aplikasi saat demonstrasi.',
    tech: [
      { name: 'Next.js / TS', icon: Zap },
      { name: 'Redis', icon: Database },
      { name: 'QR API', icon: QrCode },
      { name: 'Tailwind CSS', icon: Box },
    ],
    github: 'https://github.com/KAMAL-ILHAM/qr-ai-healthcare',
    demo: 'https://qr-ai-healthcare.vercel.app',
    featured: false,
    tag: 'Web App',
    images: [
      '/images/QR AI Healthcare System/1.png',
    ]
  },
  {
    title: 'DOCMAN (Document Management System)',
    description: 'Sistem otomasi ekstraksi agenda dari surat dinas berformat PDF menggunakan Tesseract OCR dan Regex. Mengatasi pencatatan manual dengan mengubah teks surat menjadi data agenda terstruktur (perihal, waktu, lokasi) yang terintegrasi langsung ke dalam kalender sistem.',
    tech: [
      { name: 'Django / Python', icon: FileCode }, 
      { name: 'HTML/JS/CSS', icon: Globe },
      { name: 'Tesseract OCR', icon: Brain }, 
      { name: 'Local Database', icon: Database },
    ],
    github: 'https://github.com/KAMAL-ILHAM/Project-PKL', 
    demo: null,
    featured: false,
    tag: 'Web App / OCR',
    images: [
      '/images/DOCMAN (Document Management System)/1.png',
      '/images/DOCMAN (Document Management System)/2.png',
      '/images/DOCMAN (Document Management System)/3.png',
      '/images/DOCMAN (Document Management System)/4.png',
      '/images/DOCMAN (Document Management System)/5.png',
      '/images/DOCMAN (Document Management System)/6.png',
      '/images/DOCMAN (Document Management System)/7.png',
    ]
  },
]

function ProjectCard({ project, index, onOpenGallery }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={`glass-card rounded-2xl p-6 flex flex-col group relative overflow-hidden ${
        project.featured ? 'sm:col-span-2' : ''
      }`}
      whileHover={{ y: -6 }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,0,0,0.04) 0%, transparent 70%)' }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="skill-icon-ring w-10 h-10 group-hover:shadow-md transition-all duration-300">
            <FolderCode size={16} className="text-ink-soft" />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted px-2 py-0.5 rounded-full bg-black/5"
            style={{ letterSpacing: '0.12em' }}>
            {project.tag}
          </span>
        </div>
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          
          {/* Tombol Galeri (Selalu Muncul) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenGallery(project.images || []);
            }}
            aria-label="Lihat Galeri"
            className="flex items-center justify-center w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 transition-colors cursor-pointer z-10"
          >
            <ImageIcon size={13} />
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 transition-colors z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={13} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 transition-colors z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="heading-md text-base mb-2.5 group-hover:text-ink transition-colors relative z-10">
        {project.title}
      </h3>
      <p className="text-xs text-muted leading-relaxed flex-1 mb-5 relative z-10">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {project.tech.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/5 group-hover:bg-black/8 transition-colors"
          >
            <Icon size={11} className="text-muted" />
            <span className="text-[11px] font-medium text-muted">{name}</span>
          </div>
        ))}
      </div>

      {/* Arrow hint */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <ArrowUpRight size={14} className="text-muted" />
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { ref, controls } = useScrollReveal()
  
  // State untuk mengelola galeri
  const [gallery, setGallery] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  })

  const openGallery = (images) => {
    if (images && images.length > 0) {
      setGallery({ isOpen: true, images, currentIndex: 0 })
    } else {
      alert("Belum ada foto untuk proyek ini.")
    }
  }

  const closeGallery = () => setGallery({ ...gallery, isOpen: false })
  
  const nextImage = () => {
    setGallery(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }))
  }
  
  const prevImage = () => {
    setGallery(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }))
  }

  return (
    <>
      <section id="projects" className="relative py-28 px-6">
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
                <Globe size={12} strokeWidth={2.5} />
                Proyek
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-black/8 to-transparent max-w-xs" />
            </motion.div>

            <motion.h2 variants={fadeUp} className="heading-lg mb-3">
              Hal yang Telah Saya Bangun
            </motion.h2>
            <motion.p variants={fadeUp} className="body-text mb-14 max-w-lg">
              Kumpulan proyek pribadi dan akademik yang saya kembangkan sebagai bagian dari proses pembelajaran, eksplorasi teknologi, dan implementasi solusi berbasis perangkat lunak.
            </motion.p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={i} 
                onOpenGallery={openGallery} 
              />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <a
              href="https://github.com/KAMAL-ILHAM" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={15} />
              Lihat semua di GitHub
              <ArrowUpRight size={13} className="text-muted" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal Galeri / Lightbox */}
      {gallery.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button
            onClick={closeGallery}
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
            aria-label="Tutup"
          >
            <X size={28} />
          </button>

          {gallery.images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img
              src={gallery.images[gallery.currentIndex]}
              alt={`Galeri foto ${gallery.currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
            />
          </div>

          {gallery.images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
              aria-label="Selanjutnya"
            >
              <ChevronRight size={36} />
            </button>
          )}

          {/* Indikator halaman foto */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/50 rounded-full text-white/90 text-sm font-medium tracking-wide">
            {gallery.currentIndex + 1} / {gallery.images.length}
          </div>
        </div>
      )}
    </>
  )
}