import Hero from "@/components/Hero";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { GoogleReviews } from "@/components/google-reviews";
import ServicesShowcase from "@/components/ServicesShowcase";
import AboutShowcase from "@/components/AboutShowcase";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatsAppButton />

      <AboutShowcase />
      <ServicesShowcase />

      <GoogleReviews />
    </div>
  );
}
