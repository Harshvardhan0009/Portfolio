import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn,
  FaTwitter, FaInstagram, FaPaperPlane, FaCheckCircle
} from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { personalInfo } from '../data/portfolioData'

const inputClass = `
  w-full bg-bg-section border border-white/[0.07] text-white
  px-4 py-3 text-sm font-montserrat rounded-sm outline-none
  transition-all duration-300 placeholder:text-gray-600
  focus:border-green-em focus:shadow-[0_0_0_2px_rgba(46,139,87,0.12)]
`

export default function Contact() {
  const [form, setForm]         = useState({ name:'', email:'', subject:'', message:'' })
  const [sending, setSending]   = useState(false)
  const [sent, setSent]         = useState(false)
  const [leftRef, leftIn]       = useInView({ threshold: 0.15, triggerOnce: true })
  const [rightRef, rightIn]     = useInView({ threshold: 0.15, triggerOnce: true })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    // ── Plug in EmailJS here ──────────────────────────────────
    // await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')
    // ─────────────────────────────────────────────────────────
    await new Promise(r => setTimeout(r, 1200)) // simulated delay
    setSending(false)
    setSent(true)
    setForm({ name:'', email:'', subject:'', message:'' })
    setTimeout(() => setSent(false), 4000)
  }

  const contactItems = [
    { icon: <FaEnvelope />,     label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: null },
  ]

  const socials = [
    { icon: <FaGithub />,     href: personalInfo.github,   label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <FaTwitter />,    href: personalInfo.twitter,  label: 'Twitter' },
    { icon: <FaInstagram />,  href: personalInfo.instagram, label: 'Instagram' },
  ]

  return (
    <section id="contact" className="py-24 px-8 md:px-20 bg-transparent">
      <SectionHeader label="⚔ Connect" titleLeft="Get In" titleAccent="Touch" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* ── Left info ── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-bebas text-3xl tracking-[2px] mb-2">
            Let's build something <span className="text-green-em">great</span> together
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            I'm currently open to internship opportunities, freelance projects, and collaborations.
            Feel free to reach out — I typically respond within 24 hours.
          </p>

          {contactItems.map(item => (
            <div key={item.label} className="flex items-start gap-4 mb-5">
              <div
                className="w-11 h-11 flex-shrink-0 border border-white/10 rounded-sm
                           flex items-center justify-center text-green-em text-base"
              >
                {item.icon}
              </div>
              <div>
                <p className="text-[0.62rem] tracking-[2px] uppercase text-gray-600 mb-0.5">{item.label}</p>
                {item.href
                  ? <a href={item.href} className="text-gray-400 text-sm hover:text-green-em transition-colors">{item.value}</a>
                  : <p className="text-gray-400 text-sm">{item.value}</p>
                }
              </div>
            </div>
          ))}

          {/* Availability */}
          <div className="flex items-center gap-3 mb-8 mt-2">
            <span className="w-2 h-2 rounded-full bg-green-em animate-pulse" />
            <span className="text-green-em text-sm font-semibold tracking-wide">
              Open to Internships &amp; Opportunities
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-2.5">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                data-hover
                className="w-11 h-11 border border-white/10 rounded-sm flex items-center justify-center
                           text-gray-500 text-base transition-all duration-300
                           hover:border-green-em hover:text-green-em hover:shadow-glow-green"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Right form ── */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 40 }}
          animate={rightIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[2px] uppercase text-gray-600 font-bold">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[2px] uppercase text-gray-600 font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] tracking-[2px] uppercase text-gray-600 font-bold">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Internship Opportunity / Collaboration"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] tracking-[2px] uppercase text-gray-600 font-bold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hello Harshvardhan, I'd love to connect about..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              data-hover
              className={`w-full flex items-center justify-center gap-2
                          py-3.5 font-bold text-[0.75rem] tracking-[2px] uppercase rounded-sm
                          transition-all duration-300
                          ${sent
                            ? 'bg-green-em/30 border border-green-em text-green-em cursor-default'
                            : 'bg-green-em text-black hover:bg-white hover:shadow-glow-green'
                          }`}
            >
              {sent ? (
                <><FaCheckCircle /> Message Sent!</>
              ) : sending ? (
                <><span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" /> Sending...</>
              ) : (
                <><FaPaperPlane /> Send Message</>
              )}
            </button>

            <p className="text-[0.7rem] text-gray-600 text-center">
              Connect EmailJS or Formspree to enable real email delivery
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
