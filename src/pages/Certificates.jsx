import React from 'react'
import PageHero from '../components/PageHero'

const items = [
  { t:'TS EN 81-20 Uygunluğu', d:'Yolcu/yük asansörlerinin yapım ve kurulumunda güncel güvenlik gereklilikleri.' },
  { t:'TS EN 81-50 Uygunluğu', d:'Asansör bileşenlerinin tasarım, hesap ve test kuralları.' },
  { t:'CE İşareti & AT Uygunluk', d:'AB mevzuatına uygun ürün ve montaj süreçleri.' },
  { t:'ISO 9001', d:'Kalite yönetim sistemi ile süreçlerin izlenebilirliği.' },
]

export default function Certificates() {
  return (
    <>
      <PageHero title="Belgeler ve Standartlar" path="/belgeler" desc="Uygunluk ve kalite belgeleri; yürürlükteki standartlara referans." />
      <section className="section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((x, i) => (
            <article key={i} className="card p-5">
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 small">{x.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 small text-neutral-400">
          <p>* EN 81-20 kurulumda güvenlik gerekliliklerini, EN 81-50 ise bileşenlerin test/inceleme kurallarını tanımlar. 1 Eylül 2017’den sonra devreye alınan asansörlerde bu standartlar esas alınır.</p>
        </div>
      </section>
    </>
  )
}
