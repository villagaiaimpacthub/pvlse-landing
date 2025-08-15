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
      <div className="container">
        <h2
          id="features-heading"
          className="text-3xl md:text-4xl font-semibold mb-6 text-textPrimary"
        >
          {section.title}
        </h2>

        <p className="text-textSecondary max-w-[68ch] mb-10">
          It's not about doing more. It's about doing the right things — and doing them well.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <article
              key={f.title}
              className={cx(
                'card p-6 transition will-change-transform',
                'hover:-translate-y-1 hover:shadow-hard'
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