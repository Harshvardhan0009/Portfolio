import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaGlobe, FaTools, FaBrain } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { skills } from '../data/portfolioData'

const iconMap = { FaCode, FaGlobe, FaTools, FaBrain }

const typeColorMap = {
  water: 'border-ds-water/20 text-gray-400 hover:border-ds-water hover:text-ds-water shadow-none hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]',
  flame: 'border-ds-flame/20 text-gray-400 hover:border-ds-flame hover:text-ds-flame shadow-none hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]',
  thunder: 'border-ds-thunder/20 text-gray-400 hover:border-ds-thunder hover:text-ds-thunder shadow-none hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]',
  mist: 'border-ds-mist/20 text-gray-400 hover:border-ds-mist hover:text-ds-mist shadow-none hover:shadow-[0_0_15px_rgba(209,213,219,0.4)]',
  stone: 'border-ds-stone/20 text-gray-400 hover:border-ds-stone hover:text-ds-stone shadow-none hover:shadow-[0_0_15px_rgba(120,113,108,0.4)]',
}

function SkillCard({ card, index }) {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const Icon = iconMap[card.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        className="skill-card-inner relative card-premium p-7 h-full overflow-hidden group
                   hover:-translate-y-1 hover:border-green-em/30 hover:shadow-[0_8px_30px_rgba(34,197,94,0.15)] transition-all duration-500"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        {/* Beautiful Glassmorphism & Image Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Glow Orbs */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-em/20 rounded-full blur-[40px] group-hover:bg-green-em/40 transition-colors duration-700 z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-flame/20 rounded-full blur-[40px] group-hover:bg-flame/40 transition-colors duration-700 z-0"></div>
          
          {/* Dynamic Image Layer */}
          <img 
            src="/images/Code Aesthetic || Vscode themes || Dracula Theme Soft || Coder Aesthetic.avif" 
            alt="Skills Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[3px] group-hover:blur-0 group-hover:opacity-85 transition-all duration-700 group-hover:scale-110 z-10"
          />
          
          {/* Elegant Dark Gradient overlay for reading */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D]/95 via-transparent to-[#0B0B0D]/95 group-hover:from-black/60 group-hover:via-transparent group-hover:to-black/60 transition-all duration-700 z-20"></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-20"></div>
        </div>

        <div className="relative z-30">
          <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{card.icon}</span>
          <span className="text-[0.65rem] font-bold tracking-[4px] uppercase text-gray-300">
            {card.category}
          </span>
        </div>
        <div className="mb-5 text-[0.75rem] font-bold tracking-[2px] uppercase text-gray-400">
          {card.style}
        </div>
        <div className="flex flex-wrap gap-2">
          {card.items.map(item => (
            <span key={item} className={`px-3 py-1.5 border text-[0.74rem] font-medium rounded-sm cursor-default transition-all duration-300 ${typeColorMap[card.type] || typeColorMap.stone}`}>
              {item}
            </span>
          ))}
        </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-20 bg-transparent">
      <SectionHeader label="⚡ Technical Arsenal" titleLeft="Core" titleAccent="Proficiencies" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skills.map((card, i) => (
          <SkillCard key={card.category} card={card} index={i} />
        ))}
      </div>
    </section>
  )
}
