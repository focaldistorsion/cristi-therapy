/**
 * VITA 5 - Cristi Therapy (Cristian Angel Oglan) JavaScript Logic
 * Handles interactive tabs, booking modals, WhatsApp integration, and mobile navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initVitaTabs();
  initModal();
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
          // Scroll content gently into view on small screens
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
 * Appointment Modal Manager
 */
function initModal() {
  const modalBackdrop = document.getElementById('bookingModal');
  const openButtons = document.querySelectorAll('.js-open-modal');
  const closeButton = document.querySelector('.modal-close');
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

  // Handle ESC Key to Close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Form Submission -> Redirect to WhatsApp pre-filled message
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Client';
      const phone = document.getElementById('clientPhone')?.value || '';
      const therapy = document.getElementById('clientTherapy')?.value || 'Evaluare VITA 5';
      const message = document.getElementById('clientMessage')?.value || '';

      const text = `Bună ziua! Numele meu este ${name} (Tel: ${phone}). Doresc o programare la Cristi Therapy pentru: ${therapy}. ${message ? 'Simptome/Zone: ' + message : ''}`;
      
      // Send via WhatsApp
      const waNumber = '40700000000'; // Target phone number
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      
      closeModal();
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

  // Close menu when link clicked
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
