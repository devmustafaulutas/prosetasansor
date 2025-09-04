import React from 'react'

const items = [
  { t: 'Yeni Montaj', d: 'Konut ve ticari yapılar için projeye özel kabin, motor ve kumanda çözümleri.', i: '🛠️' },
  { t: 'Modernizasyon', d: 'Mevcut asansörlerde güvenlik, konfor ve enerji verimliliği iyileştirmeleri.', i: '⚙️' },
  { t: 'Periyodik Bakım', d: 'Öngörülü bakım planları ve 7/24 arıza/servis desteği.', i: '🧰' },
  { t: 'CE & Yönetmelik Uyum', d: 'EN 81-20/50 ve ilgili standartlara uygunluk.', i: '✅' },
  { t: 'Hızlı Kurulum', d: 'Şantiye takvimine uygun teslim ve montaj koordinasyonu.', i: '⏱️' },
  { t: 'Şeffaf Teklif', d: 'Kalem kalem maliyet içeren anlaşılır tekliflendirme.', i: '📄' }
]

export default function Features() {
  return (
    <section id="hizmetler" className="section">
      <div className="mb-10">
        <h2 className="text-2xl font-bold md:text-3xl" data-reveal>Hizmetlerimiz</h2>
        <p className="mt-2 max-w-2xl text-neutral-300" data-reveal>
          Projete göre şekillenen, ölçeklenebilir çözümler. Keşif ve danışmanlık ücretsiz.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article key={i} className="card p-5" data-reveal>
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-neutral-800/60">{it.i}</div>
              <h3 className="text-lg font-semibold">{it.t}</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">{it.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
