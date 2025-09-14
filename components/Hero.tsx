'use client';

import React from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const wrapRef = React.useRef<HTMLElement | null>(null);
    const bgRef = React.useRef<HTMLImageElement | null>(null);
    const haloRef = React.useRef<HTMLDivElement | null>(null);
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // parallax
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 10,
                    ease: 'none',
                    scrollTrigger: { trigger: wrapRef.current, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true }
                });
            }
            if (haloRef.current) {
                gsap.to(haloRef.current, {
                    yPercent: -10,
                    ease: 'none',
                    scrollTrigger: { trigger: wrapRef.current, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true }
                });
            }

            // giriş animasyonu
            const items = contentRef.current?.querySelectorAll('[data-stagger]');
            if (items && items.length) {
                gsap.fromTo(items, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: .75, ease: 'power2.out', stagger: .07, clearProps: 'transform,opacity' });
            }
        }, wrapRef);

        setTimeout(() => ScrollTrigger.refresh(), 0);
        return () => ctx.revert();
    }, []);

    const onBgLoad = () => ScrollTrigger.refresh();

    return (
        <header
            className="relative isolate w-full overflow-hidden overlap-header
            min-h-[calc(100svh+var(--header-h)-57px)] flex items-center ">
            {/* FULL-BLEED GÖRSEL */}
            <img
                ref={bgRef}
                src="/asansor-1.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[45%_40%]"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                onLoad={onBgLoad}
            />

            {/* KARARTMA + VİGNETTE */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background: `
            linear-gradient(to bottom, rgba(7,8,11,.86), rgba(10,11,15,.52) 35%, rgba(10,11,15,.92)),
            radial-gradient(60% 80% at 12% 50%, rgba(0,0,0,.45), transparent 60%),
            radial-gradient(60% 80% at 88% 50%, rgba(0,0,0,.45), transparent 60%)
          `
                }}
            />

            {/* BRAND HALO */}
            <div
                ref={haloRef}
                aria-hidden="true"
                className="pointer-events-none absolute right-[-12%] top-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-60"
                style={{ background: 'radial-gradient(closest-side, rgba(225,29,47,.45), transparent 70%)' }}
            />

            {/* İÇERİK */}
            <div className="mx-auto max-w-[1200px] px-4 h-full flex items-center pb-14">
                <div ref={contentRef} className="w-full text-white text-glow-hero text-center max-w-[980px] lg:max-w-[1200px] mx-auto">                    <div className="mb-4" data-stagger>
                    <span className="brand-eyebrow">PROSET ASANSÖR</span>
                </div>
                    <h1 className="hero-title relative inline-block md:block tracking-tight md:whitespace-nowrap mx-auto" data-stagger>                        Her kata <span className="brand-grad">güven</span>, her kata <span className="brand-grad">kalite</span>
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-25"
                            style={{ background: 'radial-gradient(60% 60% at 50% 55%, rgba(225,29,47,.35), transparent)' }}
                        />
                    </h1>


                    <p className="mt-5 hero-lead mx-auto md:mx-0" data-stagger>
                        Modern şehirlerin dikey ulaşım ihtiyacını <b>montaj</b>, <b>modernizasyon</b> ve <b>periyodik bakım</b> ile çözüyoruz.
                        TS EN 81-20/50 uyumlu; güvenlik, konfor ve enerji verimliliği odaklı.
                    </p>

                    {/* BUTONLAR */}
                    <div className="mt-7 flex flex-wrap gap-3" data-stagger>
                        <Link
                            href="/hizmetler"
                            className="btn btn-cta group relative overflow-hidden will-change-transform
                         hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
                         shadow-[0_8px_24px_rgba(225,29,47,.28)] hover:shadow-[0_16px_48px_rgba(225,29,47,.45)]"
                        >
                            Hizmetler
                            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0
                               transition-opacity duration-200 group-hover:opacity-100
                               [box-shadow:inset_0_0_24px_rgba(225,29,47,.38)]" />
                            <span className="pointer-events-none absolute -inset-y-10 -left-10 w-10 rotate-12
                               bg-white/40 blur-xl opacity-0 transform
                               transition-all duration-700 ease-out
                               group-hover:opacity-70 group-hover:translate-x-[180%]" />
                        </Link>

                        <Link
                            href="/iletisim"
                            className="btn btn-ghost group relative overflow-hidden will-change-transform
                         hover:-translate-y-0.5 hover:border-[var(--brand)]/60
                         hover:shadow-[0_8px_24px_rgba(225,29,47,.22)]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                        >
                            Teklif Al
                            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0
                               transition-opacity duration-200 group-hover:opacity-100
                               [box-shadow:inset_0_0_18px_rgba(225,29,47,.22)]" />
                        </Link>
                    </div>

                    {/* BULLETLAR */}
                    <div className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2" data-stagger>
                        {[
                            'EN 81-20/50 uygun kurulum ve test',
                            'Enerji verimli sürücüler ve LED',
                            'Ankara ve çevresi hızlı servis',
                            'Şeffaf raporlama ve dokümantasyon'
                        ].map((t, i) => <span key={i} className="bullet" style={{ color: 'rgba(255,255,255,.85)' }}>{t}</span>)}
                    </div>
                </div>
            </div>
        </header>
    );
}
