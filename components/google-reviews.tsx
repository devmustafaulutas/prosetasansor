"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useMemo } from "react"


type Review = {
  name: string;
  badge?: string;
  rating: number;
  date: string;
  text: string;
  ownerReply?: string;
  ownerReplyDate?: string;
};

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?sa=X&sca_esv=f79ae1808813365b&tbm=lcl&sxsrf=AE3TifOJdyv0kYpA5H7nlLwwzfCmn6k9-w:1757854785369&q=PROSET+ELEKTRON%C4%B0K+VE+ASANS%C3%96R+S%C4%B0STEMLER%C4%B0+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDE0N7E0MDS3MDMxN7ewsDAyt9jAyPiK0SQgyD_YNUTB1cfVOyTI3-_IBm-FMFcFx2BHv-DD04IUgo9sCA5x9fVxDTqyQSEyv6g0NyexaBErWdoASQ_1jYkAAAA&rldimm=14174901786477888278&hl=tr-TR&ved=2ahUKEwj_w7Gwp9iPAxVbSvEDHXCfHysQ9fQKegQIShAF&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews"

const REVIEWS: Review[] = [
  {
    name: "Serkan Gökkaya",
    badge: "Yerel Rehber · 7 yorum",
    rating: 5,
    date: "1 ay önce",
    text:
      "Muhammet Emin her sorunu kısa ve hızlı bir şekilde çözüm üretiyor ve ekip arkadaşlarımız da güler yüzlü. Çözüm ortağı olan bir firma.",
    ownerReply: "Teşekkür ederiz 😊",
    ownerReplyDate: "1 ay önce",
  },
  {
    name: "dilek çağlı",
    rating: 5,
    date: "1 ay önce",
    text:
      "Emin bey ve ekibine çok teşekkür ediyorum. Yaptıkları her işte bilgilendirme yapıp bakımlarımızı zamanında yapıyorlar. İşlerini hakkıyla yapan bir firma.",
    ownerReply: "Teşekkür ederiz ☺️",
    ownerReplyDate: "1 ay önce",
  },
  {
    name: "Fatmalı vlog",
    rating: 5,
    date: "1 ay önce",
    text:
      "Emin beye ve ekip arkadaşlarına çok teşekkür ediyorum. Kısa sürede işini bu denli temiz ve sağlam yapması bizi çok mutlu etti.",
    ownerReply: "Çok teşekkür ederiz güzel yorumlarınız için 😊",
    ownerReplyDate: "1 ay önce",
  },
];
const avg = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;
const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <path fill="#4285F4" d="M21.35 11.1H12v3h5.27c-.23 1.2-.92 2.22-1.96 2.88l2.52 1.9C20.69 17.16 22 14.57 22 11.5c0-.68-.06-1.34-.17-1.99z" />
      <path fill="#34A853" d="M12 22c2.64 0 4.86-.88 6.48-2.38l-2.52-1.9c-.88.59-2.02.94-3.31.94-2.54 0-4.69-1.72-5.46-4.03H4.26v2.52C5.87 19.46 9.2 22 12 22z" />
      <path fill="#FBBC05" d="M6.54 13.13c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V6.81H4.26C3.6 8.15 3.23 9.68 3.23 11.23s.37 3.08 1.03 4.42l2.28-2.52z" />
      <path fill="#EA4335" d="M12 4.86c1.44 0 2.74.5 3.76 1.49l2.11-2.11C16.82 2.03 14.6 1.15 12 1.15 8.2 1.15 4.87 3.69 3.26 7.16l2.28 2.52C6.31 7.37 8.46 5.65 12 4.86z" />
    </svg>
  );
}

export function GoogleReviews() {
  return (
    <section className="py-16 bg-muted/30 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">Müşteri Yorumları</h2>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(avg) ? "text-yellow-400" : "text-white/30"}`}
                  fill={i < Math.round(avg) ? "currentColor" : "none"}   // ⭐️ dolu görünür
                />
              ))}
            </div>
            <span className="font-semibold">{avg.toFixed(1)}/5</span>
            <span className="text-white/60">({REVIEWS.length} değerlendirme)</span>

            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
              alt="Google"
              className="w-5 h-5 ml-1 hidden"   
              onLoad={(e) => (e.currentTarget.classList.remove("hidden"))}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "inline-block";
              }}
            />
            <span style={{ display: "none" }}>
              <GoogleG className="w-5 h-5 ml-1" />
            </span>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, idx) => (
            <Card
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < r.rating ? "text-yellow-400" : "text-white/25"}`}
                        fill={i < r.rating ? "currentColor" : "none"}
                      />

                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-red-500" />
                </div>

                <p className="text-white/90 mb-4 italic">“{r.text}”</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 grid place-items-center text-xs">
                      {initials(r.name)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">{r.name}</span>
                      {r.badge && <span className="text-xs text-white/60">{r.badge}</span>}
                    </div>
                  </div>
                  <span className="text-sm text-white/60">{r.date}</span>
                </div>

                {r.ownerReply && (
                  <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs text-white/60 mb-1">
                      PROSET ELEKTRONİK VE ASANSÖR SİSTEMLERİ (Sahibi) · {r.ownerReplyDate || ""}
                    </div>
                    <div className="text-sm text-white/90">{r.ownerReply}</div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href={GOOGLE_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:opacity-90"
          >
            Google’da Tüm Yorumlar
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Proset Asansör",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: avg.toFixed(1),
                reviewCount: REVIEWS.length,
              },
              review: REVIEWS.map((r) => ({
                "@type": "Review",
                author: { "@type": "Person", name: r.name },
                reviewRating: { "@type": "Rating", ratingValue: r.rating },
                reviewBody: r.text,
                datePublished: r.date,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}