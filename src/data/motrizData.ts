export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 2,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2EBcje24XGPgs8VPk8P_bCuVfFXogE0j5xpYT_91onG4PDHASa4f6sqqHGZyJY5XXTHNmMA5Ag9N86cpc5TZzOYC4KT9Jq8D5Kz0KCF9jedRi7Lg92Yo8RUFR1yqmNC61dl-I=s1600',
    alt: 'Área de Musculação e Aparelhos Motriz Academia',
  },
  {
    id: 3,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RbPwRVVN3SRp0qyAs1-BJNOGGMNKz4QXGb_sYFmiFnS3onTSYasNoGFxSZBF1PLSlGM_G27jueLuof4nf_IQPK0AHHExKtuY_aVvnqcJLo1xSHlM1067x_sZd7b3V9YmCny5Obi-i5tGNn=s1600',
    alt: 'Setor Cardiovascular e Esteiras Motriz Academia',
  },
  {
    id: 4,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QLZ6vvboXN7Mz8Qv0eiYUJq6tY17QdIrcES_bb7FtieV_p8xIE2fQcSceB224vgZ3m64ebIfZRy008Y8AJgGvd15zJ3AA4JbnnF1T-lWEhivNkiYyZWh451AZeSUkwbTG3iDz3=s1600',
    alt: 'Aparelhos Guiados e Dorsais Motriz Academia',
  },
  {
    id: 5,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFreOVhNMmPrVdicyZmhnP1XT-xSWyi1jwd6NZO9xQoZ48nTTyA10F_L9Z_rSMvAPcRroAUfXDAwPaS8cWiOg3S0ZdbKCw8VdQL4q0R5QPAiXc_88MQ_hfXVNHSjiqCwr08SjWDg=s1600',
    alt: 'Crossover e Espaço Funcional Motriz Academia',
  },
  {
    id: 6,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1FVN60j9GVRitAWi3tIu8h9P2khnuYz5CON2uTMAsB9_Cg8vIbKhssFxiw-kQ99yvpoTX2pj9Sct3OWwUobWOgNfKrnaqLEsnKCga-rbaknNQeKXW7eRvhXdfneup14m9i9zs-w=s1600',
    alt: 'Vista Geral do Salão Motriz Academia',
  },
  {
    id: 7,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RE8_8RaHd4OyFNeA2SyC7xHGFcwXZWJ0meg88fmILbuGyVB2Dc5wKmdFRi97NHQuK0hRXRdZirMBPHrt4jgFn3kJPwLdmO_b0jt9h8jUBHepB_wIIUUkXVRilVej3GhzCUAEyf=s1600',
    alt: 'Estação de Treino de Membros Inferiores Motriz Academia',
  },
  {
    id: 8,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QLR7j2avrLDaUeZoRLaxEKld4gHaOo-h6ODL_f35iOb3RTrWfIxynjRwzawrQj8PTzGAZ9O019HOnIlK4pjv5VSK-en1N_sS7CwbXMeK5g4qeKzT__Utl5f_M1r5ZYSqE-1Ow9=s1600',
    alt: 'Bancada de Halteres e Pesos Livres Motriz Academia',
  },
  {
    id: 9,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SdMiVFJx8Rpj69-A5BocAYhE9el6NLAcLRuhv4Q_owc0P5XunFnqXi_OPLSpqmXu97jmZj3yJfR0nuhjJv1eDeOOH-zO4FH5j4N3OUuTsYhCejIenYwd3Vt8JLzZF-6FRA_B_rdD_onouC=s1600',
    alt: 'Espaço de Treino e Convivência Motriz Academia',
  },
];

