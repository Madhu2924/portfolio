export function initPortfolio() {

// ===================== CONFIG =====================
// Point this to your deployed backend's /api/contact endpoint.
// Leave as-is to fall back to a mailto: link if no backend is reachable.
const CONTACT_API_URL = "/api/contact";

// ===================== YEAR =====================
document.getElementById('year').textContent = new Date().getFullYear();

// ===================== THEME TOGGLE =====================
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('mm-theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}
themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('mm-theme', next);
});

// ===================== NAV SCROLL + MOBILE MENU =====================
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const menuBtn = document.getElementById('menuBtn');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('show', window.scrollY > 600);
}, { passive: true });

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===================== BACK TO TOP =====================
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===================== TYPING ANIMATION =====================
const roles = ["Data Analyst", "Power BI Enthusiast", "SQL Developer", "Python Programmer", "Excel Expert", "Data Analytics Learner"];
const typedEl = document.getElementById('typedRole');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIdx];
  if (!deleting) {
    charIdx++;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 75);
}
typeLoop();

// ===================== SCROLL REVEAL =====================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ===================== COUNTERS (hero KPI) =====================
const counters = document.querySelectorAll('.kpi-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(el => counterObserver.observe(el));

function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const decimalDigit = el.dataset.decimal;
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    let value = target * eased;
    el.textContent = decimalDigit ? (Math.floor(value) + '.' + decimalDigit) : Math.round(value) + (target >= 100 ? '+' : '');
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = decimalDigit ? (target + '.' + decimalDigit) : target + (target >= 100 ? '+' : '');
  }
  requestAnimationFrame(tick);
}

// ===================== SKILL BARS =====================
const bars = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.w + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
bars.forEach(b => barObserver.observe(b));

// ===================== SKILL RINGS =====================
const rings = document.querySelectorAll('.ring');
const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pct = parseFloat(entry.target.dataset.pct);
      const circle = entry.target.querySelector('.ring-fg');
      const circumference = 326.7;
      const offset = circumference - (pct / 100) * circumference;
      circle.style.strokeDashoffset = offset;
      ringObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
rings.forEach(r => ringObserver.observe(r));

// ===================== CONTACT FORM =====================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('.form-submit');
  const data = Object.fromEntries(new FormData(form).entries());

  submitBtn.disabled = true;
  const originalText = submitBtn.querySelector('.btn-txt').textContent;
  submitBtn.querySelector('.btn-txt').textContent = 'Sending...';
  status.textContent = '';
  status.className = 'form-status';

  try {
    const res = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Request failed');
    status.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
    status.classList.add('ok');
    form.reset();
  } catch (err) {
    // Fallback: open a pre-filled mail client so the message is never lost.
    const subject = encodeURIComponent(`Portfolio contact from ${data.name || 'a visitor'}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:madhusakthi0126@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = "Couldn't reach the server, so I've opened your email app instead.";
    status.classList.add('err');
  } finally {
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-txt').textContent = originalText;
  }
});

// ===================== AMBIENT BACKGROUND CANVAS =====================
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}
function initParticles() {
  const count = Math.min(50, Math.floor(window.innerWidth / 30));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.6,
    vy: Math.random() * 0.15 + 0.05,
    o: Math.random() * 0.35 + 0.08
  }));
}
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDark = root.getAttribute('data-theme') === 'dark';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? `rgba(6,182,212,${p.o})` : `rgba(37,99,235,${p.o})`;
    ctx.fill();
    p.y -= p.vy;
    if (p.y < -10) p.y = canvas.height + 10;
  });
  requestAnimationFrame(drawParticles);
}
window.addEventListener('resize', () => { resize(); initParticles(); });
resize();
initParticles();
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  drawParticles();
} else {
  drawParticles = () => {}; // no-op
}


}
