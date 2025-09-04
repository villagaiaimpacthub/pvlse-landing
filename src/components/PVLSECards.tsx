'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel"
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// 3D Particle Morphing Component
const ParticleMorphing = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !canvasRef.current) return

    const initParticleSystem = async () => {
      try {
        // Create script elements for importmap and main script
        const importMapScript = document.createElement('script')
        importMapScript.type = 'importmap'
        importMapScript.textContent = JSON.stringify({
          imports: {
            "three": "https://cdn.jsdelivr.net/npm/three@0.163.0/build/three.module.js",
            "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.163.0/examples/jsm/",
            "animejs": "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js",
            "simplex-noise": "https://cdn.skypack.dev/simplex-noise@4.0.1"
          }
        })
        
        // Only add importmap if it doesn't exist
        if (!document.querySelector('script[type="importmap"]')) {
          document.head.appendChild(importMapScript)
        }

        // Wait a bit for importmap to register
        await new Promise(resolve => setTimeout(resolve, 100))

        // Dynamically import and initialize the particle system
        const initScript = `
          import * as THREE from 'three';
          import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
          import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
          import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
          import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
          import anime from 'animejs';
          import { createNoise3D, createNoise4D } from 'simplex-noise';

          // Simplified version for card display
          const CONFIG = {
            particleCount: 3000,
            shapeSize: 3,
            morphDuration: 2000,
            particleSizeRange: [0.05, 0.15],
            autoMorph: true,
            autoMorphInterval: 3000
          };

          let scene, camera, renderer, particleSystem, currentShapeIndex = 0;
          let targetPositions = [];
          const canvas = document.getElementById('particle-canvas-${Date.now()}');
          if (!canvas) return;

          // Initialize scene
          scene = new THREE.Scene();
          camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
          camera.position.set(0, 0, 8);
          
          renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
          renderer.setSize(120, 120);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          
          // Disable interactions on mobile
          const isMobileDevice = window.innerWidth < 768;
          if (isMobileDevice) {
            canvas.style.pointerEvents = 'none';
            canvas.style.touchAction = 'pan-y';
          }

          // Simple shapes for morphing
          const shapes = [
            () => generateSphere(CONFIG.particleCount, CONFIG.shapeSize),
            () => generateCube(CONFIG.particleCount, CONFIG.shapeSize),
            () => generateTorus(CONFIG.particleCount, CONFIG.shapeSize)
          ];

          function generateSphere(count, size) {
            const points = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
              const phi = Math.acos(-1 + (2 * i) / count);
              const theta = Math.sqrt(count * Math.PI) * phi;
              const x = Math.cos(theta) * Math.sin(phi) * size;
              const y = Math.sin(theta) * Math.sin(phi) * size;
              const z = Math.cos(phi) * size;
              points[i * 3] = x;
              points[i * 3 + 1] = y;
              points[i * 3 + 2] = z;
            }
            return points;
          }

          function generateCube(count, size) {
            const points = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
              const face = Math.floor(Math.random() * 6);
              const u = Math.random() * size - size/2;
              const v = Math.random() * size - size/2;
              const positions = [
                [size/2, u, v], [-size/2, u, v],
                [u, size/2, v], [u, -size/2, v],
                [u, v, size/2], [u, v, -size/2]
              ];
              points.set(positions[face], i * 3);
            }
            return points;
          }

          function generateTorus(count, size) {
            const points = new Float32Array(count * 3);
            const R = size * 0.6, r = size * 0.3;
            for (let i = 0; i < count; i++) {
              const theta = Math.random() * Math.PI * 2;
              const phi = Math.random() * Math.PI * 2;
              const x = (R + r * Math.cos(phi)) * Math.cos(theta);
              const y = r * Math.sin(phi);
              const z = (R + r * Math.cos(phi)) * Math.sin(theta);
              points[i * 3] = x;
              points[i * 3 + 1] = y;
              points[i * 3 + 2] = z;
            }
            return points;
          }

          // Generate target positions
          targetPositions = shapes.map(shape => shape());

          // Create particle system
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array(targetPositions[0]);
          const colors = new Float32Array(CONFIG.particleCount * 3);
          const sizes = new Float32Array(CONFIG.particleCount);

          for (let i = 0; i < CONFIG.particleCount; i++) {
            colors[i * 3] = 0.3 + Math.random() * 0.7;
            colors[i * 3 + 1] = 0.5 + Math.random() * 0.5;
            colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
            sizes[i] = Math.random() * (CONFIG.particleSizeRange[1] - CONFIG.particleSizeRange[0]) + CONFIG.particleSizeRange[0];
          }

          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
          geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

          const material = new THREE.ShaderMaterial({
            uniforms: {},
            vertexShader: \`
              attribute float size;
              varying vec3 vColor;
              void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
              }
            \`,
            fragmentShader: \`
              varying vec3 vColor;
              void main() {
                float alpha = 1.0 - distance(gl_PointCoord, vec2(0.5)) * 2.0;
                if (alpha < 0.1) discard;
                gl_FragColor = vec4(vColor, alpha * 0.8);
              }
            \`,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
            vertexColors: true
          });

          particleSystem = new THREE.Points(geometry, material);
          scene.add(particleSystem);

          // Auto-morph function
          function morph() {
            currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
            const targetPos = targetPositions[currentShapeIndex];
            const currentPos = geometry.attributes.position.array;
            
            anime({
              targets: { progress: 0 },
              progress: 1,
              duration: CONFIG.morphDuration,
              easing: 'easeInOutQuad',
              update: function(anim) {
                const progress = anim.animations[0].currentValue;
                for (let i = 0; i < CONFIG.particleCount * 3; i++) {
                  currentPos[i] += (targetPos[i] - currentPos[i]) * 0.02;
                }
                geometry.attributes.position.needsUpdate = true;
              }
            });
          }

          // Animation loop
          function animate() {
            requestAnimationFrame(animate);
            // Reduce rotation on mobile for better performance
            const rotationSpeed = window.innerWidth < 768 ? 0.002 : 0.005;
            particleSystem.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
          }

          // Start auto-morphing
          setInterval(morph, CONFIG.autoMorphInterval);
          animate();
        `

        const script = document.createElement('script')
        script.type = 'module'
        script.textContent = initScript
        document.body.appendChild(script)
        
        setIsLoaded(true)
        
        // Cleanup
        return () => {
          document.body.removeChild(script)
        }
      } catch (error) {
        console.warn('Failed to load particle system:', error)
      }
    }

    initParticleSystem()
  }, [])

  return (
    <div 
      ref={containerRef}
      className="w-full h-32 rounded-lg border border-white/10 bg-gradient-to-br from-black to-transparent flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      <canvas
        ref={canvasRef}
        id={`particle-canvas-${Date.now()}`}
        width={120}
        height={120}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '8px'
        }}
      />
    </div>
  )
}

