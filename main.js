(function () {
  'use strict';

  var WA_NUMBER = '972584502900';
  var root = document.documentElement;
  var desktopQuery = window.matchMedia('(min-width: 1100px)');

  // ---------- Stage zoom: the 1440 / 390 design frame always fills the viewport ----------
  function setZoom() {
    var w = root.clientWidth;
    var z = desktopQuery.matches ? Math.min(w, 1920) / 1440 : Math.min(w, 546) / 390;
    root.style.setProperty('--z', z);
  }
  window.addEventListener('resize', setZoom);
  setZoom();

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

  // ---------- FAQ accordion: one open item at a time ----------
  var faqItems = document.querySelectorAll('[data-faq] .faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('button');
    var panel = item.querySelector('.faq-a');
    btn.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('button').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-a').hidden = true;
      });
      if (willOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
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
      setTimeout(function () { render(); focus.classList.remove('is-fading'); }, 220);
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
