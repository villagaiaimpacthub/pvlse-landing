'use client'

import { motion } from 'framer-motion'
import { cx, prefersReducedMotion } from './Utils'

interface HeroCTAProps {
  className?: string
  description?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export default function HeroCTA({
  className,
  description = 'In the AI age, protecting your people is protecting your business. Pvlse takes the busywork off their plates, keeps workloads healthy, and creates space for growth — so your team can do their best work and actually enjoy doing it.',
  primaryCTA = { label: 'Get a Demo', href: '#demo' },
  secondaryCTA = { label: 'See How It Works', href: '#how' }
}: HeroCTAProps) {
  const reducedMotion = prefersReducedMotion()

  const handleCTAClick = (href: string) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    else window.open(href, '_blank', 'noopener,noreferrer')
  }

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } } 
  }
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 16 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } } 
  }

  return (
    <motion.section
      className={cx(
        'py-24 md:py-32',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Description */}
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-textSecondary leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}