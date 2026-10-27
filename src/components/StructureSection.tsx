import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  Dumbbell,
  Activity,
  Users,
  Sparkles,
} from 'lucide-react';
import { GALLERY_IMAGES, GalleryImage } from '../data/motrizData.ts';
import { getNextCarouselIndex } from '../utils/motriz.ts';

export const StructureSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => getNextCarouselIndex(prev, GALLERY_IMAGES.length, 'next'));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => getNextCarouselIndex(prev, GALLERY_IMAGES.length, 'prev'));
  }, []);

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Exactly 5 seconds auto-advance as requested ("rodando de 5 a 5 segundos")
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, lightboxOpen, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape' && lightboxOpen) setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, lightboxOpen]);

  const currentImage = GALLERY_IMAGES[currentIndex];
  const isCurrentFailed = failedImages[currentImage?.id];

  const renderFallbackVisual = (image: GalleryImage, isThumbnail = false) => {
    const icons = [
      <Dumbbell className={isThumbnail ? 'w-4 h-4' : 'w-16 h-16'} />,
      <Activity className={isThumbnail ? 'w-4 h-4' : 'w-16 h-16'} />,
      <Users className={isThumbnail ? 'w-4 h-4' : 'w-16 h-16'} />,
      <Sparkles className={isThumbnail ? 'w-4 h-4' : 'w-16 h-16'} />,
    ];
    const icon = icons[(image.id - 1) % icons.length];

    if (isThumbnail) {
      return (
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-[#f0222a]">
          {icon}
        </div>
      );
    }

    return (
      <div className="w-full h-full min-h-[420px] relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#f0222a_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="w-24 h-24 rounded-2xl bg-black/60 border border-[#f0222a]/40 text-[#f0222a] flex items-center justify-center shadow-xl backdrop-blur-md">
          {icon}
        </div>
      </div>
    );
  };

  return (
    <section
      id="estrutura"
      className="py-16 md:py-24 bg-black relative border-b border-zinc-900 scroll-mt-20"
      aria-label="Fotos da estrutura da Motriz Academia"
    >
      <span id="equipe" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Nossa Estrutura
          </h2>
          <div className="w-16 h-1 bg-[#f0222a] mx-auto mt-3 rounded-full" />
        </div>

        {/* Expanded Carousel stage with original format and NO description */}
        <div
          className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl p-4 sm:p-6 lg:p-8 group flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Controls Bar */}
          <div className="w-full flex items-center justify-between gap-4 pb-4 mb-3 border-b border-zinc-900">
            <span className="text-xs sm:text-sm font-mono text-zinc-300 font-medium">
              Foto {currentIndex + 1} de {GALLERY_IMAGES.length} (5 segundos)
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 px-3.5"
                aria-label={isPaused ? 'Continuar rotação' : 'Pausar rotação'}
              >
                {isPaused ? (
                  <>
                    <Play className="w-4 h-4 fill-current text-[#f0222a]" />
                    <span>Continuar</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4 text-[#f0222a]" />
                    <span>Pausar</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setLightboxOpen(true)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                aria-label="Ver imagem em tamanho maior"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Expanded Main Photo Frame in Original Format (larger stage, no cropping) */}
          <div className="relative w-full flex items-center justify-center min-h-[480px] sm:min-h-[620px] md:min-h-[720px] lg:min-h-[800px] max-h-[86vh] bg-black rounded-2xl p-2 sm:p-4 md:p-6 overflow-hidden">
            {!isCurrentFailed ? (
              <img
                key={currentImage.id}
                src={currentImage.url}
                alt={currentImage.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => handleImageError(currentImage.id)}
                className="max-h-[740px] lg:max-h-[800px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.01]"
              />
            ) : (
              renderFallbackVisual(currentImage)
            )}

            {/* Left / Right Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-[#f0222a] text-white border border-white/10 backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0222a]"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-[#f0222a] text-white border border-white/10 backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0222a]"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* 5-Second Linear Progress Bar */}
          <div className="w-full bg-zinc-900 h-1.5 rounded-full mt-4 overflow-hidden">
            <div
              key={currentIndex + (isPaused ? '-paused' : '-active')}
              className={`h-full bg-[#f0222a] ${
                isPaused ? 'w-full opacity-40' : 'animate-[progress_5s_linear]'
              }`}
              style={{
                animationDuration: '5000ms',
                animationTimingFunction: 'linear',
              }}
            />
          </div>

          {/* Clean Thumbnails / Dots strip */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mt-5 overflow-x-auto max-w-full pb-2 no-scrollbar px-1">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative rounded-xl overflow-hidden w-16 h-12 sm:w-20 sm:h-14 border-2 transition-all p-0.5 bg-black ${
                  idx === currentIndex
                    ? 'border-[#f0222a] scale-105 shadow-md shadow-[#f0222a]/40 opacity-100'
                    : 'border-zinc-800 opacity-50 hover:opacity-85'
                }`}
                aria-label={`Ir para a foto ${idx + 1}`}
              >
                {!failedImages[img.id] ? (
                  <img
                    src={img.url}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(img.id)}
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  renderFallbackVisual(img, true)
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tela cheia da foto"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {!isCurrentFailed ? (
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                referrerPolicy="no-referrer"
                className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain border border-zinc-800 shadow-2xl"
              />
            ) : (
              <div className="w-[500px] h-[350px] max-w-full rounded-xl overflow-hidden border border-zinc-800">
                {renderFallbackVisual(currentImage)}
              </div>
            )}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 sm:-right-8 text-zinc-400 hover:text-white p-2 text-sm font-semibold"
              aria-label="Fechar tela cheia"
            >
              Fechar [Esc]
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
