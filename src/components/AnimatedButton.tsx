'use client'

import { useEffect, useRef, useState } from 'react'
import { cx } from './Utils'

interface AnimatedButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
  className?: string
}

export default function AnimatedButton({ direction, onClick, className }: AnimatedButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Simple CSS animations instead of GSAP for now
    const container = containerRef.current
    if (!container) return

    const handleClick = () => {
      setIsActive(!isActive)
      onClick()
      
      // Reset after animation
      setTimeout(() => setIsActive(false), 600)
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [isActive, onClick])

  return (
    <div 
      ref={containerRef}
      className={cx(
        'animation-container cursor-pointer',
        className
      )}
    >
      <style jsx>{`
        .animation-container {
          position: relative;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s ease, background 0.3s ease;
          border-radius: 8px;
        }

        .animation-container:hover {
          border-color: rgba(124, 92, 255, 0.5);
          background: rgba(124, 92, 255, 0.1);
        }

        .corner {
          position: absolute;
          width: 12px;
          height: 12px;
          color: #7C5CFF;
          opacity: 0;
          z-index: 10;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .animation-container:hover .corner {
          opacity: 1;
        }

        .corner svg {
          width: 100%;
          height: 100%;
        }

        .top-left {
          top: -6px;
          left: -6px;
        }

        .top-right {
          top: -6px;
          right: -6px;
          transform: rotate(90deg);
        }

        .bottom-left {
          bottom: -6px;
          left: -6px;
          transform: rotate(-90deg);
        }

        .bottom-right {
          bottom: -6px;
          right: -6px;
          transform: rotate(180deg);
        }

        .arrow-morph {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.7s ease;
        }

        .arrow-morph.active {
          transform: rotate(${direction === 'left' ? '-360deg' : '360deg'});
        }

        .line {
          position: absolute;
          background-color: #fff;
          top: 50%;
          left: 50%;
          transform-origin: center;
          transition: all 0.3s ease;
        }

        .line1 {
          width: 16px;
          height: 2px;
          transform: translate(-50%, -50%) rotate(${direction === 'left' ? '135deg' : '45deg'});
        }

        .line2 {
          width: 16px;
          height: 2px;
          transform: translate(-50%, -50%) rotate(${direction === 'left' ? '-135deg' : '-45deg'});
        }

        .line3 {
          width: 20px;
          height: 2px;
          transform: translate(-50%, -50%);
        }

        .arrow-morph:hover .line1 {
          transform: translate(-50%, -50%) rotate(${direction === 'left' ? '150deg' : '30deg'});
        }

        .arrow-morph:hover .line2 {
          transform: translate(-50%, -50%) rotate(${direction === 'left' ? '-150deg' : '-30deg'});
        }
      `}</style>

      {/* Corner decorations */}
      <div className="corner top-left">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 4V12H4V14H14V4H12Z"></path>
        </svg>
      </div>
      <div className="corner top-right">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 4V12H4V14H14V4H12Z"></path>
        </svg>
      </div>
      <div className="corner bottom-left">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 4V12H4V14H14V4H12Z"></path>
        </svg>
      </div>
      <div className="corner bottom-right">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 4V12H4V14H14V4H12Z"></path>
        </svg>
      </div>

      {/* Arrow Morph Animation */}
      <div className={cx(
        'arrow-morph',
        direction,
        isActive && 'active'
      )}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </div>
  )
}