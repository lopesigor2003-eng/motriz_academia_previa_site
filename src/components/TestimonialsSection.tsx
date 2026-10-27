import React, { useState } from 'react';
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA, GOOGLE_MAPS_LINK } from '../data/motrizData.ts';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-zinc-950 relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f0222a] mb-2 block">
            Prova Social & Experiência Real
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            O que dizem sobre nós
          </h2>
          <div className="w-16 h-1 bg-[#f0222a] mx-auto mt-4 mb-6 rounded-full" />
          
          {/* Explicit Highlight Requirement */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-200">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold text-white">
              Mais de 100 avaliações positivas no Google
            </span>
          </div>
        </div>

        {/* Testimonials Desktop Grid + Mobile Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-black/90 rounded-2xl p-7 border border-zinc-800/90 hover:border-zinc-700 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-zinc-700 group-hover:text-[#f0222a] transition-colors" />
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-base font-bold uppercase text-white tracking-wide">
                    {item.author}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-400 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.timeAgo}</span>
                  </div>
                </div>

                <span className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-xs text-white">
                  G
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Testimonials Row & External Link CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl font-display font-bold uppercase text-white tracking-wide">
              Quer ver mais relatos da comunidade em Santa Maria?
            </h4>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Nossa nota média no Google Maps reflete o carinho diário dos nossos alunos e alunas. Confira todas as avaliações públicas completas.
            </p>
          </div>

          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0222a]"
            aria-label="Abrir página de avaliações da Motriz Academia no Google Maps"
          >
            <span>Ver Avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
