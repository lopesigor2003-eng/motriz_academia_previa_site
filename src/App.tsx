/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { MissionSection } from './components/MissionSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { StructureSection } from './components/StructureSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactLocationSection } from './components/ContactLocationSection.tsx';
import { CommunitySection } from './components/CommunitySection.tsx';
import { Footer } from './components/Footer.tsx';
import { VisitModal } from './components/VisitModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Treino Personalizado');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedServiceName(service);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#f0222a] selection:text-white">
      {/* Semantic Header & Nav */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Semantic Main Content Container */}
      <main className="flex-grow">
        {/* 1. Hero Section (with dedicated video presentation) */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Nossa Missão */}
        <MissionSection />

        {/* 3. Nossos Serviços */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* 4. Nossa Estrutura (Carousel in original aspect ratio, 5s rotation, no descriptions) */}
        <StructureSection />

        {/* 5. Depoimentos */}
        <TestimonialsSection />

        {/* 6. Contato e Localização */}
        <ContactLocationSection />

        {/* 7. Comunidade Motriz */}
        <CommunitySection />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Interactive Visit Scheduler Modal */}
      <VisitModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedServiceName}
      />

      {/* Quick Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
