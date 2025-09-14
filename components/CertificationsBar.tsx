"use client";

import Image from "next/image";
import { BadgeCheck, ShieldCheck, FileCheck2 } from "lucide-react";

export default function CertificationsBar() {
  const pills = [
    { t: "TS EN 81-20/50 Uyumlu", icon: ShieldCheck },
    { t: "CE Uygunluk",           icon: BadgeCheck },
    { t: "TSE-HYB Yetkili",       icon: FileCheck2 },
    { t: "ISO 9001 Süreçleri",    icon: BadgeCheck },
  ];

  return (
    <section className="py-10 bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {pills.map(({ t, icon: Icon }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
            >
              <Icon className="h-4 w-4 text-red-500" />
              {t}
            </span>
          ))}
          {/* Logo’lar varsa ekleyin (opsiyonel) */}
          {/* <Image src="/tse-hyb.gif" alt="TSE-HYB" width={54} height={24} className="opacity-80" /> */}
          {/* <Image src="/a.png" alt="CE" width={32} height={32} className="opacity-80" /> */}
        </div>
      </div>
    </section>
  );
}
