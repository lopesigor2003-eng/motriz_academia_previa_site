/**
 * Utility functions for Motriz Academia
 */

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  preferredTime?: string;
  message?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function formatPhoneBR(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) {
    return digits.length ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Por favor, informe seu nome completo.';
  }

  const digits = (data.phone || '').replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) {
    errors.phone = 'Informe um telefone ou WhatsApp válido com DDD (ex: 55 99999-9999).';
  }

  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'E-mail em formato inválido.';
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

export interface GymScheduleStatus {
  isOpen: boolean;
  badgeLabel: string;
  detail: string;
}

/**
 * Checks if Motriz Academia is currently open.
 * Schedule:
 * Mon-Fri (1-5): 05:30 - 23:00
 * Sat (6): 08:00 - 19:00
 * Sun (0): 09:00 - 12:00 and 15:00 - 18:00
 */
export function checkGymOperatingStatus(date: Date = new Date()): GymScheduleStatus {
  const day = date.getDay(); // 0 is Sunday, 6 is Saturday
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Seg a Sex: 05:30 (330 min) a 23:00 (1380 min)
  if (day >= 1 && day <= 5) {
    const openMin = 5 * 60 + 30; // 330
    const closeMin = 23 * 60; // 1380
    if (currentMinutes >= openMin && currentMinutes < closeMin) {
      return {
        isOpen: true,
        badgeLabel: 'Aberto agora',
        detail: 'Fecha às 23:00',
      };
    }
    return {
      isOpen: false,
      badgeLabel: 'Fechado agora',
      detail: currentMinutes < openMin ? 'Abre hoje às 05:30' : 'Abre amanhã às 05:30',
    };
  }

  // Sáb: 08:00 (480 min) a 19:00 (1140 min)
  if (day === 6) {
    const openMin = 8 * 60;
    const closeMin = 19 * 60;
    if (currentMinutes >= openMin && currentMinutes < closeMin) {
      return {
        isOpen: true,
        badgeLabel: 'Aberto agora',
        detail: 'Fecha às 19:00',
      };
    }
    return {
      isOpen: false,
      badgeLabel: 'Fechado agora',
      detail: currentMinutes < openMin ? 'Abre hoje às 08:00' : 'Abre domingo às 09:00',
    };
  }

  // Dom: 09:00-12:00 (540-720) e 15:00-18:00 (900-1080)
  const morningOpen = 9 * 60;
  const morningClose = 12 * 60;
  const afternoonOpen = 15 * 60;
  const afternoonClose = 18 * 60;

  if (
    (currentMinutes >= morningOpen && currentMinutes < morningClose) ||
    (currentMinutes >= afternoonOpen && currentMinutes < afternoonClose)
  ) {
    const closesAt = currentMinutes < morningClose ? '12:00' : '18:00';
    return {
      isOpen: true,
      badgeLabel: 'Aberto agora',
      detail: `Fecha às ${closesAt}`,
    };
  }

  let nextOpening = 'Abre segunda às 05:30';
  if (currentMinutes < morningOpen) {
    nextOpening = 'Abre hoje às 09:00';
  } else if (currentMinutes >= morningClose && currentMinutes < afternoonOpen) {
    nextOpening = 'Reabre hoje às 15:00';
  }

  return {
    isOpen: false,
    badgeLabel: 'Fechado agora',
    detail: nextOpening,
  };
}

export function getNextCarouselIndex(
  currentIndex: number,
  totalItems: number,
  direction: 'next' | 'prev'
): number {
  if (totalItems <= 0) return 0;
  if (direction === 'next') {
    return (currentIndex + 1) % totalItems;
  }
  return (currentIndex - 1 + totalItems) % totalItems;
}
