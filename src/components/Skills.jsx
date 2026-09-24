import { motion } from 'framer-motion'
import {
  Layers, Server, Database, Wrench,
  Globe, Zap, Coffee, Box, GitBranch,
  Container, Monitor, Cpu, Wind, FileCode,
  Terminal, TextCursor, Brain, Smartphone, 
  Network, Scan, Braces, Cloud, Code2, 
  Figma, Palette, Github, Table, FileText, Presentation
} from 'lucide-react'
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    category: 'Development',
    icon: Code2,
    skills: [
      { name: 'React', icon: Zap },
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Wind },
      { name: 'JavaScript', icon: Coffee },
      { name: 'Python', icon: Terminal },
      { name: 'Django', icon: Layers },
      { name: 'Node.js', icon: Box },
      { name: 'Express', icon: Server },
      { name: 'REST API', icon: Network },
    ],
  },
  {
    category: 'AI & Data',
    icon: Brain,
    skills: [
      { name: 'Groq API', icon: Cpu },
      { name: 'Tesseract OCR', icon: Scan },
      { name: 'Regular Expression', icon: Braces },
      { name: 'MySQL', icon: Database },
      { name: 'Firebase', icon: Cloud },
    ],
  },
  {
    category: 'Mobile & Design',
    icon: Smartphone,
    skills: [
      { name: 'Kotlin', icon: Code2 },
      { name: 'Android Studio', icon: Smartphone },
      { name: 'Figma', icon: Figma },
      { name: 'Canva', icon: Palette },
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'VS Code', icon: Monitor },
      { name: 'Cursor', icon: TextCursor },
      { name: 'Vite', icon: Zap },
      { name: 'Docker', icon: Container },
      { name: 'Microsoft Excel', icon: Table },
      { name: 'Microsoft Word', icon: FileText },
      { name: 'Microsoft PowerPoint', icon: Presentation },
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
          Teknologi dan tools yang saya pelajari dan gunakan dalam berbagai proyek.
          </motion.p>

          {/* Grid dengan tambahan items-start */}
          <motion.div
            variants={staggerContainer(0.08)}
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start"
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

                {/* Skills list */}
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