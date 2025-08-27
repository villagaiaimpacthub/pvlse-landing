'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
  className?: string
}

export default function AnimatedButton({ direction, onClick, className }: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(true)
    onClick()
    
    // Reset after animation
    setTimeout(() => setIsActive(false), 700)
  }

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      variant="ghost"
      size="icon"
      className={cn(
        'animation-container relative w-[60px] h-[60px] cursor-pointer border border-white/10 bg-black/70 backdrop-blur-[8px] rounded-lg transition-all duration-300 ease-out',
        'hover:border-[#7C5CFF]/50 hover:bg-[#7C5CFF]/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#7C5CFF]/20',
        'hover:bg-gradient-to-br hover:from-[#7C5CFF]/20 hover:via-[#7C5CFF]/10 hover:to-transparent',
        'active:scale-95 active:shadow-lg',
        'focus-visible:ring-2 focus-visible:ring-[#7C5CFF] focus-visible:ring-offset-0',
        className
      )}
    >
      <style jsx>{`
        .corner {
          position: absolute;
          width: 12px;
          height: 12px;
          color: #7C5CFF;
          opacity: 0;
          z-index: 10;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animation-container:hover .corner {
          opacity: 1;
          transform: scale(1.1);
        }

        .corner svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 4px rgba(124, 92, 255, 0.5));
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

        .animation-container:hover .top-right {
          transform: rotate(90deg) scale(1.1);
        }

        .animation-container:hover .bottom-left {
          transform: rotate(-90deg) scale(1.1);
        }

        .animation-container:hover .bottom-right {
          transform: rotate(180deg) scale(1.1);
        }

        .arrow-morph {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          will-change: transform;
        }

        .arrow-morph.active {
          transform: rotate(${direction === 'left' ? '-360deg' : '360deg'}) scale(1.1);
        }

        .line {
          position: absolute;
          background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.8));
          top: 50%;
          left: 50%;
          transform-origin: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 1px;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          will-change: transform;
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
          transform: translate(-50%, -50%) rotate(${direction === 'left' ? '150deg' : '30deg'}) scale(1.05);
          background: linear-gradient(45deg, #7C5CFF, rgba(124, 92, 255, 0.8));
          box-shadow: 0 0 8px rgba(124, 92, 255, 0.5);
        }

        .arrow-morph:hover .line2 {
          transform: translate(-50%, -50%) rotate(${direction === 'left' ? '-150deg' : '-30deg'}) scale(1.05);
          background: linear-gradient(45deg, #7C5CFF, rgba(124, 92, 255, 0.8));
          box-shadow: 0 0 8px rgba(124, 92, 255, 0.5);
        }

        .arrow-morph:hover .line3 {
          background: linear-gradient(45deg, #7C5CFF, rgba(124, 92, 255, 0.8));
          box-shadow: 0 0 8px rgba(124, 92, 255, 0.5);
          transform: translate(-50%, -50%) scale(1.05);
        }

        .arrow-morph.active .line {
          background: linear-gradient(45deg, #7C5CFF, #fff);
          box-shadow: 0 0 12px rgba(124, 92, 255, 0.7);
        }

        /* Enhanced glassmorphism effect */
        .animation-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .animation-container:hover::before {
          opacity: 1;
          background: linear-gradient(135deg, rgba(124, 92, 255, 0.15) 0%, rgba(124, 92, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%);
        }

        /* Additional pulsing glow effect on hover */
        .animation-container::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 10px;
          background: linear-gradient(45deg, rgba(124, 92, 255, 0.3), rgba(124, 92, 255, 0.1), rgba(124, 92, 255, 0.3));
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          pointer-events: none;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animation-container:hover::after {
          opacity: 1;
        }

        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(0.98);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.02);
          }
        }

        /* Performance optimizations */
        .animation-container {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
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
      <div className={cn(
        'arrow-morph',
        direction,
        isActive && 'active'
      )}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </Button>
  )
}