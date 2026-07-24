:root {
  --color-bg: #f7f7fb;
  --color-text: #1a1a2e;
  --color-primary: #4b3cff;
  --color-primary-dark: #372ccc;
  --color-card-bg: #ffffff;
  --color-border: #e2e2ee;
  --color-focus: #ffb703;
  --radius: 14px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
}

/* Visible focus outline everywhere (a11y requirement) */
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

/* Toggle switch */
.toggle-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.toggle-label small { color: #666; }

.switch {
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: 999px;
  border: none;
  background: #ccc;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease;
}

.switch[aria-checked="true"] {
  background: var(--color-primary);
}

.switch-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s ease;
}

.switch[aria-checked="true"] .switch-thumb {
  transform: translateX(24px);
}

/* Responsive grid: mobile -> 1 col, tablet -> 2, desktop -> 3 */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  position: relative;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.card-featured {
  border: 2px solid var(--color-primary);
  transform: scale(1.02);
}

.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.card-title {
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
}

.card-price {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.25rem;
}

.price-unit {
  font-size: 1rem;
  font-weight: 400;
  color: #666;
}

.hidden { display: none; }

.card-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  flex-grow: 1;
}

.card-features li {
  padding: 0.4rem 0;
  border-top: 1px solid var(--color-border);
}

.card-features li:first-child { border-top: none; }

.cta-btn {
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.cta-btn:hover { background: var(--color-primary-dark); }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 100;
}

.modal-overlay.hidden { display: none; }

.modal {
  background: #fff;
  border-radius: var(--radius);
  padding: 2rem;
  max-width: 420px;
  width: 100%;
}

.modal-label {
  display: block;
  margin: 1rem 0 0.4rem;
  font-weight: 600;
}

.modal-input {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.btn-primary, .btn-secondary {
  padding: 0.6rem 1.1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover { background: var(--color-primary-dark); }

.btn-secondary {
  background: #eee;
  color: var(--color-text);
}
