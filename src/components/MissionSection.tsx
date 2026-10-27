import React from 'react';
import { Heart, Activity, Users, Award, CheckCircle2 } from 'lucide-react';

export const MissionSection: React.FC = () => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-[#f0222a]" />,
      title: 'Atendimento Proativo',
      desc: 'Nossos instrutores circulam ativamente pelo salão, prontos para corrigir posturas, tirar dúvidas e incentivar sua evolução em cada série.',
    },
    {
      icon: <Activity className="w-6 h-6 text-[#f0222a]" />,
      title: 'Respeito ao seu Ritmo',
      desc: 'Cada corpo possui um histórico, uma biomecânica e um objetivo. Aqui não há fórmulas prontas, e sim progressão segura e sustentável.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#f0222a]" />,
      title: 'Ambiente Acolhedor',
      desc: 'Espaço pensado para que iniciantes a praticantes avançados sintam-se confortáveis, sem julgamentos e com energia positiva.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#f0222a]" />,
      title: 'Foco no Bem-Estar',
      desc: 'Mais do que estética passageira: construímos vitalidade, disposição mental, redução do estresse e qualidade de vida duradoura.',
    },
  ];

  return (
    <section id="missao" className="py-20 md:py-28 bg-black relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f0222a] mb-2 block">
            Propósito & Filosofia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Nossa Missão
          </h2>
          <div className="w-16 h-1 bg-[#f0222a] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
            Na Motriz Academia, nossa missão é ir além do treino. Acreditamos que cuidar de si, respeitar seu ritmo e construir uma vida mais ativa e saudável é uma jornada única para cada indivíduo. Com mais de 100 avaliações positivas, oferecemos um ambiente onde o treinamento de qualidade se une a um atendimento proativo e personalizado, garantindo que cada passo em sua jornada de bem-estar seja valorizado.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 hover-brand-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pilar Institucional Motriz</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
