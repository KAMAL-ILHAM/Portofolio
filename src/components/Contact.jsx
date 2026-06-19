import { motion } from 'framer-motion'
import {
  Mail, Github, Send, MessageCircle, ArrowUpRight, AtSign
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: '2411102441015@umkt.ac.id',
    href: 'mailto:2411102441015@umkt.ac.id',
    description: 'Untuk keperluan profesional dan akademik',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/KAMAL-ILHAM',
    href: 'https://github.com/KAMAL-ILHAM',
    description: 'Lihat kode dan repositori proyek saya',
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
            Terbuka untuk peluang magang, proyek lepas, dan kolaborasi. 
            Kirimkan pesan — saya akan membalas dalam waktu 24 jam.
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
                  Baik Anda memiliki ide proyek, butuh kolaborator, atau sekadar ingin mengobrol tentang teknologi — saya selalu senang terhubung.
                </p>

                <div className="flex flex-col gap-3">
                  <motion.a
                    href="mailto:2411102441015@umkt.ac.id"
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
                    <span className="font-medium text-ink-soft"></span>
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
                      <p className="text-[11px] text-muted">{link.description}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </motion.a>
                ))}

                {/* Handle badge */}
                <motion.div
                  variants={scaleIn}
                  className="rounded-2xl border border-dashed border-black/12 p-4 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
                    <AtSign size={14} className="text-muted" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-ink-soft">Username</p>
                    <p className="text-[11px] text-muted">@KAMAL-ILHAM di berbagai platform</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}