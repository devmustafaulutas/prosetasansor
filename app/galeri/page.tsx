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
  Play, ExternalLink, Calendar, MapPin, Award, Zap, X,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import hero from "@/public/asansor-1.jpg";

import img_e from "@/public/e.jpeg";
import control from '@/public/7caae399-5b68-4932-9bfb-d328bb751505.jpeg'
import controll from '@/public/acc0a4b6-b829-4188-a8ec-eb6756a68845.jpeg'
import controlll from '@/public/d38d8afb-083d-41ff-85ac-e7d36e8e98fb.jpeg'
import controllll from '@/public/188a2ba2-c910-4456-a922-3feb1b5fe831.jpeg'
import controlllll from '@/public/37b843a6-44e7-498d-ad14-25246186563e.jpeg'
import controllllll from '@/public/50ac1a2b-545d-45dc-82f5-47bf3f75fc6d.jpeg'
import montaj from '@/public/5973f622-0ceb-4b65-8450-e0eba9e09f0b.jpeg'
import montajj from '@/public/62a4db3f-ea53-464e-b7bd-09636e04acab.jpeg'
import montajjj from '@/public/e57c9992-327b-4185-862f-daf5cce1f722.jpeg'
import montajjjj from '@/public/7847f0ba-bdd7-46b4-8a5c-ce66fe174ee7.jpeg'
import montajjjjj from '@/public/d6e164f7-514d-45b2-9e3a-c65d0b9fe8e7.jpeg'
import kabin from '@/public/335f5c84-a897-4742-bd55-24028edd5e77.jpeg'
import kabinn from '@/public/445a746a-a647-42f7-926f-961bdd2fdd23.jpeg'
import kabinnn from '@/public/8e1ce07e-024d-4a5a-aa41-9d822db0aa37.jpeg'
import kabinnnn from '@/public/728c65f5-79dd-46d9-af1c-798b0ebf6bc5.jpeg'
import kabinnnnn from '@/public/0d737f6f-900d-4f95-acd5-f9726076a251.jpeg'
import kabinnnnnn from '@/public/7f0b646b-2a70-4aaa-a2ee-1648bec670bc.jpeg'
import kabinnnnnnn from '@/public/e1bb0138-2aa0-48b0-a11a-2c557cd78629.jpeg'
import motor from '@/public/4a682a9a-acfe-4c49-a988-e5a53822f8ee.jpeg'
import motorr from '@/public/24619fa0-97c9-4fa2-9b5c-4937b21ddee4.jpeg'
import motorrr from '@/public/0714b6a9-68c9-45b7-9d5a-f3b8a12250ac.jpeg'
import motorrrr from '@/public/a1b3c850-cbe0-4968-ac48-9f39145bf01c.jpeg'
import motorrrrr from '@/public/ddc03c79-52b0-4cfa-a68f-e836c6825b07.jpeg'
import motorrrrrr from '@/public/66ddfb9a-2d2d-40f6-a6ad-2264aca44810.jpeg'
import motorrrrrrr from '@/public/cc2b7bec-3874-4aa9-971c-ca74d3ea38d3.jpeg'
import motorrrrrrrr from '@/public/9b6d9582-1c0a-4bc6-bd0c-08455cf1b17e.jpeg'
import motorrrrrrrrr from '@/public/cac307c0-de73-454b-8dbc-8762f667bbd6.jpeg'
import motorrrrrrrrrr from '@/public/820def86-a044-44a3-bfa4-ff27b9a1cab2.jpeg'
import motorrrrrrrrrrr from '@/public/e8a1a1cc-83ad-48dc-a186-d19458eda77b.jpeg'
import kat from '@/public/c558989b-6daf-4e6e-9821-05a040ebf56e.jpeg'
import katt from '@/public/0a55a80e-bb3a-4790-bdd5-68a8cd9ce90d.jpeg'
import kattt from '@/public/7befcedb-d384-46e4-8e79-3190747f3895.jpeg'
import katttt from '@/public/888e1b47-64f3-4388-8370-b147c4eb55d8.jpeg'
import kattttt from '@/public/fc11d169-ffe3-44c2-af7c-2a69fec231c6.jpeg'
import katttttt from '@/public/8b83c9aa-12b9-4c45-b591-f766d51fbde6.jpeg'
import kattttttt from '@/public/395d60d8-43e9-4ab2-8c64-9bf715b560aa.jpeg'
import katttttttt from '@/public/c79778d9-faab-4bd9-8388-97bf28feb46f.jpeg'
import kattttttttt from '@/public/b51b1186-451c-4d07-b885-9fe50b7fe2ef.jpeg'
import katttttttttt from '@/public/42552e18-7e02-4767-bdf9-a7d1fc979fbb.jpeg'


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
  image: string;
  gallery?: string[];
  description: string;
  features: string[];
  type?: "image" | "video";
};


