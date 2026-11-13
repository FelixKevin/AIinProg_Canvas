// Include in every demo. When the demo runs inside a slide, the arrow / page keys still move the deck,
// unless you are typing in a field.
(() => {
  if (window.parent === window) return;
  const keys = new Set(['ArrowRight', 'ArrowLeft', 'PageDown', 'PageUp']);
  addEventListener('keydown', (e) => {
    const t = e.target;
    const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
    const paging = e.key === 'PageDown' || e.key === 'PageUp';
    if (!keys.has(e.key) || (typing && !paging)) return;
    e.preventDefault();
    window.parent.postMessage({ type: 'deck-key', key: e.key }, '*');
  });
})();
