'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel"
import { ArrowRight } from 'lucide-react'

const pvlseEffects = [
  {
    id: 1,
    title: "Follow-ups already done",
    description: "End the call. Tasks assigned, responsibilities crystal clear.",
    action: "USE NOW"
  },
  {
    id: 2,
    title: "Answers without hunting", 
    description: "Just ask — PVLSE knows. No files. No tabs. No digging.",
    action: "BUILD NOW"
  },
  {
    id: 3,
    title: "Money clarity on tap",
    description: "See the truth in the numbers before anyone else does.",
    action: "LEARN MORE"
  },
  {
    id: 4,
    title: "Inbox peace",
    description: "Clear actions — without touching a spreadsheet.",
    action: "USE NOW"
  },
  {
    id: 5,
    title: "C-suite on speed dial",
    description: "Your C-suite — without scheduling bottlenecks.",
    action: "BUILD NOW"
  }
]

export default function PVLSECards() {
  const [showLearnMore, setShowLearnMore] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    return () => api.off('select', onSelect)
  }, [api])

  return (
    <section className="relative w-full min-h-screen py-16">
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            THE PVLSE EFFECT
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            It feels like this
          </p>
          {showLearnMore && (
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              End the call. The notes are written, the tasks assigned, responsibilities crystal clear.
            </p>
          )}
        </div>

        {/* Carousel Section - increased height for hover animations */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-full">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full relative overflow-visible"
              style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}
            >
              {/* Container showing all 5 cards with blur effect - expanded to use full space */}
              <div className="h-[650px] flex items-center py-8 px-8">
                <CarouselContent className="flex gap-4" style={{ width: '100vw', justifyContent: 'center' }}>
                  {pvlseEffects.map((effect, index) => {
                    // For 5 cards displayed: positions 0,1,2,3,4
                    // Middle 3 should be sharp: positions 1,2,3
                    // Outer 2 should be blurred: positions 0,4
                    const isInMiddleThree = index >= 1 && index <= 3
                    
                    return (
                      <CarouselItem key={effect.id} className="flex-none w-[320px]">
                      <div className={`p-4 transition-all duration-500 ${
                        !isInMiddleThree ? 'blur-sm opacity-40' : 'blur-0 opacity-100'
                      }`}>
                        <Card className="group relative h-full flex flex-col bg-[#111214]/90 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 p-6 md:p-8 overflow-visible min-h-[480px]">
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
              
              {/* Custom navigation buttons with manual click handlers */}
              <button 
                onClick={() => {
                  console.log('Previous clicked, API:', api)
                  if (api) {
                    api.scrollPrev()
                  }
                }}
                className="absolute left-[calc(50%-800px-30px)] top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 h-12 w-12 z-20 cursor-pointer rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m8.842 3.135.708.708L6.025 7.368l3.525 3.525-.708.708L4.61 7.368l4.232-4.233Z" fill="currentColor"/>
                </svg>
              </button>
              <button 
                onClick={() => {
                  console.log('Next clicked, API:', api)
                  if (api) {
                    api.scrollNext()
                  }
                }}
                className="absolute right-[calc(50%-800px-60px)] top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 h-12 w-12 z-20 cursor-pointer rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m6.158 3.135 4.232 4.233-4.232 4.232-.708-.708L8.975 7.368 5.45 3.843l.708-.708Z" fill="currentColor"/>
                </svg>
              </button>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}