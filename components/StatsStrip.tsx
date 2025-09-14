"use client";

import { ShieldCheck, Building2, Star, Timer } from "lucide-react";

const items = [
  { icon: ShieldCheck, value: "10+ yıl", label: "Saha tecrübesi" },
  { icon: Building2, value: "350+", label: "Tamamlanan proje" },
  { icon: Star,       value: "%98",   label: "Müşteri memnuniyeti" },
  { icon: Timer,      value: "< 2 saat", label: "Ortalama müdahale" },
];

export default function StatsStrip() {
  return (
    <section className="bg-neutral-950 border-y border-white/10 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, value, label }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-4"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/15">
                <Icon className="h-6 w-6 text-red-500" />
              </span>
              <div>
                <div className="text-xl font-extrabold leading-none">{value}</div>
                <div className="text-sm text-white/70">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* standart rozetleri */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/60">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            TS EN 81-20/50 Uyumlu
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            CE Uygunluk
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Periyodik Bakım Raporu
          </span>
        </div>
      </div>
    </section>
  );
}
