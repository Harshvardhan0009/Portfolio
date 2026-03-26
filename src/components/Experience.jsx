import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLaptopCode, FaUsers, FaCode, FaBriefcase } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { experience } from '../data/portfolioData'

const iconMap = { FaLaptopCode, FaUsers, FaCode, FaBriefcase }

const typeBadge = {
  Internship: 'bg-green-em/10 text-green-em border-green-em/20',
  Leadership:  'bg-pink-acc/10 text-pink-acc border-pink-acc/20',
  Freelance:   'bg-flame/10    text-flame    border-flame/20',
}

function ExpItem({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const Icon = iconMap[item.icon] ?? FaBriefcase

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-16 mb-10 last:mb-0"
    >
      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-11 h-11 rounded-full
                   bg-bg-section border-2 border-green-em
                   flex items-center justify-center text-green-em
                   shadow-glow-green z-10"
      >
        <Icon className="text-sm" />
      </div>

      {/* Card */}
      <div
        className="card-premium p-6
                   hover:border-green-em/40 hover:shadow-glow-green
                   hover:-translate-y-0.5 transition-all duration-300"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
          <h3 className="text-base font-bold text-white">{item.role}</h3>
          <span
            className={`text-[0.58rem] font-bold tracking-[1.5px] uppercase
                        px-2 py-0.5 border rounded-sm ${typeBadge[item.type] ?? typeBadge.Internship}`}
          >
            {item.type}
          </span>
        </div>
        <p className="text-green-em text-sm font-semibold mb-1">{item.org}</p>
        <p className="text-gray-600 text-[0.72rem] tracking-[2px] uppercase mb-4">{item.duration}</p>

        <ul className="space-y-1.5 list-none">
          {item.points.map((pt, pi) => (
            <li key={pi} className="flex gap-3 text-gray-400 text-[0.84rem] leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-green-em flex-shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-20 bg-transparent">
      <SectionHeader label="⚔ Journey" titleLeft="Experience &" titleAccent="Training" />

      <div className="max-w-3xl mx-auto timeline-line relative">
        {experience.map((item, i) => (
          <ExpItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
