'use client'

import React from 'react'
import data from '@/data/pvlse.json'
import { cx } from './Utils'

export default function FeatureList() {
  const section = data.content.features
  const items: { title: string; desc: string }[] = section.items

  return (
    <section
      id="product"
      aria-labelledby="features-heading"
      className="py-24 md:py-28"
    >
      <div className="container text-center">
        <h2
          id="features-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-4"
        >
          Features that <span className="text-accent">matter</span>
        </h2>

        <p className="text-xl md:text-2xl text-textSecondary mb-10 mx-auto max-w-3xl leading-relaxed">
          It's not about doing more. It's about doing the right things — well.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <article
              key={f.title}
              className={cx(
                'card p-6 transition-all duration-300 bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10'
              )}
            >
              <h3 className="text-xl font-semibold text-textPrimary mb-2">
                {f.title}
              </h3>
              <p className="text-textSecondary leading-relaxed">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}