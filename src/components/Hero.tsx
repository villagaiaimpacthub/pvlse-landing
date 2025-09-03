'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { cx, prefersReducedMotion } from './Utils'
import ThreeAnimation from './ThreeAnimation'

interface HeroProps {
  className?: string
  heroData?: {
    headlineVariations?: Array<{
      title: string
      subtitle: string
    }>
    kicker?: string
    headlineLines?: string[]
    subhead?: string
    primaryCta?: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
  // We'll treat these as content slots but give PVLSE defaults
  title?: string
  subtitle?: string
  description?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  lottieAnimations?: { orb1?: object; orb2?: object; orb3?: object }
}

// Minimal placeholder if none provided (you can swap with your real Lotties)
const defaultOrbAnimation = {
  v: '5.7.4', fr: 60, ip: 0, op: 120, w: 200, h: 200, nm: 'Orb',
  ddd: 0, assets: [], layers: [{
    ddd: 0, ind: 1, ty: 4, nm: 'Orb', sr: 1,
    ks: {
      o: { a: 0, k: 36 },
      r: { a: 1, k: [{ i: { x: [0.7], y: [0.3] }, o: { x: [0.3], y: [0.7] }, t: 0, s: [0] }, { t: 240, s: [360] }] },
      p: { a: 0, k: [100, 100, 0] }, a: { a: 0, k: [0, 0, 0] }, s: { a: 0, k: [100, 100, 100] }
    },
    ao: 0, shapes: [{
      ty: 'gr', it: [
        { ty: 'el', s: { a: 0, k: [80, 80] }, p: { a: 0, k: [0, 0] } },
        { ty: 'fl', c: { a: 0, k: [0.49, 0.37, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    }], ip: 0, op: 240, st: 0
  }]
}

export default function Hero({
  className,
  heroData,
  // === PVLSE COPY (defaults) ===
  title = 'AI Insurance.',
  subtitle = 'Not for fire damage — for futures worth living.',
  description = 'In the AI age, protecting your people is protecting your business PVLSE takes the busywork off their plates, keeps workloads healthy, and creates space for growth — so your team can do their best work and actually enjoy doing it',
  primaryCTA = { label: 'Get a Demo', href: '#demo' },
  secondaryCTA = { label: 'See How It Works', href: '#how' },
  lottieAnimations = { orb1: defaultOrbAnimation, orb2: defaultOrbAnimation, orb3: defaultOrbAnimation }
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [hide3DFallback, setHide3DFallback] = useState(false)
  const reducedMotion = prefersReducedMotion()

  // Initialize client-side states
  useEffect(() => {
    setIsClient(true)
    setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    
    // Hide fallback PNG after 3D animation has had time to load (longer delay)
    const timer = setTimeout(() => {
      setHide3DFallback(true)
    }, 2000) // Increased from 10ms to 2000ms
    
    return () => clearTimeout(timer)
  }, [])

  // Get headline variations or fallback to defaults
  const headlineVariations = heroData?.headlineVariations || [
    { title, subtitle }
  ]


  useEffect(() => {
    if (reducedMotion) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reducedMotion])

  // Rotate headlines randomly every 2 seconds
  useEffect(() => {
    if (headlineVariations.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentHeadlineIndex(prevIndex => {
        let nextIndex
        do {
          nextIndex = Math.floor(Math.random() * headlineVariations.length)
        } while (nextIndex === prevIndex && headlineVariations.length > 1)
        return nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [headlineVariations.length])

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }
  const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } } }
  const orbVariants = { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 0.6, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } } }

  const handleCTAClick = (href: string) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    else window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.section
      ref={containerRef}
      className={cx(
        'relative min-h-[75vh] sm:min-h-[86vh] flex items-center overflow-hidden',
        // Premium dark + soft radial accent
        "bg-[radial-gradient(80%_100%_at_50%_0%,rgba(124,92,255,0.22)_0%,rgba(124,92,255,0)_60%),#0B0B0C]",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      role="banner"
      aria-label="Hero section"
    >
      {/* Background with mobile optimization */}
      <div className="absolute inset-0 overflow-hidden bg-[#0B0B0C]">
        {/* Static particle fallback that loads instantly */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${hide3DFallback ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: 'url(/hero-fallback.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Three.js Animation overlays fallback when loaded */}
        {isClient && (
          <div className="absolute inset-0 w-full h-full">
            <ThreeAnimation className="absolute inset-0 w-full h-full opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/4 opacity-40" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
<motion.div className="max-w-3xl relative z-10" variants={itemVariants}>
              {/* Rotating Headline */}
              <div className="relative overflow-hidden pb-2">
                {!isClient ? (
                  /* Loading skeleton while JS initializes */
                  <div className="font-bold leading-tight animate-pulse">
                    <div className="text-4xl sm:text-5xl md:text-7xl mb-2">
                      <div className="bg-textPrimary/20 rounded h-12 sm:h-16 md:h-20 w-4/5 mb-2"></div>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-6xl">
                      <div className="bg-textSecondary/15 rounded h-8 sm:h-10 md:h-16 w-3/4"></div>
                    </div>
                  </div>
                ) : (
                  <motion.h1 
                    key={currentHeadlineIndex}
                    className="font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <div className="text-4xl sm:text-5xl md:text-7xl text-textPrimary">{headlineVariations[currentHeadlineIndex].title}</div>
                    <div className="text-2xl sm:text-3xl md:text-6xl text-textSecondary">{headlineVariations[currentHeadlineIndex].subtitle}</div>
                  </motion.h1>
                )}
              </div>


            </motion.div>
          </div>
        </div>
      </div>

      {/* Gentle bottom fade for depth */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </motion.section>
  )
}