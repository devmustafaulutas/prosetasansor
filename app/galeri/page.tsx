"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ImageIcon, Play, ExternalLink, Calendar, MapPin, Award, Zap, X,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import hero from "@/public/asansor-1.jpg";

import img_c from "@/public/c.jpeg";
import img_aa from "@/public/aa.jpeg";
import img_bbb from "@/public/bbb.jpeg";
import img_bb from "@/public/bb.jpeg";
import img_e from "@/public/e.jpeg";
import img_ee from "@/public/ee.jpeg";
import img_aaa from "@/public/aaa.jpeg";
import img_cccc from "@/public/cccc.jpeg";
import img_ccccc from "@/public/ccccc.jpeg";
import img_dddd from "@/public/dddd.jpeg";
import img_g from "@/public/g.jpeg";
import img_gg from "@/public/gg.jpeg";
import img_gggg from "@/public/gggg.jpeg";

type Item = {
  id: number;
  title: string;
  category:
  | "Asansör"
  | "Montaj"
  | "Modernizasyon"
  | "Bakım"
  | "Kuyu / Ray"
  | "Kabin & Kapı"
  | "Buton & Kumanda"
  | "Yürüyen Merdiven"
  | "Engelli Platformu"
  | "Sertifika";
  location: string;
  date: string;
  image: string; // string kalabilir; .src atıyoruz
  description: string;
  features: string[];
  type?: "image" | "video";
};

const ALL_ITEMS: Item[] = [
  {
    id: 5,
    title: "Kontrol paneli",
    category: "Buton & Kumanda",
    location: "Bursa",
    date: "2024",
    image: img_c.src,
    description: "Kabin üstü acil durdurma ve kontrol arayüzü.",
    features: ["Acil Stop", "Standart Uyumu"],
  },
  {
    id: 6,
    title: "Kuyu montajı",
    category: "Montaj",
    location: "Ankara",
    date: "2024",
    image: img_aa.src,
    description: "TS EN 81-20/50’e uygun kuyu montajı ve şaft içi kablolama.",
    features: ["EN 81-20/50", "Şaft Düzeni", "Test ve Devreye Alma"],
  },
  {
    id: 7,
    title: "Ray ve askı setleri",
    category: "Kuyu / Ray",
    location: "İstanbul",
    date: "2024",
    image: img_bbb.src,
    description: "Ray doğrultma ve ankraj uygulamaları.",
    features: ["Ray Doğrultma", "Ankraj", "Hassas Ölçüm"],
  },
  {
    id: 8,
    title: "Kuyu üstü detay",
    category: "Kuyu / Ray",
    location: "Ankara",
    date: "2024",
    image: img_bb.src,
    description: "Kuyu üstü bağlantı ve sınır anahtarı yerleşimi.",
    features: ["Sınır Anahtarı", "Güvenlik"],
  },
  {
    id: 9,
    title: "Kabin çerçevesi — proje",
    category: "Kabin & Kapı",
    location: "Kocaeli",
    date: "2024",
    image: img_e.src,
    description: "Kabin kapısı takoz ve merkezleme işlemleri.",
    features: ["Merkezleme", "Sessiz Çalışma"],
  },
  {
    id: 10,
    title: "Kuyu içi kılavuz sistemi",
    category: "Kuyu / Ray",
    location: "İzmir",
    date: "2024",
    image: img_ee.src,
    description: "Kılavuz raya ait bağlantı bileşenleri.",
    features: ["Kılavuz Ray", "Bağlantı Elemanları"],
  },
  {
    id: 11,
    title: "Kabin kapısı",
    category: "Kabin & Kapı",
    location: "Ankara",
    date: "2024",
    image: img_aaa.src,
    description: "Tam boy kapı ve eşik hizalama.",
    features: ["Hassas Hizalama", "Gürültüsüz Açma-Kapama"],
  },
  {
    id: 12,
    title: "Kat kapısı ve eşik",
    category: "Kabin & Kapı",
    location: "İstanbul",
    date: "2024",
    image: img_cccc.src,
    description: "Kapı kasası montajı ve eşik bağlantısı.",
    features: ["Kapı Kasası", "Eşik"],
  },
  {
    id: 13,
    title: "Kuyu dibi — düzen",
    category: "Kuyu / Ray",
    location: "İstanbul",
    date: "2024",
    image: img_ccccc.src,
    description: "Kuyu dibi aksesuarlarının yerleşimi.",
    features: ["Siperlik", "Stopper"],
  },
  {
    id: 14,
    title: "Kabin kablolama",
    category: "Montaj",
    location: "Ankara",
    date: "2024",
    image: img_dddd.src,
    description: "Kabin üstü kablolama ve güvenlik ekipmanları.",
    features: ["Kablo Yönetimi", "Güvenlik"],
  },
  {
    id: 20,
    title: "Makine dairesi — pano",
    category: "Bakım",
    location: "Kocaeli",
    date: "2024",
    image: img_g.src,
    description: "Kontrol panosu ve kablo yönetimi.",
    features: ["Pano", "Kablo Düzeni"],
  },
  {
    id: 21,
    title: "Saha müdahalesi",
    category: "Bakım",
    location: "İzmir",
    date: "2024",
    image: img_gg.src,
    description: "Arıza tespiti ve yerinde onarım.",
    features: ["Arıza Tespiti", "Hızlı Müdahale"],
  },
  {
    id: 22,
    title: "Elektrik kutusu",
    category: "Bakım",
    location: "Ankara",
    date: "2024",
    image: img_gggg.src,
    description: "Saha bağlantı ve test noktaları.",
    features: ["Bağlantı", "Test"],
  },
];