const pvlseEffects = [
  {
    id: 1,
    title: "Follow-ups already done",
    description: "Meeting notes, action items, and next steps handled automatically.",
    detailText: "End the call. The notes are written, <span class='text-accent'>the tasks assigned</span>, responsibilities crystal clear.",
    action: "USE NOW"
  },
  {
    id: 2,
    title: "Answers without hunting", 
    description: "Instant knowledge retrieval from your entire organization.",
    detailText: "Just ask — <span class='text-accent'>PVLSE knows everything</span>. No files to hunt through. No tabs to open. No digging required.",
    action: "BUILD NOW"
  },
  {
    id: 3,
    title: "Money clarity on tap",
    description: "Real-time financial insights that reveal what others miss.",
    detailText: "See the truth in the numbers <span class='text-accent'>before anyone else does</span>. Financial clarity, instantly.",
    action: "LEARN MORE"
  },
  {
    id: 4,
    title: "Inbox peace",
    description: "Smart prioritization turns chaos into organized workflow.",
    detailText: "Clear actions — <span class='text-accent'>without touching a spreadsheet</span>. Your inbox becomes a peaceful, organized space.",
    action: "USE NOW"
  },
  {
    id: 5,
    title: "C-suite on speed dial",
    description: "Direct leadership access when decisions need to be made.",
    detailText: "Your C-suite — without scheduling bottlenecks. <span class='text-accent'>Executive access, whenever you need it</span>.",
    action: "BUILD NOW"
  }
]

