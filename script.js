(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menu = document.getElementById('mobileMenu');
  const openButton = document.getElementById('menuOpen');
  const closeButton = document.getElementById('menuClose');
  const year = document.getElementById('currentYear');

  const savedTheme = localStorage.getItem('academic-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) root.dataset.theme = 'dark';

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('academic-theme', next);
  });

  const setMenu = (open) => {
    menu?.classList.toggle('is-open', open);
    menu?.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  openButton?.addEventListener('click', () => setMenu(true));
  closeButton?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  if (year) year.textContent = String(new Date().getFullYear());
})();
