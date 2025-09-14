"use client";

import type React from "react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Zap, MessageCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    website: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Gönderim başarısız");
      }
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "", website: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err: any) {
      setError(err.message || "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "905532776781"; 
    const msg = "Merhaba! Proset Asansör web sitesinden ulaşıyorum. Keşif / teklif almak istiyorum.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium">
            <MessageCircle className="h-4 w-4 text-accent" />
            7/24 İletişim Desteği
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Bize Ulaşın</h1>
          <p className="mt-3 text-lg text-foreground/70">
            Gelecek nesil asansör teknolojileri için <b>uzman ekibimizle</b> iletişime geçin.
          </p>
        </div>
      </section>

      {/* Form & bilgi */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <Card className="tech-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Zap className="h-6 w-6 text-accent" />
                    Hızlı İletişim Formu
                  </CardTitle>
                  <p className="text-foreground/70">
                    Modern ve estetik tasarımlar • Güvenlik standartlarına uygun çözümler • Uzman bakım ve servis
                    desteği
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="animate-scale-in py-8 text-center">
                      <CheckCircle className="mx-auto mb-3 h-14 w-14 text-green-500" />
                      <h3 className="text-xl font-semibold">Mesajınız alındı!</h3>
                      <p className="text-foreground/70">En kısa sürede size dönüş yapacağız.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="flex items-center gap-2 rounded-md border border-red-400/40 bg-red-500/10 p-3 text-red-400">
                          <AlertCircle className="h-4 w-4" /> {error}
                        </div>
                      )}

                      {/* Honeypot (görünmez alan) */}
                      <input
                        type="text"
                        name="website"
                        autoComplete="off"
                        tabIndex={-1}
                        value={formData.website}
                        onChange={handleChange}
                        className="hidden"
                      />

                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Ad Soyad *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınız ve soyadınız"
                          className="tech-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                          Telefon Numarası *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          pattern="^\+?\d{10,15}$"
                          title="Örn: +905551234567"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+905551234567"
                          className="tech-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
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
                          className="tech-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium">
                          Mesajınız *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Asansör ihtiyacınızı kısaca anlatın..."
                          className="resize-none tech-border"
                        />
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                        >
                          <Send className="mr-2 h-5 w-5" />
                          {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
                        </Button>
                        <Button
                          type="button"
                          onClick={handleWhatsAppContact}
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Bilgi kartları */}
            <div className="space-y-8">
              <Card className="tech-border hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Merkez Ofis</h3>
                      <p className="text-foreground/70">
                        KAZIM KARABEKİR MAH. 1682 CAD. 9 B
                        <br /> ETİMESGUT / ANKARA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-border hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">İletişim Hatları</h3>
                      <p>
                        <a className="hover:text-accent" href="tel:+905532776781">
                          +90 553 277 67 81
                        </a>
                      </p>
                      <p>
                        <a className="hover:text-accent" href="mailto:prosetasansor@gmail.com">
                          prosetasansor@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-border hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Hizmet Saatleri</h3>
                      <div className="space-y-1 text-foreground/70">
                        <p>Pzt-Cum: 08:00 – 18:00</p>
                        <p>Cmt: 09:00 – 16:00</p>
                        <p>Paz: Kapalı</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="tech-border overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  className="h-96 w-full grayscale transition hover:grayscale-0"
                  src="https://www.google.com/maps?q=Etimesgut,Ankara&output=embed"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
