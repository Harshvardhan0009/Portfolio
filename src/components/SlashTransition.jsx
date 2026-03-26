import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SlashTransition() {
  const [isSlashing, setIsSlashing] = useState(false)

  useEffect(() => {
    // Listen for custom slash event from Navbar or anywhere
    const handleSlash = () => {
      setIsSlashing(true)
      setTimeout(() => setIsSlashing(false), 900)
    }
    
    window.addEventListener('trigger-slash', handleSlash)
    return () => window.removeEventListener('trigger-slash', handleSlash)
  }, [])

  return (
    <AnimatePresence>
      {isSlashing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden"
        >
          {/* Flash screen white briefly */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            className="absolute inset-0 bg-white" 
          />
          
          {/* Dark overlay that splits */}
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          
          {/* Diagonal Slash line - Lightning */}
          <motion.div
            initial={{ scaleY: 0, rotate: 60, translateY: '-100%' }}
            animate={{ scaleY: 1, translateY: '100%' }}
            transition={{ duration: 0.15, ease: 'easeIn' }}
            className="absolute w-[800vh] h-[10px] bg-white shadow-[0_0_80px_30px_rgba(252,211,77,1)] origin-top z-10"
          />
          
          {/* Sub slash 1 */}
          <motion.div
            initial={{ scaleY: 0, rotate: 55, translateY: '-100%', translateX: '10vh' }}
            animate={{ scaleY: 1, translateY: '100%' }}
            transition={{ duration: 0.1, ease: 'easeIn', delay: 0.02 }}
            className="absolute w-[800vh] h-[4px] bg-ds-thunder shadow-[0_0_40px_10px_rgba(249,115,22,0.8)] origin-top z-0"
          />

          {/* Spark Particles */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 3, 4], opacity: [1, 1, 0] }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-3 h-1 bg-white rounded-full shadow-[0_0_15px_#22C55E]"
                style={{
                  transform: `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 200 + 50}px)`,
                  animation: `float 1s ease-out forwards`
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
