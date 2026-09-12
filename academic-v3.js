const menuButton = document.getElementById('menuButton');
const mobileNav = document.getElementById('mobileNav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const filters = document.querySelectorAll('.filter');
const groups = document.querySelectorAll('.pub-group');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    groups.forEach(group => {
      const groupType = group.dataset.group;
      group.classList.toggle('hidden', filter !== 'all' && groupType !== filter);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
