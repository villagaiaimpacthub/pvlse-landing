import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Mail, FileText, Wallet, Cog, BarChart3, Rocket, CheckCircle2, TrendingUp } from "lucide-react";

/**
 * PVLSE HeroFlow
 *
 * A drop‑in visual flow for the hero section that matches an enterprise tone.
 * Uses lucide icons and Tailwind. Designed to sit to the right of your H1/lead.
 *
 * Value prop pairing:
 *  "We provide AI‑driven automation and decision intelligence solutions designed
 *   to streamline operations, optimize productivity, and empower enterprise growth."
 *
 * Props:
 *  - className: wrapper class
 *  - compact: boolean (smaller height for tighter hero layouts)
 */
export default function HeroFlow({ className = "", compact = false, onHoverOutput = null }) {
  const height = compact ? 600 : 630;
  const width = 1400;
  const [hoveredInput, setHoveredInput] = useState(null);
  const [hoveredOutput, setHoveredOutput] = useState(null);
  const [hoveredCore, setHoveredCore] = useState(false);

  // Connection points - proportional to canvas size
  const coreCenter = { x: width / 2, y: height / 2 };
  const coreWidth = width * 0.14; // Core box width proportional to canvas
  
  // Explicit connection points on core edges - ALL lines must connect to these exact points
  const coreInPoint = { x: coreCenter.x - coreWidth / 2, y: coreCenter.y }; // 9am position on core - INPUT TARGET
  const coreOutPoint = { x: coreCenter.x + coreWidth / 2, y: coreCenter.y }; // 3pm position on core - OUTPUT SOURCE
  
  // Input and output positions with more margin for text
  const leftMargin = width * 0.14;
  const rightMargin = width * 0.18;
  const circleRadius = Math.min(width, height) * 0.06; // Larger proportional circle radius
  const iconSize = circleRadius * 0.6; // Proportional icon size

  return (
    <Card className={`shadow-xl border-hairline bg-panel/80 backdrop-blur-sm ${className}`}>
      <CardContent className="p-2">

        <div className="relative">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            width="100%"
            height={compact ? 370 : 400}
            role="img"
            aria-label="Data sources flow into PVLSE core, producing enterprise outcomes"
            className="[&_*]:transition-all"
          >
            <defs>
              <linearGradient id="flowIn" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#7C5CFF" />
              </linearGradient>
              <linearGradient id="flowOut" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#7C5CFF" />
                <stop offset="100%" stopColor="#4ADE80" />
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <style>{`
                @keyframes dashIn { to { stroke-dashoffset: 0; } }
                @keyframes dashOut { to { stroke-dashoffset: 0; } }
                @keyframes pulse { 
                  0%, 100% { opacity: 1; stroke-width: 2.5px; }
                  50% { opacity: 0.7; stroke-width: 4px; }
                }
                .line-pulse { 
                  animation: pulse 1.5s ease-in-out infinite !important;
                }
                .line-glow-blue { 
                  filter: drop-shadow(0 0 8px #60A5FA) !important;
                }
                .line-glow-green { 
                  filter: drop-shadow(0 0 8px #4ADE80) !important;
                }
              `}</style>
            </defs>

            {/* Left column: Input Icons (circles only, lines rendered later) */}
            {[
              { Icon: Database, label: "Systems & Apps" },
              { Icon: Mail, label: "Email & Messages" },
              { Icon: FileText, label: "Docs & SOPs" },
              { Icon: Wallet, label: "Finance & Ops" },
              { Icon: Cog, label: "HR & Workflow" },
              { Icon: BarChart3, label: "Analytics & BI" },
            ].map(({ Icon, label }, idx) => {
              // Center 6 inputs around core center properly
              const inputSpacing = height * 0.15; // Reduced spacing to keep closer to center
              const inputY = coreCenter.y - (inputSpacing * 2.5) + (idx * inputSpacing);
              const inputCenter = { x: leftMargin, y: inputY };
              
              return (
                <g key={idx} className="input-group">
                {/* Input Circle and Text - Extended hover area */}
                <g onMouseEnter={() => setHoveredInput(idx)}
                   onMouseLeave={() => setHoveredInput(null)}
                   style={{cursor: 'pointer'}}
                >
                  {/* Invisible hover area covering both icon and text */}
                  <rect 
                    x={inputCenter.x - circleRadius * 2.2} 
                    y={inputCenter.y - circleRadius * 1.2} 
                    width={circleRadius * 3} 
                    height={circleRadius * 2.4}
                    fill="transparent"
                  />
                  
                  {/* Icon circle */}
                  <g transform={`translate(${inputCenter.x}, ${inputCenter.y})`}>
                    <circle 
                      r={circleRadius} cx="0" cy="0" 
                      className={`fill-panel stroke-hairline transition-colors ${hoveredInput === idx ? 'stroke-blue-400' : ''}`}
                    />
                    <foreignObject 
                      x={-circleRadius} y={-circleRadius} width={circleRadius * 2} height={circleRadius * 2} 
                      style={{pointerEvents: 'none'}}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="text-blue-400" style={{width: iconSize, height: iconSize}} />
                      </div>
                    </foreignObject>
                  </g>
                  
                  {/* Text label - now hoverable */}
                  <text 
                    x={inputCenter.x - circleRadius * 1.8} 
                    y={inputCenter.y + circleRadius * 0.3} 
                    className={`text-[1.5rem] font-medium transition-colors cursor-pointer ${hoveredInput === idx ? 'fill-blue-400' : 'fill-textPrimary'}`} 
                    textAnchor="end" 
                    onMouseEnter={() => setHoveredInput(idx)}
                    onMouseLeave={() => setHoveredInput(null)}
                  >
                    {label}
                  </text>
                </g>
                </g>
              );
            })}


            {/* Right column: Outcomes */}
            {[
              { Icon: CheckCircle2, label: "Streamlined Operations" },
              { Icon: BarChart3, label: "Optimized Productivity" },
              { Icon: TrendingUp, label: "Enterprise Growth" },
            ].map(({ Icon, label }, idx) => {
              // Middle output aligns with core center, others are evenly spaced above/below
              const outputSpacing = height * 0.18;
              const outputY = idx === 1 ? coreCenter.y - 0.5 : coreCenter.y + (idx === 0 ? -outputSpacing : outputSpacing);
              const outputCenter = { x: width - rightMargin, y: outputY };
              const outputInPoint = { x: outputCenter.x - circleRadius, y: outputCenter.y }; // 9am position on output circle
              
              // Calculate curve distance - smaller value to ensure lines actually reach target  
              const horizontalDistance = Math.abs(outputInPoint.x - coreOutPoint.x);
              const curveDistance = horizontalDistance * 0.4; // Restored original curve behavior
              const pathD = `M ${coreOutPoint.x} ${coreOutPoint.y} C ${coreOutPoint.x + curveDistance} ${coreOutPoint.y}, ${outputInPoint.x - curveDistance} ${outputInPoint.y}, ${outputInPoint.x} ${outputInPoint.y}`;
              
              return (
                <g key={idx} className="output-group">
                {/* Flow line out of core - always exists, just changes appearance */}
                {idx !== 1 ? (
                <path
                  d={pathD}
                  stroke={hoveredOutput === idx ? "#4ADE80" : "url(#flowOut)"}
                  strokeWidth={hoveredOutput === idx ? "6.25" : "2.5"}
                  fill="none"
                  strokeDasharray="350"
                  strokeDashoffset="350"
                  style={{ 
                    animation: hoveredOutput === idx ?
                      `dashOut 1.9s ${0.25 + 0.1 * idx}s ease-out forwards, pulse 1.5s ease-in-out infinite` :
                      `dashOut 1.9s ${0.25 + 0.1 * idx}s ease-out forwards`
                  }}
                />
                ) : (
                  <path
                    d={`M ${coreOutPoint.x} ${coreOutPoint.y} L ${outputInPoint.x} ${outputInPoint.y}`}
                    stroke={hoveredOutput === idx ? "#4ADE80" : "url(#flowOut)"}
                    strokeWidth={hoveredOutput === idx ? "6.25" : "2.5"}
                    fill="none"
                    strokeDasharray="350"
                    strokeDashoffset="350"
                    style={{ 
                      animation: hoveredOutput === idx ?
                        `dashOut 1.9s ${0.25 + 0.1 * idx}s ease-out forwards, pulse 1.5s ease-in-out infinite` :
                        `dashOut 1.9s ${0.25 + 0.1 * idx}s ease-out forwards`
                    }}
                  />
                )}
                
                {/* Output Circle and Text - Extended hover area */}
                <g onMouseEnter={() => { setHoveredOutput(idx); onHoverOutput?.(idx); }}
                   onMouseLeave={() => { setHoveredOutput(null); onHoverOutput?.(null); }}
                   style={{cursor: 'pointer'}}
                >
                  {/* Invisible hover area covering both icon and text */}
                  <rect 
                    x={outputCenter.x - circleRadius * 0.8} 
                    y={outputCenter.y - circleRadius * 1.2} 
                    width={circleRadius * 3} 
                    height={circleRadius * 2.4}
                    fill="transparent"
                  />
                  
                  {/* Icon circle */}
                  <g transform={`translate(${outputCenter.x}, ${outputCenter.y})`}>
                    <circle 
                      r={circleRadius} cx="0" cy="0" 
                      className={`fill-panel stroke-hairline transition-colors ${hoveredOutput === idx ? 'stroke-green-400' : ''}`}
                    />
                    <foreignObject 
                      x={-circleRadius} y={-circleRadius} width={circleRadius * 2} height={circleRadius * 2} 
                      style={{pointerEvents: 'none'}}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="text-green-400" style={{width: iconSize, height: iconSize}} />
                      </div>
                    </foreignObject>
                  </g>
                  
                  {/* Text label - now hoverable */}
                  <text 
                    x={outputCenter.x + circleRadius * 1.8} 
                    y={outputCenter.y + circleRadius * 0.3} 
                    className={`text-[1.5rem] font-medium transition-colors cursor-pointer ${hoveredOutput === idx ? 'fill-green-400' : 'fill-textPrimary'}`} 
                    onMouseEnter={() => { setHoveredOutput(idx); onHoverOutput?.(idx); }}
                    onMouseLeave={() => { setHoveredOutput(null); onHoverOutput?.(null); }}
                  >
                    {label}
                  </text>
                </g>
                </g>
              );
            })}

            {/* Core: PVLSE - Rendered last to appear on top */}
            <g transform={`translate(${coreCenter.x - coreWidth / 2}, ${coreCenter.y - (height * 0.06)})`}
               onMouseEnter={() => setHoveredCore(true)}
               onMouseLeave={() => setHoveredCore(false)}
               style={{cursor: 'pointer'}}
            >
              <rect
                width={coreWidth}
                height={height * 0.12}
                rx="16"
                className={`fill-panel stroke-accent transition-colors ${hoveredCore ? 'stroke-blue-400' : ''}`}
                filter="url(#softGlow)"
              />
              {/* Centered PVLSE Logo + Text Group */}
              <g transform={`translate(${coreWidth / 2 - 5}, ${height * 0.06})`}>
                {/* PVLSE Logo - Pulse Icon */}
                <g className="pulse-icon" transform="translate(-57, -18)">
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
                </g>
                
                {/* PVLSE Text */}
                <text 
                  x="0" 
                  y="6" 
                  className="fill-white font-bold text-[1.2rem] uppercase tracking-widest" 
                  textAnchor="start"
                >
                  PVLSE
                </text>
              </g>
            </g>

            {/* Connection Points - Hidden now that lines work */}

            {/* Input Lines - Fresh rebuild with guaranteed connections */}
            {[
              { Icon: Database, label: "Systems & Apps" },
              { Icon: Mail, label: "Email & Messages" },
              { Icon: FileText, label: "Docs & SOPs" },
              { Icon: Wallet, label: "Finance & Ops" },
              { Icon: Cog, label: "HR & Workflow" },
              { Icon: BarChart3, label: "Analytics & BI" },
            ].map(({ Icon, label }, idx) => {
              // Center 6 inputs around core center properly
              const inputSpacing = height * 0.15; // Reduced spacing
              const inputY = coreCenter.y - (inputSpacing * 2.5) + (idx * inputSpacing);
              const inputCenter = { x: leftMargin, y: inputY };
              const startPoint = { x: inputCenter.x + circleRadius, y: inputCenter.y };
              const endPoint = { x: coreInPoint.x, y: coreInPoint.y }; // FORCE to exact connection point
              
              // Use SAME curve style as right side - cubic bezier with 40% control points
              const horizontalDistance = Math.abs(endPoint.x - startPoint.x);
              const curveDistance = horizontalDistance * 0.4; // Same as output lines
              const pathD = `M ${startPoint.x} ${startPoint.y} C ${startPoint.x + curveDistance} ${startPoint.y}, ${endPoint.x - curveDistance} ${endPoint.y}, ${endPoint.x} ${endPoint.y}`;
              
              // Calculate ACTUAL path length for dash animation (approximate for curve)
              const lineLength = Math.sqrt(
                Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)
              ) * 1.3; // Add 30% for cubic curve
              
              return (
                <path
                  key={`input-line-${idx}`}
                  d={pathD}
                  stroke={hoveredInput === idx ? "#93C5FD" : "url(#flowIn)"}
                  strokeWidth={hoveredInput === idx ? "6.25" : "2.5"}
                  fill="none"
                  strokeDasharray={lineLength}
                  strokeDashoffset={lineLength}
                  style={{ 
                    animation: hoveredInput === idx ? 
                      `dashIn 1.8s ${0.1 * idx}s ease-out forwards, pulse 1.5s ease-in-out infinite` :
                      `dashIn 1.8s ${0.1 * idx}s ease-out forwards`
                  }}
                />
              );
            })}

          </svg>

        </div>

      </CardContent>
    </Card>
  );
}