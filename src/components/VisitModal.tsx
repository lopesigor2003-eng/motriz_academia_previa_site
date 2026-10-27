import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/motrizData.ts';
import { formatPhoneBR, validateContactForm, buildWhatsAppUrl } from '../utils/motriz.ts';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const VisitModal: React.FC<VisitModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Musculação & Treino Personalizado',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [shift, setShift] = useState('Manhã (05:30 - 12:00)');
  const [service, setService] = useState(defaultService);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneBR(e.target.value));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm({ name, phone });
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setConfirmed(true);

    const message = `Olá equipe da Motriz Academia! Gostaria de agendar uma visita experimental gratuita.\n\nNome: ${name}\nWhatsApp: ${phone}\nInteresse: ${service}\nTurno preferido: ${shift}`;
    const url = buildWhatsAppUrl(WHATSAPP_NUMBER, message);

    // Open WhatsApp in a new tab
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-modal-title"
    >
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-xl border border-transparent hover:border-zinc-800 transition-colors"
          aria-label="Fechar formulário de agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
              Visita Pré-Agendada!
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="text-white">{name}</strong>! Redirecionamos para nosso WhatsApp oficial para confirmar o melhor horário com a recepção.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="w-full bg-[#f0222a] hover:bg-[#d81b22] text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#f0222a]/15 text-[#f0222a] flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#f0222a]">
                  Experiência Motriz
                </span>
                <h3 id="visit-modal-title" className="font-display text-2xl font-bold uppercase text-white">
                  Agende sua Visita Gratuita
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
              Conheça nossas instalações, converse com nossos professores e sinta na prática o acolhimento da Motriz Academia em Santa Maria.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="visit-name" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="visit-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="Nome e Sobrenome"
                    className={`w-full pl-10 pr-4 py-2.5 bg-zinc-900 border rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-zinc-800 focus:border-[#f0222a]'
                    }`}
                    required
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="visit-phone" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                  WhatsApp com DDD *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="visit-phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(55) 99999-9999"
                    className={`w-full pl-10 pr-4 py-2.5 bg-zinc-900 border rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-zinc-800 focus:border-[#f0222a]'
                    }`}
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="visit-service" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    Interesse Principal
                  </label>
                  <select
                    id="visit-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#f0222a]"
                  >
                    <option value="Treino Personalizado">Treino Personalizado</option>
                    <option value="Aulas Coletivas">Aulas Coletivas (Spinning/Funcional)</option>
                    <option value="Avaliação Física Completa">Avaliação Física Completa</option>
                    <option value="Nutrição Esportiva">Nutrição Esportiva</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="visit-shift" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    Turno Preferido
                  </label>
                  <select
                    id="visit-shift"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#f0222a]"
                  >
                    <option value="Manhã (05:30 - 12:00)">Manhã (05:30 - 12:00)</option>
                    <option value="Tarde (12:00 - 18:00)">Tarde (12:00 - 18:00)</option>
                    <option value="Noite (18:00 - 23:00)">Noite (18:00 - 23:00)</option>
                    <option value="Sábado (08:00 - 19:00)">Sábado (08:00 - 19:00)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#f0222a] hover:bg-[#d81b22] text-white font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-[#f0222a]/20 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Confirmar e Falar no WhatsApp
                </button>
              </div>

              <p className="text-[11px] text-zinc-400 text-center">
                Sem compromisso. Atendimento humanizado direto com a equipe Motriz.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
