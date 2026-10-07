/* site.js — optional progressive enhancement. The site works fully without it.
   Highlights the current section in an in-page table of contents (.toc):
   the matching link gets aria-current="location" while you scroll. */
(function () {
  var toc = document.querySelector('.toc');
  if (!toc || !('IntersectionObserver' in window)) return;

  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
  var targets = [];
  var byId = {};
  links.forEach(function (a) {
    var id = decodeURIComponent(a.getAttribute('href').slice(1));
    var el = id && document.getElementById(id);
    if (el) { byId[id] = a; targets.push(el); }
  });
  if (!targets.length) return;

  var current = null;
  function update() {
    var line = window.innerHeight * 0.3;
    var active = null;
    targets.forEach(function (t) { if (t.getBoundingClientRect().top <= line) active = t; });
    var id = active ? active.id : null;
    if (id === current) return;
    current = id;
    links.forEach(function (a) { a.removeAttribute('aria-current'); });
    if (id && byId[id]) byId[id].setAttribute('aria-current', 'location');
  }

  var observer = new IntersectionObserver(update, { rootMargin: '0px 0px -70% 0px' });
  targets.forEach(function (t) { observer.observe(t); });
  window.addEventListener('load', update);
})();
