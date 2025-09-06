import React from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useReveal from '../lib/UseReveal'
import cePdf from '../assets/CE-Sertifika 2742-LD-3F6E54.pdf'
import tse from '../assets/tse-hyb.gif'
import Hero from '../components/Hero' 
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useReveal() // tüm [data-reveal]/[data-stagger] için güvenli reveal
  const wrap = React.useRef(null)
  const bg = React.useRef(null)
  const halo = React.useRef(null)

  // Head meta güvence
  React.useEffect(() => {
    document.title = 'Proset Asansör | Montaj • Modernizasyon • Bakım'
    const meta = document.querySelector('meta[name="description"]')
    const desc =
      'TS EN 81-20/50 uyumlu, güvenli ve enerji verimli asansör çözümleri. Keşif, projelendirme, montaj, modernizasyon ve periyodik bakım.'
    if (meta) meta.setAttribute('content', desc)
  }, [])

  // Hero parallax (yalın ve stabil)
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bg.current, {
        yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start:'top top', end:'bottom top', scrub:true }
      })
      gsap.to(halo.current, {
        yPercent: -8, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start:'top top', end:'bottom top', scrub:true }
      })
      gsap.fromTo('[data-stagger]', { autoAlpha:0, y:18 }, { autoAlpha:1, y:0, duration:.7, ease:'power2.out', stagger:.07, clearProps:'transform,opacity' })
      setTimeout(()=>ScrollTrigger.refresh(), 0)
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <>
           <Hero />


      {/* ====== 2) YAKLAŞIM ====== */}
      <section className="section">
        <div className="grid gap-10 md:grid-cols-2">
          <article className="reveal" data-reveal>
            <h2 className="h2">Güvenlik &amp; Kalite</h2>
            <p className="mt-4 lead">
              Kabin, kapı, kumanda ve güvenlik bileşenlerini projenin gereksinimlerine göre seçiyor; tüm uygunluk belgeleri
              ve test tutanaklarını proje dosyasında iletiyoruz. Kurulum güvenliği <b>EN 81-20</b>, bileşen test ve incelemeleri <b>EN 81-50</b> ile doğrulanır.
            </p>
            <ul className="mt-4 small space-y-2">
              <li className="bullet">Kritik bileşenlerde marka/seviye alternatifleri</li>
              <li className="bullet">Devreye alma kontrol listesi ve imzalı teslim</li>
              <li className="bullet">Garanti ve bakım planı başlangıcı</li>
            </ul>
          </article>

          <article className="reveal" data-reveal>
            <h2 className="h2">Müşteri Odaklı Süreç</h2>
            <p className="mt-4 lead">
              Konutlarda sessizlik ve verim; AVM’lerde dayanım ve trafik; hastanelerde erişilebilirlik ve hijyen.
              İhtiyaca göre <b>kapasite</b>, <b>hız</b> ve <b>kabin</b> seçeneklerini birlikte belirliyoruz.
            </p>
            <ul className="mt-4 small space-y-2">
              <li className="bullet">Yerinde keşif ve projelendirme</li>
              <li className="bullet">Zaman planı ve kesintisiz şantiye koordinasyonu</li>
              <li className="bullet">Teslim sonrası 7/24 destek</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ====== 3) HİZMET KAPSAMI ====== */}
      <section className="section">
        <div className="panel p-7 md:p-10 reveal" data-reveal>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Yeni Montaj</h3>
              <p className="small mt-2">
                MRL/hidrolik sistemler; kullanım profiline göre doğru makine, taşıyıcı ve kumanda seçimi.
                Konfor odaklı sürüş ve enerji verimliliği standardı.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Modernizasyon</h3>
              <p className="small mt-2">
                Güvenlik bileşenleri, kapı/kabin, kontrol panosu ve VVVF sürücü yenilemeleriyle sistemi güncel
                standartlara taşır; rapor ve fotoğraf setiyle teslim ederiz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Periyodik Bakım</h3>
              <p className="small mt-2">
                Planlı bakım, orijinal yedek parça ve arıza müdahalesi. Kayıtlı bakım geçmişi ve öneri raporlarıyla
                kesintisiz kullanım ömrü.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3.5) SÜREÇ NASIL İŞLER? (yeni) ====== */}
      <section className="section">
        <div className="panel p-7 md:p-10 reveal" data-reveal>
          <h2 className="h2">Süreç Nasıl İşler?</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              { t:'Keşif & Değerlendirme', d:'Sahada ölçüm, trafik analizi, uygun çözüm sınıflandırması.' },
              { t:'Projelendirme', d:'Kapasite, hız, kabin ve kumanda seçimi; plan ve takvim.' },
              { t:'Kurulum / Modernizasyon', d:'Şantiye koordinasyonu, güvenlik standartlarına uygun montaj.' },
              { t:'Test & Teslim', d:'EN 81-20/50 testleri, eğitim ve dokümantasyonla teslim.' },
            ].map((s,i)=>(
              <li key={i} className="rounded-xl border border-[color:var(--border)] bg-[#12151b] p-5">
                <div className="small text-[var(--brand)] mb-1">Adım {i+1}</div>
                <p className="font-semibold">{s.t}</p>
                <p className="small mt-1">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/iletisim" className="btn btn-cta">Ücretsiz Keşif Talep Et</Link>
            <Link to="/projeler" className="btn btn-ghost">Projeler</Link>
          </div>
        </div>
      </section>

      {/* ====== 4) KALİTE & CTA ====== */}
      <section className="section">
        <div className="grid items-stretch gap-8 md:grid-cols-[1.2fr_.8fr]">
          <div className="panel p-7 md:p-10 reveal" data-reveal>
            <h2 className="h2">Kalite ve Belgeler</h2>
            <p className="mt-3 lead">
              Proje dosyasında CE uygunluk belgeleri, test raporları ve devreye alma tutanakları yer alır.
              Süreç boyunca şeffaf iletişim ve dokümantasyon temel prensibimizdir.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={cePdf} target="_blank" rel="noreferrer" className="btn btn-ghost">CE Sertifikası</a>
              <Link to="/belgeler" className="btn btn-ghost">Tüm Belgeler</Link>
            </div>
          </div>

          <aside className="panel p-6 flex flex-col justify-between reveal" data-reveal>
            <div className="flex items-center gap-4">
              <img src={tse} alt="TSE Hizmet Yeterlilik Belgesi" className="h-14 w-auto" loading="lazy" />
              <div>
                <p className="font-semibold">TSE HYB</p>
                <p className="small">Hizmet yeterlilik belgesi</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Birlikte planlayalım</h3>
              <p className="small mt-1">Kısa bir görüşme ile kapasite, hız ve kabin seçeneklerini netleştirelim.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/iletisim" className="btn btn-cta">Teklif Al</Link>
                <a className="btn btn-ghost" href="tel:+905532776781">Ara</a>
                <a className="btn btn-ghost" href="mailto:prosetasansor@gmail.com">E-posta</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ====== 5) SIK SORULAN SORULAR (yeni) ====== */}
      <section className="section">
        <div className="panel p-7 md:p-10 reveal" data-reveal>
          <h2 className="h2">Sık Sorulan Sorular</h2>
          <div className="mt-5 grid gap-3">
            {[
              {
                q:'Modernizasyon mu yeni sistem mi daha mantıklı?',
                a:'Mevcut kuyunun ve bileşenlerin durumu uygunsa modernizasyon maliyet/fayda açısından şeffaf bir çözümdür. Güvenlik şartlarını sağlayamayan ya da ekonomik ömrünü dolduran sistemlerde yeni montaj önerilir.'
              },
              {
                q:'Bakım periyodu ne olmalı?',
                a:'Konutlarda genelde aylık; yoğun trafikte (AVM/hastane/ofis) daha sık aralıklar önerilir. Periyot, kullanım profili ve üretici tavsiyelerine göre belirlenir.'
              },
              {
                q:'Enerji verimliliği için neler yapılabilir?',
                a:'VVVF sürücü, LED aydınlatma, uyku modu, verimli motor ve denge ayarı gibi kalemlerle tüketim ciddi oranda düşer. Projede bu seçenekleri birlikte planlarız.'
              },
            ].map((item,i)=>(
              <details key={i} className="group rounded-xl border border-[color:var(--border)] bg-[#12151b] p-5">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-semibold">{item.q}</p>
                    <span className="small text-[var(--muted)] transition group-open:rotate-45 select-none">＋</span>
                  </div>
                </summary>
                <p className="small mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 6) GENİŞ CTA BANDI (yeni) ====== */}
      <section className="section">
        <div className="panel p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">BİRLİKTE ÇALIŞALIM</p>
            <h2 className="h2">Projeyi bugün planlamaya başlayalım</h2>
            <p className="small mt-2">Ücretsiz keşif ve hızlı teklif için iletişime geçin.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/iletisim" className="btn btn-cta">Teklif Al</Link>
            <a className="btn btn-ghost" href="tel:+905532776781">Hemen Ara</a>
          </div>
        </div>
      </section>
    </>
  )
}
