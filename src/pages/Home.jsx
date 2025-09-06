import React from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import heroImg from '../assets/aaa.jpeg'
import tseGif from '../assets/tse-hyb.gif'
import cePdf from '../assets/CE-Sertifika 2742-LD-3F6E54.pdf'
import p1 from '../assets/bbb.jpeg'
import p2 from '../assets/ccc.jpeg'
import p3 from '../assets/ddd.jpeg'
import p4 from '../assets/eee.jpeg'
import p5 from '../assets/fff.jpeg'
import p6 from '../assets/ggg.jpeg'

export default function Home() {
  // --- HERO parallax (GSAP quickTo; ScrollTrigger yok) ---
  const glowRef = React.useRef(null)
  const q = React.useRef(null)
  React.useEffect(() => {
    q.current = gsap.quickTo(glowRef.current, 'y', { duration: 0.3, ease: 'none' })
    const onScroll = () => { q.current(window.scrollY * 0.08) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // --- Sayaçlar (IntersectionObserver + GSAP) ---
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-counter]')
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const to = parseInt(el.dataset.to || '0', 10)
        const suf = el.dataset.suffix || ''
        const obj = { v: 0 }
        gsap.to(obj, {
          v: to, duration: 1.2, ease: 'power2.out',
          onUpdate: () => { el.textContent = `${Math.floor(obj.v)}${suf}` }
        })
        io.unobserve(el)
      })
    }, { root: null, threshold: 0.3 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <title>Proset Asansör | Montaj • Modernizasyon • Bakım</title>
      <meta name="description" content="Konut, ticari ve endüstriyel projelerde TS EN 81-20/50 uyumlu asansör çözümleri. Keşif, projelendirme, montaj, modernizasyon, bakım." />

      {/* ================= HERO ================= */}
      <header className="relative overflow-hidden">
        <img src={heroImg} alt="" aria-hidden="true"
             className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" loading="eager" decoding="async" fetchpriority="high" />
        <div ref={glowRef} className="absolute right-[-20%] top-[-25%] -z-10 h-[560px] w-[560px] rounded-full blur-3xl opacity-50"
             style={{ background:'radial-gradient(closest-side, rgba(225,29,47,.45), transparent 70%)' }} />

        <div className="section pt-20 md:pt-28">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <p className="mb-3 text-sm tracking-widest text-[color:var(--color-brand)]">PROSET ASANSÖR</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Her kata <span style={{color:'var(--color-brand)'}}>güven</span>, her kata <span style={{color:'var(--color-brand)'}}>kalite</span>
              </h1>
              <p className="mt-5 max-w-2xl muted">
                Montaj, modernizasyon ve periyodik bakım hizmetlerini tek çatı altında sunuyoruz. Ankara ve çevresinde hızlı servis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/hizmetler" className="btn btn-primary">Hizmetler</Link>
                <Link to="/iletisim" className="btn btn-ghost">Teklif Al</Link>
              </div>
            </div>

            <aside className="card p-6">
              <h3 className="text-lg font-semibold">Hızlı Bilgi & Keşif</h3>
              <ul className="mt-2 small space-y-1">
                <li>• TS EN 81-20/50 uyumu</li>
                <li>• MRL, hidrolik, sedye/erişilebilirlik çözümleri</li>
                <li>• Rejeneratif/LED ile enerji verimliliği</li>
              </ul>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a className="btn btn-ghost" href="tel:+905532776781">Ara: 0553 277 6781</a>
                <a className="btn btn-ghost" href="mailto:prosetasansor@gmail.com">E-posta</a>
              </div>
            </aside>
          </div>

          {/* sayaçlar */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { to:12,  label:'Yıllık Deneyim' },
              { to:300, label:'Tamamlanan Proje' },
              { to:99,  label:'Memnuniyet', suffix:'%' },
              { to:24,  label:'Servis (7/24)' },
            ].map((x,i)=>(
              <div key={i} className="card p-4 text-center">
                <p className="text-3xl font-extrabold"><span data-counter data-to={x.to} data-suffix={x.suffix||''}>0</span></p>
                <p className="small mt-1">{x.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ================= HİZMETLER ================= */}
      <section className="section">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Hizmetler</h2>
          <p className="mt-2 muted max-w-3xl">Keşiften devreye alma ve bakıma kadar uçtan uca kurumsal hizmet.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t:'Yeni Montaj', tag:'MRL / Hidrolik', d:'Konut, ofis, AVM, sanayi için projeye özel kurulum.' },
            { t:'Modernizasyon', tag:'Güvenlik & Konfor', d:'VVVF sürücü, kapı/komponent yenileme, enerji verimliliği.' },
            { t:'Periyodik Bakım', tag:'7/24', d:'Planlı bakım, orijinal parça, arıza müdahalesi.' },
            { t:'Yük & Sedye', tag:'Endüstri / Sağlık', d:'Yüksek kapasiteler ve erişilebilirlik gereklilikleri.' },
            { t:'Kabin Tasarımı', tag:'Estetik', d:'Cam/panorama, kaplama ve aydınlatma opsiyonları.' },
            { t:'Kontrol & Kumanda', tag:'Konfor', d:'Modern kontrol altyapıları, yumuşak sürüş.' },
          ].map((x,i)=>(
            <article key={i} className="card p-5 hover:border-[color:var(--color-brand)] transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{x.t}</h3>
                <span className="small text-neutral-400">{x.tag}</span>
              </div>
              <p className="mt-2 small">{x.d}</p>
              <div className="mt-4 h-28 rounded-xl border border-neutral-800 bg-neutral-900/50" />
            </article>
          ))}
        </div>
      </section>

      {/* ================= SEKTÖRLER ================= */}
      <section className="section">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Sektörlere Özel</h2>
          <p className="mt-2 muted max-w-3xl">Her bina tipi için doğru kapasite, hız ve kabin tasarımı.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t:'Konut', d:'MRL çözümler, sessiz ve verimli.' },
            { t:'AVM & Perakende', d:'Yoğun trafik, hızlı kapı sistemleri.' },
            { t:'Hastane', d:'Sedye ölçüleri ve hijyen gereksinimleri.' },
            { t:'Ofis & Otel', d:'Konfor ve estetik odaklı premium seçenekler.' },
            { t:'Sanayi & Yük', d:'Yüksek kapasiteli endüstriyel çözümler.' },
            { t:'Erişilebilirlik', d:'Platform/engel. çözümleri – mevzuata uyum.' },
          ].map((x,i)=>(
            <article key={i} className="card p-5 hover:border-[color:var(--color-brand)] transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{x.t}</h3>
                <span className="small text-neutral-500">{i+1}</span>
              </div>
              <p className="mt-2 small">{x.d}</p>
              <div className="mt-4 h-28 rounded-xl border border-neutral-800 bg-neutral-900/50" />
            </article>
          ))}
        </div>
      </section>

      {/* ================= PROJELER ================= */}
      <section className="section">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Referans Projeler</h2>
          <p className="mt-2 muted max-w-3xl">Seçili işlerden örnekler. Talep halinde detaylı referans listesi sağlanır.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[p1,p2,p3,p4,p5,p6].map((img,i)=>(
            <article key={i} className="card overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img src={img} alt="" loading="lazy" decoding="async"
                     className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">Proje #{i+1}</h3>
                <p className="small mt-1">Konut/Ticari projelerde MRL/hidrolik çözümler; test ve devreye alma dahil.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SERTİFİKALAR ================= */}
      <section className="section !pt-8">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="card p-6">
            <h3 className="font-semibold">EN 81-20/50 Uygunluğu</h3>
            <p className="small mt-1">Kurulum ve bileşen standartlarına uyum.</p>
          </article>
          <article className="card p-6 flex items-center gap-4">
            <img src={tseGif} alt="TSE HYB" className="h-14 w-auto" loading="lazy" />
            <div>
              <h3 className="font-semibold">TSE HYB</h3>
              <p className="small mt-1">Hizmet yeterlilik belgesi.</p>
            </div>
          </article>
          <article className="card p-6">
            <h3 className="font-semibold">CE Uygunluk</h3>
            <p className="small mt-1">AB mevzuatı kapsamında uygunluk.</p>
            <a href={cePdf} target="_blank" rel="noreferrer" className="btn btn-ghost mt-3">CE Sertifikası</a>
          </article>
        </div>
      </section>

      {/* ================= HIZLI TEKLİF FORMU ================= */}
      <section className="section">
        <div className="card p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold">Ücretsiz Keşif / Teklif</h2>
            <p className="mt-2 muted">Kısa formu gönderin; aynı gün içinde dönüş yapalım.</p>
          </div>
          <form className="grid gap-4 md:grid-cols-4">
            <input required className="rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-3" placeholder="Ad Soyad" />
            <input required type="email" className="rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-3" placeholder="E-posta" />
            <input required pattern="^\+?\d[\d\s]{5,}$" className="rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-3" placeholder="Telefon (+90…)" />
            <button className="btn btn-primary">Gönder</button>
            <textarea className="rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-3 md:col-span-4" rows={3} placeholder="Kısaca ihtiyacınızı yazın… (Opsiyonel)"></textarea>
            <p className="small md:col-span-4">Form backend’i WP/Email bağlandığında üretime hazır.</p>
          </form>
        </div>
      </section>
    </>
  )
}
