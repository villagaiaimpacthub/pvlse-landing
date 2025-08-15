'use client'

import data from '@/data/pvlse.json'
import { useReveal } from './Motion'
import { cx } from './Utils'

export default function Moments() {
  const section = (data as any).content.moments
  const items: { title: string; body: string; motion?: any; visual?: { kind: 'clip' | 'image'; asset: string; alt?: string } }[] =
    section.items

  const ref = useReveal(60, 0.15)

  return (
    <section id={section.id} className="py-24 md:py-28">
      <div ref={ref as any} className="container">
        {section.kicker && (
          <div className="reveal text-lg md:text-xl text-accent font-medium tracking-wide mb-2">
            {section.kicker}
          </div>
        )}
        {section.title && (
          <h2 className="reveal text-3xl md:text-4xl font-semibold mb-8 text-textPrimary">
            {section.title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className={cx(
                'card overflow-hidden group transition will-change-transform',
                'hover:-translate-y-1 hover:shadow-hard'
              )}
            >
              {/* Visual */}
              {item.visual?.kind === 'clip' ? (
                <div className="aspect-video bg-black/30">
                  <video
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                    src={item.visual.asset}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={item.visual.alt || item.title}
                  />
                </div>
              ) : item.visual?.kind === 'image' ? (
                <div className="aspect-video bg-black/30">
                  <img
                    src={item.visual.asset}
                    alt={item.visual.alt || item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}

              {/* Copy */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mt-2 text-textSecondary leading-relaxed">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {section.note && (
          <p className="reveal text-muted mt-6 max-w-[68ch]">{section.note}</p>
        )}
      </div>
    </section>
  )
}