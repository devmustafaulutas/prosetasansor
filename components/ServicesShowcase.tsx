"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Award, CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Card = {
  title: string;
  href: string;
  img: string;
  bullets: string[];
  icon: React.ReactNode;
};

const CARDS: Card[] = [
  {
    title: "Montaj & Kurulum",
    href: "/hizmetlerimiz",
    img: "/ccccc.jpeg", // ✅ klasörden seçildi
    bullets: [
      "TS EN 81-20/50’e uygun kurulum ve test",
      "Şantiye koordinasyonu, CE dokümantasyonu",
      "Güvenlik + konfor + estetik teslim",
    ],
    icon: <Wrench className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Modernizasyon",
    href: "/hizmetlerimiz",
    img: "/ggggg.jpeg", // ✅ klasörden seçildi
    bullets: [
      "Güvenlik ekipmanlarının güncellenmesi",
      "Enerji verimli sürücüler & LED aydınlatma",
      "Kabin, kapı, kumanda revizyonu",
    ],
    icon: <Award className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Bakım & Onarım",
    href: "/hizmetlerimiz",
    img: "/professional-elevator-technician-team-working.jpg", // ✅ klasörden seçildi
    bullets: [
      "Periyodik bakım & detaylı raporlama",
      "Orijinal yedek parçayla onarım",
      "7/24 arıza müdahalesi",
    ],
    icon: <CheckCircle className="h-5 w-5 text-red-500" />,
  },
];

export default function ServicesShowcase() {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".srv-card", {
        y: 26,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          once: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative isolate bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">Hizmetlerimiz</h2>
          <p className="mt-3 text-white/70">
            Projelendirme, <b>montaj</b>, <b>modernizasyon</b> ve <b>bakım-onarım</b> süreçlerinde yanınızdayız.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="srv-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              {/* Görsel */}
              <div className="relative h-48 w-full">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* İçerik */}
              <div className="p-6">
                <div className="mb-2 inline-flex items-center gap-2 text-sm text-white/80">
                  {c.icon}
                  <span className="font-semibold">{c.title}</span>
                </div>
                <ul className="space-y-1.5 text-sm text-white/80">
                  {c.bullets.map((b, j) => (
                    <li key={j}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-4 inline-flex items-center gap-2 text-white/90">
                  <span className="text-sm font-semibold">Detay</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
