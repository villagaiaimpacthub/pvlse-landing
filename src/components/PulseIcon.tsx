import React from 'react';

interface PulseIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function PulseIcon({ 
  className = "h-6", 
  width = 48, 
  height = 36 
}: PulseIconProps) {
  return (
    <svg 
      className={`pulse-icon ${className}`} 
      width={width} 
      height={height} 
      viewBox="0 0 48 36" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PVLSE heartbeat pulse animation"
    >      
      {/* Base pulse line */}
      <path 
        d="M0 18 L10 18 L13 25 L16 10 L19 26 L22 18 L48 18" 
        fill="none" 
        stroke="#7C5CFF" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Animated pulse line */}
      <path 
        d="M0 18 L10 18 L13 25 L16 10 L19 26 L22 18 L48 18" 
        fill="none" 
        stroke="#A78BFF" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.8"
      >
        <animate 
          attributeName="stroke-dasharray" 
          values="0 100;15 85;0 100" 
          dur="2s" 
          repeatCount="indefinite"
        />
        <animate 
          attributeName="stroke-dashoffset" 
          values="0;-100;0" 
          dur="2s" 
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}