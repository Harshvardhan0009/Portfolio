import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailRef  = useRef(null)
  const [hovered, setHovered] = useState(false)
  const pos   = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.14
      trail.current.y += (pos.current.y - trail.current.y) * 0.14
      if (trailRef.current) {
        trailRef.current.style.left = trail.current.x + 'px'
        trailRef.current.style.top  = trail.current.y + 'px'
      }
      rafId.current = requestAnimationFrame(animate)
    }

    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    window.addEventListener('mousemove', move)
    rafId.current = requestAnimationFrame(animate)

    const interactive = document.querySelectorAll('a, button, [data-hover]')
    interactive.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor ${hovered ? 'hovered' : ''}`}
      />
      <div ref={trailRef} className="cursor-trail" />
    </>
  )
}
