import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaDownload, FaPaperPlane, FaCode } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-8 md:px-20 overflow-hidden"
    >


      <div className="relative z-10 w-full max-w-[85rem] mx-auto flex flex-col items-center text-center mt-20 lg:mt-0">

        {/* Bold scanable role statement - Subtler White/Gray hierarchy */}
        <motion.div {...fadeUp(0.3)} className="px-6 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <span className="text-gray-200 font-semibold text-[0.7rem] md:text-[0.75rem] tracking-[4px] uppercase whitespace-nowrap">
            CSE Student &nbsp;•&nbsp; Full-Stack Developer &nbsp;•&nbsp; Problem Solver
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.5)}
          className="font-bebas leading-[0.82] tracking-[4px] mb-6"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)' }}
        >
          <span className="block text-metallic tracking-[6px] mb-2">{personalInfo.firstName}</span>
          <span className="block text-glow-green tracking-[8px]">{personalInfo.lastName}</span>
        </motion.h1>

        <motion.div {...fadeUp(0.7)} className="mb-10 flex items-center justify-center py-2 border-y border-white/5 w-full max-w-lg">
          <TypeAnimation
            sequence={[
              'Speed.', 2000,
              'Precision.', 2000,
              'Reliability.', 2000,
              'Scalability.', 2000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            className="text-white font-bold text-sm md:text-lg tracking-[2px] uppercase"
          />
        </motion.div>

        <motion.p {...fadeUp(0.9)}
          className="font-crimson italic text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl"
        >
          "{personalInfo.tagline.split('—')[0]}<span className="text-green-em not-italic">—</span>
          {personalInfo.tagline.split('—')[1]}"
        </motion.p>

        <motion.div {...fadeUp(1.1)} className="flex flex-wrap justify-center gap-5 mb-12">
          <Link to="projects" smooth duration={500} offset={-80}>
            <button className="btn-primary flex items-center gap-2 px-8 py-3 text-sm">
              <FaCode /> View Projects
            </button>
          </Link>
          <a href={personalInfo.resume} target="_blank" rel="noreferrer">
            <button className="btn-outline flex items-center gap-2 px-8 py-3 text-sm">
              <FaDownload /> Download Resume
            </button>
          </a>
          <Link to="contact" smooth duration={500} offset={-80}>
            <button className="btn-ghost flex items-center gap-2 px-8 py-3 text-sm">
              <FaPaperPlane /> Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Quick Stats / Highlights Bar */}
        <motion.div {...fadeUp(1.2)} className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 mb-8 w-full max-w-[85rem] px-4 md:px-8">
          {[
            { icon: "⚡", text: "200+ DSA Problems Solved" },
            { icon: "🚀", text: "10+ Projects Built" },
            { icon: "🏆", text: "82% Academic Score" },
            { icon: "💻", text: "Open to Internships" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col xl:flex-row items-center justify-center gap-2 px-3 py-3 xl:py-2.5 bg-white/5 border border-white/10 rounded-xl xl:rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.05)] cursor-default hover:border-green-em/40 hover:bg-green-em/5 transition-all duration-300">
              <span className="text-xl xl:text-lg">{stat.icon}</span>
              <span className="text-gray-200 text-[0.6rem] sm:text-[0.65rem] xl:text-xs font-bold tracking-[1.5px] uppercase text-center xl:text-left leading-tight">
                {stat.text}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(1.3)} className="flex items-center justify-center gap-8">
          {[
            { icon: <FaLinkedinIn />, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: <FaGithub />, href: personalInfo.github, label: 'GitHub' },
            { icon: <FaInstagram />, href: personalInfo.instagram, label: 'Instagram' },
            { icon: <FaEnvelope />, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center
                        text-gray-400 text-2xl transition-all duration-300
                        hover:border-green-em hover:text-green-em hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1.5"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[4px] uppercase text-gray-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-green-em to-transparent"
        />
      </motion.div>
    </section>
  )
}