const CATEGORIES = [
  "Tümü",
  "Asansör",
  "Montaj",
  "Modernizasyon",
  "Bakım",
  "Kuyu / Ray",
  "Kabin & Kapı",
  "Buton & Kumanda",
  "Yürüyen Merdiven",
  "Engelli Platformu",
  "Sertifika",
] as const;

export default function GalleryPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Tümü");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === "Tümü" ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.category === cat)),
    [cat]
  );

  const openLightbox = useCallback((idx: number) => setActiveIndex(idx), []);
  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i == null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i == null ? i : (i + 1) % items.length)),
    [items.length]
  );

  // klavye
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (activeIndex == null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, closeLightbox, prev, next]);

  return (
    <div className="min-h-screen">
      <WhatsAppButton />

      <PageHeader
        title="Galeri"
        bgImage={hero.src}
        objectPosition="50% 45%"
      />    
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-white/10 bg-white/5 transition-colors" 
              >
                <div
                  className="relative aspect-video overflow-hidden rounded-t-lg cursor-pointer"
                  onClick={() => openLightbox(index)}
                  role="button"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] will-change-transform [transform:translateZ(0)]"
                  />
                  {item.type === "video" && (
                    <div className="absolute top-3 right-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Video
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                    <Award className="w-5 h-5 text-accent" />
                  </div>

                  <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.features.map((f, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-accent/5 text-accent border-accent/30">
                        {f}
                      </Badge>
                    ))}
                    <Badge variant="secondary" className="ml-auto bg-accent/80 text-white border-0">
                      {item.category}
                    </Badge>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-white/70 pt-3 border-t border-white/10">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {item.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted\/30 relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">Başarı İstatistikleri</h2>
            <p className="mt-3 text-white/70">Rakamlarla projelerimiz</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "350+", label: "Tamamlanan Proje", icon: Award },
              { number: "20+", label: "Şehir", icon: MapPin },
              { number: "10+", label: "Yıl Deneyim", icon: Calendar },
              { number: "%98", label: "Müşteri Memnuniyeti", icon: Zap },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-white/6">
                  <s.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold">{s.number}</div>
                <div className="text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted\/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Hayalinizdeki projeyi birlikte gerçekleştirelim</h3>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Keşif randevusu oluşturun, yerinde analiz ile en doğru çözümü planlayalım.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-white text-black hover:bg-gray-100">
              <Link href="/iletisim">Projenizi Başlatalım</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/hizmetler">Hizmetlerimiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {activeIndex != null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <button
            aria-label="Kapat"
            className="absolute right-4 top-4 rounded-md border border-white/20 p-2 text-white/90 "
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Önceki"
            className="absolute left-3 md:left-6 rounded-md border border-white/20 p-2 text-white/90 "
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Sonraki"
            className="absolute right-3 md:right-6 rounded-md border border-white/20 p-2 text-white/90 "
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mx-4 w-full max-w-5xl">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-white/80">
              <div className="text-sm">
                <div className="font-semibold">{items[activeIndex].title}</div>
                <div className="text-white/60">{items[activeIndex].location} • {items[activeIndex].date}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-accent/80 text-white border-0">
                  {items[activeIndex].category}
                </Badge>
                <a
                  href={items[activeIndex].image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
                >
                  Orijinali Aç <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
