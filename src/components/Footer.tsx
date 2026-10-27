import React from 'react';
import { Instagram, Facebook, MessageSquare, MapPin, ArrowUp } from 'lucide-react';
import {
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  WHATSAPP_LINK,
} from '../data/motrizData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand & Address (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-white mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#f0222a] flex items-center justify-center font-bold text-white shadow-md shadow-[#f0222a]/20">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M6 26V8l6 9 4-5 4 5 6-9v18h-4V15.5l-4 5.5-2-2.5-2 2.5-4-5.5V26H6z" />
                  </svg>
                </div>
                <span className="font-display text-2xl font-bold tracking-tight uppercase text-white">
                  Motriz <span className="text-[#f0222a]">Academia</span>
                </span>
              </div>

              <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mb-4">
                Treine com qualidade, viva com saúde. Atendimento proativo, ambiente acolhedor e respeito ao seu ritmo em Santa Maria, RS.
              </p>

              <div className="flex items-start gap-2 text-xs text-zinc-300">
                <MapPin className="w-4 h-4 text-[#f0222a] shrink-0 mt-0.5" />
                <span>Av. Pres. Vargas, 1740 - Santa Maria, RS</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-[#f0222a] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-zinc-800"
                aria-label="Perfil do Instagram da Motriz Academia"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-[#f0222a] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-zinc-800"
                aria-label="Página do Facebook da Motriz Academia"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-[#f0222a] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-zinc-800"
                aria-label="Conversar no WhatsApp da Motriz Academia"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início (Home)
                </a>
              </li>
              <li>
                <a href="#missao" className="hover:text-white transition-colors">
                  Nossa Missão
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-white transition-colors">
                  Nossa Estrutura (Fotos)
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato & Localização
                </a>
              </li>
              <li>
                <a href="#comunidade" className="hover:text-white transition-colors">
                  Comunidade VIP
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours Summary (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              Horários de Treino
            </h4>
            <div className="space-y-2 text-xs text-zinc-300">
              <p className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span>Segunda a Sexta:</span>
                <span className="text-white font-semibold tabular-nums">05:30 – 23:00</span>
              </p>
              <p className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span>Sábado:</span>
                <span className="text-white font-semibold tabular-nums">08:00 – 19:00</span>
              </p>
              <p className="flex justify-between pb-1.5">
                <span>Domingo:</span>
                <span className="text-white font-semibold tabular-nums">09:00–12:00, 15:00–18:00</span>
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                aria-label="Voltar ao topo da página"
              >
                <ArrowUp className="w-4 h-4 text-[#f0222a]" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© 2026 Motriz Academia. Todos os direitos reservados.</p>
          <p>Santa Maria · Rio Grande do Sul · Brasil</p>
        </div>
      </div>
    </footer>
  );
};
