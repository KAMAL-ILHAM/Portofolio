import { motion } from 'framer-motion'
import {
  FolderCode, ExternalLink, Github,
  Globe, Zap, Server, ArrowUpRight, 
  Brain, Smartphone, Database, QrCode, Box, Cloud, FileCode
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Educational Intelligence Organizer (EIO)',
    description: 'Sistem web berbasis kecerdasan buatan yang dirancang untuk membantu proses pembelajaran mahasiswa secara terstruktur. Menyediakan fitur peringkasan materi otomatis, kuis adaptif, serta manajemen pembelajaran yang terintegrasi.',
    tech: [
      { name: 'React', icon: Zap },
      { name: 'Node.js', icon: Box },
      { name: 'AI Integration', icon: Brain },
      { name: 'Web Deployment', icon: Globe },
    ],
    github: 'https://github.com/KAMAL-ILHAM/Educational-Intelligence-Organizer-EIO-',
    demo: 'https://eio.pythonanywhere.com/',
    featured: true,
    tag: 'Full-Stack',
  },
  {
    title: 'AI Healthcare Platform',
    description: 'Platform kesehatan berbasis web yang memanfaatkan kecerdasan buatan untuk membantu analisis informasi kesehatan dan memberikan rekomendasi awal secara digital. Berfokus pada akses informasi medis secara cepat dan interaktif.',
    tech: [
      { name: 'React', icon: Zap },
      { name: 'API Integration', icon: Server },
      { name: 'AI Model', icon: Brain },
      { name: 'Vercel Deployment', icon: Cloud },
    ],
    github: 'https://github.com/KAMAL-ILHAM/ai-healthcare-platform',
    demo: 'https://ai-healthcare-platform.vercel.app/',
    featured: false,
    tag: 'Web AI',
  },
  {
    title: 'QR AI Healthcare System',
    description: 'Sistem berbasis QR Code yang terintegrasi dengan platform kesehatan AI untuk mempercepat akses data dan informasi pasien melalui pemindaian kode QR. Menggabungkan teknologi identifikasi cepat dengan analitik berbasis AI.',
    tech: [
      { name: 'React', icon: Zap },
      { name: 'QR Integration', icon: QrCode },
      { name: 'AI Services', icon: Brain },
      { name: 'Web App', icon: Globe },
    ],
    github: 'https://github.com/KAMAL-ILHAM/qr-ai-healthcare',
    demo: 'https://qr-ai-healthcare.vercel.app',
    featured: false,
    tag: 'Web App',
  },
  {
    title: 'Pelaporan Fasilitas Kampus',
    description: 'Aplikasi Android yang dikembangkan untuk memfasilitasi pelaporan kondisi fasilitas kampus oleh mahasiswa. Memungkinkan pengguna melaporkan kerusakan secara cepat dan terstruktur agar dapat ditindaklanjuti oleh pihak terkait.',
    tech: [
      { name: 'Android Studio', icon: Smartphone },
      { name: 'Java/Kotlin', icon: FileCode },
      { name: 'Firebase', icon: Database },
    ],
    github: 'https://github.com/KAMAL-ILHAM/Pelaporan-Fasilitas-Kampus',
    demo: null,
    featured: false,
    tag: 'Mobile App',
  },
]

function ProjectCard({ project, index }) {
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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
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
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="heading-md text-base mb-2.5 group-hover:text-ink transition-colors">
        {project.title}
      </h3>
      <p className="text-xs text-muted leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
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

  return (
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
            <ProjectCard key={project.title} project={project} index={i} />
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
  )
}