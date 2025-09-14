"use client";

import Image from "next/image";
import { Building2, Layers, Timer } from "lucide-react";

type Item = {
  title: string;
  subtitle: string;
  img: string;
  stats: { icon: any; label: string; value: string }[];
};

const PROJECTS: Item[] = [
  {
    title: "Konut Sitesi – Ankara",
    subtitle: "İnsan Asansörü Modernizasyonu",
    img: "/asansor-1.jpg", // repoda var
    stats: [
      { icon: Building2, label: "Kapasite", value: "8 kişi / 630 kg" },
      { icon: Layers,    label: "Durak",    value: "10 durak" },
      { icon: Timer,     label: "Teslim",   value: "28 gün" },
    ],
  },
  {
    title: "AVM – Eskişehir",
    subtitle: "Yük / Servis Asansörü",
    img: "/asansor-2.webp",
    stats: [
      { icon: Building2, label: "Kapasite", value: "2000 kg" },
      { icon: Layers,    label: "Durak",    value: "6 durak" },
      { icon: Timer,     label: "Teslim",   value: "35 gün" },
    ],
  },
  {
    title: "Kamu Binası – Ankara",
    subtitle: "Engelli Platformu & Hidrolik",
    img: "/agac-asansor.jpg",
    stats: [
      { icon: Building2, label: "Tip",      value: "Hidrolik / Platform" },
      { icon: Layers,    label: "Erişim",   value: "Zemin + 1" },
      { icon: Timer,     label: "Teslim",   value: "12 gün" },
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Öne Çıkan Projeler</h2>
          <p className="text-white/70 mt-3">
            Farklı ihtiyaçlara uygun kurulum ve modernizasyon örneklerimizden bazıları
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-white/70 text-sm">{p.subtitle}</p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {p.stats.map(({ icon: Icon, label, value }, k) => (
                    <div
                      key={k}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                    >
                      <Icon className="mx-auto mb-1 h-5 w-5 text-red-500" />
                      <div className="text-xs text-white/60">{label}</div>
                      <div className="text-sm font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
