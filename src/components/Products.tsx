import React from 'react'

const cats = [
  { t: 'Makine Dairesiz (MRL)', d: 'Kompakt, enerji verimli ve sessiz çözümler.', a: 'MRL' },
  { t: 'Hidrolik Asansör', d: 'Ağır yük ve düşük hız uygulamaları için ideal.', a: 'Hidrolik' },
  { t: 'Yük Asansörü', d: 'Endüstriyel tesislere uygun yüksek kapasiteler.', a: 'Yük' },
  { t: 'Sedye/Engelli Platform', d: 'Erişilebilirlik standartlarına tam uyum.', a: 'Erişim' },
  { t: 'Panoramik/Kabin Tasarım', d: 'Mimariyle uyumlu özel kabin ve cam çözümler.', a: 'Panoramik' },
  { t: 'Kontrol & Kumanda', d: 'Güvenlik ve konfor odaklı kontrol sistemleri.', a: 'Kumanda' },
]

export default function Products() {
  return (
    <section id="urunler" className="section">
      <div className="mb-10">
        <h2 className="text-2xl font-bold md:text-3xl" data-reveal>Ürün Grupları</h2>
        <p className="mt-2 max-w-2xl text-neutral-300" data-reveal>
          Projenize uygun asansör tipini birlikte belirleyelim; kabin ve aksesuarları özelleştirelim.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((c, i) => (
          <article key={i} className="card p-5 group" data-reveal>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <span className="text-xs text-neutral-400">{c.a}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-300">{c.d}</p>
            <div className="mt-4 h-36 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition" />
          </article>
        ))}
      </div>
    </section>
  )
}
