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

  /* ---------- Figura ampliada ---------- */

  var dialog = document.getElementById('fig-dialog');
  var dialogBody = dialog && dialog.querySelector('[data-dialog-body]');
  var dialogTitle = document.getElementById('fig-dialog-title');
  var lastTrigger = null;

  function openFigure(button) {
    var figure = button.closest('.figure');
    var slide = button.closest('.slide');
    var source = figure.querySelector('.diagram-h');
    var clone = source.cloneNode(true);

    // IDs únicos en la copia, para no duplicar los del diagrama original
    clone.querySelectorAll('[id]').forEach(function (el) { el.id = el.id + '-zoom'; });
    clone.querySelectorAll('mpath').forEach(function (el) {
      var ref = el.getAttribute('href');
      if (ref) el.setAttribute('href', ref + '-zoom');
    });
    var labelled = clone.getAttribute('aria-labelledby');
    if (labelled) {
      clone.setAttribute('aria-labelledby', labelled.split(' ').map(function (id) { return id + '-zoom'; }).join(' '));
    }
    clone.setAttribute('class', 'diagram-full');

    dialogBody.innerHTML = '';
    dialogBody.appendChild(clone);
    dialogTitle.textContent = figure.querySelector('.figure-bar span').textContent;
    dialog.classList.remove('s-main', 's-cream');
    dialog.classList.add(slide.classList.contains('s-cream') ? 's-cream' : 's-main');
    lastTrigger = button;
    dialog.showModal();
  }

  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-expand]').forEach(function (button) {
      button.addEventListener('click', function () { openFigure(button); });
    });
    dialog.querySelector('[data-close]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', function () {
      dialogBody.innerHTML = '';
      if (lastTrigger) lastTrigger.focus();
    });
  } else {
    document.querySelectorAll('[data-expand]').forEach(function (button) { button.hidden = true; });
  }

  /* ---------- Certificaciones adicionales ---------- */

  var moreToggle = document.querySelector('[data-more]');
  if (moreToggle) {
    var moreList = document.getElementById(moreToggle.getAttribute('aria-controls'));
    moreToggle.addEventListener('click', function () {
      var open = moreToggle.getAttribute('aria-expanded') !== 'true';
      moreToggle.setAttribute('aria-expanded', String(open));
      moreList.hidden = !open;
      moreToggle.textContent = moreToggle.getAttribute(open ? 'data-open-label' : 'data-closed-label');
    });
  }

  /* ---------- Año actual ---------- */

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
