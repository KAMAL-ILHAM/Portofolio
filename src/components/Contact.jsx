import { motion } from 'framer-motion'
import {
  Mail, Github, Send, MessageCircle, ArrowUpRight, Linkedin
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email Pribadi',
    value: 'kamalilham214@gmail.com',
    href: 'mailto:kamalilham214@gmail.com',
  },
  {
    icon: Mail,
    label: 'Email Kampus',
    value: '2411102441015@umkt.ac.id',
    href: 'mailto:2411102441015@umkt.ac.id',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kamal-ilham',
    href: 'https://www.linkedin.com/in/kamal-ilham',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/KAMAL-ILHAM',
    href: 'https://github.com/KAMAL-ILHAM',
  },
]

export default function Contact() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="contact" className="relative py-28 px-6">
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
              <MessageCircle size={12} strokeWidth={2.5} />
              Kontak
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-black/8 to-transparent max-w-xs" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="heading-lg mb-3">
            Mari Berkolaborasi
          </motion.h2>
          <motion.p variants={fadeUp} className="body-text mb-14 max-w-lg">
            Terbuka untuk peluang magang, proyek, dan kolaborasi di bidang teknologi.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — CTA card */}
            <motion.div variants={scaleIn}>
              <div className="glass-card rounded-3xl p-8">
                <div className="skill-icon-ring w-12 h-12 mb-6">
                  <Send size={18} className="text-ink-soft" />
                </div>
                <h3 className="heading-md mb-3">Kirim Pesan</h3>
                <p className="text-sm text-muted leading-relaxed mb-8">
                  Silakan hubungi saya melalui email atau LinkedIn untuk peluang dan kolaborasi.
                </p>

                <div className="flex flex-col gap-3">
                  <motion.a
                    href="mailto:kamalilham214@gmail.com"
                    className="btn-primary justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Mail size={15} />
                    Kirim Email
                  </motion.a>
                </div>

                {/* Availability indicator */}
                <div className="mt-8 pt-6 border-t border-black/6 flex items-center gap-3">
                  <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </div>
                  <p className="text-xs text-muted">
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — Links */}
            <div>
              <motion.h3
                variants={fadeUp}
                className="text-xs font-bold tracking-widest uppercase text-muted mb-5"
                style={{ letterSpacing: '0.15em' }}
              >
                Temukan Saya
              </motion.h3>

              <motion.div variants={staggerContainer(0.1)} className="flex flex-col gap-3">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={scaleIn}
                    className="glass-card rounded-2xl p-4 flex items-center gap-4 group no-underline"
                    whileHover={{ x: 4 }}
                  >
                    <div className="skill-icon-ring w-10 h-10 flex-shrink-0 group-hover:shadow-md transition-shadow">
                      <link.icon size={16} className="text-ink-soft" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-muted uppercase tracking-wider mb-0.5"
                        style={{ letterSpacing: '0.1em' }}>
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-ink-soft truncate">{link.value}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}