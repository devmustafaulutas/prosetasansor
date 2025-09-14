"use client";

import { CheckCircle2, Wrench, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Basic Bakım",
    badge: "Aylık Kontrol",
    icon: Wrench,
    bullets: [
      "TS EN 81-20/50’e uygun kontroller",
      "Yağlama & ayar",
      "Arıza risk analizi",
      "Aylık raporlama",
    ],
  },
  {
    name: "Standart",
    badge: "Önerilen",
    icon: Shield,
    highlight: true,
    bullets: [
      "Basic kapsamının tamamı",
      "Kritik yedek parça stoğu",
      "Uzaktan arıza takibi",
      "Yılda 1 kapsamlı periyodik",
    ],
  },
  {
    name: "Plus",
    badge: "7/24 Destek",
    icon: Clock,
    bullets: [
      "Standart kapsamının tamamı",
      "7/24 arıza müdahalesi",
      "Öncelikli servis & SLA",
      "Yıllık modernizasyon indirimi",
    ],
  },
];

export default function MaintenancePlans() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Bakım Planları</h2>
          <p className="text-white/70 mt-3">
            Asansörlerinizin güvenliği ve sürekliliği için esnek bakım seçenekleri
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border bg-white/5 p-6 ${
                p.highlight ? "border-red-500/40" : "border-white/10"
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute -top-3 left-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    p.highlight ? "bg-red-500 text-white" : "bg-white/10 text-white"
                  }`}
                >
                  {p.badge}
                </span>
              )}
              <p.icon className="h-7 w-7 text-red-500" />
              <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.bullets.map((b, k) => (
                  <li key={k} className="flex gap-2">
                    <CheckCircle2 className="mt-[2px] h-4 w-4 text-red-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/iletisim">Teklif Al</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
