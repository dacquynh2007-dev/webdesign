/*!
 * motion-primitives (vanilla port)
 * Ported from https://github.com/ibelick/motion-primitives (MIT) for plain HTML/CSS/JS.
 * No dependencies. Everything is driven by data-attributes and respects
 * prefers-reduced-motion. Call MotionPrimitives.init(root?) after injecting new DOM.
 *
 * Primitives:
 *   data-mp="in-view"           reveal once when entering the viewport
 *   data-mp="animated-group"    stagger children on enter (data-mp-stagger="60")
 *   data-mp="text-effect"       split text by word|char and fade/slide in (data-mp-per="word")
 *   data-mp="text-loop"         cycle child spans (data-mp-interval="2500")
 *   data-mp="animated-number"   spring-count to data-mp-value (locale aware)
 *   data-mp="sliding-number"    odometer-style digit roll to data-mp-value
 *   data-mp="infinite-slider"   seamless marquee (data-mp-speed px/s, data-mp-speed-hover, data-mp-reverse)
 *   data-mp="scroll-progress"   scaleX bar bound to page scroll with spring
 *   data-mp="progressive-blur"  layered backdrop blur fading toward data-mp-direction
 *   data-mp="image-comparison"  before/after slider (2 <img> + optional .mp-handle)
 *   data-mp="carousel"          scroll-snap track + [data-mp-prev]/[data-mp-next] + dots
 *   data-mp="transition-panel"  tabs: [data-mp-tab] buttons swap [data-mp-panel] with direction
 *   data-mp="magnetic"          element follows pointer slightly (data-mp-intensity="0.3")
 *   data-mp="tilt"              subtle 3D tilt on pointer (data-mp-max="6")
 *   data-mp="morphing-dialog"   trigger morphs into a <dialog> via View Transitions (data-mp-target="#id")
 */
