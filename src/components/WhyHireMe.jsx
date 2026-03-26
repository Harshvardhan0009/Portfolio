import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'
import { FaBolt, FaRegHandshake, FaBrain, FaDumbbell } from 'react-icons/fa'

const evaluationData = [
  {
    icon: <FaBolt />,
    title: 'Efficient Execution',
    desc: 'Consistently delivers high-quality solutions to complex engineering challenges with exceptional speed and precision.',
  },
  {
    icon: <FaBrain />,
    title: 'Rapid Adaptability',
    desc: 'Proactively acquires new technologies and quickly adapts to evolving software requirements to drive innovation.',
  },
  {
    icon: <FaRegHandshake />,
    title: 'Cross-Functional Collaboration',
    desc: 'Thrives in dynamic environments, fostering seamless teamwork and communicating effectively with all stakeholders.',
  },
  {
    icon: <FaDumbbell />,
    title: 'Continuous Improvement',
    desc: 'Dedicated to refining engineering fundamentals through rigorous competitive programming and extensive hands-on practice.',
  },
]

export default function WhyHireMe() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="why-hire-me" className="py-24 px-8 md:px-20 bg-transparent relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-ds-thunder/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-ds-thunder/10 rounded-full blur-[100px] pointer-events-none" />

      <SectionHeader label="💼 Core Competencies" titleLeft="Professional" titleAccent="Evaluation" accentColor="green" />
      
      <div 
        ref={ref}
        className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
      >
        {evaluationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex gap-5 items-start group"
          >
            <div className="w-14 h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-2xl text-gray-400 group-hover:bg-green-em/10 group-hover:text-green-em group-hover:border-green-em/30 group-hover:shadow-[0_0_15px_rgba(46,139,87,0.4)] transition-all duration-300">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bebas tracking-widest text-xl mb-2 text-white group-hover:text-gradient-green transition-all">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
        
        {/* Verification stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={inView ? { opacity: 0.8, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute -right-8 -bottom-10 w-40 h-40 opacity-20 pointer-events-none hidden md:block"
        >
          <div className="w-full h-full border-4 border-red-deep/50 rounded-full flex flex-col items-center justify-center text-red-deep/50 rotate-[-15deg]">
            <span className="font-bebas text-6xl leading-none">合格</span>
            <span className="font-bebas text-sm tracking-widest mt-1">PASSED</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
