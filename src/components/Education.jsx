import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaStar, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { education } from '../data/portfolioData'

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="education" className="py-24 px-8 md:px-20 bg-transparent">
      <SectionHeader label="⚔ Foundation" titleLeft="My" titleAccent="Education" />

      <div className="max-w-3xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="relative card-premium p-8 overflow-hidden
                       hover:border-green-em/40 hover:shadow-glow-green transition-all duration-300"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]"
                 style={{ background: 'linear-gradient(to bottom, #22C55E, #FF9F1C)' }} />

            {/* Icon */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-green-em/30 rounded-sm flex items-center justify-center
                              text-green-em text-xl flex-shrink-0 bg-green-deep/30">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="font-bebas text-2xl tracking-[2px] mb-1">{edu.degree}</h3>
                <p className="text-green-em font-semibold text-sm mb-3">{edu.school}</p>

                <div className="flex flex-wrap gap-4 text-[0.75rem] text-gray-500 mb-5">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-green-em/60" /> {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaStar className="text-green-em/60" /> CGPA: <strong className="text-green-em">{edu.cgpa}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-green-em/60" /> {edu.location}
                  </span>
                </div>

                <div>
                  <p className="text-[0.65rem] tracking-[3px] uppercase text-gray-600 font-bold mb-3">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(c => (
                      <span
                        key={c}
                        className="px-3 py-1 border border-white/[0.07] text-gray-500 text-[0.72rem]
                                   rounded-sm hover:border-green-em/40 hover:text-green-em transition-colors"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
