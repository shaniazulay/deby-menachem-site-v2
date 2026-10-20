/* =====================================================================
   Motion layer – GSAP + ScrollTrigger + SplitText + Lenis
   Runs only when <html> has the `anim` class (set in index.html when the
   visitor has not asked for reduced motion and the page is not in ?static
   capture mode). Without it the site renders exactly like the design.
   ===================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var preloader = document.querySelector('.preloader');
  var ok = root.classList.contains('anim') && window.gsap && window.ScrollTrigger && window.SplitText && window.Lenis;
  if (!ok) {
    root.classList.remove('anim');
    if (preloader) preloader.remove();
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText);
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var isDesk = window.matchMedia('(min-width: 1100px)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var Z = function () { return parseFloat(getComputedStyle(root).getPropertyValue('--z')) || 1; };
  var radius = function (el) { return getComputedStyle(el).borderTopLeftRadius || '0px'; };
  var notIn = function (sel) { return function (el) { return !el.closest(sel); }; };

  // Crossing the desktop/mobile breakpoint swaps the whole composition – start fresh.
  window.matchMedia('(min-width: 1100px)').addEventListener('change', function () { location.reload(); });

  /* ---------------- Smooth scroll ---------------- */
  var lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
  window.__lenis = lenis;

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    var target = id === '#top' ? 0 : (id.length > 1 ? document.querySelector(id) : null);
    if (target === null) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: target === 0 ? 0 : -110 * Z(), duration: 1.6, easing: function (t) { return 1 - Math.pow(1 - t, 4); } });
  });

  /* ---------------- Helpers ---------------- */
  function onceTrigger(el, start) { return { trigger: el, start: start || 'top 88%', once: true }; }

  function lineReveal(el, opts) {
    opts = opts || {};
    var split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    gsap.from(split.lines, {
      yPercent: 115, duration: 1.25, ease: 'expo.out', stagger: 0.11, delay: opts.delay || 0,
      scrollTrigger: onceTrigger(el, opts.start)
    });
    return split;
  }

  function clipReveal(el, inner, delay) {
    var r = radius(el);
    var st = onceTrigger(el, 'top 86%');
    gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0% round ' + r + ')' }, {
      clipPath: 'inset(0% 0% 0% 0% round ' + r + ')', duration: 1.5, ease: 'expo.inOut', delay: delay || 0,
      scrollTrigger: st, onComplete: function () { gsap.set(el, { clearProps: 'clipPath' }); }
    });
    if (inner) {
      gsap.fromTo(inner, { scale: 1.32 }, { scale: 1, duration: 2.1, ease: 'expo.out', delay: (delay || 0) + 0.15, scrollTrigger: onceTrigger(el, 'top 86%') });
    }
  }

  function drawDivider(el, delay, st) {
    return gsap.fromTo(el, { '--draw': 0, '--pop': 0 }, {
      '--draw': 1, '--pop': 1, duration: 1.3, ease: 'expo.inOut', delay: delay || 0, scrollTrigger: st
    });
  }

  /* ---------------- Inline the line-art sprigs so they can draw themselves ---------------- */
  var svgCache = {};
  function inlineSprigs() {
    return Promise.all($$('img.sprig').map(function (img) {
      var src = img.getAttribute('src');
      svgCache[src] = svgCache[src] || fetch(src).then(function (r) { return r.text(); });
      return svgCache[src].then(function (txt) {
        var wrap = document.createElement('span');
        wrap.className = img.className + ' sprig-live';
        wrap.setAttribute('style', img.getAttribute('style') || '');
        wrap.setAttribute('aria-hidden', 'true');
        wrap.innerHTML = txt;
        var svg = wrap.querySelector('svg');
        svg.removeAttribute('width'); svg.removeAttribute('height');
        svg.setAttribute('preserveAspectRatio', 'none');
        img.replaceWith(wrap);
        return wrap;
      });
    })).catch(function () { return []; });
  }

  function animateSprig(wrap) {
    var svg = wrap.querySelector('svg');
    var paths = $$('path', svg);
    paths.forEach(function (p) { p.setAttribute('pathLength', '1'); });
    gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1 });
    gsap.to(paths, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut', stagger: 0.12, scrollTrigger: onceTrigger(wrap, 'top 92%') });
    gsap.to(svg, { rotation: 3.5, transformOrigin: '0% 100%', duration: 3.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  }

  /* ---------------- Preloader + hero intro ---------------- */
  var nav = $('.nav');
  var heroCard = $('.hero-card');
  var heroImg = $('.hero-img');
  var heroTitle = $('.hero-title');
  var heroSub = $('.hero-sub');
  var heroBtns = $$('.s-hero .btn');
  var heroDivider = $('.s-hero .divider');
  var heroInset = $('.s-hero .inset');
  var heroWaves = $$('.hero-card > img.r');
  var heroNotes = $$('.s-hero .corner-note');
  var heroLines = $$('.s-hero .hl');
  var waFloat = $('.wa-float');

  function buildIntro() {
    var r = radius(heroCard);
    var h1 = SplitText.create(heroTitle, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    var sub = SplitText.create(heroSub, { type: 'words' });

    gsap.set(heroCard, { clipPath: 'inset(9% 7% 9% 7% round ' + (parseFloat(r) * 2.2) + 'px)' });
    gsap.set(heroImg, { scale: 1.35 });
    gsap.set(h1.lines, { yPercent: 115 });
    gsap.set(sub.words, { autoAlpha: 0, y: 16, filter: 'blur(6px)' });
    gsap.set(heroBtns, { autoAlpha: 0, y: 34 });
    gsap.set(heroDivider, { '--draw': 0, '--pop': 0 });
    gsap.set(heroInset, { autoAlpha: 0, scale: 1.035 });
    gsap.set(heroWaves, { yPercent: 100 });
    gsap.set(heroNotes, { autoAlpha: 0, y: 10 });
    gsap.set(heroLines, { scaleX: 0 });
    gsap.set(nav, { yPercent: -170 });
    if (waFloat) gsap.set(waFloat, { scale: 0 });

    var tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' }, onComplete: heroScroll });
    tl.to(heroCard, { clipPath: 'inset(0% 0% 0% 0% round ' + r + ')', duration: 1.7, ease: 'expo.inOut' }, 0)
      .to(heroImg, { scale: 1, duration: 2.6 }, 0)
      .to(heroWaves, { yPercent: 0, duration: 1.3 }, 0.7)
      .to(heroInset, { autoAlpha: 1, scale: 1, duration: 1.5 }, 0.8)
      .to(nav, { yPercent: 0, duration: 1.3 }, 0.9)
      .to(h1.lines, { yPercent: 0, duration: 1.35, stagger: 0.13 }, 0.85)
      .to(heroDivider, { '--draw': 1, '--pop': 1, duration: 1.3, ease: 'expo.inOut' }, 1.1)
      .to(sub.words, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.017 }, 1.2)
      .to(heroBtns, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1 }, 1.45)
      .to(heroLines, { scaleX: 1, duration: 1.2, ease: 'expo.inOut' }, 1.5)
      .to(heroNotes, { autoAlpha: 1, y: 0, duration: 1 }, 1.65);
    if (waFloat) tl.to(waFloat, { scale: 1, duration: 0.9, ease: 'back.out(1.8)' }, 1.9);
    tl.add(function () { gsap.set(sub.words, { clearProps: 'filter' }); });
    return tl;
  }

  function heroScroll() {
    var st = { trigger: heroCard, start: 'top top', end: 'bottom top', scrub: true };
    gsap.fromTo(heroImg, { scale: 1, yPercent: 0 }, { scale: 1.16, yPercent: 6, ease: 'none', scrollTrigger: st });
    gsap.fromTo([heroTitle, heroSub, heroDivider], { y: 0 }, { y: -90, ease: 'none', scrollTrigger: st });
    gsap.fromTo([heroTitle, heroSub, heroDivider].concat(heroBtns), { opacity: 1 }, { opacity: 0.15, ease: 'none', scrollTrigger: { trigger: heroCard, start: '20% top', end: '85% top', scrub: true } });
    if (fine && isDesk) {
      var xImg = gsap.quickTo(heroImg, 'x', { duration: 1.4, ease: 'power3.out' });
      var xT = gsap.quickTo(heroTitle, 'x', { duration: 1.2, ease: 'power3.out' });
      heroCard.addEventListener('pointermove', function (e) {
        var r = heroCard.getBoundingClientRect();
        var p = (e.clientX - r.left) / r.width - 0.5;
        xImg(p * -24); xT(p * 14);
      });
      heroCard.addEventListener('pointerleave', function () { xImg(0); xT(0); });
    }
  }

  function runPreloader(intro) {
    if (!preloader) { lenis.start(); intro.play(); return; }
    var first = true;
    try { first = !sessionStorage.getItem('dm-seen'); sessionStorage.setItem('dm-seen', '1'); } catch (e) {}
    var pct = $('.pl-pct', preloader);
    var counter = { v: 0 };
    var tl = gsap.timeline({
      onComplete: function () {
        preloader.remove();
        lenis.start();
        ScrollTrigger.refresh();
      }
    });
    if (first) {
      tl.from('.pl-logo', { autoAlpha: 0, y: 24, filter: 'blur(10px)', duration: 1.1, ease: 'expo.out' }, 0)
        .to('.pl-line i', { scaleX: 1, duration: 1.5, ease: 'power3.inOut' }, 0.15)
        .to(counter, { v: 100, duration: 1.5, ease: 'power3.inOut', onUpdate: function () { pct.textContent = Math.round(counter.v); } }, 0.15)
        .to('.pl-inner', { autoAlpha: 0, y: -24, duration: 0.6, ease: 'power2.in' }, 1.75);
    } else {
      tl.set('.pl-inner', { autoAlpha: 0 });
    }
    tl.to(preloader, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.1, ease: 'expo.inOut' }, first ? 2.05 : 0.05)
      .add(function () { intro.play(); }, first ? 2.4 : 0.35);
  }

  /* ---------------- Scroll scenes ---------------- */
  function scenes() {
    // Section titles: lines rise out of a mask
    $$('.about-title, .sec-title, .why-title, .testi-title, .gift-title, .contact-title, .philo-title, .about-sub, .why-sub')
      .forEach(function (el) { lineReveal(el); });

    // Text blocks & small UI: soft fade-up in batches
    var fade = $$([
      '.about-p', '.about-subhead', '.about-badge', '.s-about .btn',
      '.svc-num', '.svc-title', '.svc-tag', '.svc-desc',
      '.intro', '.s-why .btn', '.step-title', '.step-desc',
      '.philo-sub', '.philo-name', '.s-philo .corner-note',
      '.eyebrow', '.fw-item',
      '.testi-person', '.testi-controls', '.testi-card', '.testi-pager', '.testi-hint', '.testi-arrows',
      '.gift-body', '.gift-facts span', '.gift-caption', '.s-gift .btn',
      '.faq-item', '.faq-card',
      '.contact-row', '.cf-input', '.cf-consent', '.contact-form .btn',
      '.footer-logo', '.f-link', '.f-head', '.f-mline', '.f-credit'
    ].join(','));
    gsap.set(fade, { autoAlpha: 0, y: 34 });
    ScrollTrigger.batch(fade, {
      start: 'top 92%', once: true,
      onEnter: function (batch) {
        gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07, overwrite: true });
      }
    });

    // Hairlines draw from the reading side (right)
    $$('.hl, .eyebrow-line').filter(notIn('.s-hero')).forEach(function (l) {
      gsap.from(l, { scaleX: 0, transformOrigin: '100% 50%', duration: 1.5, ease: 'expo.inOut', scrollTrigger: onceTrigger(l, 'top 94%') });
    });
    $$('.eyebrow-dia, .bullet').forEach(function (d, i) {
      gsap.from(d, { scale: 0, rotation: -135, duration: 1, ease: 'back.out(1.8)', scrollTrigger: onceTrigger(d, 'top 94%') });
    });

    // Dividers: lines grow out of the centre, diamond pops
    $$('.divider').filter(notIn('.s-hero')).forEach(function (d) { drawDivider(d, 0.15, onceTrigger(d, 'top 94%')); });

    // Images & panels: clip reveal + inner zoom-out
    clipReveal($('.about-img'));
    $$('.tile').forEach(function (t, i) { clipReveal(t, $('img', t), (i % 3) * 0.12); });
    $$('.photo-box').forEach(function (p) { clipReveal(p, $('img', p)); });
    clipReveal($('.why-panel'));
    clipReveal($('.gift-card'));
    $$('.inset').filter(notIn('.s-hero')).forEach(function (f) {
      gsap.from(f, { autoAlpha: 0, scale: 1.03, duration: 1.4, ease: 'expo.out', delay: 0.5, scrollTrigger: onceTrigger(f, 'top 90%') });
    });

    // About: dashed ring spins, round photo pops in
    var ring = $('img[src*="ring.png"]');
    var round = $('img[src*="about-round"]');
    if (ring) {
      gsap.from(ring, { scale: 0.6, autoAlpha: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: onceTrigger(ring, 'top 92%') });
      gsap.to(ring, { rotation: 360, duration: 70, ease: 'none', repeat: -1 });
    }
    if (round) gsap.from(round, { scale: 0, rotation: -40, duration: 1.3, ease: 'back.out(1.5)', delay: 0.15, scrollTrigger: onceTrigger(round, 'top 92%') });

    // Services tiles: number badges + arrows pop after the reveal
    $$('.tile').forEach(function (t, i) {
      gsap.from($$('.tile-num, .tile-arrow, .tile-label', t), {
        autoAlpha: 0, y: 18, duration: 1, ease: 'expo.out', stagger: 0.08, delay: 0.7 + (i % 3) * 0.12, scrollTrigger: onceTrigger(t, 'top 86%')
      });
    });

    // Why me: the timeline fills with the scroll and lights the nodes
    var line = $('.timeline');
    var nodes = $$('.node');
    if (line && nodes.length) {
      var vertical = !isDesk;
      var lr = line.getBoundingClientRect();
      var marks = nodes.map(function (n) {
        var r = n.getBoundingClientRect();
        return vertical ? (r.top + r.height / 2 - lr.top) / lr.height : (lr.right - (r.left + r.width / 2)) / lr.width;
      });
      nodes.forEach(function (n) { n.classList.remove('node--on'); });
      var prop = vertical ? 'scaleY' : 'scaleX';
      var from = {}; from[prop] = 0;
      var to = { ease: 'none' }; to[prop] = 1;
      gsap.set(line, Object.assign({ transformOrigin: vertical ? '50% 0%' : '100% 50%' }, from));
      to.scrollTrigger = {
        trigger: '.why-panel', start: vertical ? 'top 55%' : 'top 60%', end: vertical ? '85% 75%' : '55% 50%', scrub: 0.6,
        onUpdate: function (self) {
          nodes.forEach(function (n, i) { n.classList.toggle('node--on', self.progress >= Math.max(0, marks[i]) - 0.002); });
        }
      };
      gsap.to(line, to);
      gsap.from($$('.step-num'), { yPercent: 60, autoAlpha: 0, duration: 1.4, ease: 'expo.out', stagger: 0.12, scrollTrigger: onceTrigger('.why-panel', 'top 60%') });
    }

    // Philosophy & contact: card grows into place, photo drifts (parallax)
    [['.philo-card', '.philo-card > img', 0.9], ['.contact-card', '.contact-img', 0.95]].forEach(function (cfg) {
      var card = $(cfg[0]), img = $(cfg[1]);
      if (!card) return;
      gsap.set(img, { scale: 1.18 });
      gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.fromTo(card, { scale: cfg[2] }, { scale: 1, ease: 'none', scrollTrigger: { trigger: card, start: 'top 98%', end: 'top 40%', scrub: true } });
    });

    // Testimonials
    var mark = $('.testi-mark');
    if (mark) gsap.fromTo(mark, { y: -40 }, { y: 40, ease: 'none', scrollTrigger: { trigger: mark, start: 'top bottom', end: 'bottom top', scrub: true } });
    var quote = $('[data-quote]');
    if (quote) lineReveal(quote, { start: 'top 90%' });
    $$('.testi-peek').forEach(function (p) {
      gsap.from(p, { autoAlpha: 0, x: p.dataset.peek === 'next' ? 70 : -70, duration: 1.3, ease: 'expo.out', scrollTrigger: onceTrigger(p, 'top 92%') });
    });
    var desk = $('[data-testi-desk]');
    if (desk) desk.addEventListener('testi:change', function () {
      var q = $('[data-quote]', desk);
      var s = SplitText.create(q, { type: 'words' });
      gsap.from(s.words, { y: 18, autoAlpha: 0, filter: 'blur(6px)', duration: 0.75, ease: 'expo.out', stagger: 0.022, onComplete: function () { s.revert(); } });
      gsap.from('.testi-avatar', { scale: 0, rotation: -90, duration: 0.8, ease: 'back.out(1.7)' });
      gsap.from('.testi-who', { x: -16, autoAlpha: 0, duration: 0.7, ease: 'expo.out', delay: 0.08 });
      gsap.from($$('.testi-peek > *', desk), { autoAlpha: 0, y: 10, duration: 0.6, ease: 'expo.out', stagger: 0.04 });
    });

    // Gift: the voucher print gets stamped onto the card
    gsap.from('.voucher-logo, .voucher-text', {
      scale: 1.9, rotation: -24, autoAlpha: 0, duration: 1, ease: 'back.out(1.3)', stagger: 0.16, delay: 1.1,
      scrollTrigger: onceTrigger('.gift-photo', 'top 80%')
    });

    // Header: hide on scroll down, return on scroll up, show progress + active section
    var progress = document.createElement('span');
    progress.className = 'nav-progress';
    nav.appendChild(progress);
    var navHidden = false;
    ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate: function (self) {
        gsap.set(progress, { scaleX: self.progress });
        var menuOpen = !!$('.m-menu.is-open');
        var hide = self.direction === 1 && self.scroll() > 500 && !menuOpen;
        if (hide !== navHidden) {
          navHidden = hide;
          gsap.to(nav, { yPercent: hide ? -170 : 0, duration: 0.7, ease: 'expo.out', overwrite: 'auto' });
        }
      }
    });
    if (isDesk) {
      var dot = document.createElement('i');
      dot.className = 'nav-dot';
      nav.appendChild(dot);
      var links = $$('.nav-links a');
      var moveDot = function (a) {
        if (!a) { gsap.to(dot, { autoAlpha: 0, duration: 0.3 }); return; }
        var z = Z(), nr = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
        gsap.to(dot, { autoAlpha: 1, x: (r.left + r.width / 2 - nr.left) / z - 3, duration: 0.8, ease: 'expo.out' });
      };
      links.forEach(function (a) {
        var sec = document.querySelector(a.getAttribute('href'));
        if (!sec) return;
        ScrollTrigger.create({ trigger: sec, start: 'top 45%', end: 'bottom 45%', onToggle: function (self) { if (self.isActive) moveDot(a); } });
      });
      ScrollTrigger.create({ trigger: '.s-hero', start: 'top top', end: 'bottom 45%', onToggle: function (self) { if (self.isActive) moveDot(null); } });
    }
  }

  /* ---------------- Marquee: endless loop that reacts to scroll speed & direction ---------------- */
  function marquee() {
    var track = $('.mq-track');
    if (!track) return;
    var loop = gsap.fromTo(track, { xPercent: -25 }, { xPercent: 0, duration: 46, ease: 'none', repeat: -1 });
    loop.totalTime(loop.duration() * 200);
    var settle;
    ScrollTrigger.create({
      onUpdate: function (self) {
        var dir = self.direction;
        var boost = 1 + Math.min(Math.abs(self.getVelocity()) / 260, 6);
        gsap.to(loop, { timeScale: dir * boost, duration: 0.25, overwrite: true });
        clearTimeout(settle);
        settle = setTimeout(function () { gsap.to(loop, { timeScale: dir, duration: 1.5, ease: 'power2.out', overwrite: true }); }, 140);
      }
    });
  }

  /* ---------------- Micro-interactions (mouse only) ---------------- */
  function micro() {
    if (!fine) return;

    // Magnetic buttons
    $$('.btn, .testi-btn').forEach(function (el) {
      var xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'elastic.out(1, .45)' });
      var yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'elastic.out(1, .45)' });
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), z = Z();
        xTo((e.clientX - r.left - r.width / 2) / z * 0.28);
        yTo((e.clientY - r.top - r.height / 2) / z * 0.38);
      });
      el.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
    });

    // Service tiles: 3D tilt + light that follows the pointer
    $$('.tile').forEach(function (t) {
      var glow = document.createElement('span');
      glow.className = 'tile-glow';
      t.appendChild(glow);
      var rx = gsap.quickTo(t, 'rotationX', { duration: 0.8, ease: 'power3.out' });
      var ry = gsap.quickTo(t, 'rotationY', { duration: 0.8, ease: 'power3.out' });
      gsap.set(t, { transformPerspective: 900 });
      t.addEventListener('pointermove', function (e) {
        var r = t.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        ry((px - 0.5) * 9); rx((0.5 - py) * 7);
        t.style.setProperty('--mx', (px * 100) + '%');
        t.style.setProperty('--my', (py * 100) + '%');
      });
      t.addEventListener('pointerleave', function () { rx(0); ry(0); });
    });

    // Gift photo: gentle tilt
    var gift = $('.gift-photo');
    if (gift) {
      var gx = gsap.quickTo(gift, 'rotationY', { duration: 1, ease: 'power3.out' });
      var gy = gsap.quickTo(gift, 'rotationX', { duration: 1, ease: 'power3.out' });
      gsap.set(gift, { transformPerspective: 1200 });
      gift.addEventListener('pointermove', function (e) {
        var r = gift.getBoundingClientRect();
        gx(((e.clientX - r.left) / r.width - 0.5) * 6);
        gy((0.5 - (e.clientY - r.top) / r.height) * 5);
      });
      gift.addEventListener('pointerleave', function () { gx(0); gy(0); });
    }

    // Cursor follower
    var cur = document.createElement('div');
    cur.className = 'cursor';
    cur.innerHTML = '<span class="cursor-ring"></span><span class="cursor-dot"></span>';
    document.body.appendChild(cur);
    var ring = $('.cursor-ring', cur), dot = $('.cursor-dot', cur);
    var rX = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3.out' });
    var rY = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3.out' });
    var dX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' });
    var dY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' });
    window.addEventListener('pointermove', function (e) {
      cur.classList.add('is-on');
      rX(e.clientX); rY(e.clientY); dX(e.clientX); dY(e.clientY);
      var hit = e.target.closest('a, button, input, label, .testi-peek');
      cur.classList.toggle('is-hover', !!hit);
      cur.classList.toggle('is-text', !!(hit && hit.matches('input')));
    });
    document.addEventListener('pointerleave', function () { cur.classList.remove('is-on'); });
    window.addEventListener('pointerdown', function () { cur.classList.add('is-down'); });
    window.addEventListener('pointerup', function () { cur.classList.remove('is-down'); });
  }

  /* ---------------- Boot ---------------- */
  var heroReady = heroImg && heroImg.decode ? heroImg.decode().catch(function () {}) : Promise.resolve();
  var timeout = new Promise(function (r) { setTimeout(r, 2500); });
  Promise.race([Promise.all([document.fonts.ready, heroReady]), timeout]).then(function () {
    var intro = buildIntro();
    marquee();
    scenes();
    micro();
    inlineSprigs().then(function (wraps) { wraps.forEach(animateSprig); ScrollTrigger.refresh(); });
    runPreloader(intro);
  });
})();
