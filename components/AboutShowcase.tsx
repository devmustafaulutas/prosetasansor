"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Wrench, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import elevator from "@/public/elevator.jpg"
import elevatorbutton from "@/public/elevator-button.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function AboutShowcase() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const img1Ref = React.useRef<HTMLDivElement | null>(null);
  const img2Ref = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-anim", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      if (img1Ref.current) {
        gsap.to(img1Ref.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (img2Ref.current) {
        gsap.to(img2Ref.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Görsel kolaj */}
          <div className="relative order-last md:order-first">
            <div
              ref={img1Ref}
              className="about-anim relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
            >
              <Image
                src={elevator}
                alt="Proset Asansör — modern asansör kabini"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>

            <div
              ref={img2Ref}
              className="about-anim absolute -right-6 -bottom-8 hidden w-1/2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl md:block"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={elevatorbutton}
                  alt="Asansör çağrı butonu — detay"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>

          {/* Metin */}
          <div className="about-anim">
            <span className="brand-eyebrow">PROSET ASANSÖR</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              Biz kimiz?
            </h2>

            <p className="mt-4 text-white/85">
              Proset Asansör; modern şehirlerin dikey ulaşım ihtiyacını <b>montaj</b>,{" "}
              <b>modernizasyon</b> ve <b>periyodik bakım</b> hizmetleriyle karşılayan,
              <b> TS EN 81-20/50</b> standartlarıyla uyumlu bir mühendislik firmasıdır.
              Konutlardan iş merkezlerine, hastanelerden AVM’lere kadar güvenli ve uzun ömürlü
              çözümler üretiriz.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-5 w-5 text-red-500" />
                <span><b>Güvenlik:</b> CE ve TSE-HYB güvencesi, şeffaf raporlama</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-5 w-5 text-red-500" />
                <span><b>Tasarım:</b> modern, estetik kabin ve kontrol çözümleri</span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench className="mt-0.5 h-5 w-5 text-red-500" />
                <span><b>Destek:</b> Ankara ve çevresinde hızlı servis & 7/24 müdahale</span>
              </li>
            </ul>

            {/* Butonlar – şık stiller */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                className="group relative inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white transition
                           [background:linear-gradient(#14171c,#14171c)_padding-box,linear-gradient(90deg,rgba(225,29,47,.95),rgba(225,29,47,.35))_border-box]
                           border border-transparent shadow-[0_8px_24px_rgba(225,29,47,.28)]
                           hover:shadow-[0_14px_42px_rgba(225,29,47,.45)]"
              >
                <Link href="/hakkimizda">
                  Hakkımızda
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200
                               group-hover:opacity-100 [box-shadow:inset_0_0_18px_rgba(225,29,47,.35)]"
                  />
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group relative inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white
                           border border-white/15 bg-white/5 backdrop-blur-sm
                           hover:border-[var(--brand)]/60 hover:bg-white/10"
              >
                <Link href="/projeler">
                  Projeler
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">10+ yıl saha tecrübesi</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">350+ proje</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">%98 müşteri memnuniyeti</span>
            </div>
          </div>
        </div>

        {/* Vizyon & Misyon kartları — biraz daha aşağı */}
        <div className="mt-16 md:mt-20 grid gap-4 md:grid-cols-2 about-anim">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Misyonumuz</h3>
            <p className="mt-2 text-white/70">
              Kullanıcı güvenliğini merkeze alarak uluslararası standartlarda asansör sistemleri sunmak;
              montajdan bakıma kadar tüm süreçlerde kesintisiz müşteri memnuniyetini sağlamak.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Vizyonumuz</h3>
            <p className="mt-2 text-white/70">
              Yenilikçi ve enerji verimli çözümlerle yaşam alanlarını daha erişilebilir ve konforlu hale getirerek,
              sektörde güvenin ve kalitenin öncü markası olmak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
