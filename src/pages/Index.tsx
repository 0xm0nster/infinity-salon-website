import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen">
      <Header onBookingClick={openBooking} />
      
      <main>
        <HeroSection onBookingClick={openBooking} />
        <AboutSection />
        <ServicesSection onBookingClick={openBooking} />
        <GallerySection />
        <ContactSection onBookingClick={openBooking} />
      </main>

      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
