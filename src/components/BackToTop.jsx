import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            key="btt"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-hover
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50
                       w-11 h-11 border border-green-em rounded-sm
                       flex items-center justify-center
                       text-green-em bg-bg-section shadow-glow-green
                       hover:bg-green-em hover:text-black
                       transition-all duration-300"
          >
            <FaChevronUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
