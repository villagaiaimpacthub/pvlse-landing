'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
  return (
    <div className={`${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-textPrimary">
              Benefits <span className="text-accent">across the organization</span>
            </h2>
            <p className="text-xl md:text-2xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
              PVLSE creates value for everyone, from leadership to individual contributors.
            </p>
          </div>

          {/* Two Panel Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Leaders Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="group h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-semibold text-textPrimary">
                      {benefitsData.leaders.title}
                    </CardTitle>
                    <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                      Leadership
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {benefitsData.leaders.items.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.2 + (index * 0.1),
                          ease: "easeOut" 
                        }}
                        className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-4 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-textSecondary group-hover:text-textPrimary transition-colors duration-300">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Teams Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <Card className="group h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-semibold text-textPrimary">
                      {benefitsData.teams.title}
                    </CardTitle>
                    <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                      Team Members
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {benefitsData.teams.items.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.3 + (index * 0.1),
                          ease: "easeOut" 
                        }}
                        className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-4 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-textSecondary group-hover:text-textPrimary transition-colors duration-300">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}