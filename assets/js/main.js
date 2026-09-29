/* Portafolio · Vangelis Ramos Ríos
   Modo papel/plano, menú móvil, sección activa, revelado al hacer scroll
   y progreso de la ruta. Sin dependencias. */

(function () {
  'use strict';

  var root = document.documentElement;
  var nav = document.getElementById('nav');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Modo papel / plano ---------- */

  var modeButtons = document.querySelectorAll('[data-mode]');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyMode(mode) {
    if (mode === 'plano') root.setAttribute('data-theme', 'plano');
    else root.removeAttribute('data-theme');
    modeButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === mode));
    });
    if (themeMeta) themeMeta.setAttribute('content', mode === 'plano' ? '#0d2b4e' : '#f3f0e8');
  }

  applyMode(root.getAttribute('data-theme') === 'plano' ? 'plano' : 'papel');

  modeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var mode = button.getAttribute('data-mode');
      applyMode(mode);
      try {
        localStorage.setItem('modo', mode);
      } catch (e) {}
    });
  });

  /* ---------- Menú móvil ---------- */

  var menuToggle = document.querySelector('[data-menu-toggle]');
  var mobileMenu = document.getElementById('mobile-menu');

  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    mobileMenu.hidden = !open;
  }

  menuToggle.addEventListener('click', function () {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !mobileMenu.hidden) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1000 && !mobileMenu.hidden) setMenu(false);
  });

  /* ---------- Revelado al hacer scroll ---------- */

  var hero = document.querySelector('[data-hero]');
  var revealItems = document.querySelectorAll('[data-reveal]');

  function revealAll() {
    hero.classList.add('is-in');
    hero.querySelectorAll('.fade').forEach(function (el) { el.classList.add('is-in'); });
    revealItems.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    setTimeout(function () {
      hero.classList.add('is-in');
      hero.querySelectorAll('.fade').forEach(function (el, i) {
        setTimeout(function () { el.classList.add('is-in'); }, 450 + i * 120);
      });
    }, 60);

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Progreso de la ruta ---------- */

  var route = document.querySelector('[data-route]');
  var stops = route ? route.querySelectorAll('.stop') : [];

  function updateRoute() {
    if (!route) return;
    var rect = route.getBoundingClientRect();
    var vh = window.innerHeight;
    var start = vh * 0.85;
    var end = vh * 0.35;
    var progress = (start - rect.top) / (rect.height + start - end);
    progress = Math.max(0, Math.min(1, progress));
    if (reduceMotion) progress = 1;
    route.style.setProperty('--progress', progress.toFixed(3));
    stops.forEach(function (stop, i) {
      stop.classList.toggle('is-reached', progress >= (i + 0.15) / stops.length);
    });
  }

  /* ---------- Nav y sección activa ---------- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
    updateRoute();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateRoute);
  onScroll();

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = '#' + entry.target.id;
        navLinks.forEach(function (link) {
          var active = link.getAttribute('href') === id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute('href'));
      if (section) sectionObserver.observe(section);
    });
  }

  /* ---------- Año actual ---------- */

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
