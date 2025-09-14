"use client";

import React from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  bgImage: string;
  objectPosition?: string;
  crumbs?: Crumb[];
  showHalo?: boolean;
};

export default function PageHeader({
  title,
  subtitle,
  bgImage,
  objectPosition = "50% 50%",
  crumbs = [{ label: "Ana Sayfa", href: "/" }],
  showHalo = true,
}: Props) {
  const wrapRef = React.useRef<HTMLElement | null>(null);
  const bgRef = React.useRef<HTMLImageElement | null>(null);
  const haloRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }
      if (haloRef.current) {
        gsap.to(haloRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }
    }, wrapRef);

    setTimeout(() => ScrollTrigger.refresh(), 0);
    return () => ctx.revert();
  }, []);

  const onBgLoad = () => ScrollTrigger.refresh();

  return (
    <header
      ref={wrapRef}
      className="relative isolate w-full overflow-hidden"
    >
      {/* FULL-BLEED GÖRSEL — Hero ile aynı */}
      <img
        ref={bgRef}
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ objectPosition }}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        onLoad={onBgLoad}
      />

      {/* KARARTMA + VİGNETTE — Hero’dakiyle birebir */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(to bottom, rgba(7,8,11,.86), rgba(10,11,15,.52) 35%, rgba(10,11,15,.92)),
            radial-gradient(60% 80% at 12% 50%, rgba(0,0,0,.45), transparent 60%),
            radial-gradient(60% 80% at 88% 50%, rgba(0,0,0,.45), transparent 60%)
          `,
        }}
      />

      {/* BRAND HALO (Hero ile aynı) */}
      {showHalo && (
        <div
          ref={haloRef}
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12%] top-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(225,29,47,.45), transparent 70%)",
          }}
        />
      )}

      {/* CONTENT */}
      <div className="mx-auto max-w-[1200px] px-4">
        {/* yükseklik: başlık alanı */}
        <div className="min-h-[42svh] md:min-h-[50vh] flex items-center justify-center text-center text-white">
          <div className="max-w-[980px] lg:max-w-[1200px] mx-auto">
            <h1 className="hero-title text-glow-hero">{title}</h1>

            {/* Breadcrumbs */}
            <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-white/90">
              {crumbs.map((c, i) =>
                c.href ? (
                  <span key={i} className="flex items-center gap-2">
                    <Link
                      href={c.href}
                      className="hover:underline underline-offset-4"
                    >
                      {c.label}
                    </Link>
                    <span className="opacity-70">›</span>
                  </span>
                ) : (
                  <span key={i} className="flex items-center gap-2">
                    <span>{c.label}</span>
                    <span className="opacity-70">›</span>
                  </span>
                )
              )}
              <span className="font-medium">{title}</span>
            </nav>

            {subtitle && (
              <p className="mt-3 hero-lead mx-auto">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
