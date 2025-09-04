import React from 'react'
import PageHero from '../components/PageHero'

export default function About() {
  return (
    <>
      <PageHero title="Hakkımızda" path="/hakkimizda" desc="Proset Asansör; güvenlik, kalite ve müşteri memnuniyeti odağında montaj, modernizasyon ve bakım hizmetleri sunar." />
      <section className="section">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Misyon</h3>
            <p className="muted">Binalar için güvenli, konforlu ve enerji verimli dikey ulaşım çözümlerini erişilebilir kılmak.</p>
            <h3 className="text-xl font-semibold mt-6">Vizyon</h3>
            <p className="muted">Bölgesinde referans alınan, standartlara öncülük eden ve sürdürülebilir işletim anlayışıyla anılan marka olmak.</p>
          </div>
          <div className="card p-6">
            <h4 className="font-semibold">Rakamlarla Proset</h4>
            <ul className="mt-3 space-y-2 small">
              <li>• +12 yıl sektörel deneyim</li>
              <li>• +300 teslim edilmiş proje</li>
              <li>• 7/24 servis organizasyonu</li>
              <li>• TS EN 81-20/50 uyumlu süreçler</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