const ALL_ITEMS: Item[] = [
  {
    id: 5,
    title: "Kontrol panelleri",
    category: "Buton & Kumanda",
    location: "Bursa",
    date: "2024",
    image: control.src,
    gallery: [
      control.src,
      controll.src ,
      controlll.src ,
      controllll.src ,
      controlllll.src ,
      controllllll.src 
    ],
    description: "Makina daireli(MR) ve makina dairesiz(MRL) kumanda panoları",
    features: ["Çift hızlı", "VVVF ( hız kontrollü )", "Hidrolik"],
  },

  {
    id: 6,
    title: "Kabin ve kat butonları",
    category: "Montaj",
    location: "Ankara",
    date: "2024",
    image: montaj.src,
    gallery: [
      montaj.src ,
      montajj.src ,
      montajjj.src ,
      montajjjj.src , 
      montajjjjj.src 
    ],
    description: "Paralel & seri haberleşmeli",
    features: ["Sıvı üstü", "Sıvı altı", "Antivandal"],
  },
  {
    id: 7,
    title: "Kabinler",
    category: "Kuyu / Ray",
    location: "İstanbul",
    date: "2024",
    image: kabin.src,
    gallery :[
      kabin.src ,
      kabinn.src ,
      kabinnn.src ,
      kabinnnn.src ,
      kabinnnnn.src ,
      kabinnnnnn.src ,
      kabinnnnnnn.src
    ],
    description: "Ray doğrultma ve ankraj uygulamaları.",
    features: ["Paslanmaz", "Panoramik", "Yük Kabinleri"],
  },
  {
    id: 8,
    title: "Motorlar",
    category: "Kuyu / Ray",
    location: "Ankara",
    date: "2024",
    image: motor.src,
    gallery: [
      motor.src ,
      motorr.src,
      motorrr.src,
      motorrrr.src,
      motorrrrr.src,
      motorrrrrr.src,
      motorrrrrrr.src,
      motorrrrrrrr.src,
      motorrrrrrrrr.src,
      motorrrrrrrrrr.src,
      motorrrrrrrrrrr.src
    ],
    description: "Kuyu üstü bağlantı ve sınır anahtarı yerleşimi.",
    features: ["Senkron", "Asenkron" , "Tamburlu"],
  },
  {
    id: 9,
    title: "Kat ve kabin kapıları",
    category: "Kabin & Kapı",
    location: "Kocaeli",
    date: "2024",
    image: kat.src,
    gallery:[
      kat.src,
      katt.src ,
      kattt.src ,
      katttt.src ,
      kattttt.src ,
      katttttt.src ,
      kattttttt.src ,
      katttttttt.src ,
      kattttttttt.src ,
      katttttttttt.src 
    ],
    description: "Kabin kapısı takoz ve merkezleme işlemleri.",
    features: ["Antivandal", "Paslanmaz" , "Camlı"],
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
  const [active, setActive] = useState<{ itemId: number; photoIndex: number } | null>(null);

  const getGallery = useCallback((item: Item) => {
    const g = item.gallery?.length ? item.gallery : [item.image];
    return g;
  }, []);

  const openLightbox = useCallback((itemId: number, photoIndex = 0) => {
    setActive({ itemId, photoIndex });
  }, []);

  const closeLightbox = useCallback(() => setActive(null), []);

  const activeItem = useMemo(() => {
    if (!active) return null;
    return ALL_ITEMS.find((x) => x.id === active.itemId) ?? null;
  }, [active]);

  const activeGallery = useMemo(() => {
    if (!activeItem) return [];
    return getGallery(activeItem);
  }, [activeItem, getGallery]);

  const prev = useCallback(() => {
    setActive((s) => {
      if (!s) return s;
      const item = ALL_ITEMS.find((x) => x.id === s.itemId);
      if (!item) return null;
      const g = item.gallery?.length ? item.gallery : [item.image];
      const nextIndex = (s.photoIndex - 1 + g.length) % g.length;
      return { ...s, photoIndex: nextIndex };
    });
  }, []);

  const next = useCallback(() => {
    setActive((s) => {
      if (!s) return s;
      const item = ALL_ITEMS.find((x) => x.id === s.itemId);
      if (!item) return null;
      const g = item.gallery?.length ? item.gallery : [item.image];
      const nextIndex = (s.photoIndex + 1) % g.length;
      return { ...s, photoIndex: nextIndex };
    });
  }, []);

  const items = useMemo(
    () => (cat === "Tümü" ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.category === cat)),
    [cat]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!active) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, closeLightbox, prev, next]);

  useEffect(() => {
    setActive(null);
  }, [cat]);

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
                  onClick={() => openLightbox(item.id, 0)}
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
      {active && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0" />

          <button
            aria-label="Kapat"
            className="absolute right-4 top-4 rounded-md border border-white/20 p-2 text-white/90"
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            aria-label="Önceki"
            className="absolute left-3 md:left-6 rounded-md border border-white/20 p-2 text-white/90"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            aria-label="Sonraki"
            className="absolute right-3 md:right-6 rounded-md border border-white/20 p-2 text-white/90"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mx-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={activeGallery[active.photoIndex]}
                alt={activeItem.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* ✅ thumbnail strip (prod hissi + hızlı seçim) */}
            {activeGallery.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {activeGallery.map((src, i) => {
                  const isActive = i === active.photoIndex;
                  return (
                    <button
                      key={`${activeItem.id}-${i}`}
                      onClick={() => setActive((s) => (s ? { ...s, photoIndex: i } : s))}
                      className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-md border ${isActive ? "border-accent ring-2 ring-accent/60" : "border-white/15"
                        }`}
                      aria-label={`Fotoğraf ${i + 1}`}
                      aria-current={isActive ? "true" : "false"}
                    >
                      <Image src={src} alt="" fill className="object-cover" sizes="96px" />
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-4 flex items-center justify-between text-white/80">
              <div className="text-sm">
                <div className="font-semibold">{activeItem.title}</div>
                <div className="text-white/60">
                  {activeItem.location} • {activeItem.date} • {active.photoIndex + 1}/{activeGallery.length}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-accent/80 text-white border-0">
                  {activeItem.category}
                </Badge>

                <a
                  href={activeGallery[active.photoIndex]}
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