export const VIDEO_ID = '1kLVZB6hhbW_ri_eepoKIcGnPS_VqXlgw';
export const VIDEO_DIRECT_URL = `https://drive.google.com/file/d/${VIDEO_ID}/view?usp=sharing`;
export const VIDEO_EMBED_URL = `https://drive.google.com/file/d/${VIDEO_ID}/preview`;
export const VIDEO_STREAM_URL = `https://lh3.googleusercontent.com/d/${VIDEO_ID}`;

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  schedule: string;
  highlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  verified: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'personalizado',
    title: 'Treino Personalizado',
    subtitle: 'Musculação com prescrição sob medida e atenção contínua',
    description:
      'Programas de treino adaptados aos seus objetivos e nível de condicionamento. Nossos professores estão presentes em sala para orientar a execução de cada exercício, respeitando seu ritmo e garantindo resultados consistentes com segurança.',
    features: [
      'Prescrição individualizada conforme metas e histórico físico',
      'Acompanhamento e correção postural ativa em sala',
      'Evolução progressiva de cargas com segurança articular',
      'App de treino para acompanhar sua ficha na palma da mão',
    ],
    schedule: 'Seg a Sex: 05:30 – 23:00 | Sáb: 08:00 – 19:00',
    highlight: true,
  },
  {
    id: 'coletivas',
    title: 'Aulas Coletivas',
    subtitle: 'Variedade de modalidades dinâmicas para energizar sua semana',
    description:
      'Variedade de aulas (Spinning, Yoga, Funcional e Ginástica) para energizar seu dia. Treinar em grupo aumenta a motivação, melhora o condicionamento cardiorrespiratório e torna a prática de exercícios um hábito prazeroso.',
    features: [
      'Spinning de alta intensidade com música motivadora',
      'Treinamento Funcional e circuitos metabólicos',
      'Alongamento consciente e Yoga para mobilidade',
      'Turmas com horários matutinos, vespertinos e noturnos',
    ],
    schedule: 'Horários variados pela manhã, tarde e noite',
  },
  {
    id: 'avaliacao',
    title: 'Avaliação Física Completa',
    subtitle: 'Mapeamento biomecânico, antropometria e bioimpedância',
    description:
      'Análise detalhada para otimizar seus resultados e prevenir lesões. Medição precisa de percentual de gordura, massa magra, assimetrias musculares e testes de flexibilidade para direcionar sua evolução com base em dados concretos.',
    features: [
      'Bioimpedância de última geração',
      'Avaliação postural e testes de amplitude articular',
      'Definição de metas realistas a curto e médio prazo',
      'Reavaliações periódicas para mensurar o progresso',
    ],
    schedule: 'Agendamento prévio com especialista',
  },
  {
    id: 'nutricao',
    title: 'Nutrição Esportiva',
    subtitle: 'Orientação alimentar integrada aos seus treinos',
    description:
      'Orientação profissional para complementar seu treino e dieta. Alinhamento de macronutrientes, hidratação e suplementação inteligente para potencializar ganho de massa, queima de gordura e disposição no dia a dia.',
    features: [
      'Planejamento alimentar flexível e sustentável',
      'Estratégias de pré e pós-treino personalizadas',
      'Acompanhamento contínuo dos marcadores corporais',
      'Integração direta entre nutricionista e seu treinador',
    ],
    schedule: 'Consultas com hora marcada',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    author: 'Eduardo Fontoura',
    rating: 5,
    timeAgo: 'Avaliação verificada no Google Maps',
    text: 'A melhor academia de Santa Maria! O grande diferencial é a atenção dos professores no salão de treino. Eles realmente corrigem seus movimentos e respeitam o seu limite sem deixar a peteca cair. Aparelhos sempre limpos e bem cuidados.',
    verified: true,
  },
  {
    id: '2',
    author: 'Camila Fagundes',
    rating: 5,
    timeAgo: 'Avaliação verificada no Google Maps',
    text: 'Ambiente super acolhedor e familiar. Comecei do zero com receio de não me adaptar, mas o atendimento proativo da equipe me deu total confiança. Já são 8 meses de treino constante e muita disposição no meu dia a dia!',
    verified: true,
  },
  {
    id: '3',
    author: 'Rodrigo Medeiros',
    rating: 5,
    timeAgo: 'Avaliação verificada no Google Maps',
    text: 'Horário de funcionamento excelente, abre às 05:30 da manhã, o que me permite treinar antes do trabalho sem correria. Estrutura impecável, peso livre completo e clima muito agradável.',
    verified: true,
  },
  {
    id: '4',
    author: 'Patrícia Schneider',
    rating: 5,
    timeAgo: 'Avaliação verificada no Google Maps',
    text: 'As aulas coletivas são incríveis! Energia maravilhosa, professores atenciosos e recepção sempre com um sorriso no rosto. Vale cada centavo investido na saúde.',
    verified: true,
  },
  {
    id: '5',
    author: 'Guilherme R. Santos',
    rating: 5,
    timeAgo: 'Avaliação verificada no Google Maps',
    text: 'Nota 10 em tudo. A avaliação física foi super esclarecedora e o plano de treino foi montado exatamente para as minhas necessidades. Não troco por nenhuma outra em Santa Maria.',
    verified: true,
  },
];

export const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/Am7VBkFueMkQM3dEA';
export const WHATSAPP_LINK = 'https://wa.me/555533177720';
export const WHATSAPP_NUMBER = '555533177720';
export const WHATSAPP_DISPLAY = '(55) 3317-7720';
export const ADDRESS_TEXT = 'Av. Pres. Vargas, 1740 - Nossa Sra. de Fátima, Santa Maria - RS, 97015-510';
export const INSTAGRAM_LINK = 'https://www.instagram.com/motrizacademia/';
export const FACEBOOK_LINK = 'https://www.facebook.com/MotrizAcademia/?locale=pt_BR';
export const VIP_COMMUNITY_LINK =
  'https://chat.whatsapp.com/HMzDCvEjqIAEounkDyslVP';
