import React from 'react'
import PageHero from '../components/PageHero'

export default function Services() {
  return (
    <>
      <PageHero
        title="Hizmetler"
        path="/hizmetler"
        desc="Yeni montaj, modernizasyon ve periyodik bakım hizmetleri. TS EN 81-20/50 uyumlu çözümler."
      />

      <section className="section">
        <div className="grid gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-semibold">Yeni Montaj</h3>
            <p className="mt-2 text-neutral-300">
              Konut, ofis ve AVM gibi yapılara MRL (makine dairesiz) ve hidrolik asansör çözümleri. Proje gereksinimlerine göre kabin tasarımı, kapı sistemleri, kumanda panoları ve güvenlik ekipmanları dahil komple uygulama.
            </p>
          </article>

          <article className="card p-6">
            <h3 className="text-xl font-semibold">Modernizasyon</h3>
            <p className="mt-2 text-neutral-300">
              Yıpranmış ekipmanların yenilenmesi, sürücü (VVVF) dönüşümleri, kontrol yazılımlarının güncellenmesi, kapı güvenlik sistemlerinin iyileştirilmesi ve konfor arttırıcı çözümler. Enerji tüketimini düşüren kontrol ve motor teknolojileri önceliklidir (rejeneratif frenleme, LED aydınlatma, bekleme modları).
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              Not: EN 81-20 (kurulum güvenlik gereklilikleri) ve EN 81-50 (bileşen test/inceleme kuralları) referans alınır.
            </p>
          </article>

          {/* YENİ: Bakım & Onarım */}
          <article className="card p-6">
            <h3 className="text-xl font-semibold">Bakım & Onarım Hizmetlerimiz</h3>
            <p className="mt-2 text-neutral-300">
              Proset Asansör, yalnızca montaj aşamasında değil, satış sonrası destek ve periyodik bakım & onarım hizmetleri ile de müşterilerinin yanında olur.
            </p>
            <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
              <li>• <b>Periyodik Bakım:</b> Asansörlerin düzenli kontrolleriyle arıza riskini en aza indiriyoruz.</li>
              <li>• <b>Acil Müdahale:</b> 7/24 destek hattımızla arıza durumlarında hızlı çözüm sunuyoruz.</li>
              <li>• <b>Onarım & Yedek Parça:</b> Orijinal ve kaliteli yedek parçalarla uzun ömürlü çözümler.</li>
              <li>• <b>Modernizasyon:</b> Eski asansörleri günümüz teknolojisine uyarlayarak güvenlik ve konforu artırıyoruz.</li>
              <li>• <b>Yasal Uyum:</b> Tüm bakım ve onarım hizmetlerimiz TS EN 81-20/50 ve ilgili mevzuatlara uygundur.</li>
            </ul>
            <p className="mt-3 text-sm text-neutral-400">
              Amacımız: Müşterilerimize sürekli güvenlik, uzun ömür ve kesintisiz konfor sunmaktır.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/iletisim" className="btn btn-primary">Teklif/Keşif Talep Et</a>
              <a href="https://www.instagram.com/prosetelevator/" target="_blank" rel="noreferrer" className="btn btn-ghost">Instagram’da Takip Et</a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
