'use client';

import React from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import asansor from '@/public/banner.jpeg';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const wrapRef = React.useRef<HTMLElement | null>(null);
    const bgWrapRef = React.useRef<HTMLDivElement | null>(null);
    const haloRef = React.useRef<HTMLDivElement | null>(null);
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (bgWrapRef.current) {
                gsap.to(bgWrapRef.current, {
                    yPercent: 6, // 10 -> 6 (logo tekrar yukarı çıkmasın)
                    ease: 'none',
                    scrollTrigger: {
                        trigger: wrapRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
            }

            if (haloRef.current) {
                gsap.to(haloRef.current, {
                    yPercent: -8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: wrapRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
            }

            const items = contentRef.current?.querySelectorAll('[data-stagger]');
            if (items && items.length) {
                gsap.fromTo(
                    items,
                    { autoAlpha: 0, y: 18 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.75,
                        ease: 'power2.out',
                        stagger: 0.07,
                        clearProps: 'transform,opacity',
                    }
                );
            }
        }, wrapRef);

        requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={wrapRef}
            className="relative isolate w-full overflow-hidden min-h-[calc(100svh-var(--header-h))] flex items-center"
        >
            <div ref={bgWrapRef} className="absolute inset-0 -z-20 will-change-transform">
                <Image
                    src={asansor}
                    alt=""
                    aria-hidden="true"
                    fill
                    priority
                    sizes="100vw"
                    className="
        object-cover
        [object-position:50%_-20px]
        sm:[object-position:50%_-30px]
        lg:[object-position:50%_-60px]
      "
                    onLoadingComplete={() => ScrollTrigger.refresh()}
                />
            </div>

            {/* Overlay'i üstte biraz daha hafif yap (logo boğulmasın) */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background: `
        linear-gradient(to bottom, rgba(7,8,11,.70), rgba(10,11,15,.38) 42%, rgba(10,11,15,.88)),
        radial-gradient(60% 80% at 12% 50%, rgba(0,0,0,.35), transparent 60%),
        radial-gradient(60% 80% at 88% 50%, rgba(0,0,0,.35), transparent 60%)
      `,
                }}
            />
            <div
                ref={haloRef}
                aria-hidden="true"
                className="pointer-events-none absolute right-[-12%] top-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-60"
                style={{ background: 'radial-gradient(closest-side, rgba(225,29,47,.45), transparent 70%)' }}
            />
            <div className="mx-auto max-w-[1200px] px-4 w-full py-[clamp(2rem,6vh,4rem)]">

                <div
                    ref={contentRef}
                    className="w-full text-white text-glow-hero text-center max-w-[980px] lg:max-w-[1200px] mx-auto mt-[clamp(12rem,4vh,100rem)]"
                >


                    {/* içerik aynen */}
                    <div className="mb-4" data-stagger>
                        <span className="brand-eyebrow-hero">Proset elektronik ve asansör sistemleri</span>
                    </div>

                    <h1 className="hero-title relative inline-block md:block tracking-tight md:whitespace-nowrap" data-stagger>
                        Modern Güvenli ve <span className="brand-grad">Kaliteli </span>
                        Yükselişin Adresi <span className="brand-grad">Proset</span>
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-25"
                            style={{
                                background: 'radial-gradient(60% 60% at 50% 55%, rgba(225,29,47,.35), transparent)',
                            }}
                        />
                    </h1>

                    <p className="mt-5 hero-lead mx-auto md:mx-0" data-stagger>
                        Modern şehirlerin dikey ulaşım ihtiyacını <b>montaj</b>, <b>modernizasyon</b> ve <b>periyodik bakım</b> ile çözüyoruz.
                        TS EN 81-20/50 uyumlu; güvenlik, konfor ve enerji verimliliği odaklı.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3" data-stagger>
                        <Link href="/hizmetler" className="btn btn-cta group relative overflow-hidden will-change-transform
              hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
              shadow-[0_8px_24px_rgba(225,29,47,.28)] hover:shadow-[0_16px_48px_rgba(225,29,47,.45)]">
                            Hizmetler
                        </Link>

                        <Link href="/iletisim" className="btn btn-cta group relative overflow-hidden will-change-transform
              hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
              shadow-[0_8px_24px_rgba(225,29,47,.28)] hover:shadow-[0_16px_48px_rgba(225,29,47,.45)]">
                            Teklif Al
                        </Link>
                    </div>

                    <div className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2 hero-bullets" data-stagger>
                        {[
                            'EN 81-20/50 uygun kurulum ve test',
                            'Enerji verimli sürücüler ve LED',
                            'Ankara ve çevresi hızlı servis',
                            'Türkiye geneli hizmet',
                            'Şeffaf raporlama ve dokümantasyon',
                        ].map((t, i) => (
                            <span key={i} className="bullet" style={{ color: 'rgba(255,255,255,.85)' }}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
