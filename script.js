const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.querySelector('.sr-only').textContent = open ? 'Abrir navegación' : 'Cerrar navegación';
  nav.toggleAttribute('data-open', !open);
});

nav?.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.querySelector('.sr-only').replaceChildren('Abrir navegación');
  nav.removeAttribute('data-open');
});

