import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatPhoneBR,
  validateContactForm,
  buildWhatsAppUrl,
  checkGymOperatingStatus,
  getNextCarouselIndex,
} from './motriz.ts';

test('formatPhoneBR formats 10 and 11 digit numbers correctly', () => {
  assert.equal(formatPhoneBR('5533177720'), '(55) 3317-7720');
  assert.equal(formatPhoneBR('55999887766'), '(55) 99988-7766');
  assert.equal(formatPhoneBR('55'), '(55');
  assert.equal(formatPhoneBR(''), '');
});

test('validateContactForm rejects empty or invalid forms and accepts valid ones', () => {
  const invalid = validateContactForm({
    name: 'A',
    phone: '123',
    email: 'invalid-email',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.email);

  const valid = validateContactForm({
    name: 'Mariana Silva',
    phone: '55991234567',
    email: 'mariana@example.com',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('buildWhatsAppUrl properly formats and encodes params', () => {
  const url = buildWhatsAppUrl('555533177720', 'Olá! Gostaria de agendar uma visita.');
  assert.ok(url.startsWith('https://wa.me/555533177720?text='));
  assert.ok(url.includes('Ol%C3%A1!'));
});

test('getNextCarouselIndex loops correctly forward and backward', () => {
  assert.equal(getNextCarouselIndex(0, 8, 'next'), 1);
  assert.equal(getNextCarouselIndex(7, 8, 'next'), 0);
  assert.equal(getNextCarouselIndex(0, 8, 'prev'), 7);
  assert.equal(getNextCarouselIndex(5, 8, 'prev'), 4);
});

test('checkGymOperatingStatus identifies open vs closed based on schedule', () => {
  // Tuesday at 10:00 AM
  const weekdayOpen = new Date(2026, 9, 27, 10, 0); // Tuesday 10:00
  const status1 = checkGymOperatingStatus(weekdayOpen);
  assert.equal(status1.isOpen, true);
  assert.equal(status1.badgeLabel, 'Aberto agora');

  // Tuesday at 02:00 AM
  const weekdayNight = new Date(2026, 9, 27, 2, 0);
  const status2 = checkGymOperatingStatus(weekdayNight);
  assert.equal(status2.isOpen, false);
  assert.equal(status2.badgeLabel, 'Fechado agora');
});
