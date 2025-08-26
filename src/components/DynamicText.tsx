'use client'

import { useCraftUI } from '@/contexts/CraftUIContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function DynamicText() {
  const { activeItem } = useCraftUI()

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeItem?.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-textPrimary leading-relaxed"
            >
              {activeItem?.description || "Your C-suite — without the scheduling, without the bottlenecks."}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}