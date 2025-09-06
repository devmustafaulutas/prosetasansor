import React from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hero from '../assets/asansor-1.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const wrapRef = React.useRef(null)
    const bgRef = React.useRef(null)
    const haloRef = React.useRef(null)
    const contentRef = React.useRef(null)

    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // full-bleed arkaplan parallax
            gsap.to(bgRef.current, {
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    invalidateOnRefresh: true
                }
            })

            // brand halo ters yönde
            gsap.to(haloRef.current, {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    invalidateOnRefresh: true
                }
            })

            // içerik giriş animasyonu
            const items = contentRef.current?.querySelectorAll('[data-stagger]')
            if (items?.length) {
                gsap.fromTo(
                    items,
                    { autoAlpha: 0, y: 18 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.75,
                        ease: 'power2.out',
                        stagger: 0.07,
                        clearProps: 'transform,opacity'
                    }
                )
            }
        }, wrapRef)

        setTimeout(() => ScrollTrigger.refresh(), 0)
        return () => ctx.revert()
    }, [])

    const onBgLoad = () => ScrollTrigger.refresh()

    return (
        <header
            ref={wrapRef}
            className="relative isolate w-screen overflow-clip
                overlap-header min-h-[calc(100svh+var(--header-h))]"
        >
            {/* full-bleed görsel */}
            <div className="absolute inset-1 -z-50">

                <img
                    ref={bgRef}
                    src={hero}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-[45%_40%] blur-sm"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                    onLoad={onBgLoad}
                />
            </div>

            {/* karartma + halo aynı */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(8,9,12,.55),rgba(8,9,12,.35)_35%,rgba(12,13,16,.65))]" />

            <div
                ref={haloRef}
                aria-hidden="true"
                className="pointer-events-none absolute right-[-12%] top-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-60"
                style={{ background: 'radial-gradient(closest-side, rgba(225,29,47,.45), transparent 70%)' }}
            />

            {/* içerik güvenli alan: header kadar aşağıdan başla, kalan yüksekliği kapla */}
            <div
                className="
          mx-auto max-w-[1200px] px-4
          pt-[var(--header-h)]
          min-h-[calc(100svh-var(--header-h))]
          flex items-center
          pb-16
        "
            >
                <div ref={contentRef} className="w-full">
                    <p className="eyebrow mb-3" data-stagger>PROSET ASANSÖR</p>

                    <h1 className="h1 relative inline-block md:block" data-stagger>
                        Her kata <span style={{ color: 'var(--brand)' }}>güven</span>, her kata <span style={{ color: 'var(--brand)' }}>kalite</span>
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-25"
                            style={{ background: 'radial-gradient(60% 60% at 50% 55%, rgba(225,29,47,.35), transparent)' }}
                        />
                    </h1>

                    <p className="mt-5 lead max-w-[840px]" data-stagger>
                        Modern şehirlerin dikey ulaşım ihtiyacını <b>montaj</b>, <b>modernizasyon</b> ve <b>periyodik bakım</b> ile çözüyoruz.
                        TS EN 81-20/50 uyumlu; güvenlik, konfor ve enerji verimliliği odaklı.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3" data-stagger>
                        <Link to="/hizmetler" className="btn btn-cta">Hizmetler</Link>
                        <Link to="/iletisim" className="btn btn-ghost">Teklif Al</Link>
                    </div>

                    <div className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2" data-stagger>
                        {[
                            'EN 81-20/50 uygun kurulum ve test',
                            'Enerji verimli sürücüler ve LED',
                            'Ankara ve çevresi hızlı servis',
                            'Şeffaf raporlama ve dokümantasyon'
                        ].map((t, i) => <span key={i} className="bullet">{t}</span>)}
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-[var(--muted)]">kaydır</div>
        </header>
    )

}
