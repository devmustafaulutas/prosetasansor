"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Award,
  CheckCircle2,
  Accessibility,
  TrendingUp,
  FileSearch,
  FileCheck,
  Shield,
  Clock,
  Phone,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

/* ── DATA ─────────────────────────────────────────────────────────────── */
type Service = {
  key: string;
  title: string;
  href: string;
  image: string;
  icon: React.ReactNode;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    key: "montaj",
    title: "Montaj & Kurulum",
    href: "/iletisim?konu=montaj",
    image: "/ccccc.jpeg",
    icon: <Wrench className="h-5 w-5 text-red-500" />,
    bullets: [
      "TS EN 81-20/50’e uygun kurulum ve test",
      "Şantiye koordinasyonu ve CE dokümantasyonu",
      "Kabin, kapı, sürücü ve kumanda devreye alma",
    ],
  },
  {
    key: "modernizasyon",
    title: "Modernizasyon",
    href: "/iletisim?konu=modernizasyon",
    image: "/elevator-modernization-with-digital-displays-and-s.jpg",
    icon: <Award className="h-5 w-5 text-red-500" />,
    bullets: [
      "Güvenlik ekipmanlarının güncellenmesi",
      "Enerji verimli sürücüler & LED aydınlatma",
      "Kabin, kapı ve kontrol revizyonu",
    ],
  },
  {
    key: "bakim",
    title: "Bakım & Onarım",
    href: "/iletisim?konu=bakim",
    image: "/professional-elevator-technician-team-working.jpg",
    icon: <CheckCircle2 className="h-5 w-5 text-red-500" />,
    bullets: [
      "Periyodik bakım ve detaylı raporlama",
      "Orijinal yedek parça ile onarım",
      "7/24 arıza müdahalesi",
    ],
  },
  {
    key: "engelli",
    title: "Engelli Platformları",
    href: "/iletisim?konu=engelli-platformu",
    image: "/modern-wheelchair-accessible-platform-lift-with-sa.jpg",
    icon: <Accessibility className="h-5 w-5 text-red-500" />,
    bullets: [
      "İç/dış mekân çözümleri",
      "Emniyet sensörleri ve acil durum hattı",
      "Standartlara tam uyum ve proje desteği",
    ],
  },
  {
    key: "yuruyen-merdiven",
    title: "Yürüyen Merdiven",
    href: "/iletisim?konu=yuruyen-merdiven",
    image: "/modern-escalator-with-led-lighting-and-glass-raili.jpg",
    icon: <TrendingUp className="h-5 w-5 text-red-500" />,
    bullets: [
      "Otomatik hız modu ve enerji tasarrufu",
      "LED aydınlatma, cam korkuluk seçenekleri",
      "AVM, istasyon ve kamu alanlarına uygun",
    ],
  },
  {
    key: "projelendirme",
    title: "Projelendirme & Danışmanlık",
    href: "/iletisim?konu=projelendirme",
    image: "/asansor-2.webp",
    icon: <FileSearch className="h-5 w-5 text-red-500" />,
    bullets: [
      "Yerinde keşif ve ihtiyaç analizi",
      "Statik, elektrik ve mekanik proje setleri",
      "Belediye ve TSE süreç yönetimi",
    ],
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <WhatsAppButton />

      <PageHeader title="Hizmetlerimiz" bgImage="/asansor-1.jpg" objectPosition="50% 45%" />

      {/* HİZMET KARTLARI */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Hizmetlerimiz</h2>
            <p className="mt-3 text-muted-foreground">
              Projelendirme, <b>montaj</b>, <b>modernizasyon</b> ve <b>bakım-onarım</b> süreçlerinde yanınızdayız.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s) => (
              <Card
                key={s.key}
                className="overflow-hidden border border-border/70 bg-card/60 hover:bg-card/75 transition-colors"
              >
                {/* görsel */}
                <div className="relative h-48 w-full">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                </div>

                <CardContent className="p-6">
                  <div className="mb-2 inline-flex items-center gap-2 text-sm">
                    {s.icon}
                    <span className="font-semibold">{s.title}</span>
                  </div>

                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {s.bullets.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Link
                      href={s.href}
                      className="inline-flex items-center text-sm font-semibold hover:underline underline-offset-4"
                    >
                      Detay / Teklif
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SÜREÇ – zaman çizgisi */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold">Süreç Nasıl İşliyor?</h3>
            <p className="mt-3 text-muted-foreground">
              “Her adımda güvenlik, konfor ve teknoloji” anlayışıyla uçtan uca destek.
            </p>
          </div>

          <ol className="mx-auto mt-10 max-w-4xl space-y-6">
            {[
              { icon: <FileSearch className="h-5 w-5 text-red-500" />, t: "Keşif & Danışmanlık", d: "Yerinde inceleme, ihtiyaç analizi ve teklif" },
              { icon: <FileCheck className="h-5 w-5 text-red-500" />, t: "Projelendirme", d: "TS EN 81-20/50’e uygun teknik çözüm ve çizimler" },
              { icon: <Wrench className="h-5 w-5 text-red-500" />, t: "Montaj", d: "Standartlara uygun kurulum, koordinasyon ve test" },
              { icon: <Shield className="h-5 w-5 text-red-500" />, t: "Test & Teslim", d: "Güvenlik testleri, CE dokümantasyonu, eğitim" },
              { icon: <Clock className="h-5 w-5 text-red-500" />, t: "Periyodik Bakım", d: "Düzenli bakım, raporlama ve 7/24 arıza desteği" },
            ].map((step, i) => (
              <li key={i} className="relative flex gap-4 rounded-2xl border border-border/70 bg-card/60 p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/15">
                  {step.icon}
                </span>
                <div>
                  <h4 className="font-semibold">{step.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ALT CTA */}
      <section className="relative py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Projeniz için doğru çözümü birlikte planlayalım</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Keşif randevusu oluşturun, mühendislik ekibimiz yerinde analiz ile en doğru teklif ve süre planını çıkarsın.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
              <Link href="/iletisim">
                <Phone className="w-4 h-4 mr-2" />
                Keşif / Teklif Talebi
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              <Link href="/galeri">Referans Projeler</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
