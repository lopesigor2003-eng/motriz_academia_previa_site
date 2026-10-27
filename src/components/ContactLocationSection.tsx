import React, { useState } from 'react';
import { MapPin, Clock, MessageSquare, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  ADDRESS_TEXT,
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from '../data/motrizData.ts';
import {
  validateContactForm,
  formatPhoneBR,
  buildWhatsAppUrl,
  checkGymOperatingStatus,
  ContactFormData,
} from '../utils/motriz.ts';

export const ContactLocationSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status] = useState(() => checkGymOperatingStatus(new Date()));

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      phone: formatPhoneBR(e.target.value),
    }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Optional direct trigger to WhatsApp with prefilled message
    const message = `Olá equipe Motriz! Meu nome é ${formData.name}. ${formData.message ? `Dúvida: ${formData.message}` : 'Gostaria de saber mais sobre os planos e horários.'}`;
    const url = buildWhatsAppUrl(WHATSAPP_NUMBER, message);
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-black relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f0222a] mb-2 block">
            Canais de Atendimento & Visita
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Onde Estamos e Como Falar Conosco
          </h2>
          <div className="w-16 h-1 bg-[#f0222a] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-zinc-300">
            Venha nos conhecer pessoalmente ou converse direto com nossa recepção pelo WhatsApp. Estamos prontos para receber você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Info Cards & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-zinc-950 p-6 sm:p-7 rounded-2xl border border-zinc-800/90">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#f0222a]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                    Endereço
                  </h3>
                  <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    {ADDRESS_TEXT}
                  </p>
                  <span className="inline-block text-xs font-semibold text-[#f0222a] mt-2">
                    Bairro Nossa Sra. de Fátima · Santa Maria - RS
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-zinc-950 p-6 sm:p-7 rounded-2xl border border-zinc-800/90">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#f0222a]" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                    Horário de Funcionamento
                  </h3>
                </div>

                {/* Dynamic Status Badge */}
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                    status.isOpen
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-700'
                  }`}
                >
                  {status.badgeLabel}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                  <span className="text-zinc-400 font-medium">Segunda a Sexta:</span>
                  <span className="text-white font-semibold tabular-nums">05:30 – 23:00</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                  <span className="text-zinc-400 font-medium">Sábado:</span>
                  <span className="text-white font-semibold tabular-nums">08:00 – 19:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 font-medium">Domingo:</span>
                  <span className="text-white font-semibold tabular-nums">
                    09:00 – 12:00, 15:00 – 18:00
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 p-6 rounded-2xl border border-[#f0222a]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#f0222a]/15 text-[#f0222a] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                    Atendimento Rápido
                  </span>
                  <span className="text-base font-bold text-white tabular-nums">
                    {WHATSAPP_DISPLAY}
                  </span>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f0222a] hover:bg-[#d81b22] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Responsive Google Maps Iframe */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] shadow-xl">
              <iframe
                title="Localização da Motriz Academia no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.7562413247493!2d-53.818854!3d-29.689623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb365920ea55%3A0xe54e3f420cf6e355!2sAv.%20Pres.%20Vargas%2C%201740%20-%20Nossa%20Sra.%20de%20F%C3%A1tima%2C%20Santa%20Maria%20-%20RS%2C%2097015-510!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-zinc-300 pointer-events-none">
                Estacionamento e fácil acesso
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800">
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Tire dúvidas sobre mensalidades, matrículas ou avaliações. Responderemos com agilidade.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-zinc-900 border border-emerald-500/40 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white uppercase">Mensagem Encaminhada!</h4>
                  <p className="text-sm text-zinc-300 mt-1">
                    Abrimos a conversa no WhatsApp para atendimento direto. Se a janela não abriu, você também pode clicar no botão de WhatsApp abaixo.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#f0222a] hover:underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Ex: Juliana Silva"
                        className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-zinc-800 focus:border-[#f0222a]'
                        }`}
                        required
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(55) 99999-9999"
                        className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-zinc-800 focus:border-[#f0222a]'
                        }`}
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                      Como podemos ajudar? (Opcional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ex: Gostaria de saber os horários das aulas coletivas ou agendar uma visita..."
                      className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#f0222a] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f0222a] hover:bg-[#d81b22] text-white text-sm font-bold uppercase tracking-wider px-7 py-3 rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
