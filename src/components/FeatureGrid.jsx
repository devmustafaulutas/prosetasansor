import React from 'react'

export default function FeatureGrid({ title, desc, items }) {
  return (
    <section className="section">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold" data-reveal>{title}</h2>
        {desc && <p className="mt-2 muted max-w-3xl" data-reveal>{desc}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article key={i} className="card p-5" data-reveal>
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-neutral-800/60">{it.icon}</div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
            </div>
            <p className="mt-2 small">{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
