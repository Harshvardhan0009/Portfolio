export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Subtle Luxury Pattern Layer */}
      <div className="absolute inset-0 seigaiha-texture opacity-[0.06] blur-[0.5px]" />

      {/* Dark Vignette / Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0B0B0D_100%)] opacity-70" />

      {/* Floating Particles (Premium Motion) */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle animate-[float-particle_15s_linear_infinite]"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            bottom: `-20px`,
            animationDelay: `${Math.random() * 15}s`,
            opacity: Math.random() * 0.2, // Reduced particle opacity
          }}
        />
      ))}

      <div
        className="absolute"
        style={{
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(34,197,94,0.07) 0%, transparent 60%),' +
            'radial-gradient(ellipse 40% 40% at 10% 80%, rgba(255,159,28,0.04) 0%, transparent 50%),' +
            'radial-gradient(ellipse 35% 35% at 90% 85%, rgba(34,197,94,0.05) 0%, transparent 50%)',
        }}
      />
      {/* Thunder Aura Effect - Reduced opacity and removed mix-blend for a cleaner look */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-em/3 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Flame Pulse Glow - Reduced opacity */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-em/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Floating Sparks */}
      <div className="absolute top-[10%] right-[30%] w-[100px] h-[10px] bg-ds-thunder/40 blur-[15px] rounded-full animate-float-slow" />
      <div className="absolute bottom-[20%] left-[25%] w-[150px] h-[15px] bg-ds-thunder/30 blur-[20px] rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </div>
  )
}
