/* Toggle de tema día / noche con preferencia persistida.
   El default de marca es "night"; en la primera visita se respeta
   prefers-color-scheme. La elección del usuario queda en localStorage. */
(function () {
  var root = document.querySelector('.report-root');
  var btn = document.querySelector('.theme-toggle');
  if (!root || !btn) return;

  var KEY = 'tao-cashflow-theme';

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    btn.setAttribute('aria-pressed', theme === 'day' ? 'true' : 'false');
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* almacenamiento no disponible */ }

  var prefersLight = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;

  apply(saved || (prefersLight ? 'day' : 'night'));

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'day' ? 'night' : 'day';
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
  });
})();
