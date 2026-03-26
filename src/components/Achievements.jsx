import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'
import { achievements } from '../data/portfolioData'
import { FaExternalLinkAlt } from 'react-icons/fa'

const badgeColor = {
  green: 'bg-green-em/10 text-green-em border-green-em/20',
  pink:  'bg-pink-acc/10  text-pink-acc  border-pink-acc/20',
  flame: 'bg-flame/10    text-flame    border-flame/20',
}
const hoverGlow = {
  green: 'hover:border-green-em/50 hover:shadow-glow-green',
  pink:  'hover:border-pink-acc/50 hover:shadow-glow-pink',
  flame: 'hover:border-flame/50    hover:shadow-glow-flame',
}

function AchCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className={`relative card-premium p-6 ${hoverGlow[item.color]}
                  hover:-translate-y-1 transition-all duration-300`}
    >
      <span
        className={`absolute top-4 right-4 text-[0.58rem] font-bold tracking-[1.5px] uppercase
                    px-2 py-0.5 border rounded-sm ${badgeColor[item.color]}`}
      >
        {item.badge}
      </span>

      <span className="text-3xl mb-4 block">{item.icon}</span>
      <h4 className="text-[0.95rem] font-bold text-white mb-2">{item.title}</h4>
      <p className="text-gray-500 text-[0.8rem] leading-relaxed mb-4">{item.desc}</p>
      
      {item.link && (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold tracking-[2px] uppercase text-gray-400 hover:text-green-em transition-colors"
        >
          View Credential <FaExternalLinkAlt className="text-[0.6rem]" />
        </a>
      )}
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-8 md:px-20 bg-transparent min-h-[80vh] flex flex-col justify-center w-full">
      <SectionHeader label="⚡ Milestones" titleLeft="Core" titleAccent="Achievements" />
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <AchCard key={i} item={a} index={i} />
        ))}
      </div>
    </section>
  )
}
