"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function SpinningGraphic() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-radial from-secondary via-background to-background">
      {/* Background mystical symbols */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 text-accent text-9xl font-gothic animate-pulse-glow">☿</div>
        <div className="absolute top-3/4 right-1/4 text-accent text-9xl font-gothic animate-pulse-glow">☽</div>
        <div className="absolute bottom-1/4 left-1/2 text-accent text-9xl font-gothic animate-pulse-glow">♄</div>
      </div>

      {/* Main spinning graphic */}
      <motion.div
        className="relative z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-accent shadow-2xl"
            style={{
              boxShadow: "0 0 80px rgba(212, 175, 55, 0.5), inset 0 0 80px rgba(212, 175, 55, 0.2)"
            }}
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              boxShadow: isHovered 
                ? "0 0 120px rgba(212, 175, 55, 0.7), inset 0 0 120px rgba(212, 175, 55, 0.4)"
                : "0 0 80px rgba(212, 175, 55, 0.5), inset 0 0 80px rgba(212, 175, 55, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Inner pentagram */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M250 50 L325 200 L475 200 L350 310 L400 460 L250 350 L100 460 L150 310 L25 200 L175 200 Z"
              stroke="#D4AF37"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-gothic text-accent text-center leading-none"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                textShadow: isHovered
                  ? "0 0 40px rgba(212, 175, 55, 0.9)"
                  : "0 0 20px rgba(212, 175, 55, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              Off Kind
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-medieval text-muted-foreground mt-2"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              Studios
            </motion.p>
          </div>

          {/* Orbiting elements */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full animate-glow" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-primary rounded-full animate-glow" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-accent rounded-full animate-glow" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-primary rounded-full animate-glow" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="text-muted-foreground text-sm font-medieval mb-2">Enter the Sanctum</p>
        <svg
          className="w-6 h-6 mx-auto text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  )
}
