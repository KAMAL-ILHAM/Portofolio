import { motion } from 'framer-motion'
import { User, Github, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/6 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="skill-icon-ring w-8 h-8">
              {/* Ikon Terminal diganti menjadi User */}
              <User size={13} strokeWidth={2.5} className="text-ink" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Kamal Ilham</p>
              <p className="text-[11px] text-muted">Teknik Informatika · UMKT</p>
            </div>
          </div>
          {/* Social links */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: 'https://github.com/KAMAL-ILHAM', label: 'GitHub' },
              { icon: Mail, href: 'mailto:2411102441015@umkt.ac.id', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="skill-icon-ring w-8 h-8 hover:shadow-md transition-all"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={13} className="text-muted" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}