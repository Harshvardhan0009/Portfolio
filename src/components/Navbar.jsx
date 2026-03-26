import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',         to: 'hero' },
  { label: 'About',        to: 'about' },
  { label: 'Skills',       to: 'skills' },
  { label: 'Projects',     to: 'projects' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Experience',   to: 'experience' },
  { label: 'Contact',      to: 'contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                    px-8 md:px-16 py-4 transition-all duration-300
                    ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-bg-secondary shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="font-bebas text-lg tracking-widest text-gradient-green group-hover:opacity-0 transition-opacity duration-300">HS</span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-pink-acc text-xl drop-shadow-[0_0_10px_#FF9F1C]">⚔️</span>
            {/* Rotating halo on hover */}
            <div className="absolute inset-[-4px] border border-dashed border-pink-acc/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite]" />
          </div>
          <span className="font-bebas text-xl tracking-[4px] text-gradient-gp hidden sm:block">PORTFOLIO</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-5">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 + 0.2 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                onClick={() => setMenuOpen(false)}
                onSetActive={() => setActive(link.to)}
                className={`nav-link cursor-pointer text-[0.65rem] ${active === link.to ? 'active text-green-em' : ''}`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Resume CTA */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="hidden xl:inline-flex items-center gap-2 px-6 py-2 border border-white/20
                     text-white text-[0.65rem] font-bold tracking-[2px] uppercase rounded-sm
                     transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
        >
          Resume
        </motion.a>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white text-2xl z-[60]"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="text-pink-acc" /> : <HiMenuAlt4 className="text-green-em" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl
                       flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={() => setMenuOpen(false)}
                  className="font-bebas text-3xl tracking-[4px] text-gray-400
                             hover:text-green-em transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="/resume.pdf"
              target="_blank"
              className="btn-primary mt-4"
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
