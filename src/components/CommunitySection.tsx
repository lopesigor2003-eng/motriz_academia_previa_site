import React from 'react';
import { Users, Bell, Sparkles, ArrowRight } from 'lucide-react';
import { VIP_COMMUNITY_LINK } from '../data/motrizData.ts';

export const CommunitySection: React.FC = () => {
  return (
    <section id="comunidade" className="py-20 md:py-28 bg-zinc-950 relative border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#f0222a]/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 bg-black/80 rounded-3xl p-8 sm:p-12 md:p-16 border border-zinc-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-[#f0222a]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#f0222a] mb-2 block">
            Junte-se a Nós
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
            Comunidade Motriz
          </h2>

          <div className="w-16 h-1 bg-[#f0222a] mx-auto mt-4 mb-6 rounded-full" />

          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Faça parte da nossa comunidade e mantenha-se conectado!
          </p>

          <p className="text-sm text-zinc-400 max-w-xl mx-auto mt-2 mb-8">
            Receba em primeira mão notícias sobre desafios de treino, horários especiais de feriados, dicas dos nossos nutricionistas e benefícios exclusivos para membros.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={VIP_COMMUNITY_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#f0222a] hover:bg-[#d81b22] text-white text-base font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#f0222a]/25 hover:shadow-[#f0222a]/45 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Entre para o Grupo VIP da Motriz no WhatsApp"
            >
              <span>Entre para o Grupo VIP no WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
            <div className="flex items-center justify-center gap-2">
              <Bell className="w-4 h-4 text-[#f0222a]" />
              <span>Avisos de Aulas Especiais</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#f0222a]" />
              <span>Dicas de Saúde & Treino</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-[#f0222a]" />
              <span>Comunidade Ativa & Positiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
