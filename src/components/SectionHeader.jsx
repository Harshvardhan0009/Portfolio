import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeader({ label, titleLeft, titleAccent, accentColor = 'green' }) {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  const accentClass = {
    green: 'text-green-em',
    pink:  'text-pink-acc',
    flame: 'text-flame',
  }[accentColor]

  return (
    <div ref={ref} className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="section-label"
      >
        {label}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="section-title"
      >
        {titleLeft} <span className={accentClass}>{titleAccent}</span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="section-divider"
      />
    </div>
  )
}