(function (global) {
  'use strict';

  var reduce = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'; // ease-out-quint: decisive, no bounce

  function $all(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function num(el, name, fallback) {
    var v = parseFloat(el.getAttribute('data-mp-' + name));
    return isNaN(v) ? fallback : v;
  }
  function once(el, key) {
    if (el['__mp_' + key]) return false;
    el['__mp_' + key] = true;
    return true;
  }

  /* ---------- spring (port of motion's useSpring, critically damped-ish) ---------- */
  function spring(from, to, onUpdate, opts) {
    opts = opts || {};
    var k = opts.stiffness || 170, c = opts.damping || 26, m = opts.mass || 1;
    var x = from, v = 0, last = performance.now(), raf;
    function step(now) {
      var dt = Math.min(0.064, (now - last) / 1000); last = now;
      var a = (-k * (x - to) - c * v) / m;
      v += a * dt; x += v * dt;
      if (Math.abs(v) < 0.01 && Math.abs(x - to) < (opts.restDelta || 0.01)) { onUpdate(to); return; }
      onUpdate(x); raf = requestAnimationFrame(step);
    }
    if (reduce) { onUpdate(to); return function () {}; }
    raf = requestAnimationFrame(step);
    return function () { cancelAnimationFrame(raf); };
  }

  /* ---------- in-view / animated-group / text-effect share one observer ---------- */
  var io = 'IntersectionObserver' in global ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('mp-visible');
      if (e.target.__mp_onEnter) e.target.__mp_onEnter();
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }) : null;

  function observe(el, onEnter) {
    el.__mp_onEnter = onEnter;
    if (!io || reduce) { el.classList.add('mp-visible'); if (onEnter) onEnter(); return; }
    io.observe(el);
  }

  function inView(el) { el.classList.add('mp-reveal'); observe(el); }

  function animatedGroup(el) {
    var stagger = num(el, 'stagger', 60);
    Array.prototype.forEach.call(el.children, function (child, i) {
      child.classList.add('mp-reveal');
      child.style.transitionDelay = (i * stagger) + 'ms';
    });
    observe(el, function () {
      Array.prototype.forEach.call(el.children, function (c) { c.classList.add('mp-visible'); });
    });
  }

  function textEffect(el) {
    var per = el.getAttribute('data-mp-per') || 'word';
    var stagger = num(el, 'stagger', per === 'char' ? 18 : 45);
    var text = el.textContent;
    el.setAttribute('aria-label', text.trim());
    el.textContent = '';
    var parts = per === 'char' ? Array.from(text) : text.split(/(\s+)/);
    var i = 0;
    parts.forEach(function (p) {
      if (/^\s+$/.test(p)) { el.appendChild(document.createTextNode(p)); return; }
      var s = document.createElement('span');
      s.className = 'mp-seg';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = p;
      s.style.transitionDelay = (i++ * stagger) + 'ms';
      el.appendChild(s);
    });
    observe(el);
  }

  function textLoop(el) {
    var items = Array.prototype.slice.call(el.children);
    if (items.length < 2) return;
    var i = 0, interval = num(el, 'interval', 2500);
    items.forEach(function (it, idx) { it.classList.toggle('mp-loop-active', idx === 0); });
    if (reduce) return;
    setInterval(function () {
      items[i].classList.remove('mp-loop-active');
      items[i].classList.add('mp-loop-exit');
      var prev = items[i];
      setTimeout(function () { prev.classList.remove('mp-loop-exit'); }, 400);
      i = (i + 1) % items.length;
      items[i].classList.add('mp-loop-active');
    }, interval);
  }

  /* ---------- numbers ---------- */
  function animatedNumber(el) {
    var to = num(el, 'value', 0), from = num(el, 'from', 0);
    var fmt = new Intl.NumberFormat(el.getAttribute('data-mp-locale') || document.documentElement.lang || undefined);
    el.style.fontVariantNumeric = 'tabular-nums';
    el.textContent = fmt.format(from);
    observe(el, function () {
      spring(from, to, function (x) { el.textContent = fmt.format(Math.round(x)); },
        { stiffness: num(el, 'stiffness', 60), damping: num(el, 'damping', 20), restDelta: 0.5 });
    });
  }

  function slidingNumber(el) {
    var value = String(el.getAttribute('data-mp-value') || el.textContent).trim();
    el.setAttribute('aria-label', value);
    el.textContent = '';
    el.classList.add('mp-sliding');
    Array.from(value).forEach(function (ch) {
      var wrap = document.createElement('span');
      wrap.setAttribute('aria-hidden', 'true');
      if (!/\d/.test(ch)) { wrap.textContent = ch; el.appendChild(wrap); return; }
      wrap.className = 'mp-digit';
      var col = document.createElement('span');
      col.className = 'mp-digit-col';
      for (var d = 0; d <= 9; d++) { var s = document.createElement('span'); s.textContent = d; col.appendChild(s); }
      wrap.appendChild(col);
      el.appendChild(wrap);
      col.dataset.target = ch;
    });
    observe(el, function () {
      $all(el, '.mp-digit-col').forEach(function (col) {
        col.style.transform = 'translateY(' + (-Number(col.dataset.target) * 10) + '%)';
      });
    });
  }

  /* ---------- infinite slider (marquee) ---------- */
  function infiniteSlider(el) {
    var track = el.firstElementChild;
    if (!track) return;
    var gap = num(el, 'gap', 16), speed = num(el, 'speed', 60), hover = num(el, 'speed-hover', speed);
    var reverse = el.hasAttribute('data-mp-reverse');
    track.style.gap = gap + 'px';
    Array.prototype.slice.call(track.children).forEach(function (c) {
      var clone = c.cloneNode(true); clone.setAttribute('aria-hidden', 'true'); track.appendChild(clone);
    });
    if (reduce) return;
    var x = 0, cur = speed, target = speed, last = performance.now();
    el.addEventListener('pointerenter', function () { target = hover; });
    el.addEventListener('pointerleave', function () { target = speed; });
    (function tick(now) {
      var dt = (now - last) / 1000; last = now;
      cur += (target - cur) * Math.min(1, dt * 6); // smooth speed change like motion's transition
      var half = (track.scrollWidth + gap) / 2;
      x += (reverse ? 1 : -1) * cur * dt;
      if (x <= -half) x += half; if (x > 0) x -= half;
      track.style.transform = 'translate3d(' + x + 'px,0,0)';
      requestAnimationFrame(tick);
    })(last);
  }

  /* ---------- scroll progress ---------- */
  function scrollProgress(el) {
    var cur = 0, stop = function () {};
    el.style.transformOrigin = 'left';
    function target() {
      var h = document.documentElement.scrollHeight - innerHeight;
      return h > 0 ? scrollY / h : 0;
    }
    function update() {
      stop();
      stop = spring(cur, target(), function (v) { cur = v; el.style.transform = 'scaleX(' + v + ')'; },
        { stiffness: 200, damping: 50, restDelta: 0.001 });
    }
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  }

  /* ---------- progressive blur ---------- */
  var ANGLES = { top: 0, right: 90, bottom: 180, left: 270 };
  function progressiveBlur(el) {
    var layers = Math.max(num(el, 'layers', 8), 2), intensity = num(el, 'intensity', 0.25);
    var angle = ANGLES[el.getAttribute('data-mp-direction') || 'bottom'];
    var seg = 1 / (layers + 1);
    for (var i = 0; i < layers; i++) {
      var stops = [i, i + 1, i + 2, i + 3].map(function (p, j) {
        return 'rgba(255,255,255,' + (j === 1 || j === 2 ? 1 : 0) + ') ' + (p * seg * 100) + '%';
      });
      var d = document.createElement('div');
      var g = 'linear-gradient(' + angle + 'deg,' + stops.join(',') + ')';
      d.className = 'mp-blur-layer';
      d.style.maskImage = d.style.webkitMaskImage = g;
      d.style.backdropFilter = d.style.webkitBackdropFilter = 'blur(' + (i * intensity) + 'px)';
      el.appendChild(d);
    }
  }

  /* ---------- image comparison (before / after) ---------- */
  function imageComparison(el) {
    var imgs = el.querySelectorAll('img');
    if (imgs.length < 2) return;
    var handle = el.querySelector('.mp-handle') || el.appendChild(Object.assign(document.createElement('div'), { className: 'mp-handle' }));
    var hoverMode = el.hasAttribute('data-mp-hover');
    el.setAttribute('role', 'slider'); el.setAttribute('tabindex', '0');
    el.setAttribute('aria-valuemin', '0'); el.setAttribute('aria-valuemax', '100');
    if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', 'So sánh hai ảnh');
    function set(p) {
      p = Math.max(0, Math.min(100, p));
      imgs[1].style.clipPath = 'inset(0 0 0 ' + p + '%)';
      handle.style.left = p + '%';
      el.setAttribute('aria-valuenow', Math.round(p));
    }
    function fromEvent(e) { var r = el.getBoundingClientRect(); set(((e.clientX - r.left) / r.width) * 100); }
    var dragging = false;
    el.addEventListener('pointerdown', function (e) { dragging = true; el.setPointerCapture(e.pointerId); fromEvent(e); });
    el.addEventListener('pointermove', function (e) { if (dragging || hoverMode) fromEvent(e); });
    el.addEventListener('pointerup', function () { dragging = false; });
    el.addEventListener('keydown', function (e) {
      var now = Number(el.getAttribute('aria-valuenow'));
      if (e.key === 'ArrowLeft') { set(now - 5); e.preventDefault(); }
      if (e.key === 'ArrowRight') { set(now + 5); e.preventDefault(); }
    });
    set(num(el, 'start', 50));
  }

  /* ---------- carousel (scroll-snap, no fake physics) ---------- */
  function carousel(el) {
    var track = el.querySelector('[data-mp-track]') || el.firstElementChild;
    var slides = Array.prototype.slice.call(track.children);
    var prev = el.querySelector('[data-mp-prev]'), next = el.querySelector('[data-mp-next]');
    var dots = el.querySelector('[data-mp-dots]');
    function index() {
      var x = track.scrollLeft, best = 0;
      slides.forEach(function (s, i) { if (Math.abs(s.offsetLeft - track.offsetLeft - x) < Math.abs(slides[best].offsetLeft - track.offsetLeft - x)) best = i; });
      return best;
    }
    function go(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
    }
    if (prev) prev.addEventListener('click', function () { go(index() - 1); });
    if (next) next.addEventListener('click', function () { go(index() + 1); });
    if (dots) {
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        b.type = 'button'; b.setAttribute('aria-label', 'Đến ảnh ' + (i + 1));
        b.addEventListener('click', function () { go(i); });
        dots.appendChild(b);
      });
    }
    var sync = function () {
      var i = index();
      if (dots) Array.prototype.forEach.call(dots.children, function (d, j) { d.setAttribute('aria-current', j === i ? 'true' : 'false'); });
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === slides.length - 1;
    };
    track.addEventListener('scroll', function () { requestAnimationFrame(sync); }, { passive: true });
    sync();
  }

  /* ---------- transition panel (tabs with directional slide) ---------- */
  function transitionPanel(el) {
    var tabs = $all(el, '[data-mp-tab]'), panels = $all(el, '[data-mp-panel]');
    var active = Math.max(0, tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; }));
    el.querySelector('[data-mp-tab]').parentElement.setAttribute('role', 'tablist');
    function show(i) {
      var dir = i > active ? 1 : -1;
      tabs.forEach(function (t, j) { t.setAttribute('role', 'tab'); t.setAttribute('aria-selected', j === i); t.tabIndex = j === i ? 0 : -1; });
      panels.forEach(function (p, j) {
        p.setAttribute('role', 'tabpanel');
        p.hidden = j !== i;
        if (j === i && !reduce) p.animate([{ opacity: 0, transform: 'translateX(' + (12 * dir) + 'px)' }, { opacity: 1, transform: 'none' }], { duration: 260, easing: EASE });
      });
      active = i;
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(i); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          var n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
          tabs[n].focus(); show(n);
        }
      });
    });
    active = -1; show(Math.max(0, tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; })));
  }

  /* ---------- magnetic / tilt (pointer: fine only) ---------- */
  var finePointer = global.matchMedia && global.matchMedia('(pointer: fine)').matches;
  function magnetic(el) {
    if (reduce || !finePointer) return;
    var k = num(el, 'intensity', 0.3), range = num(el, 'range', 80);
    el.style.transition = 'transform 300ms ' + EASE;
    addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var dx = e.clientX - cx, dy = e.clientY - cy;
      var inside = Math.hypot(dx, dy) < range + Math.max(r.width, r.height) / 2;
      el.style.transform = inside ? 'translate(' + dx * k + 'px,' + dy * k + 'px)' : '';
    }, { passive: true });
  }
  function tilt(el) {
    if (reduce || !finePointer) return;
    var max = num(el, 'max', 6);
    el.style.transition = 'transform 400ms ' + EASE;
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = 'perspective(900px) rotateX(' + (-py * max) + 'deg) rotateY(' + (px * max) + 'deg)';
    });
    el.addEventListener('pointerleave', function () { el.style.transform = ''; });
  }

  /* ---------- morphing dialog (View Transitions API, graceful fallback) ---------- */
  function morphingDialog(trigger) {
    var dlg = document.querySelector(trigger.getAttribute('data-mp-target'));
    if (!dlg || typeof dlg.showModal !== 'function') return;
    var name = 'mp-morph-' + Math.random().toString(36).slice(2, 8);
    function run(fn) {
      if (!document.startViewTransition || reduce) return fn();
      document.startViewTransition(fn);
    }
    trigger.addEventListener('click', function () {
      trigger.style.viewTransitionName = name;
      run(function () { trigger.style.viewTransitionName = ''; dlg.style.viewTransitionName = name; dlg.showModal(); });
    });
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); close(); });
    $all(dlg, '[data-mp-close]').forEach(function (b) { b.addEventListener('click', close); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
    function close() {
      run(function () { dlg.close(); dlg.style.viewTransitionName = ''; trigger.style.viewTransitionName = name; });
      setTimeout(function () { trigger.style.viewTransitionName = ''; }, 500);
    }
  }

  var REGISTRY = {
    'in-view': inView, 'animated-group': animatedGroup, 'text-effect': textEffect, 'text-loop': textLoop,
    'animated-number': animatedNumber, 'sliding-number': slidingNumber, 'infinite-slider': infiniteSlider,
    'scroll-progress': scrollProgress, 'progressive-blur': progressiveBlur, 'image-comparison': imageComparison,
    'carousel': carousel, 'transition-panel': transitionPanel, 'magnetic': magnetic, 'tilt': tilt,
    'morphing-dialog': morphingDialog
  };

  function init(root) {
    root = root || document;
    $all(root, '[data-mp]').forEach(function (el) {
      el.getAttribute('data-mp').split(/\s+/).forEach(function (kind) {
        if (REGISTRY[kind] && once(el, kind)) REGISTRY[kind](el);
      });
    });
  }

  global.MotionPrimitives = { init: init, spring: spring, registry: REGISTRY };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();
})(window);
