// Slide deck engine. Shared by every lessen/module-N/slides.html.
//
// Markup:  <div class="deck"><div class="stage"> <section class="slide" data-section="1.1 Wat is AI?">…</section> … </div></div>
// Steps:   any element with class "step" is revealed one click at a time.
// Demos:   <iframe data-src="demos/x.html"> loads when its slide is first shown.
// Keys:    → / space / PageDown = next · ← / PageUp = back · Home / End · F = fullscreen · T = timer · B = black screen
// Print:   open slides.html?print and print to PDF (one slide per page, all steps visible).
(() => {
  const W = 1920, H = 1080;
  const deck = document.querySelector('.deck');
  const stage = deck.querySelector('.stage');
  const slides = [...stage.querySelectorAll(':scope > section.slide')];
  const printMode = new URLSearchParams(location.search).has('print');

  // A slide without data-section inherits it from the slide before.
  let section = '';
  for (const s of slides) {
    if (s.dataset.section !== undefined) section = s.dataset.section; else s.dataset.section = section;
  }

  if (printMode) {
    document.documentElement.classList.add('print');
    slides.forEach((s) => s.classList.add('active'));
    return;
  }

  // ---------- chrome ----------
  const el = (tag, cls, html = '') => { const e = document.createElement(tag); e.className = cls; e.innerHTML = html; stage.appendChild(e); return e; };
  const footer = el('div', 'deck-footer', '<span class="f-sec"></span><span class="f-num"></span>');
  const progress = el('div', 'deck-progress');
  const nav = el('div', 'deck-nav', '<button data-d="-1" aria-label="Vorige">‹</button><button data-d="1" aria-label="Volgende">›</button>');
  const timer = el('div', 'deck-timer');
  const black = el('div', 'deck-black');

  // ---------- scaling ----------
  function fit() {
    const k = Math.min(innerWidth / W, innerHeight / H);
    stage.style.transform = `scale(${k}) translate(-50%, -50%)`;
  }
  addEventListener('resize', fit);
  fit();

  // ---------- navigation ----------
  let index = -1;
  let stepIndex = 0;
  const stepsOf = (s) => [...s.querySelectorAll('.step')];

  function applySteps(slide) {
    const steps = stepsOf(slide);
    steps.forEach((st, i) => {
      st.classList.toggle('shown', i < stepIndex);
      st.classList.toggle('current', i === stepIndex - 1);
    });
    slide.dataset.step = String(stepIndex);
    slide.dispatchEvent(new CustomEvent('step', { detail: { step: stepIndex, total: steps.length } }));
  }

  function show(i, fromBehind = false) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    if (i === index) return;
    if (index >= 0) {
      slides[index].classList.remove('active');
      slides[index].dispatchEvent(new CustomEvent('leave'));
    }
    index = i;
    const slide = slides[index];
    stepIndex = fromBehind ? stepsOf(slide).length : 0;
    slide.querySelectorAll('iframe[data-src]').forEach((f) => { if (!f.src) f.src = f.dataset.src; });
    slide.classList.add('active');
    applySteps(slide);
    slide.dispatchEvent(new CustomEvent('enter'));
    footer.querySelector('.f-sec').textContent = slide.dataset.section || '';
    footer.querySelector('.f-num').textContent = `${index + 1} / ${slides.length}`;
    footer.style.visibility = slide.classList.contains('title') ? 'hidden' : 'visible';
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    history.replaceState(null, '', `#${index + 1}`);
    if (document.activeElement && document.activeElement.tagName === 'IFRAME') document.activeElement.blur();
  }

  function next() {
    const slide = slides[index];
    if (stepIndex < stepsOf(slide).length) { stepIndex++; applySteps(slide); } else show(index + 1);
  }
  function prev() {
    const slide = slides[index];
    if (stepIndex > 0) { stepIndex--; applySteps(slide); } else show(index - 1, true);
  }

  // ---------- timer ----------
  let started = null;
  setInterval(() => {
    if (!timer.classList.contains('on')) return;
    const now = new Date();
    const sec = Math.floor((now - started) / 1000);
    const pad = (n) => String(n).padStart(2, '0');
    timer.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}  ·  ${Math.floor(sec / 3600)}:${pad(Math.floor(sec / 60) % 60)}:${pad(sec % 60)}`;
  }, 500);

  // ---------- input ----------
  function key(k) {
    switch (k) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ': case 'Enter': next(); return true;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace': prev(); return true;
      case 'Home': show(0); return true;
      case 'End': show(slides.length - 1); return true;
      case 'f': case 'F':
        if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {});
        return true;
      case 't': case 'T':
        if (!started) started = new Date();
        timer.classList.toggle('on');
        return true;
      case 'b': case 'B': black.classList.toggle('on'); return true;
      default: return false;
    }
  }
  addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
    if (t && t.tagName === 'BUTTON' && (e.key === ' ' || e.key === 'Enter')) return;
    if (key(e.key)) e.preventDefault();
  });
  // Demos inside an iframe forward navigation keys (see shared/demo.js).
  addEventListener('message', (e) => { if (e.data && e.data.type === 'deck-key') key(e.data.key); });
  nav.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) (b.dataset.d === '1' ? next : prev)(); });
  addEventListener('hashchange', () => { const n = parseInt(location.hash.slice(1), 10); if (n) show(n - 1); });

  show((parseInt(location.hash.slice(1), 10) || 1) - 1);
  window.deck = { next, prev, show: (n) => show(n - 1), slides };
})();
