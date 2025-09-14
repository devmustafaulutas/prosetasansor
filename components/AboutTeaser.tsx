"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Wrench, ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    // diğer section'larla aynı gri arka plan
    <section className="relative isolate overflow-hidden bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="brand-eyebrow">PROSET ASANSÖR</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              Güvenle yükselin — kalite ve teknolojiyi birleştiriyoruz
            </h2>

            <p className="mt-4 text-white/80">
              Proset Asansör; modern şehirlerin dikey ulaşım ihtiyacını <b>montaj</b>, <b>modernizasyon</b> ve
              <b> periyodik bakım</b> hizmetleriyle karşılayan, <b>TS EN 81-20/50</b> standartlarıyla uyumlu bir
              mühendislik firmasıdır. Yaşam alanlarından iş merkezlerine, hastanelerden AVM’lere kadar farklı
              ölçeklerde güvenli ve uzun ömürlü çözümler üretiriz.
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

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="bg-white text-black hover:bg-gray-100">
                <Link href="/hakkimizda">
                  Hakkımızda
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/iletisim">İletişime Geç</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">10+ yıl saha tecrübesi</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">350+ proje</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">%98 müşteri memnuniyeti</span>
            </div>
          </div>

          {/* Sağ: Vizyon & Misyon kartları */}
          <div className="grid gap-4">
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
      </div>
    </section>
  );
}
