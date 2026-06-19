import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Mail, Sparkles } from 'lucide-react' 

// Disinkronkan dengan preferensi identitas dan role IT
const words = ['Developer', 'Engineer', 'Programmer', 'Kreator'] 

export default function Hero() {
  const containerRef = useRef(null)
  const wordRef = useRef(null)
  const wordIndex = useRef(0)

  useEffect(() => {
    const el = wordRef.current
    if (!el) return

    const cycle = () => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(12px)'
      setTimeout(() => {
        wordIndex.current = (wordIndex.current + 1) % words.length
        el.textContent = words[wordIndex.current]
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300)
    }

    const interval = setInterval(cycle, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(229,231,235,0.6) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(209,213,219,0.5) 0%, transparent 70%)',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(243,244,246,0.8) 0%, transparent 65%)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-10"
      >
        {/* Main heading */}
        <div className="text-center mb-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-medium text-muted tracking-widest uppercase mb-4"
            style={{ letterSpacing: '0.2em' }}
          >
            Teknik Informatika · UMKT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="heading-xl mb-4"
          >
            Kamal Ilham
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex items-center justify-center gap-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-muted"
          >
            <span>Full-Stack</span>
            <span
              ref={wordRef}
              className="text-ink"
              style={{
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                display: 'inline-block',
              }}
            >
              {words[0]}
            </span>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center body-text max-w-xl mx-auto text-lg mb-8"
        >
          Merancang pengalaman web yang rapi dan optimal dari
          <em className="not-italic font-medium text-ink-soft"> Samarinda</em> — mengubah masalah kompleks menjadi antarmuka yang elegan.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Lihat Proyek
          </motion.button>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Hubungi Saya
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-3 mb-12"
        >
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/KAMAL-ILHAM' },
            { icon: Mail, label: 'Email', href: 'mailto:2411102441015@umkt.ac.id' },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="skill-icon-ring hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
            >
              <Icon size={16} className="text-muted" />
            </motion.a>
          ))}
        </motion.div>

        {/* Hero glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="glass-card rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: '2', label: 'Tahun Belajar', sub: 'React, Node, Python' },
              { value: '4+', label: 'Proyek Utama', sub: 'Dari ide hingga deploy' },
              { value: '1', label: 'Organisasi', sub: 'Staf Media Kreatif HIMATIKA' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-ink mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-ink-soft mb-0.5">{stat.label}</div>
                <div className="text-xs text-muted">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-ink transition-colors"
        aria-label="Gulir ke tentang"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  )
}