'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel"
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const pvlseEffects = [
  {
    id: 1,
    title: "Follow-ups already done",
    description: "End the call. Tasks assigned, responsibilities crystal clear.",
    detailText: "End the call. The notes are written, the tasks assigned, responsibilities crystal clear.",
    action: "USE NOW"
  },
  {
    id: 2,
    title: "Answers without hunting", 
    description: "Just ask — PVLSE knows. No files. No tabs. No digging.",
    detailText: "Just ask — PVLSE knows everything. No files to hunt through. No tabs to open. No digging required.",
    action: "BUILD NOW"
  },
  {
    id: 3,
    title: "Money clarity on tap",
    description: "See the truth in the numbers before anyone else does.",
    detailText: "See the truth in the numbers before anyone else does. Financial clarity, instantly.",
    action: "LEARN MORE"
  },
  {
    id: 4,
    title: "Inbox peace",
    description: "Clear actions — without touching a spreadsheet.",
    detailText: "Clear actions — without touching a spreadsheet. Your inbox becomes a peaceful, organized space.",
    action: "USE NOW"
  },
  {
    id: 5,
    title: "C-suite on speed dial",
    description: "Your C-suite — without scheduling bottlenecks.",
    detailText: "Your C-suite — without scheduling bottlenecks. Executive access, whenever you need it.",
    action: "BUILD NOW"
  }
]

export default function PVLSECards() {
  const [showLearnMore, setShowLearnMore] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: false, margin: "-100px" })
  
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
    return () => api.off('select', onSelect)
  }, [api])

  return (
    <section id="moments" className="relative w-full min-h-screen py-16">
      {/* Background with image22.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image22.png')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        {/* Title Section */}
        <div className="text-center mb-8" ref={titleRef}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
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
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {pvlseEffects[currentSlide]?.detailText || "End the call. The notes are written, the tasks assigned, responsibilities crystal clear."}
          </motion.p>
        </div>

        {/* Carousel Section - moved up higher */}
        <div className="flex-1 flex items-center justify-center py-4" style={{ marginTop: '-180px' }}>
          <div className="w-full">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
                skipSnaps: false,
              }}
              className="w-full relative"
            >
              {/* Container showing all 5 cards with blur effect */}
              <div className="h-[800px] flex items-center py-8">
                <CarouselContent className="-ml-4 overflow-visible">
                  {pvlseEffects.map((effect, index) => {
                    // Calculate distance from current center slide
                    let distance = Math.abs(index - currentSlide)
                    // Handle wrapping for infinite carousel (5 cards)
                    if (distance > 2) distance = 5 - distance
                    
                    // Center card (distance 0) and adjacent cards (distance 1) are sharp
                    const isSharp = distance <= 1
                    const isCenterCard = distance === 0
                    
                    return (
                      <CarouselItem key={effect.id} className="flex-none w-[320px]">
                      <div className={`p-4 transition-all duration-500 ${
                        isSharp ? 'blur-0 opacity-100' : 'blur-sm opacity-40'
                      } ${isCenterCard ? 'scale-105' : ''}`}>
                        <Card className={`group relative h-full flex flex-col bg-[#111214]/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 p-6 md:p-8 overflow-visible min-h-[420px] ${
                          isCenterCard 
                            ? 'border-accent/30 shadow-xl shadow-accent/10' 
                            : 'border border-white/10 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10'
                        }`}>
                          {/* Card content */}
                          <CardHeader className="p-0 pb-6">
                            <h3 className="text-xl font-semibold text-white mb-4">
                              {effect.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {effect.description}
                            </p>
                          </CardHeader>

                          <CardContent className="p-0 flex-1 flex flex-col">
                            {/* Visual element area - simplified mockups */}
                            <div className="flex-1 flex items-center justify-center mb-6 opacity-75 group-hover:opacity-100 transition-opacity duration-300 min-h-[120px]">
                              {/* Simple visual elements based on card type */}
                              {effect.id === 1 && (
                                <div className="w-full h-32 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                                  </div>
                                </div>
                              )}
                              {effect.id === 2 && (
                                <div className="w-full h-32 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                  <div className="space-y-2">
                                    <div className="h-2 w-24 bg-white/20 rounded"></div>
                                    <div className="h-2 w-20 bg-white/20 rounded"></div>
                                    <div className="h-2 w-28 bg-white/20 rounded"></div>
                                  </div>
                                </div>
                              )}
                              {effect.id === 3 && (
                                <div className="w-full h-32 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                  <div className="grid grid-cols-3 gap-2">
                                    {[...Array(9)].map((_, i) => (
                                      <div key={i} className="w-4 h-4 bg-white/20 rounded-sm"></div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {effect.id === 4 && (
                                <div className="w-full h-32 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                  <div className="w-16 h-16 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                    <div className="w-6 h-1 bg-blue-500 rounded"></div>
                                  </div>
                                </div>
                              )}
                              {effect.id === 5 && (
                                <div className="w-full h-32 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                  <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Action button */}
                            <div className="flex items-center justify-center">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  if (effect.action === "LEARN MORE") {
                                    setShowLearnMore(true)
                                  }
                                }}
                                className="bg-transparent border-white/25 text-white hover:bg-white/10 hover:border-white/40 font-mono text-xs uppercase tracking-widest transition-all duration-300 group-hover:bg-white/15"
                              >
                                {effect.action}
                                <ArrowRight className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )})}
                </CarouselContent>
              </div>
              
              <CarouselPrevious className="absolute left-[calc(50%-520px)] top-1/2 -translate-y-1/2 h-12 w-12 z-30" />
              <CarouselNext className="absolute right-[calc(50%-520px)] top-1/2 -translate-y-1/2 h-12 w-12 z-30" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}