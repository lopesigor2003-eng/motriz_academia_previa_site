import React, { useRef, useEffect, useState } from 'react';
import { Calendar, MessageSquare, Star, ShieldCheck, MapPin, VolumeX, Volume2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/motrizData.ts';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      videoRef.current.volume = nextMuted ? 0 : 0.8;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#f0222a]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-[#f0222a]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Headline + Copy on Left / Borderless Loop Video on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 6 cols */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 mb-4 bg-zinc-900/80 border border-zinc-800 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="text-zinc-200">Mais de 100 avaliações positivas no Google</span>
            </div>

            {/* Strict H1 Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.06]">
              Motriz Academia: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#f0222a]">
                Treine com Qualidade,
              </span>{' '}
              <br />
              Viva com Saúde
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Ajudamos pessoas a treinarem com qualidade e com um atendimento proativo. O foco vai além do treino. É sobre cuidar de si, respeitar seu ritmo e construir uma vida mais ativa e saudável. 💪🏻 Na Motriz, cada pessoa tem sua própria jornada, e cada passo conta.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-[#f0222a] hover:bg-[#d81b22] text-white text-base font-bold uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg shadow-[#f0222a]/25 hover:shadow-[#f0222a]/45 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Agende sua visita experimental gratuita na Motriz"
              >
                <Calendar className="w-5 h-5" />
                <span>Agende sua Visita</span>
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-100 text-base font-semibold px-6 py-4 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0222a]"
                aria-label="Fale conosco pelo WhatsApp da Motriz Academia"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Fale no WhatsApp</span>
              </a>
            </div>

            {/* Value pillars */}
            <div className="mt-10 pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f0222a] shrink-0" />
                <span>Atendimento Proativo</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f0222a] shrink-0" />
                <span>Av. Presidente Vargas</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Abre às 05:30 da manhã</span>
              </div>
            </div>
          </div>

          {/* Right Column: Video in original format (9:16), borderless, looping infinitely, volume 0 */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl group">
              <video
                ref={videoRef}
                src="/videos/motriz-apresentacao.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain bg-black border-0 outline-none"
              />
              {/* Optional Volume Control */}
              <button
                onClick={toggleSound}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-[#f0222a] text-white border border-white/10 backdrop-blur-md transition-colors"
                aria-label={isMuted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
