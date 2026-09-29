/* Portafolio · Vangelis Ramos Ríos
   Menú móvil, cambio de tema, sección activa, filtros de certificaciones,
   copiar email y animaciones de entrada. Sin dependencias. */

(function () {
  'use strict';

  var root = document.documentElement;
  var nav = document.getElementById('nav');

  /* ---------- Tema claro / oscuro ---------- */

  var themeToggle = document.querySelector('[data-theme-toggle]');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    var isLight = theme === 'light';
    themeToggle.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
    if (themeMeta) themeMeta.setAttribute('content', isLight ? '#f6f7fb' : '#0a0d16');
  }

  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  themeToggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });

  /* ---------- Menú móvil ---------- */

  var menuToggle = document.querySelector('[data-menu-toggle]');
  var mobileMenu = document.getElementById('mobile-menu');

  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    mobileMenu.hidden = !open;
    if (open) nav.classList.add('is-scrolled');
    else onScroll();
  }

  menuToggle.addEventListener('click', function () {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1040 && !mobileMenu.hidden) setMenu(false);
  });

  /* ---------- Nav con fondo al hacer scroll ---------- */

  function onScroll() {
    var menuOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('is-scrolled', menuOpen || window.scrollY > 8);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Sección activa en la navegación ---------- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
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

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ---------- Animaciones de entrada ---------- */

  var revealItems = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Filtro de certificaciones ---------- */

  var filters = document.querySelectorAll('[data-filter]');
  var certs = document.querySelectorAll('.cert');

  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      var cat = button.getAttribute('data-filter');
      filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      certs.forEach(function (cert) {
        cert.hidden = cat !== 'all' && cert.getAttribute('data-cat') !== cat;
      });
    });
  });

  /* ---------- Copiar email ---------- */

  var copyButton = document.querySelector('[data-copy]');
  var copyFeedback = document.querySelector('[data-copy-feedback]');
  var feedbackTimer;

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      var text = copyButton.getAttribute('data-copy');
      var done = function (ok) {
        copyFeedback.textContent = ok ? 'Email copiado al portapapeles.' : 'No se pudo copiar. El email es ' + text;
        clearTimeout(feedbackTimer);
        feedbackTimer = setTimeout(function () { copyFeedback.textContent = ''; }, 4000);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  }

  /* ---------- Año actual en el footer ---------- */

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
