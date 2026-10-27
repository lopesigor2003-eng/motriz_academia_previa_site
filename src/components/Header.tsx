import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Nossa Missão', href: '#missao' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Nossa Estrutura', href: '#estrutura' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Contract: Brand — 4-5 single-line links — 1 primary CTA */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0222a] rounded group"
            aria-label="Motriz Academia - Página Inicial"
          >
            <div className="w-10 h-10 rounded-lg bg-[#f0222a] flex items-center justify-center font-bold text-white shadow-md shadow-[#f0222a]/30 group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 32 32"
                className="w-6 h-6 fill-white"
                aria-hidden="true"
              >
                <path d="M6 26V8l6 9 4-5 4 5 6-9v18h-4V15.5l-4 5.5-2-2.5-2 2.5-4-5.5V26H6z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight uppercase leading-none text-white">
                Motriz <span className="text-[#f0222a]">Academia</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-zinc-400 font-medium hidden sm:block">
                Treine com Qualidade · Santa Maria RS
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line clean text navigation */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-150 py-1 relative group whitespace-nowrap shrink-0"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0222a] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="bg-[#f0222a] hover:bg-[#d81b22] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 shadow-md shadow-[#f0222a]/20 hover:shadow-[#f0222a]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
              aria-label="Agende sua visita na Motriz Academia"
            >
              Agende sua Visita
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0222a] rounded-md"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 transition-all"
          role="dialog"
          aria-label="Menu móvel"
        >
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-zinc-200 hover:text-[#f0222a] hover:bg-zinc-900/60 px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center bg-[#f0222a] hover:bg-[#d81b22] text-white font-medium py-2.5 px-4 rounded-lg shadow-sm"
              >
                Agende sua Visita Gratuita
              </button>
              <a
                href="https://wa.me/555533177720"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium py-2 px-4 rounded-lg text-sm"
              >
                Fale Direto no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
