import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { projects } from '../data/portfolioData'

const tagColorMap = {
  green: 'bg-green-em/10 text-green-em',
  pink:  'bg-pink-acc/10 text-pink-acc',
  flame: 'bg-flame/10    text-flame',
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative card-base overflow-hidden group flex flex-col h-full
                 hover:-translate-y-2 hover:border-green-em/40 hover:shadow-card-hover
                 transition-all duration-400"
    >
      {/* Preview */}
      <div className={`${project.preview} relative h-44 flex items-center justify-center overflow-hidden`}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <span className="text-6xl select-none z-10 relative">{project.emoji}</span>
        )}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 z-20"
        >
          <a href={project.github} target="_blank" rel="noreferrer"
             className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center
                        text-white hover:border-green-em hover:text-green-em transition-colors"
             data-hover>
            <FaGithub />
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer"
             className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center
                        text-white hover:border-green-em hover:text-green-em transition-colors"
             data-hover>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16
                        bg-gradient-to-t from-bg-section to-transparent" />
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10
                          bg-green-em/20 border border-green-em/40
                          text-green-em text-[0.58rem] font-bold tracking-[2px] uppercase px-2 py-0.5">
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3 min-h-[2.75rem] content-start">
          {project.tags.map((tag, ti) => (
            <span
              key={tag}
              className={`${tagColorMap[project.tagColors[ti]] ?? tagColorMap.green}
                          text-[0.6rem] font-bold tracking-[1px] uppercase px-2 py-0.5 rounded-sm`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bebas text-2xl tracking-[2px]">{project.title}</h3>
          <div className="flex text-yellow-500 text-[0.6rem]">
            {Array.from({ length: project.difficulty || 4 }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-400 text-[0.84rem] leading-relaxed mb-4">{project.description}</p>
        
        <div className="mt-auto">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[0.65rem] tracking-[1.5px] uppercase text-gray-500 font-bold">Status:</span>
            <span className={`text-[0.65rem] tracking-[1.5px] uppercase font-bold ${project.status === 'Completed' ? 'text-green-em' : 'text-flame'}`}>
              {project.status || 'Completed'}
            </span>
          </div>

          <div className="flex gap-2.5 pt-4 border-t border-white/[0.06]">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="flex-1 flex items-center justify-center gap-1.5
                         border border-white/10 py-2 text-[0.68rem] font-bold tracking-[2px] uppercase
                         text-gray-400 rounded-sm transition-all duration-300
                         hover:border-green-em hover:text-green-em"
            >
              <FaGithub /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="flex-1 flex items-center justify-center gap-1.5
                         bg-green-em py-2 text-[0.68rem] font-bold tracking-[2px] uppercase
                         text-black rounded-sm transition-all duration-300 hover:bg-white"
            >
              <FaExternalLinkAlt className="text-[0.6rem]" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-20 bg-transparent">
      <SectionHeader label="⚡ Portfolio" titleLeft="Featured" titleAccent="Projects" accentColor="pink" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
