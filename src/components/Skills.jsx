import { motion } from 'framer-motion'
import {
  Layers, Server, Database, Wrench,
  Globe, Zap, Coffee, Box, GitBranch,
  Container, Monitor, Cpu, Wind, FileCode,
  Terminal, TextCursor
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'

// Persentase (level) sudah dihapus dari data
const skillGroups = [
  {
    category: 'Frontend',
    icon: Globe,
    skills: [
      { name: 'React', icon: Zap },
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Wind },
      { name: 'JavaScript', icon: Coffee },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Box },
      { name: 'Express', icon: Server },
      { name: 'Python', icon: Terminal },
      { name: 'Django', icon: Box },
      { name: 'REST API', icon: Layers },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'NeonDB', icon: Database },
      { name: 'Prisma ORM', icon: Layers },
    ],
  },
  {
    category: 'Alat & Tools',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Docker', icon: Container },
      { name: 'Cursor', icon: TextCursor },
      { name: 'VS Code', icon: Monitor },
      { name: 'Vite', icon: Cpu },
    ],
  },
]

export default function Skills() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="skills" className="relative py-28 px-6">
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
              <Cpu size={12} strokeWidth={2.5} />
              Keahlian
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-black/8 to-transparent max-w-xs" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="heading-lg mb-3">
            Stack Teknologi
          </motion.h2>
          <motion.p variants={fadeUp} className="body-text mb-14 max-w-lg">
            Alat dan teknologi yang saya gunakan sehari-hari untuk membangun aplikasi yang tangguh dan terukur.
          </motion.p>

          {/* Grid */}
          <motion.div
            variants={staggerContainer(0.08)}
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={scaleIn}
                className="glass-card rounded-2xl p-6 group"
                whileHover={{ y: -4 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="skill-icon-ring w-9 h-9 group-hover:shadow-md transition-shadow">
                    <group.icon size={15} className="text-ink-soft" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-muted" style={{ letterSpacing: '0.12em' }}>
                    {group.category}
                  </span>
                </div>

                {/* Skills list (Tampilan baru tanpa persentase) */}
                <ul className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <li 
                      key={skill.name}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/5 transition-colors duration-200"
                    >
                      <skill.icon size={14} className="text-muted" />
                      <span className="text-sm font-medium text-ink-soft">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}