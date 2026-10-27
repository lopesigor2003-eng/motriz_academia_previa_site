import React, { useState } from 'react';
import { Dumbbell, Users2, Sparkles, Apple, ArrowRight, Check, Clock, X } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/motrizData.ts';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'personalizado':
        return <Dumbbell className="w-6 h-6 text-[#f0222a]" />;
      case 'coletivas':
        return <Users2 className="w-6 h-6 text-[#f0222a]" />;
      case 'avaliacao':
        return <Sparkles className="w-6 h-6 text-[#f0222a]" />;
      case 'nutricao':
        return <Apple className="w-6 h-6 text-[#f0222a]" />;
      default:
        return <Dumbbell className="w-6 h-6 text-[#f0222a]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-zinc-950 relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f0222a] mb-2 block">
            Modalidades & Cuidados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Nossos Serviços
          </h2>
          <div className="w-16 h-1 bg-[#f0222a] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-zinc-300">
            Uma estrutura completa e integrada para acompanhar você em todas as fases da sua vida e da sua saúde.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                service.highlight
                  ? 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-[#f0222a]/50 shadow-xl shadow-[#f0222a]/10'
                  : 'bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  {service.highlight && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f0222a] bg-[#f0222a]/10 border border-[#f0222a]/30 px-2.5 py-1 rounded-full">
                      Destaque Principal
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-zinc-300 mb-4">
                  {service.subtitle}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key features bullet points */}
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-[#f0222a] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Schedule & Action */}
              <div className="pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{service.schedule}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors"
                  >
                    Ver Detalhes
                  </button>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#f0222a] hover:bg-[#d81b22] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    <span>Quero Este</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-lg"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#f0222a]">
                  Modalidade Motriz
                </span>
                <h3 id="service-modal-title" className="font-display text-2xl font-bold uppercase text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
              {selectedService.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              O que está incluso:
            </h4>
            <div className="space-y-2 mb-6">
              {selectedService.features.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-[#f0222a] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800/80 mb-6 text-xs text-zinc-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#f0222a] shrink-0" />
              <span>{selectedService.schedule}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectService(serviceName);
                }}
                className="flex-1 bg-[#f0222a] hover:bg-[#d81b22] text-white font-semibold py-3 px-4 rounded-xl text-center text-sm shadow-md"
              >
                Agendar Aula Experimental
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-semibold py-3 px-4 rounded-xl text-sm"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
