'use client'

import { motion } from 'framer-motion'
import { cx, prefersReducedMotion } from './Utils'

interface HeroCTAProps {
  className?: string
  title?: string
  subtitle?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export default function HeroCTA({
  className,
  title = 'In the AI age, <span class="text-accent">protecting your people</span> is protecting your business.',
  subtitle = 'PVLSE takes the busywork off their plates, keeps workloads healthy, and creates space for growth — so your team can do their best work and <span class="text-accent">actually enjoy doing it</span>.',
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
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          {/* Sub-heading */}
          <motion.p 
            className="text-xl md:text-2xl text-textSecondary leading-relaxed"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </motion.section>
  )
}