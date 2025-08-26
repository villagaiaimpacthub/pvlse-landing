'use client'

import data from '@/data/pvlse.json'

export default function Moments() {
  const section = (data as any).content.moments

  return (
    <section className="py-32 text-center">
      <div className="container">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
          THE PVLSE EFFECT
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          It feels like this
        </p>
      </div>
    </section>
  )
}