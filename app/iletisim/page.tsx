"use client"

import type React from "react"

import { useState } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Zap, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "+905551234567"
    const message = "Merhaba! Web sitenizden ulaşıyorum. Asansör hizmetleriniz hakkında bilgi almak istiyorum."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen">
      <WhatsAppButton />

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
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 animate-fade-in-up">
              <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 px-4 py-2 rounded-full text-sm font-medium text-foreground border border-accent/30">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>7/24 İletişim Desteği</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animate-delay-100 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Bize Ulaşın
              </span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animate-delay-200 text-pretty leading-relaxed">
              Gelecek nesil asansör teknolojileri için
              <span className="text-accent font-semibold"> uzman ekibimizle</span> iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="hologram-effect tech-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <Zap className="w-6 h-6 text-accent mr-2" />
                    Hızlı İletişim Formu
                  </CardTitle>
                  <p className="text-muted-foreground">AI destekli çözümlerimiz için formu doldurun</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 animate-scale-in">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-glow" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Mesajınız Gönderildi!</h3>
                      <p className="text-muted-foreground">
                        AI sistemimiz mesajınızı analiz etti. En kısa sürede size dönüş yapacağız.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* ... existing form fields ... */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Ad Soyad *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınız ve soyadınız"
                          className="transition-all duration-200 focus:ring-2 focus:ring-accent tech-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefon Numarası *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0555 123 45 67"
                          className="transition-all duration-200 focus:ring-2 focus:ring-accent tech-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          E-posta Adresi *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ornek@email.com"
                          className="transition-all duration-200 focus:ring-2 focus:ring-accent tech-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Mesajınız *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Asansör ihtiyacınız hakkında detayları paylaşın..."
                          rows={5}
                          className="transition-all duration-200 focus:ring-2 focus:ring-accent resize-none tech-border"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 transform hover:scale-105"
                          size="lg"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Mesaj Gönder
                        </Button>
                        <Button
                          type="button"
                          onClick={handleWhatsAppContact}
                          variant="outline"
                          size="lg"
                          className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 transition-all duration-300"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up animate-delay-200">
              <Card className="group hover:shadow-xl transition-all duration-500 hologram-effect tech-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                      <MapPin className="w-6 h-6 text-accent group-hover:animate-float" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Merkez Ofis</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Teknoloji Vadisi, Gelecek Bulvarı No: 2024
                        <br />
                        Kadıköy / İstanbul
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 hologram-effect tech-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                      <Phone className="w-6 h-6 text-accent group-hover:animate-float" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">İletişim Hatları</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+902161234567" className="hover:text-accent transition-colors duration-200">
                          +90 (216) 123 45 67
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+905551234567"
                          className="hover:text-accent transition-colors duration-200 flex items-center"
                        >
                          +90 (555) 123 45 67
                          <MessageCircle className="w-4 h-4 ml-2 text-green-500" />
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 hologram-effect tech-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                      <Mail className="w-6 h-6 text-accent group-hover:animate-float" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">E-posta</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:info@futureelevator.com"
                          className="hover:text-accent transition-colors duration-200"
                        >
                          info@futureelevator.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:ai-support@futureelevator.com"
                          className="hover:text-accent transition-colors duration-200"
                        >
                          ai-support@futureelevator.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 hologram-effect tech-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                      <Clock className="w-6 h-6 text-accent group-hover:animate-float" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Hizmet Saatleri</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                        <p>Cumartesi: 09:00 - 16:00</p>
                        <p>Pazar: Kapalı</p>
                        <p className="text-accent font-medium flex items-center">
                          <Zap className="w-4 h-4 mr-1" />
                          AI Destek: 7/24
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg opacity-30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Konumumuz</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up animate-delay-100">
              Teknoloji merkezimizi ziyaret edin veya harita üzerinden konumumuzu görün
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            <Card className="hologram-effect tech-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Google Maps Embed */}
                  <div className="w-full h-96 bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.665!2d29.0875!3d40.9925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd6570f4e1%3A0x8dc0c7f8b8b8b8b8!2sKad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                      width="100%"
                      height="384"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>

                  {/* Map Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Card className="bg-background/95 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">FutureElevator Merkez Ofis</h4>
                            <p className="text-sm text-muted-foreground">Teknoloji Vadisi, Kadıköy</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => window.open("https://maps.google.com/?q=Kadıköy,İstanbul", "_blank")}
                              className="tech-border"
                            >
                              <MapPin className="w-4 h-4 mr-1" />
                              Yol Tarifi
                            </Button>
                            <Button
                              size="sm"
                              onClick={handleWhatsAppContact}
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              <MessageCircle className="w-4 h-4 mr-1" />
                              WhatsApp
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
