'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cx } from './Utils'

interface BenefitsToggleProps {
  className?: string
}

interface BenefitsData {
  leaders: {
    title: string
    items: string[]
  }
  teams: {
    title: string
    items: string[]
  }
}

const benefitsData: BenefitsData = {
  leaders: {
    title: "For leaders",
    items: [
      "Higher retention and morale",
      "Healthier, more productive teams", 
      "Proof you're investing in people"
    ]
  },
  teams: {
    title: "For teams",
    items: [
      "Less busywork",
      "Time for deep focus",
      "Growth that actually excites you"
    ]
  }
}

export default function BenefitsToggle({ className }: BenefitsToggleProps) {
  const [activeView, setActiveView] = useState<'leaders' | 'teams'>('leaders')

  const handleToggle = (view: 'leaders' | 'teams') => {
    setActiveView(view)
  }

  return (
    <section className={cx('py-16 md:py-20', className)}>
      <style jsx>{`
        :root {
          --shadow-color: 0deg 0% 63%;
          --primary: #F6F7FA;
          --secondary: #17181B;
          --inactive: #9AA3AF;
          --duration: 0.22;
          --drop-off: 0.4;
          --ease: ease-out;
          --border: rgba(255, 255, 255, 0.1);
        }

        .control {
          letter-spacing: 0.5px;
          position: relative;
          width: 300px;
          height: 48px;
          background: var(--secondary);
          border-radius: 100px;
          border: 1px solid var(--border);
          padding: 3px;
          box-shadow: 
            -0.1px 1px 1px hsl(var(--shadow-color) / 0.39),
            -0.2px 3.2px 3.1px -0.4px hsl(var(--shadow-color) / 0.36),
            -0.3px 5.7px 5.5px -0.8px hsl(var(--shadow-color) / 0.34),
            -0.5px 9.3px 8.9px -1.2px hsl(var(--shadow-color) / 0.32),
            -0.8px 14.8px 14.2px -1.6px hsl(var(--shadow-color) / 0.29);
        }

        .control__track {
          display: grid;
          place-items: center;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          height: 100%;
          position: relative;
        }

        .indicator {
          position: absolute;
          width: 50%;
          left: ${activeView === 'leaders' ? '0' : '50%'};
          top: 0;
          bottom: 0;
          background: var(--primary);
          border-radius: 100px;
          transition: left 0.22s ease-out;
        }

        .control label {
          display: grid;
          place-items: center;
          height: 100%;
          width: 100%;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          color: ${activeView === 'leaders' ? 'var(--secondary)' : 'var(--inactive)'};
          z-index: 2;
          position: relative;
          transition: color 0.22s ease-out;
        }

        .control label:last-child {
          color: ${activeView === 'teams' ? 'var(--secondary)' : 'var(--inactive)'};
        }

        .control input {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-textPrimary">
            Benefits for both sides
          </h2>

          {/* Toggle Control */}
          <div className="flex justify-center mb-12">
            <div className="control">
              <div className="control__track">
                <div className="indicator"></div>
                <label onClick={() => handleToggle('leaders')}>
                  For Leaders
                  <input 
                    type="radio" 
                    name="benefits" 
                    checked={activeView === 'leaders'}
                    onChange={() => handleToggle('leaders')}
                  />
                </label>
                <label onClick={() => handleToggle('teams')}>
                  For Teams
                  <input 
                    type="radio" 
                    name="benefits" 
                    checked={activeView === 'teams'}
                    onChange={() => handleToggle('teams')}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-accent">
                {benefitsData[activeView].title}
              </h3>
              <ul className="space-y-4 text-lg text-textSecondary">
                {benefitsData[activeView].items.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="flex items-center justify-center"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}