export default function PVLSECards() {
  const [showLearnMore, setShowLearnMore] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: false, margin: "-100px" })

  const handleCardClick = (targetIndex: number) => {
    if (api && targetIndex !== currentSlide && window.innerWidth >= 768) {
      api.scrollTo(targetIndex)
    }
  }
  
  // Scroll-based gradient animation
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 2000], [0, 1])
  const gradientPosition = useTransform(scrollY, [0, 2000], ['-100% 0%', '100% 0%'])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <section id="moments" className="relative w-full min-h-screen py-24 md:py-32">
      {/* Background with image23.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image23.png')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        {/* Title Section */}
        <div className="text-center mb-8" ref={titleRef}>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6">
            THE{' '}
            <motion.span
              className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent font-black"
              style={{
                backgroundSize: '300% 100%',
                backgroundPosition: gradientPosition,
              }}
            >
              PVLSE
            </motion.span>{' '}
            EFFECT
          </h1>
          <motion.p 
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span dangerouslySetInnerHTML={{ 
              __html: pvlseEffects[currentSlide]?.detailText || "End the call. The notes are written, the tasks assigned, <span class='text-accent'>responsibilities crystal clear</span>."
            }} />
          </motion.p>
        </div>

        {/* Carousel Section - moved up higher */}
        <div className="flex-1 flex items-center justify-center py-4 -mt-12 md:-mt-24">
          <div className="w-full">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
                skipSnaps: false,
              }}
              className="w-full relative overflow-visible"
            >
              {/* Container showing all 5 cards with blur effect */}
              <div className="h-[480px] md:h-[600px] flex items-center py-4 md:py-8 overflow-visible">
                <CarouselContent className="-ml-4 overflow-visible [&>div]:overflow-visible [&_*]:overflow-visible">
                  {pvlseEffects.map((effect, index) => {
                    // Calculate distance from current center slide
                    let distance = Math.abs(index - currentSlide)
                    // Handle wrapping for infinite carousel (5 cards)
                    if (distance > 2) distance = 5 - distance
                    
                    // Center card (distance 0) and adjacent cards (distance 1) are sharp
                    const isSharp = distance <= 1
                    const isCenterCard = distance === 0
                    
                    return (
                      <CarouselItem key={effect.id} className="flex-none w-full md:w-[380px] overflow-visible">
                      <div className={`p-4 md:p-8 transition-all duration-500 overflow-visible origin-center blur-0 opacity-100 ${
                        isSharp ? 'md:blur-0 md:opacity-100' : 'md:blur-sm md:opacity-40'
                      } ${isCenterCard ? 'md:scale-105' : ''}`}>
                        <Card 
                          className={`group relative h-full flex flex-col bg-[#111214]/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 p-4 md:p-8 overflow-visible min-h-[300px] md:min-h-[350px] border border-white/10 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 ${
                            isCenterCard 
                              ? 'md:border-accent/30 md:shadow-xl md:shadow-accent/10' 
                              : 'cursor-pointer'
                          }`}
                          onClick={() => !isCenterCard && handleCardClick(index)}
                        >
                          {/* Card content */}
                          <CardHeader className="p-0 pb-4 md:pb-6">
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                              {effect.title}
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                              {effect.description}
                            </p>
                          </CardHeader>

                          <CardContent className="p-0 flex-1 flex flex-col">
                            {/* Visual element area - simplified mockups */}
                            <div className="flex-1 flex items-center justify-center mb-4 md:mb-6 opacity-75 group-hover:opacity-100 transition-opacity duration-300 min-h-[60px] md:min-h-[80px]">
                              {/* Simple visual elements based on card type */}
                              {effect.id === 1 && (
                                <div className={`w-full h-32 flex items-center justify-center transition-transform duration-300 ${isCenterCard ? 'scale-110' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 25 24" className="text-accent">
                                    <g clipPath="url(#MnrtxAZMcaa)">
                                      <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M4.5 8.75h16"/>
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 2.75v2m8-2v2"/>
                                      <rect width="16.5" height="15.5" x="4.25" y="4.75" stroke="currentColor" strokeWidth="1.5" rx="1"/>
                                      <circle cx="8.5" cy="16.5" r="1" fill="currentColor" className={isCenterCard ? 'animate-pulse' : ''}/>
                                      <circle cx="12.5" cy="16.5" r="1" fill="currentColor" className={isCenterCard ? 'animate-pulse' : ''}/>
                                      <circle cx="16.5" cy="16.5" r="1" fill="currentColor" className={isCenterCard ? 'animate-pulse' : ''}/>
                                      <circle cx="16.5" cy="13" r="1" fill="currentColor" className={isCenterCard ? 'animate-pulse' : ''}/>
                                      <circle cx="12.5" cy="13" r="1" fill="currentColor" className={isCenterCard ? 'animate-pulse' : ''}/>
                                      <circle cx="8.5" cy="13" r="1" fill="currentColor" className={isCenterCard ? 'animate-pulse' : ''}/>
                                    </g>
                                    <defs>
                                      <clipPath id="MnrtxAZMcaa">
                                        <path fill="#fff" d="M.5 0h24v24H.5z"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              )}
                              {effect.id === 2 && (
                                <div className={`w-full h-32 flex items-center justify-center transition-transform duration-300 ${isCenterCard ? 'scale-110' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 25 24" className={`text-accent ${isCenterCard ? 'animate-pulse' : ''}`}>
                                    <g clipPath="url(#CM0qSnBry-a)">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14"/>
                                      <path fill="currentColor" fillRule="evenodd" d="M15.891 16.452c.39-.315.746-.67 1.06-1.06l4.33 4.328a.75.75 0 1 1-1.061 1.06z" clipRule="evenodd"/>
                                    </g>
                                    <defs>
                                      <clipPath id="CM0qSnBry-a">
                                        <path fill="#fff" d="M.5 0h24v24H.5z"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              )}
                              {effect.id === 3 && (
                                <div className={`w-full h-32 flex items-center justify-center transition-transform duration-300 ${isCenterCard ? 'scale-110' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" className={`text-accent ${isCenterCard ? 'animate-pulse' : ''}`}>
                                    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                      <path d="M15.75 6.75h5.5v5.5"/>
                                      <path d="m2.75 18.25 6.63-6.67 3.54 3.55 8.33-8.38"/>
                                    </g>
                                  </svg>
                                </div>
                              )}
                              {effect.id === 4 && (
                                <div className={`w-full h-32 flex items-center justify-center transition-transform duration-300 ${isCenterCard ? 'scale-110' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 25 24" className={`text-accent ${isCenterCard ? 'animate-pulse' : ''}`}>
                                    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#IW3KuzL8I1a)">
                                      <path d="M4.25 19.25v-6.5h4a1 1 0 0 1 1 1v1.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 1 1-1h4v6.5a1 1 0 0 1-1 1H5.25a1 1 0 0 1-1-1m0-6.5 2.518-7.325a1 1 0 0 1 .946-.675h9.572a1 1 0 0 1 .946.675l2.518 7.325"/>
                                    </g>
                                    <defs>
                                      <clipPath id="IW3KuzL8I1a">
                                        <path fill="#fff" d="M.5 0h24v24H.5z"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              )}
                              {effect.id === 5 && (
                                <div className={`w-full h-32 flex items-center justify-center transition-transform duration-300 ${isCenterCard ? 'scale-110' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" className={`text-accent ${isCenterCard ? 'animate-pulse' : ''}`}>
                                    <g clipPath="url(#0UhzmwcaUla)">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 14.93v3.3c0 1.23-1.09 2.17-2.31 2C10.6 19.21 4.79 13.4 3.77 6.06c-.17-1.22.77-2.31 2-2.31h3.3a1 1 0 0 1 .99.83l.39 2.19c.14.77-.18 1.55-.82 2l-.89.63c1.43 2.41 3.46 4.42 5.88 5.84l.61-.87c.45-.64 1.23-.96 2-.82l2.19.39c.48.09.83.5.83.99"/>
                                    </g>
                                    <defs>
                                      <clipPath id="0UhzmwcaUla">
                                        <path fill="#fff" d="M0 0h24v24H0z"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              )}
                            </div>

                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )})}
                </CarouselContent>
              </div>
              
              <CarouselPrevious className="absolute left-[10px] md:left-[calc(50%-600px)] top-1/2 -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 z-30" />
              <CarouselNext className="absolute right-[10px] md:right-[calc(50%-600px)] top-1/2 -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 z-30" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}