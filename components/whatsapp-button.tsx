"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "+905551234567" // Replace with actual WhatsApp number
  const message = "Merhaba! Asansör hizmetleriniz hakkında bilgi almak istiyorum."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-float"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
