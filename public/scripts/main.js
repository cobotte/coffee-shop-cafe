// Brew & Co — Main JS
'use strict';

// Reveal on scroll
const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));

// Contact form
const form = document.getElementById('contactForm');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  if (!(btn instanceof HTMLButtonElement)) return;
  const name = (document.getElementById('cf-name') as HTMLInputElement)?.value.trim();
  const email = (document.getElementById('cf-email') as HTMLInputElement)?.value.trim();
  const msg = (document.getElementById('cf-msg') as HTMLTextAreaElement)?.value.trim();

  if (!name || !email || !msg) { showToast('Please fill in all fields.', true); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email.', true); return; }

  btn.textContent = 'Sending…';
  btn.disabled = true;
  await new Promise(r => setTimeout(r, 1000));
  form.reset();
  btn.textContent = 'Send Message →';
  btn.disabled = false;
  showToast('Message sent! We'll be in touch soon. ☕');
});

function showToast(msg: string, error = false) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  if (error) t.style.borderLeftColor = 'var(--red)';
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.classList.add('show'); });
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 4000);
}
