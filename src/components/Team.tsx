'use client'

import { useState, useRef, useEffect } from 'react'
import { cx } from './Utils'
import ASCIIArt from './ASCIIArt'

interface TeamProps {
  className?: string
  title?: string
}

// Abstract geometric shapes for the tech overlay
const GeometricShapes = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circuit Pattern Layer - Slowest */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          transform: `translateY(${scrollProgress * -20}px) scale(${1 + scrollProgress * 0.05})`
        }}
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M40 40h120v120H40z" fill="none" stroke="#7C5CFF" strokeWidth="1" opacity="0.3" />
            <circle cx="40" cy="40" r="3" fill="#7C5CFF" opacity="0.5" />
            <circle cx="160" cy="40" r="3" fill="#7C5CFF" opacity="0.5" />
            <circle cx="40" cy="160" r="3" fill="#7C5CFF" opacity="0.5" />
            <circle cx="160" cy="160" r="3" fill="#7C5CFF" opacity="0.5" />
            <path d="M40 100h40M120 100h40M100 40v40M100 120v40" stroke="#7C5CFF" strokeWidth="1" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Large Hexagons - Medium Speed */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `translateY(${scrollProgress * -80 * (1 + i * 0.2)}px) rotate(${scrollProgress * 45 + i * 60}deg)`,
              opacity: scrollProgress * 0.3
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <polygon 
                points="30,5 50,20 50,40 30,55 10,40 10,20"
                fill="none"
                stroke="#7C5CFF"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Fast Moving Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              transform: `translateY(${scrollProgress * -150 * (1 + i * 0.1)}px) rotate(${scrollProgress * 90}deg)`,
              opacity: Math.max(0, scrollProgress * 0.8 - i * 0.05)
            }}
          >
            {i % 3 === 0 ? (
              // Triangles
              <svg width="20" height="20" viewBox="0 0 20 20">
                <polygon points="10,2 18,16 2,16" fill="none" stroke="#7C5CFF" strokeWidth="1" />
              </svg>
            ) : i % 3 === 1 ? (
              // Diamonds
              <svg width="16" height="16" viewBox="0 0 16 16">
                <polygon points="8,1 15,8 8,15 1,8" fill="none" stroke="#7C5CFF" strokeWidth="1" />
              </svg>
            ) : (
              // Circles
              <svg width="12" height="12" viewBox="0 0 12 12">
                <circle cx="6" cy="6" r="5" fill="none" stroke="#7C5CFF" strokeWidth="1" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Data Flow Lines - Fastest */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            style={{
              left: 0,
              right: 0,
              top: `${10 + i * 12}%`,
              transform: `translateY(${scrollProgress * -200 * (1 + i * 0.3)}px) translateX(${Math.sin(scrollProgress * Math.PI + i) * 50}px)`,
              opacity: scrollProgress * 0.5
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`tech-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${25 + i * 10}%`,
              transform: `translateY(${scrollProgress * -120 * (1 + i * 0.15)}px) scale(${0.8 + scrollProgress * 0.3})`,
              opacity: scrollProgress * 0.4
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent">
              {i === 0 && (
                // CPU Icon
                <path fill="currentColor" d="M8 2v2H6V2h2m8 0v2h-2V2h2m-8 2v2H6V4h2m8 0v2h-2V4h2M4 6h2v2H4V6m12 0h2v2h-2V6M2 8v8h2v2h2v2h2v2h8v-2h2v-2h2v-2h2V8h-2V6h-2V4h-2V2H8v2H6v2H4v2H2m4 2h8v4H6v-4z" />
              )}
              {i === 1 && (
                // Network Icon
                <path fill="currentColor" d="M2 16h6v-1.5h8V16h6v-4h-6v1.5H8V12H2v4m14-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-8 0a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
              )}
              {i === 2 && (
                // Shield Icon
                <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4Z" />
              )}
              {i === 3 && (
                // Database Icon
                <path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z" />
              )}
              {i === 4 && (
                // Analytics Icon
                <path fill="currentColor" d="M22 21H2v-2h20v2M4 18v-3h2v3H4m4 0V9h2v9H8m4 0V6h2v12h-2m4 0v-6h2v6h-2m4 0V3h2v15h-2Z" />
              )}
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

// Scroll indicator component
const ScrollIndicator = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-accent/60 transition-all duration-300 pointer-events-none"
      style={{
        opacity: Math.max(0, 1 - scrollProgress * 2),
        transform: `translateX(-50%) translateY(${scrollProgress * 20}px)`
      }}
    >
      <div className="text-sm font-medium mb-2 tracking-wider">SCROLL TO EXPLORE</div>
      <div className="w-px h-8 bg-accent/40 relative overflow-hidden">
        <div 
          className="w-full h-2 bg-accent absolute top-0 animate-pulse"
          style={{
            animationDuration: '2s',
            transform: `translateY(${Math.sin(Date.now() * 0.003) * 10}px)`
          }}
        />
      </div>
      <div className="mt-2">
        <svg width="16" height="16" viewBox="0 0 24 24" className="animate-bounce">
          <path fill="currentColor" d="M12 16l-6-6h12l-6 6z" />
        </svg>
      </div>
    </div>
  )
}

export default function Team({ 
  className, 
  title = "GLOBAL" 
}: TeamProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight
      
      // Calculate progress when section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Text transitions based on scroll progress
  const getDisplayText = () => {
    if (scrollProgress < 0.3) return "GLOBAL"
    if (scrollProgress < 0.6) return "SECURE"  
    return "FUTURE"
  }

  const getTextOpacity = () => {
    return Math.max(0.2, 1 - scrollProgress * 0.5)
  }

  return (
    <section 
      ref={sectionRef}
      className={cx(
        'relative py-20 bg-background overflow-hidden min-h-screen',
        className
      )}
    >
      {/* Abstract Tech Overlay - Multiple Parallax Layers */}
      <GeometricShapes scrollProgress={scrollProgress} />

      {/* Dynamic Background Title - Enhanced Integration */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 pointer-events-none z-20">
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-accent transition-all duration-700 drop-shadow-2xl"
          style={{ 
            opacity: getTextOpacity(),
            transform: `translateY(${scrollProgress * -50}px) scale(${1 + scrollProgress * 0.05})`,
            filter: `blur(${scrollProgress * 2}px)`,
            textShadow: `0 0 ${20 + scrollProgress * 30}px rgba(124, 92, 255, 0.${Math.floor((1 - scrollProgress) * 8)})`
          }}
        >
          {getDisplayText()}
        </h1>
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0 pointer-events-none z-15">
        {[...Array(16)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 5}%`,
              top: `${20 + (i % 5) * 15}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: i % 2 === 0 ? '#7C5CFF' : 'rgba(124, 92, 255, 0.6)',
              transform: `translateY(${scrollProgress * -120 * (1 + i * 0.1)}px) translateX(${Math.cos(scrollProgress * Math.PI + i) * 30}px) scale(${1 + scrollProgress * 2})`,
              opacity: Math.max(0, scrollProgress * 0.8 - i * 0.03),
              filter: `blur(${scrollProgress * 0.5}px)`,
              boxShadow: `0 0 ${8 + scrollProgress * 15}px rgba(124, 92, 255, 0.${Math.floor(scrollProgress * 6)})`
            }}
          />
        ))}
      </div>

      {/* Full Width Spinning World with Enhanced Parallax */}
      <div 
        className="w-full min-h-[750px] relative z-10 flex items-center justify-center"
        style={{
          transform: `scale(${1 + scrollProgress * 0.15}) translateY(${scrollProgress * -40}px) rotateX(${scrollProgress * 2}deg)`,
          filter: `brightness(${1 + scrollProgress * 0.2}) contrast(${1 + scrollProgress * 0.3})`
        }}
      >
        <div className="w-full h-full relative">
          <ASCIIArt
            videoSrc="/assets/spinning-world.mp4"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
          
          {/* Overlay gradient for better text readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none"
            style={{
              opacity: scrollProgress * 0.4
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator scrollProgress={scrollProgress} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Dynamic Description - Enhanced */}
        <div 
          className="text-center mt-12 max-w-3xl mx-auto transition-all duration-700"
          style={{
            opacity: Math.max(0.4, 1 - scrollProgress * 0.6),
            transform: `translateY(${scrollProgress * 40}px) scale(${1 - scrollProgress * 0.05})`,
            filter: `blur(${scrollProgress * 1}px)`
          }}
        >
          <div className="relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-6 relative">
              {scrollProgress < 0.3 ? "Global Enterprise Reach" : 
               scrollProgress < 0.6 ? "Secure Workforce Protection" : 
               "Future of Human Capital"}
              
              {/* Subtle glow effect */}
              <div 
                className="absolute inset-0 text-2xl md:text-3xl lg:text-4xl font-bold text-accent opacity-30 blur-sm pointer-events-none"
                style={{
                  opacity: scrollProgress * 0.3
                }}
              >
                {scrollProgress < 0.3 ? "Global Enterprise Reach" : 
                 scrollProgress < 0.6 ? "Secure Workforce Protection" : 
                 "Future of Human Capital"}
              </div>
            </h2>
            
            <div className="relative">
              <p className="text-lg md:text-xl text-textSecondary leading-relaxed">
                {scrollProgress < 0.3 ? 
                  "PVLSE's enterprise AI insurance protects workforces across continents. From Fortune 500 headquarters to distributed global teams, our predictive wellness analytics ensure human capital protection at planetary scale." :
                 scrollProgress < 0.6 ?
                  "Military-grade security meets predictive analytics. Our enterprise platform safeguards your most valuable assets with AI-powered threat detection and proactive workforce protection protocols." :
                  "Tomorrow's workforce management is here today. PVLSE's next-generation AI creates resilient, adaptive organizations where human potential and technological advancement converge for unprecedented growth."
                }
              </p>
              
              {/* Progress indicator for text transitions */}
              <div className="flex justify-center mt-8 space-x-2">
                {['GLOBAL', 'SECURE', 'FUTURE'].map((text, index) => (
                  <div
                    key={text}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: (
                        (index === 0 && scrollProgress < 0.3) ||
                        (index === 1 && scrollProgress >= 0.3 && scrollProgress < 0.6) ||
                        (index === 2 && scrollProgress >= 0.6)
                      ) ? '#7C5CFF' : 'rgba(124, 92, 255, 0.3)',
                      transform: (
                        (index === 0 && scrollProgress < 0.3) ||
                        (index === 1 && scrollProgress >= 0.3 && scrollProgress < 0.6) ||
                        (index === 2 && scrollProgress >= 0.6)
                      ) ? 'scale(1.5)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}