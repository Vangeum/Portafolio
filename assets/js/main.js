/* Portafolio · Vangelis Ramos Ríos
   Menú móvil, sección activa, revelado al hacer scroll y año actual.
   Sin dependencias. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    if (window.innerWidth >= 1020 && !mobileMenu.hidden) setMenu(false);
  });

  /* ---------- Revelado al hacer scroll ---------- */

  var hero = document.querySelector('[data-hero]');
  var revealItems = document.querySelectorAll('[data-reveal]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    hero.classList.add('is-in');
    revealItems.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    // setTimeout y no requestAnimationFrame: así también funciona con la pestaña oculta
    setTimeout(function () { hero.classList.add('is-in'); }, 60);

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Sección activa en la navegación ---------- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sectionOf = {
    proyectos: 'proyectos', tesis: 'proyectos', crm: 'proyectos',
    experiencia: 'experiencia', capacidades: 'capacidades', formacion: 'formacion', contacto: 'contacto'
  };

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = '#' + (sectionOf[entry.target.id] || '');
        navLinks.forEach(function (link) {
          var active = link.getAttribute('href') === id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main > section[id]').forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Año actual ---------- */

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
