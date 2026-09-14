(() => {
  'use strict';
  const isChinese = document.documentElement.lang === 'zh-CN';
  const menu = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  function setMenu(open) {
    if (!menu || !mobileNav) return;
    mobileNav.hidden = !open;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', isChinese ? (open ? '关闭导航' : '打开导航') : (open ? 'Close navigation' : 'Open navigation'));
  }
  if (menu && mobileNav) {
    menu.addEventListener('click', () => setMenu(mobileNav.hidden));
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menu.focus(); }
    });
    window.matchMedia('(min-width: 621px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
  }
  const filters = Array.from(document.querySelectorAll('.filter'));
  const groups = Array.from(document.querySelectorAll('.pub-group'));
  const status = document.getElementById('resultsStatus');
  const resultLabels = isChinese ? {all:'15 篇已发表论文',journal:'12 篇期刊论文',conference:'3 篇会议论文',review:'3 篇已投稿件'} : {all:'15 published papers',journal:'12 journal articles',conference:'3 conference papers',review:'3 submitted manuscripts'};
  function applyFilter(key) {
    filters.forEach(button => {
      const active = button.dataset.filter === key;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    groups.forEach(group => { group.hidden = key === 'all' ? group.dataset.group === 'review' : group.dataset.group !== key; });
    if (status) status.textContent = resultLabels[key];
  }
  filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  function revealLinkedPaper() {
    const hash = window.location.hash;
    if (!/^#paper-\d+$/.test(hash)) return;
    const paper = document.getElementById(hash.slice(1));
    if (!paper) return;
    const group = paper.closest('.pub-group');
    if (group && group.hidden) applyFilter(group.dataset.group);
    requestAnimationFrame(() => paper.scrollIntoView({block:'start'}));
  }
  if (filters.length) {
    revealLinkedPaper();
    window.addEventListener('hashchange', revealLinkedPaper);
  }
  const homeSections = ['about', 'research', 'experience']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const sectionLinks = Array.from(document.querySelectorAll('.desktop-nav a, .mobile-nav a'))
    .filter(link => homeSections.some(section => link.getAttribute('href')?.endsWith(`#${section.id}`)));
  function setActiveSection(id) {
    sectionLinks.forEach(link => {
      const active = link.getAttribute('href')?.endsWith(`#${id}`);
      if (active) link.setAttribute('aria-current', 'location');
      else if (link.getAttribute('aria-current') === 'location') link.removeAttribute('aria-current');
    });
  }
  if (homeSections.length && sectionLinks.length && 'IntersectionObserver' in window) {
    const visibleSections = new Map();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => visibleSections.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
      const current = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
      if (current && current[1] > 0) setActiveSection(current[0]);
    }, {rootMargin: '-22% 0px -58% 0px', threshold: [0, .15, .35, .6]});
    homeSections.forEach(section => observer.observe(section));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
