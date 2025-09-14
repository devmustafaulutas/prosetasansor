import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Heart, TrendingUp, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
              Hakkımızda
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animate-delay-100 text-pretty leading-relaxed">
              Asansör sektöründe güvenilir çözümler sunan deneyimli ekibimizle tanışın
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  2010 yılında kurulan AsansörPro, asansör sektöründe kaliteli hizmet anlayışıyla müşterilerine
                  güvenilir çözümler sunmaktadır. 15 yıllık deneyimimizle, binlerce projeye imza attık ve müşteri
                  memnuniyetini her zaman ön planda tuttuk.
                </p>
                <p>
                  Uzman ekibimiz, en son teknoloji ürünlerle donatılmış asansörlerin satışı, montajı ve bakımında
                  profesyonel hizmet vermektedir. Güvenlik standartlarına uygun çalışma prensibimizle sektörde öncü
                  konumdayız.
                </p>
                <p>
                  İstanbul başta olmak üzere Türkiye'nin birçok ilinde hizmet veren firmamız, müşteri odaklı yaklaşımı
                  ve kaliteli hizmet anlayışıyla güven kazanmıştır.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-200">
              <div
                className="w-full h-96 bg-muted rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('/professional-elevator-technician-team-working.jpg')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Değerlerimiz</h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up animate-delay-100 text-pretty">
              Çalışma prensiplerimizdeki temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Misyonumuz</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Güvenli, kaliteli ve modern asansör çözümleriyle yaşam kalitesini artırmak
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Vizyonumuz</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Asansör sektöründe lider konumda, yenilikçi çözümler sunan firma olmak
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Değerlerimiz</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Güven, kalite, müşteri memnuniyeti ve sürekli gelişim odaklı çalışma
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Ekibimiz</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sertifikalı, deneyimli ve müşteri odaklı profesyonel teknisyen kadrosu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Rakamlarla AsansörPro
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground font-medium">Yıllık Deneyim</p>
            </div>
            <div className="text-center animate-scale-in animate-delay-100">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Tamamlanan Proje</p>
            </div>
            <div className="text-center animate-scale-in animate-delay-200">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground font-medium">Hizmet Verilen İl</p>
            </div>
            <div className="text-center animate-scale-in animate-delay-300">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">%98</div>
              <p className="text-muted-foreground font-medium">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up text-balance">
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 animate-fade-in-up animate-delay-100 text-pretty">
            Asansör projeleriniz için güvenilir çözümler sunuyoruz
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="animate-fade-in-up animate-delay-200 bg-accent hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
          >
            <Link href="/iletisim">
              <Phone className="w-5 h-5 mr-2" />
              İletişime Geçin
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
