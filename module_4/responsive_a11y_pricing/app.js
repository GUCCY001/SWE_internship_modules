// ---------- Billing toggle (Monthly / Annual) ----------
const billingToggle = document.getElementById('billingToggle');

billingToggle.addEventListener('click', () => {
  const wasAnnual = billingToggle.getAttribute('aria-checked') === 'true';
  const nowAnnual = !wasAnnual;

  billingToggle.setAttribute('aria-checked', String(nowAnnual));

  document.querySelectorAll('.price-monthly').forEach(el => el.classList.toggle('hidden', nowAnnual));
  document.querySelectorAll('.price-annual').forEach(el => el.classList.toggle('hidden', !nowAnnual));
});

// ---------- Modal with focus trap ----------
const modalOverlay = document.getElementById('modalOverlay');
const modalPlanName = document.getElementById('modalPlanName');
const modalEmail = document.getElementById('modalEmail');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');
const ctaButtons = document.querySelectorAll('.cta-btn');

let lastFocusedElement = null;

function getFocusableElements(container) {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
}

function openModal(planName, triggerButton) {
  lastFocusedElement = triggerButton;
  modalPlanName.textContent = planName;
  modalOverlay.classList.remove('hidden');
  modalEmail.value = '';
  modalEmail.focus();
  document.addEventListener('keydown', handleModalKeydown);
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.removeEventListener('keydown', handleModalKeydown);
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function handleModalKeydown(e) {
  if (e.key === 'Escape') {
    closeModal();
    return;
  }

  if (e.key === 'Tab') {
    const modal = modalOverlay.querySelector('.modal');
    const focusable = Array.from(getFocusableElements(modal));
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

ctaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(btn.dataset.plan, btn);
  });
});

modalCancel.addEventListener('click', closeModal);

modalConfirm.addEventListener('click', () => {
  // Replace with real submit logic as needed
  console.log(`Confirmed plan: ${modalPlanName.textContent}, email: ${modalEmail.value}`);
  closeModal();
});

// Close modal when clicking outside the modal box
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
