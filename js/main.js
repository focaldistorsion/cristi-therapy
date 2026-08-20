/**
 * Cristi Therapy - Official StoryBrand.com Inspired JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingModal();
  initLeadModal();
  initMobileNav();
  initWhatsAppButtons();
});

/**
 * Direct Appointment Booking Modal
 */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const openBtns = document.querySelectorAll('.js-open-modal');
  const closeBtn = modal?.querySelector('.modal-close');
  const bookingForm = document.getElementById('bookingForm');

  if (!modal) return;

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Client';
      const phone = document.getElementById('clientPhone')?.value || '';
      const therapy = document.getElementById('clientTherapy')?.value || 'Evaluare VITA 5';

      const text = `Bună ziua! Numele meu este ${name} (Tel: ${phone}). Doresc o programare la Cristi Therapy pentru: ${therapy}.`;
      const waUrl = `https://wa.me/40700000000?text=${encodeURIComponent(text)}`;

      closeModal();
      window.open(waUrl, '_blank');
    });
  }
}

/**
 * Transitional Lead Magnet PDF Modal
 */
function initLeadModal() {
  const modal = document.getElementById('leadModal');
  const openBtns = document.querySelectorAll('.js-open-lead-modal');
  const closeBtn = modal?.querySelector('.modal-lead-close');
  const leadForm = document.getElementById('leadForm');

  if (!modal) return;

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName')?.value || 'Prieten';
      const contact = document.getElementById('leadContact')?.value || '';

      const text = `Bună ziua! Numele meu este ${name} (${contact}). Doresc să primesc gratuit Ghidul PDF "5 Exerciții Posturale Spate".`;
      const waUrl = `https://wa.me/40700000000?text=${encodeURIComponent(text)}`;

      closeModal();
      window.open(waUrl, '_blank');
    });
  }
}

/**
 * Mobile Navigation Menu
 */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      menu.style.position = 'absolute';
      menu.style.top = '100%';
      menu.style.left = '0';
      menu.style.width = '100%';
      menu.style.background = '#FFFFFF';
      menu.style.padding = '1.5rem';
      menu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menu.style.display = 'none';
      }
    });
  });
}

/**
 * Direct WhatsApp Buttons
 */
function initWhatsAppButtons() {
  const waBtns = document.querySelectorAll('.js-whatsapp-direct');

  waBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultText = `Bună ziua, domnule Cristian! Doresc să programez o consultație la Cristi Therapy.`;
      const waUrl = `https://wa.me/40700000000?text=${encodeURIComponent(defaultText)}`;
      window.open(waUrl, '_blank');
    });
  });
}
