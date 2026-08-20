/**
 * VITA 5 - Cristi Therapy (Cristian Angel Oglan) JavaScript Logic
 * StoryBrand SB7 Framework Enhanced: Handles Direct Booking & Lead Magnet Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initVitaTabs();
  initModal();
  initLeadModal();
  initMobileNav();
  initWhatsAppBooking();
});

/**
 * Interactive 5-Layer Therapy Tab Switcher
 */
function initVitaTabs() {
  const tabs = document.querySelectorAll('.vita-tab');
  const panels = document.querySelectorAll('.vita-panel');

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetLayer = tab.getAttribute('data-layer');

      // Update Tab Active State
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Update Panel Display
      panels.forEach((panel) => {
        if (panel.id === `panel-${targetLayer}`) {
          panel.classList.add('active');
          if (window.innerWidth <= 992) {
            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Direct Appointment Booking Modal Manager
 */
function initModal() {
  const modalBackdrop = document.getElementById('bookingModal');
  const openButtons = document.querySelectorAll('.js-open-modal');
  const closeButton = modalBackdrop?.querySelector('.modal-close');
  const bookingForm = document.getElementById('bookingForm');

  if (!modalBackdrop) return;

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeButton) closeButton.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Client';
      const phone = document.getElementById('clientPhone')?.value || '';
      const therapy = document.getElementById('clientTherapy')?.value || 'Evaluare VITA 5';
      const message = document.getElementById('clientMessage')?.value || '';

      const text = `Bună ziua! Numele meu este ${name} (Tel: ${phone}). Doresc o programare la Cristi Therapy pentru: ${therapy}. ${message ? 'Simptome: ' + message : ''}`;
      
      const waNumber = '40700000000';
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      
      closeModal();
      window.open(waUrl, '_blank');
    });
  }
}

/**
 * StoryBrand Transitional CTA (Lead Magnet) Modal Manager
 */
function initLeadModal() {
  const leadModal = document.getElementById('leadModal');
  const openLeadButtons = document.querySelectorAll('.js-open-lead-modal');
  const closeLeadButton = leadModal?.querySelector('.modal-lead-close');
  const leadForm = document.getElementById('leadForm');

  if (!leadModal) return;

  openLeadButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      leadModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLeadModal = () => {
    leadModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeLeadButton) closeLeadButton.addEventListener('click', closeLeadModal);

  leadModal.addEventListener('click', (e) => {
    if (e.target === leadModal) closeLeadModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && leadModal.classList.contains('active')) {
      closeLeadModal();
    }
  });

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName')?.value || 'Prieten';
      const email = document.getElementById('leadEmail')?.value || '';

      const text = `Bună ziua! Numele meu este ${name} (${email}). Doresc să primesc gratuit Ghidul PDF: "5 Exerciții Posturale Pentru Eliberarea Spatelui".`;
      
      const waNumber = '40700000000';
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      
      closeLeadModal();
      window.open(waUrl, '_blank');
    });
  }
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

/**
 * Direct WhatsApp Booking Triggers
 */
function initWhatsAppBooking() {
  const waButtons = document.querySelectorAll('.js-whatsapp-direct');

  waButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedTherapy = btn.getAttribute('data-therapy') || 'Evaluare VITA 5';
      const defaultText = `Bună ziua, domnule Cristian! Doresc să programez o consultație/ședință de ${selectedTherapy}.`;
      
      const waNumber = '40700000000';
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(defaultText)}`;
      window.open(waUrl, '_blank');
    });
  });
}
