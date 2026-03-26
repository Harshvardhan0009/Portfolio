import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import { Link } from 'react-scroll'

const footerLinks = ['hero','about','skills','projects','achievements','education','experience','contact']

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/[0.06] py-10 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="font-bebas text-2xl tracking-[4px] text-gradient-gp">
            Harshvardhan Sharma
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map(link => (
              <Link
                key={link}
                to={link}
                smooth
                duration={500}
                offset={-80}
                className="text-gray-600 text-[0.68rem] tracking-[2px] uppercase font-semibold
                           hover:text-green-em transition-colors cursor-pointer"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-2.5">
            {[
              { icon: <FaGithub />,     href: personalInfo.github   },
              { icon: <FaLinkedinIn />, href: personalInfo.linkedin },
              { icon: <FaTwitter />,    href: personalInfo.twitter  },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center
                           text-gray-600 text-sm transition-all duration-300
                           hover:border-green-em hover:text-green-em"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(46,139,87,0.3), transparent)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-700 text-[0.7rem] tracking-[1px]">
            ⚔️ Forged with <FaHeart className="inline text-pink-acc mx-1" /> by{' '}
            <span className="text-green-em font-semibold">Harshvardhan Sharma</span> · India
          </p>
          <p className="text-gray-700 text-[0.7rem] tracking-[1px]">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
