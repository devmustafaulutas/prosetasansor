import React from 'react'

export default function CTA() {
  return (
    <section id="teklif" className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"></div>
      <div className="section">
        <div className="card p-8 text-center shadow-2xl" style={{ boxShadow: 'var(--shadow-brand)' }}>
          <h2 className="text-2xl font-bold md:text-3xl" data-reveal>Projenizi birlikte planlayalım</h2>
          <p className="mx-auto mt-2 max-w-2xl text-neutral-300" data-reveal>
            İhtiyacınızı anlatın, aynı gün teknik geri dönüş ve ön teklif gönderelim.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3" data-reveal>
            <a className="btn btn-primary" href="tel:+90xxxxxxxxxx">Hemen Ara</a>
            <a className="btn btn-ghost" href="mailto:info@domain.com">E-posta Gönder</a>
          </div>
          <p className="mt-3 text-xs text-neutral-400" data-reveal>Keşif ve danışmanlık ücretsizdir.</p>
        </div>
      </div>
    </section>
  )
}
