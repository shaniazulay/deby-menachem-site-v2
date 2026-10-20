(function () {
  'use strict';

  var WA_NUMBER = '972584502900';
  var root = document.documentElement;
  var desktopQuery = window.matchMedia('(min-width: 1100px)');

  // ---------- Stage zoom: the 1440 / 390 design frame always fills the viewport ----------
  function setZoom() {
    var w = root.clientWidth;
    var z = desktopQuery.matches ? w / 1440 : Math.min(w, 546) / 390;
    root.style.setProperty('--z', z);
  }
  window.addEventListener('resize', setZoom);
  setZoom();

  // ---------- Desktop screen fit: hero = exactly one screen, every other area fits the window height ----------
  // Wide blocks (text columns, images, tiles, hairlines) stretch with the area when it is height-fitted
  document.querySelectorAll('[style*="--dw"]').forEach(function (el) {
    // (the hero paragraph keeps its width so it wraps exactly like the design)
    if (parseFloat(el.style.getPropertyValue('--dw')) >= 200 && !el.classList.contains('btn') && !el.classList.contains('hero-sub')) el.classList.add('sx');
  });
  var FIT_SECTIONS = '.s-why, .s-philo, .s-forwhom, .s-testi, .s-gift, .s-faq, .s-contact';
  var MIN_FIT = 0.55;   // never shrink an area below 55% – text would get too small to read
  var FIT_PAD = 60;     // breathing room kept around an area (design px)
  function fitScreen() {
    var sections = document.querySelectorAll(FIT_SECTIONS);
    sections.forEach(function (s) { s.style.zoom = ''; s.style.width = ''; s.style.removeProperty('--hx'); });
    var heroSec = document.querySelector('.s-hero');
    if (heroSec) { heroSec.style.zoom = ''; heroSec.style.width = ''; heroSec.style.height = ''; heroSec.style.removeProperty('--hx'); }
    var off = !desktopQuery.matches || root.classList.contains('static');
    if (!off) {
      var z = parseFloat(root.style.getPropertyValue('--z')) || 1;
      var screenH = window.innerHeight / z;           // window height in design px
      // Hero: the whole Figma composition is scaled uniformly (zoom k) so the card + the first
      // part of the word marquee fit on the first screen; it is widened by 1/k so it still spans
      // the full window width (horizontal positions and wide blocks scale back up via --hx).
      // The card keeps its 65px offset under the nav.
      var hero = document.querySelector('.s-hero');
      var kh = Math.max(0.5, Math.min(1, (screenH - 65 - 80) / 840));   // 840 = card + gap below it; 80 = visible marquee
      if (kh < 0.999) {
        hero.style.zoom = kh;
        hero.style.width = (1440 / kh) + 'px';
        hero.style.setProperty('--hx', (1 / kh) + 'px');
        hero.style.height = (840 + 65 / kh) + 'px';
      }
      // Other areas: measure the real content and zoom the area down if it is taller than the window
      var avail = screenH - FIT_PAD;
      sections.forEach(function (sec) {
        var topY = Infinity, bottomY = -Infinity;
        sec.querySelectorAll('.a, .faq-flow').forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (!r.width && !r.height) return;
          topY = Math.min(topY, r.top); bottomY = Math.max(bottomY, r.bottom);
        });
        if (!isFinite(topY)) return;
        var contentH = (bottomY - topY) / z;
        var k = Math.max(MIN_FIT, Math.min(1, avail / contentH));
        if (k < 0.999) {
          // Zoom the area down for height, but widen it by 1/k so it still spans the full window width:
          // horizontal positions and wide blocks (.sx) scale back up by --hx, only heights and text shrink.
          sec.style.zoom = k;
          sec.style.width = (1440 / k) + 'px';
          sec.style.setProperty('--hx', (1 / k) + 'px');
        }
      });
    }
    fitAbout(off);
    fitServices(off);
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }
  // About: the photo shrinks to the window height (ring / badge stay on its corners) and the
  // text column zooms down only as much as needed – it keeps its 560px width, so it re-wraps into fewer lines.
  function fitAbout(off) {
    var sec = document.querySelector('.s-about');
    var col = sec && sec.querySelector('.about-col');
    var media = sec && sec.querySelector('.about-media');
    if (!col || !media) return;
    sec.style.height = ''; media.style.height = '';
    col.style.zoom = ''; col.style.removeProperty('--hx');
    if (off) return;
    var z = parseFloat(root.style.getPropertyValue('--z')) || 1;
    var avail = window.innerHeight / z - FIT_PAD;
    if (avail >= 929) return;                              // design: 20px + 849px + 60px ring overhang
    var mediaH = Math.max(360, avail - 80);
    var target = Math.max(mediaH + 60, avail - 20);
    var kt = 1, colH = col.getBoundingClientRect().height / z;
    for (var i = 0; i < 5 && colH > target + 1; i++) {
      kt = Math.max(0.68, kt * target / colH);
      col.style.zoom = kt;
      col.style.setProperty('--hx', (1 / kt) + 'px');
      colH = col.getBoundingClientRect().height / z;
      if (kt === 0.68) break;
    }
    media.style.height = mediaH + 'px';
    sec.style.height = (20 + Math.max(colH, mediaH + 60) + 110) + 'px';
  }

  // Services: tiles get shorter first (down to 50%); only if that is not enough the whole area
  // zooms down – widened by 1/k so it keeps spanning the full window width.
  function fitServices(off) {
    var sec = document.querySelector('.s-services');
    if (!sec) return;
    sec.style.zoom = ''; sec.style.width = ''; sec.style.height = '';
    ['--hx', '--g', '--sdy'].forEach(function (p) { sec.style.removeProperty(p); });
    sec.classList.remove('is-compact');
    if (off) return;
    var z = parseFloat(root.style.getPropertyValue('--z')) || 1;
    var avail = window.innerHeight / z - FIT_PAD;
    var CONTENT = 1020, TILES = 443;                       // title → last description, tile block height
    if (avail >= CONTENT) return;
    var g = Math.max(0.8, Math.min(1, (avail - (CONTENT - TILES)) / TILES));   // tiles keep ≥80% of their height
    var lost = TILES * (1 - g);
    sec.style.setProperty('--g', g);
    sec.classList.toggle('is-compact', g < 0.75);   // short tiles: the number badge would collide with the label
    sec.style.setProperty('--sdy', (-lost) + 'px');
    sec.style.height = (1200 - lost) + 'px';
    var h = CONTENT - lost;
    if (h > avail) {
      var k = Math.max(0.72, avail / h);
      sec.style.zoom = k;
      sec.style.width = (1440 / k) + 'px';
      sec.style.setProperty('--hx', (1 / k) + 'px');
    }
  }

  var fitTimer;
  window.addEventListener('resize', function () { clearTimeout(fitTimer); fitTimer = setTimeout(fitScreen, 80); });
  // Text heights change once the web fonts arrive – measure again then (and after full load)
  var refit = function () { clearTimeout(fitTimer); fitTimer = setTimeout(fitScreen, 60); };
  if (document.fonts) {
    if (document.fonts.ready) document.fonts.ready.then(refit);
    if (document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', refit);
  }
  window.addEventListener('load', refit);
  fitScreen();

  // ---------- Mobile menu ----------
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('m-menu');
  if (menuBtn && menu) {
    var setOpen = function (open) {
      menu.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
    };
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!menu.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', function (e) { if (!menu.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // ---------- FAQ accordion: one open item at a time (animated height in motion mode) ----------
  var faqItems = document.querySelectorAll('[data-faq] .faq-item');
  var animated = function () { return root.classList.contains('anim') && window.gsap; };
  var closePanel = function (item) {
    var panel = item.querySelector('.faq-a');
    item.classList.remove('is-open');
    item.querySelector('button').setAttribute('aria-expanded', 'false');
    if (panel.hidden) return;
    if (!animated()) { panel.hidden = true; return; }
    gsap.to(panel, { height: 0, marginTop: 0, opacity: 0, duration: 0.55, ease: 'power3.inOut', overwrite: true,
      onComplete: function () { panel.hidden = true; gsap.set(panel, { clearProps: 'height,marginTop,opacity' }); } });
  };
  var openPanel = function (item) {
    var panel = item.querySelector('.faq-a');
    item.classList.add('is-open');
    item.querySelector('button').setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    if (!animated()) return;
    var mt = getComputedStyle(panel).marginTop;
    gsap.fromTo(panel, { height: 0, marginTop: 0, opacity: 0 }, { height: 'auto', marginTop: mt, opacity: 1, duration: 0.7, ease: 'expo.out', overwrite: true,
      onComplete: function () { gsap.set(panel, { clearProps: 'height,marginTop,opacity' }); if (window.ScrollTrigger) ScrollTrigger.refresh(); } });
    gsap.from(panel.querySelector('p'), { y: 12, duration: 0.8, ease: 'expo.out' });
  };
  faqItems.forEach(function (item) {
    item.querySelector('button').addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      faqItems.forEach(function (other) { if (other !== item || !willOpen) closePanel(other); });
      if (willOpen) openPanel(item);
    });
  });

  // ---------- Testimonials (desktop): focused quote + peeking neighbours ----------
  var reviews = [
    { name: 'רונית א.', role: 'טיפול לנערות', text: 'הבת שלי סבלה מכאבי מחזור קשים. דבי יצרה איתה קשר כל כך נעים, והיום היא מחכה לטיפולים ומרגישה הרבה יותר טוב.' },
    { name: 'נועה ש.', role: 'רפלקסולוגיה בהריון', text: 'הרפלקסולוגיה בהריון הייתה בשבילי הזמן הכי שקט בשבוע. דבי יודעת בדיוק איפה לגעת – ומתי פשוט להקשיב.' },
    { name: 'מיכל ל.', role: 'עיסוי רפואי', text: 'הגעתי עם כאבי גב שליוו אותי שנים. אחרי כמה טיפולים אצל דבי הרגשתי שאני מקבלת את הגוף שלי בחזרה. מקצועית, רגישה ופשוט מלאך.', short: 'הגעתי עם כאבי גב שליוו אותי שנים. אחרי כמה טיפולים אצל דבי הרגשתי שאני מקבלת את הגוף שלי בחזרה.' }
  ];
  var desk = document.querySelector('[data-testi-desk]');
  if (desk) {
    var current = 0;
    var focus = desk.querySelector('.testi-focus');
    var dots = desk.querySelectorAll('.testi-dots i');
    var fillPeek = function (el, r) {
      el.querySelector('[data-text]').textContent = r.short || r.text;
      el.querySelector('[data-meta]').textContent = r.name + ' · ' + r.role;
    };
    var render = function () {
      var r = reviews[current];
      desk.querySelector('[data-quote]').textContent = '״' + r.text + '״';
      desk.querySelector('[data-name]').textContent = r.name;
      desk.querySelector('[data-role]').textContent = r.role;
      desk.querySelector('[data-avatar]').textContent = r.name.charAt(0);
      fillPeek(desk.querySelector('[data-peek="next"]'), reviews[(current + 1) % reviews.length]);
      fillPeek(desk.querySelector('[data-peek="prev"]'), reviews[(current + reviews.length - 1) % reviews.length]);
      dots.forEach(function (d, i) { d.classList.toggle('is-on', i === current); });
    };
    var go = function (step) {
      current = (current + step + reviews.length) % reviews.length;
      focus.classList.add('is-fading');
      setTimeout(function () { render(); focus.classList.remove('is-fading'); desk.dispatchEvent(new CustomEvent('testi:change')); }, 220);
    };
    desk.querySelectorAll('[data-dir]').forEach(function (b) {
      b.addEventListener('click', function () { go(b.dataset.dir === 'next' ? 1 : -1); });
    });
    desk.querySelectorAll('[data-peek]').forEach(function (b) {
      b.addEventListener('click', function () { go(b.dataset.peek === 'next' ? 1 : -1); });
    });
    render();
  }

  // ---------- Testimonials (mobile): swipe track with pager + arrows ----------
  var track = document.querySelector('[data-testi-track]');
  if (track) {
    var cards = Array.prototype.slice.call(track.querySelectorAll('.testi-card'));
    var pager = document.querySelectorAll('[data-testi-pager] i');
    var active = 0;
    var setActive = function (idx) {
      active = idx;
      cards.forEach(function (c, i) { c.classList.toggle('is-active', i === idx); });
      pager.forEach(function (p, i) { p.classList.toggle('is-on', i === idx); });
    };
    var scrollToCard = function (idx) {
      idx = Math.max(0, Math.min(cards.length - 1, idx));
      var card = cards[idx];
      var delta = card.getBoundingClientRect().right - track.getBoundingClientRect().right;
      var z = parseFloat(getComputedStyle(root).getPropertyValue('--z')) || 1;
      track.scrollBy({ left: delta / z + 20, behavior: 'smooth' });
    };
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setActive(cards.indexOf(e.target)); });
      }, { root: track, threshold: 0.75 });
      cards.forEach(function (c) { io.observe(c); });
    }
    document.querySelectorAll('[data-mdir]').forEach(function (b) {
      b.addEventListener('click', function () { scrollToCard(active + (b.dataset.mdir === 'next' ? 1 : -1)); });
    });
  }

  // ---------- Contact form → WhatsApp message (no backend needed) ----------
  var form = document.getElementById('contact-form');
  if (form) {
    var note = form.querySelector('.cf-note');
    var noteTimer;
    var say = function (text, isError) {
      clearTimeout(noteTimer);
      note.textContent = text;
      note.classList.toggle('is-error', !!isError);
      noteTimer = setTimeout(function () { note.textContent = ''; }, 8000);
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name;
      var phone = form.elements.phone;
      var email = form.elements.email;
      var bad = null;
      [name, phone].forEach(function (f) {
        var invalid = !f.value.trim() || (f === phone && f.value.replace(/\D/g, '').length < 9);
        f.classList.toggle('is-invalid', invalid);
        if (invalid && !bad) bad = f;
      });
      if (bad) { bad.focus(); say('נא למלא שם ומספר טלפון תקין', true); return; }

      var lines = ['היי דבי, אשמח לרגע של פינוק 🌿', 'שם: ' + name.value.trim(), 'טלפון: ' + phone.value.trim()];
      if (email.value.trim()) lines.push('מייל: ' + email.value.trim());
      if (form.elements.consent.checked) lines.push('(מאשרת קבלת תוכן שיווקי במייל)');
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
      say('תודה! ההודעה מוכנה לשליחה בוואטסאפ');
      form.reset();
    });
    form.addEventListener('input', function (e) {
      if (e.target.classList.contains('is-invalid') && e.target.value.trim()) e.target.classList.remove('is-invalid');
    });
  }
})();
