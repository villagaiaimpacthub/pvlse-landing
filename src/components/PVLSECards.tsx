'use client'

const pvlseEffects = [
  {
    id: 1,
    title: "Follow-ups already done",
    description: "End the call. Tasks assigned, responsibilities crystal clear."
  },
  {
    id: 2,
    title: "Answers without hunting", 
    description: "Just ask — PVLSE knows. No files. No tabs. No digging."
  },
  {
    id: 3,
    title: "Money clarity on tap",
    description: "See the truth in the numbers before anyone else does."
  },
  {
    id: 4,
    title: "Inbox peace",
    description: "Clear actions — without touching a spreadsheet."
  },
  {
    id: 5,
    title: "C-suite on speed dial",
    description: "Your C-suite — without scheduling bottlenecks."
  }
]

export default function PVLSECards() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Space background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: "url('/assets/space-planet-horizon.jpg'), linear-gradient(135deg, #1e3a8a 0%, #000000 100%)"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Title Section */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
          THE PVLSE EFFECT
        </h1>
        <p className="text-lg text-gray-300">
          It feels like this
        </p>
      </div>

      {/* Simple grid of cards in center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {pvlseEffects.map((effect, index) => (
            <article
              key={effect.id}
              className="bg-white/95 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl p-8 max-w-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">
                    {effect.id}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-center text-gray-900 leading-tight mb-3">
                {effect.title}
              </h3>
              
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {effect.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}