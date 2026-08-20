/* ==========================================================================
   Cristi Therapy - Main JavaScript Engine
   Direct Booking Form, Lead Magnet Engine, and V1 / V2 Theme Switcher
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. THEME SWITCHER ENGINE (V1 vs V2)
  // ==========================================
  const themeStylesheet = document.getElementById('themeStylesheet');
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeToggleLabel = document.getElementById('themeToggleLabel');
  const brandBadges = document.querySelectorAll('.brand-badge, .brand-badge-v2');

  let currentTheme = localStorage.getItem('cristi_theme_version') || 'v2';

  function applyTheme(theme) {
    if (theme === 'v1') {
      if (themeStylesheet) themeStylesheet.href = 'css/styles.css';
      if (themeToggleLabel) themeToggleLabel.textContent = 'Stil: V1';
      brandBadges.forEach(badge => {
        badge.classList.remove('brand-badge-v2');
        badge.classList.add('brand-badge');
      });
    } else {
      if (themeStylesheet) themeStylesheet.href = 'css/styles-v2.css';
      if (themeToggleLabel) themeToggleLabel.textContent = 'Stil: V2';
      brandBadges.forEach(badge => {
        badge.classList.remove('brand-badge');
        badge.classList.add('brand-badge-v2');
      });
    }
    localStorage.setItem('cristi_theme_version', theme);
    currentTheme = theme;
  }

  // Initial theme application
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'v2' ? 'v1' : 'v2';
      applyTheme(nextTheme);
    });
  }

  // ==========================================
  // 2. MODAL CONTROLLERS (Direct Booking & Lead Magnet)
  // ==========================================
  const bookingModal = document.getElementById('bookingModal');
  const leadModal = document.getElementById('leadModal');

  // Open Direct Booking Modal
  document.querySelectorAll('.js-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (bookingModal) bookingModal.classList.add('active');
    });
  });

  // Open Lead Magnet Modal
  document.querySelectorAll('.js-open-lead-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (leadModal) leadModal.classList.add('active');
    });
  });

  // Close Modals
  document.querySelectorAll('.modal-close, .modal-backdrop').forEach(element => {
    element.addEventListener('click', (e) => {
      if (e.target === element || element.classList.contains('modal-close')) {
        if (bookingModal) bookingModal.classList.remove('active');
        if (leadModal) leadModal.classList.remove('active');
      }
    });
  });

  // Esc key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (bookingModal) bookingModal.classList.remove('active');
      if (leadModal) leadModal.classList.remove('active');
    }
  });

  // ==========================================
  // 3. DIRECT BOOKING FORM SUBMISSION
  // ==========================================
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Pacient';
      const therapySelect = document.getElementById('clientTherapy');
      const therapy = therapySelect ? therapySelect.value : 'Terapie Integrată VITA 5';

      alert(`Vă mulțumim, ${name}!\n\nSolicitarea dumneavoastră pentru "${therapy}" a fost trimisă cu succes. Vă vom contacta în cel mai scurt timp pentru confirmarea programării.`);
      
      bookingForm.reset();
      if (bookingModal) bookingModal.classList.remove('active');
    });
  }

  // Lead Magnet Form Submission
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName')?.value || '';
      alert(`Mulțumim, ${name}! Ghidul gratuit PDF "5 Exerciții Posturale Spate" a fost trimis.`);
      leadForm.reset();
      if (leadModal) leadModal.classList.remove('active');
    });
  }

  // Mobile Navigation Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = '#FFFFFF';
      navMenu.style.padding = '1.5rem';
      navMenu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
    });
  }
});
