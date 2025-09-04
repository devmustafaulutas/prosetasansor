import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const wrap = useRef(null)
    const glow = useRef(null)
    const titleRef = useRef(null)
    const subRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // giriş animasyonu
            gsap.from('[data-stagger]', { opacity: 0, y: 24, duration: 0.8, ease: 'power2.out', stagger: 0.08, delay: 0.15 })
            // parallax
            gsap.to(glow.current, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: wrap.current, start: 'top top', scrub: true } })
            gsap.to(titleRef.current, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: wrap.current, start: 'top top', scrub: true } })
            gsap.to(subRef.current, { yPercent: -6, ease: 'none', scrollTrigger: { trigger: wrap.current, start: 'top top', scrub: true } })
        }, wrap)
        return () => ctx.revert()
    }, [])

    return (
        <>
            <title>Proset Asansör | Güvenli ve Enerji Verimli Asansör Sistemleri</title>
            <meta
                name="description"
                content="Yeni montaj, modernizasyon ve periyodik bakım. EN 81-20/50 standartlarına uygun, güvenli ve enerji verimli çözümler."
            />
            <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://www.example.com/'} />

            <header ref={wrap} className="relative overflow-hidden">
                <div ref={glow} className="absolute inset-0 -z-10 opacity-30 blur-3xl">
                    <div className="absolute -top-20 left-1/2 w-[560px] h-[560px] -translate-x-1/2 rounded-full bg-[color:var(--color-brand)]/40"></div>
                </div>

                <div className="section">
                    <p className="mb-3 text-sm tracking-widest text-indigo-300" data-stagger>ASANSÖR ÇÖZÜMLERİ</p>
                    <h1 ref={titleRef} className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl" data-stagger>
                        Güvenli, <span className="text-indigo-400">sessiz</span> ve <span className="text-indigo-400">enerji verimli</span> asansör sistemleri
                    </h1>
                    <p ref={subRef} className="mt-5 max-w-2xl muted" data-stagger>
                        Yeni montaj, modernizasyon ve periyodik bakım hizmetlerini tek çatı altında sunuyoruz. Konut, ticari ve endüstriyel projelerde uçtan uca çözüm.
                    </p>

                    <p className="mt-3 small text-neutral-400" data-stagger>
                        “Her kata güven, her kata kalite.” • Güvenle yükselin.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3" data-stagger>
                        <Link to="/hizmetler" className="btn btn-primary">Hizmetler</Link>
                        <Link to="/iletisim" className="btn btn-ghost">Teklif Al</Link>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[
                            { k: '+12', a: 'Yıllık Deneyim' },
                            { k: '+300', a: 'Tamamlanan Proje' },
                            { k: '%99', a: 'Müşteri Memnuniyeti' },
                            { k: '7/24', a: 'Servis' }
                        ].map((x, i) => (
                            <div key={i} className="card p-4 text-center" data-stagger>
                                <p className="text-3xl font-bold">{x.k}</p>
                                <p className="small mt-1">{x.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}
