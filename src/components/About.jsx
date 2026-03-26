import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'
import { aboutText, stats, personalInfo } from '../data/portfolioData'
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

function AnimatedCard({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="pt-12 pb-32 px-8 md:px-20 bg-transparent">
      <SectionHeader label="⚔ Who I Am" titleLeft="About" titleAccent="Me" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start lg:items-center">
        {/* Avatar */}
        <AnimatedCard delay={0.1} className="flex justify-center">
          <div className="relative">
            {/* Outer frame */}
            <div className="absolute -inset-3 border border-green-em/20 rounded-sm" />
            <div
              className="absolute -inset-3 border-t-2 border-t-green-em/60 rounded-sm"
              style={{ background: 'none' }}
            />

            {/* Card */}
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-sm flex items-center justify-center
                         bg-gradient-to-br from-green-deep to-bg-section
                         shadow-glow-green overflow-hidden"
            >
              <img
                src="/images/about-photo.jpg"
                alt="Harshvardhan"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-em/10 to-transparent" />
            </div>

            {/* Tag */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap
                         bg-bg-section border border-green-em/30 px-4 py-1
                         text-[0.62rem] font-bold tracking-[3px] uppercase text-green-em"
            >
              CS Student · Developer
            </div>

            {/* Quick info badges */}
            <div className="absolute -right-14 top-6 flex flex-col gap-2">
              <div className="bg-bg-section border border-white/10 px-2 py-1 rounded-sm flex items-center gap-1.5 text-[0.6rem] text-gray-400">
                <FaMapMarkerAlt className="text-green-em" /> India
              </div>
              <div className="bg-bg-section border border-white/10 px-2 py-1 rounded-sm flex items-center gap-1.5 text-[0.6rem] text-green-em font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-em inline-block animate-pulse-glow" />
                Open to work
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Text */}
        <AnimatedCard delay={0.25}>
          <h3 className="font-bebas text-3xl tracking-[2px] text-pink-acc mb-5">
            Hello, I'm Harshvardhan
          </h3>

          {aboutText.map((p, i) => (
            <p key={i} className="text-gray-400 leading-relaxed text-[0.9rem] mb-3">
              {p}
            </p>
          ))}

          {/* Quick links */}
          <div className="flex gap-3 mt-4 mb-7">
            <a href={personalInfo.github} target="_blank" rel="noreferrer"
              className="text-gray-500 hover:text-green-em transition-colors text-lg"><FaGithub /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
              className="text-gray-500 hover:text-green-em transition-colors text-lg"><FaLinkedinIn /></a>
            <a href={`mailto:${personalInfo.email}`}
              className="text-gray-500 hover:text-green-em transition-colors text-lg"><FaEnvelope /></a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="card-premium card-hover text-center py-4 px-2"
              >
                <div className="font-bebas text-[1.35rem] md:text-2xl text-gradient-gp tracking-wide uppercase mb-1">{s.num}</div>
                <div className="text-[0.6rem] md:text-[0.65rem] tracking-[1.5px] uppercase text-gray-500 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>


        </AnimatedCard>
      </div>
    </section>
  )
}
