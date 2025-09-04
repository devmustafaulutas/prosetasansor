import React from 'react'

export default function PageHero({ title, desc, path, children }) {
  const metaTitle = `${title} | Proset Asansör`
  const metaDesc  = desc || 'Proset Asansör: montaj, modernizasyon, bakım ve projelendirme hizmetleri.'
  const canonical = (typeof window !== 'undefined')
    ? `${window.location.origin}${path || window.location.pathname}`
    : `https://www.example.com${path || ''}`

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index,follow" />

      <section className="relative overflow-hidden border-b border-neutral-900/60">
        <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
          <div className="absolute -top-20 left-1/2 w-[560px] h-[560px] -translate-x-1/2 rounded-full bg-[color:var(--color-brand)]/40"></div>
        </div>
        <div className="section !py-14">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          {desc && <p className="mt-2 muted max-w-3xl">{desc}</p>}
          {children}
        </div>
      </section>
    </>
  )
}
