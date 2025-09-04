import React from 'react'
import PageHero from '../components/PageHero'

export default function Services() {
  return (
    <>
      <PageHero title="Hizmetler" path="/hizmetler" desc="Yeni montaj, modernizasyon ve periyodik bakım hizmetleri. TS EN 81-20/50 uyumlu çözümler." />
      <section className="section">
        <div className="grid gap-6">
          <article className="card p-6">
            <h3 className="text-xl font-semibold">Yeni Montaj</h3>
            <p className="mt-2 muted">Konut, ofis ve AVM gibi yapılara MRL (makine dairesiz) ve hidrolik asansör çözümleri. Proje gereksinimlerine göre kabin tasarımı, kapı sistemleri, kumanda panoları ve güvenlik ekipmanları dahil komple uygulama.</p>
          </article>

          <article className="card p-6">
            <h3 className="text-xl font-semibold">Modernizasyon</h3>
            <p className="mt-2 muted">Yıpranmış ekipmanların yenilenmesi, sürücü (VVVF) dönüşümleri, kontrol yazılımlarının güncellenmesi, kapı güvenlik sistemlerinin iyileştirilmesi ve konfor arttırıcı çözümler. Enerji tüketimini düşüren kontrol ve motor teknolojileri önceliklidir (örn. rejeneratif frenleme, LED aydınlatma, bekleme modları).</p>
            <p className="mt-2 small">Not: AB uyumlu EN 81-20 (kurulumda güvenlik gereklilikleri) ve EN 81-50 (bileşenlerin test/inceleme kuralları) değişiklikleri dikkate alınarak yapılır.</p>
          </article>

          <article className="card p-6">
            <h3 className="text-xl font-semibold">Periyodik Bakım</h3>
            <p className="mt-2 muted">Planlı bakım, yedek parça yönetimi, acil arıza müdahalesi, periyodik kontrol organizasyonu ve mevzuata uygun raporlama. Kullanıcı güvenliği ve cihaz ömrünü uzatmak esastır.</p>
          </article>
        </div>
      </section>
    </>
  )
}
