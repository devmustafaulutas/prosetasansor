import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Play, ExternalLink, Calendar, MapPin, Award, Zap } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Akıllı Asansör - Teknoloji Merkezi",
    category: "Asansör",
    location: "İstanbul, Maslak",
    date: "2024",
    image: "/futuristic-elevator-with-glass-panels-and-led-ligh.jpg",
    description:
      "AI destekli trafik yönetimi ve quantum güvenlik sistemi ile donatılmış 20 katlık ofis binası projesi.",
    features: ["Quantum Drive", "AI Traffic Management", "Touchless Control"],
    type: "image",
  },
  {
    id: 2,
    title: "Engelli Platformu - Hastane Kompleksi",
    category: "Engelli Platformu",
    location: "Ankara, Çankaya",
    date: "2024",
    image: "/modern-wheelchair-accessible-platform-lift-with-sa.jpg",
    description: "Sesli rehberlik sistemi ve otomatik güvenlik sensörleri ile hastane erişilebilirlik projesi.",
    features: ["Voice Guidance", "Auto Safety", "Weather Protection"],
    type: "image",
  },
  {
    id: 3,
    title: "Yürüyen Merdiven - AVM Projesi",
    category: "Yürüyen Merdiven",
    location: "İzmir, Bornova",
    date: "2024",
    image: "/modern-escalator-with-led-lighting-and-glass-raili.jpg",
    description: "LED aydınlatma ve enerji geri kazanım sistemi ile modern alışveriş merkezi kurulumu.",
    features: ["LED Lighting", "Energy Recovery", "Smart Speed Control"],
    type: "image",
  },
  {
    id: 4,
    title: "Revizyon Projesi - Tarihi Bina",
    category: "Revizyon",
    location: "İstanbul, Beyoğlu",
    date: "2024",
    image: "/elevator-modernization-with-digital-displays-and-s.jpg",
    description: "1970'lerden kalma asansörün AI upgrade paketi ile modernizasyonu.",
    features: ["RetroFit AI", "IoT Integration", "Energy Optimization"],
    type: "image",
  },
  {
    id: 5,
    title: "Kurulum Süreci - Zaman Atlama",
    category: "Montaj",
    location: "Bursa, Nilüfer",
    date: "2024",
    image: "/placeholder.svg?height=400&width=600&text=Montaj+Video",
    description: "48 saatlik kurulum sürecinin 2 dakikalık özeti. Robotik montaj teknolojimizi görün.",
    features: ["Robotic Assembly", "Time-lapse", "Quality Control"],
    type: "video",
  },
  {
    id: 6,
    title: "Akıllı Bina Entegrasyonu",
    category: "Sistem Entegrasyonu",
    location: "Antalya, Konyaaltı",
    date: "2024",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Building",
    description: "IoT sensörler ve yapay zeka ile tam entegre akıllı bina çözümü.",
    features: ["Full IoT", "Building Management", "Predictive Analytics"],
    type: "image",
  },
  {
    id: 7,
    title: "Quantum Güvenlik Sistemi Demo",
    category: "Güvenlik",
    location: "İstanbul, Şişli",
    date: "2024",
    image: "/placeholder.svg?height=400&width=600&text=Security+Demo",
    description: "Quantum şifreleme teknolojisi ile güvenlik sisteminin canlı demonstrasyonu.",
    features: ["Quantum Encryption", "Biometric Access", "Real-time Monitoring"],
    type: "video",
  },
  {
    id: 8,
    title: "Enerji Verimli Çözümler",
    category: "Sürdürülebilirlik",
    location: "İzmir, Konak",
    date: "2024",
    image: "/placeholder.svg?height=400&width=600&text=Green+Energy",
    description: "Güneş enerjisi ile çalışan asansör sistemi ve %60 enerji tasarrufu.",
    features: ["Solar Power", "Energy Recovery", "Carbon Neutral"],
    type: "image",
  },
]

const categories = [
  "Tümü",
  "Asansör",
  "Engelli Platformu",
  "Yürüyen Merdiven",
  "Revizyon",
  "Montaj",
  "Sistem Entegrasyonu",
  "Güvenlik",
  "Sürdürülebilirlik",
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden geometric-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
          <div className="absolute inset-0 bg-background/95" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-accent/30 rotate-45 animate-float"></div>
        <div
          className="absolute top-32 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 animate-fade-in-up">
              <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 px-4 py-2 rounded-full text-sm font-medium text-foreground border border-accent/30">
                <ImageIcon className="w-4 h-4 text-accent" />
                <span>Projelerimiz ve Çalışmalarımız</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animate-delay-100 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Proje Galerisi
              </span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animate-delay-200 text-pretty leading-relaxed">
              Gerçekleştirdiğimiz projeler ve
              <span className="text-accent font-semibold"> teknolojik yeniliklerimizi</span> keşfedin
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 animate-fade-in-up">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                    : "hover:bg-muted tech-border"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card
                key={item.id}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up hologram-effect tech-border overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-accent/90 text-white border-none">
                          {item.category}
                        </Badge>
                        <div className="flex space-x-2">
                          {item.type === "video" && (
                            <Button
                              size="sm"
                              variant="secondary"
                              className="bg-white/20 hover:bg-white/30 text-white border-none"
                            >
                              <Play className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/20 hover:bg-white/30 text-white border-none"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video indicator */}
                  {item.type === "video" && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-accent/90 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                        <Play className="w-3 h-3" />
                        <span>Video</span>
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300 text-lg leading-tight">
                      {item.title}
                    </h3>
                    <Award className="w-5 h-5 text-accent flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-accent/5 text-accent border-accent/30">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Location and Date */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg opacity-30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Başarı İstatistikleri
              </span>
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up animate-delay-100">
              Rakamlarla projelerimizin başarısı
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Tamamlanan Proje", icon: Award },
              { number: "50+", label: "Şehir", icon: MapPin },
              { number: "15", label: "Yıl Deneyim", icon: Calendar },
              { number: "99.9%", label: "Müşteri Memnuniyeti", icon: Zap },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center animate-fade-in-up group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <stat.icon className="w-8 h-8 text-accent group-hover:animate-float" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up text-balance">
            Siz de Projemizin Bir Parçası Olun
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up animate-delay-100 text-pretty">
            Hayalinizdeki projeyi birlikte gerçekleştirelim
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/iletisim">
                <Zap className="w-5 h-5 mr-2" />
                Projenizi Başlatalım
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 bg-transparent"
            >
              <Link href="/urunler">Ürünleri İncele</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
