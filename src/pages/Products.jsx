import React from 'react'
import PageHero from '../components/PageHero'

const cats = [
  { t:'Makine Dairesiz (MRL)', d:'Kompakt, sessiz ve enerji verimli çözümler. Düşük makine dairesi ihtiyacı.' },
  { t:'Hidrolik Asansör', d:'Ağır yük ve düşük hız uygulamaları. Bakımı kolay, dayanıklı sistemler.' },
  { t:'Yük Asansörü', d:'Endüstriyel tesisler için yüksek taşıma kapasiteleri ve geniş kabin opsiyonları.' },
  { t:'Sedye/Engelli Platform', d:'Erişilebilirlik standartlarına uyumlu, geniş kapı ve kabin tasarımları.' },
  { t:'Panoramik & Kabin Tasarım', d:'Mimariye uygun cam kabin ve özel kaplama çözümleri.' },
  { t:'Kontrol & Kumanda', d:'Sürüş konforu, güvenlik ve verimlilik için modern kontrol altyapıları.' },
]

export default function Products() {
  return (
    <>
      <PageHero title="Ürün Grupları" path="/urunler" desc="Projeye uygun asansör tipini birlikte belirleyelim; kabin ve aksesuarları özelleştirelim." />
      <section className="section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <article key={i} className="card p-5 group">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <span className="small">{['MRL','Hidrolik','Yük','Erişim','Kabin','Kontrol'][i]}</span>
              </div>
              <p className="mt-2 small">{c.d}</p>
              <div className="mt-4 h-36 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition" />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
