import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/motrizData.ts';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido via WhatsApp">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco pelo WhatsApp da Motriz Academia"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-zinc-900/90 hover:bg-black text-white p-3.5 sm:px-4 sm:py-3 rounded-full border border-zinc-700 hover:border-[#f0222a] shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0222a]"
      >
        <div className="w-10 h-10 rounded-full bg-emerald-500 group-hover:bg-emerald-400 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-110">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 leading-none">
            Online Agora
          </span>
          <span className="text-xs font-bold text-white tracking-tight mt-0.5">
            Dúvidas? Fale Conosco
          </span>
        </div>
      </a>
    </aside>
  );
};
