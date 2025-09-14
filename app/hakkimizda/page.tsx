"use client";

import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  Sparkles,
  Wrench,
  Users,
  Target,
  Heart,
  TrendingUp,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Leaf,
  Phone,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ÜST BAŞLIK (Hero ile aynı karartma/vignette stili) */}
      <PageHeader
        title="Hakkımızda"
        bgImage="/asansor-1.jpg"
        objectPosition="50% 45%"
      />

      {/* BİZ KİMİZ */}
      <section className="py-16 bg-muted\/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="brand-eyebrow">PROSET ASANSÖR</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                Biz kimiz?
              </h2>

              <p className="mt-4 text-white/80">
                Proset Asansör, modern şehirlerin vazgeçilmez ihtiyacı olan dikey
                ulaşım çözümlerini; <b>güven</b>, <b>kalite</b> ve <b>estetik</b> anlayışıyla
                birleştirerek sunmak amacıyla kurulmuştur. Müşteri güvenliğini ve
                memnuniyetini merkeze alan yaklaşımımızla; asansör <b>montaj</b>ı,
                <b> bakım-onarım</b> ve <b>modernizasyon</b> hizmetlerinde TS EN 81-20/50
                standartlarına tam uyumla çalışırız. Elektronik ve mekanik
                sistemlerdeki güncel teknolojiyi yakından takip eder, güvenliği
                estetikle buluştururuz.
              </p>

              <ul className="mt-5 grid gap-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <Shield className="mt-0.5 h-5 w-5 text-red-500" />
                  <span>Her adımda <b>güvenlik</b>, konfor ve teknolojiyi ön planda tutuyoruz.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-5 w-5 text-red-500" />
                  <span><b>Modern ve estetik</b> tasarımlar</span>
                </li>
                <li className="flex items-start gap-2">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 text-red-500" />
                  <span><b>Güvenlik standartlarına uygun</b> çözümler</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="mt-0.5 h-5 w-5 text-red-500" />
                  <span><b>Uzman bakım & servis</b> desteği</span>
                </li>
              </ul>

              <div className="mt-6 text-white/85">
                Proset Asansör olarak, sadece bir asansör değil; uzun yıllar sürecek
                <b> güven</b> ve <b>kalite</b>yi sunuyoruz. <br />
                Hayatınızı kolaylaştıran, güvenle yükselten Proset Asansör ile tanışın:
                <b> modern tasarım</b>, <b>maksimum güvenlik</b>, <b>kesintisiz hizmet</b>.
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">“Güvenle Yükselin, Konforla İlerleyin.”</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Uzman bakım & montaj desteği</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Küçük görsel bloğu */}
              <div
                className="w-full h-64 md:h-80 rounded-xl border border-white/10 bg-white/5 bg-center bg-cover"
                style={{ backgroundImage: "url('/elevator.jpg')" }}
              />
              <p className="text-sm text-white/70">
                “Her tip asansörün projelendirilmesinden üretimine, montajından
                bakım-onarımına kadar yurt çapında hizmet vermekteyiz.”
              </p>

              <div className="grid grid-cols-3 gap-3 text-xs">
                {["Modern teknoloji", "Şık tasarım", "7/24 destek"].map((t, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MİSYON – VİZYON */}
      <section className="py-16 bg-muted\/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-red-500" />
                  <h3 className="text-lg font-semibold">Misyonumuz</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>• Kullanıcı güvenliğini her şeyin üzerinde tutarak uluslararası standartlarda sistemler sunmak</li>
                  <li>• Montajdan bakıma tüm süreçlerde kesintisiz müşteri memnuniyeti sağlamak</li>
                  <li>• Teknolojiyi yakından izleyerek yenilikçi ve enerji verimli çözümler üretmek</li>
                  <li>• Bakım & onarımda hızlı, profesyonel ve güvenilir hizmet vermek</li>
                  <li>• Çevreye ve topluma duyarlı bir anlayışla sektöre değer katmak</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-red-500" />
                  <h3 className="text-lg font-semibold">Vizyonumuz</h3>
                </div>
                <p className="mt-3 text-sm text-white/80">
                  Yenilikçi, güvenli ve sürdürülebilir asansör çözümleriyle yaşam alanlarını daha
                  erişilebilir ve konforlu hale getirerek sektörde <b>kalite ve güvenin öncü markası</b> olmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="py-16 bg-muted\/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Değerlerimiz</h2>
            <p className="mt-3 text-white/70">Çalışma kültürümüzün temel taşları</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="h-6 w-6 text-red-500" />, t: "Güvenlik", d: "En yüksek güvenlik standartları" },
              { icon: <Heart className="h-6 w-6 text-red-500" />, t: "Müşteri Memnuniyeti", d: "Hızlı ve ihtiyaca özel çözümler" },
              { icon: <Sparkles className="h-6 w-6 text-red-500" />, t: "Kalite", d: "Ürün ve hizmette sürdürülebilir kalite" },
              { icon: <Leaf className="h-6 w-6 text-red-500" />, t: "Çevreye Saygı", d: "Doğaya duyarlı süreçler" },
              { icon: <Users className="h-6 w-6 text-red-500" />, t: "Takım Ruhu", d: "Güçlü iş birliği ve iletişim" },
              { icon: <ClipboardCheck className="h-6 w-6 text-red-500" />, t: "Şeffaflık & Güven", d: "Dürüst ve açık süreç yönetimi" },
            ].map((v, i) => (
              <Card key={i} className="border-white/10 bg-white/5">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    {v.icon}
                    <h3 className="font-semibold">{v.t}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/80">{v.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ÜRÜNLERİMİZ */}
      <section className="py-16 bg-muted\/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Ürünlerimiz</h2>
            <p className="mt-3 text-white/70">Her ihtiyaca uygun geniş ürün yelpazesi</p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 max-w-4xl mx-auto">
            {[
              "Yolcu Asansörleri",
              "Panoramik Asansörler",
              "Yük Asansörleri",
              "Hidrolik Asansörler",
              "Araç Asansörleri",
              "Kompakt Asansörler",
              "Engelli Asansörleri",
              "Servis Asansörleri",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5"
              >
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAKIM & ONARIM */}
      <section className="py-16 bg-muted\/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Bakım & Onarım</h2>
            <p className="mt-3 text-white/70">
              Satış sonrası destekle her zaman yanınızdayız
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ClipboardCheck className="h-5 w-5 text-red-500" />, t: "Periyodik Bakım", d: "Düzenli kontrollerle arıza riskini en aza indiririz" },
              { icon: <Clock className="h-5 w-5 text-red-500" />, t: "Acil Müdahale 7/24", d: "Arıza durumunda hızlı çözüm" },
              { icon: <Wrench className="h-5 w-5 text-red-500" />, t: "Onarım & Yedek Parça", d: "Orijinal parçalarla uzun ömürlü çözümler" },
              { icon: <CheckCircle2 className="h-5 w-5 text-red-500" />, t: "Modernizasyon", d: "Eski sistemleri güncel teknolojiyle yenileriz" },
            ].map((b, i) => (
              <Card key={i} className="border-white/10 bg-white/5">
                <CardContent className="p-7">
                  <div className="flex items-center gap-2">
                    {b.icon}
                    <h3 className="font-semibold">{b.t}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/80">{b.d}</p>
                  <p className="mt-2 text-xs text-white/60">
                    * Tüm hizmetlerimiz TS EN 81-20/50 ve ilgili mevzuata uygundur.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted\/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Sizi Yükseklere Biz Taşırız — Siz Güvenle Yükselmenin Keyfini Çıkarın!
          </h3>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Proset Asansör ile her kat hayatınıza değer katar. İletişim: <b>0553 277 67 81</b> •{" "}
            <span className="opacity-90">www.prosetasansor.com</span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-white text-black hover:bg-gray-100">
              <Link href="/iletisim">
                <Phone className="w-4 h-4 mr-2" />
                Keşif / Teklif Talebi
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/hizmetler">Hizmetlerimiz</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
