import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/hero'
import Logos from '../components/Logos'
import FeatureGrid from '../components/FeatureGrid'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // section reveal (ek garanti)
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      gsap.from(el, { opacity: 0, y: 24, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
    })
  }, [])

  const services = [
    { icon:'🛠️', title:'Yeni Montaj', text:'Konut ve ticari yapılar için projeye özel kabin, makine ve kumanda çözümleri.' },
    { icon:'⚙️', title:'Modernizasyon', text:'Güvenlik, konfor ve enerji verimliliği için komponent yenileme ve kontrol sistemi güncellemeleri.' },
    { icon:'🧰', title:'Periyodik Bakım', text:'Planlı bakım, 7/24 arıza müdahalesi ve yasal periyotlara uygun kontrol.' },
    { icon:'✅', title:'Standart Uyum', text:'TS EN 81-20/50 gereklerine uygun tasarım ve uygulama süreçleri.' },
    { icon:'⏱️', title:'Hızlı Teslim', text:'Şantiye planına göre koordinasyon, test ve devreye alma.' },
    { icon:'📄', title:'Şeffaf Teklif', text:'Kalem kalem, anlaşılır ve karşılaştırılabilir fiyatlandırma.' },
  ]

  const highlights = [
    { icon:'🔋', title:'Enerji Verimliliği', text:'VVVF sürücüler, LED aydınlatma, bekleme modları ve geri kazanım üniteleri ile düşük tüketim.' },
    { icon:'🧯', title:'Güvenlik', text:'Kapı koruma sistemleri, emniyet dişlisi, tamponlar ve kurtarma prosedürleri.' },
    { icon:'🎛️', title:'Konfor', text:'Sarsıntısız kalkış/duruş, düşük gürültü ve titreşim kontrolü.' },
  ]

  return (
    <>
      <Hero />
      <Logos />
      <FeatureGrid title="Hizmetlerimiz" desc="Projeye özel, ölçeklenebilir çözümler. Keşif ve danışmanlık ücretsiz." items={services} />
      <FeatureGrid title="Fark Yaratan Başlıklar" items={highlights} />
      <section className="section">
        <div className="card p-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold" data-reveal>Birlikte planlayalım</h3>
          <p className="mt-2 muted" data-reveal>İhtiyacınızı anlatın, aynı gün içinde teknik geri dönüş ve ön teklif gönderelim.</p>
          <div className="mt-6 flex justify-center gap-3" data-reveal>
            <a className="btn btn-primary" href="/iletisim">İletişime Geç</a>
            <a className="btn btn-ghost" href="/hizmetler">Hizmetlere Bak</a>
            <a className="btn btn-ghost" href="/haberler">Haberler</a>
          </div>
        </div>
      </section>
    </>
  )
}
