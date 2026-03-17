document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle) {
    toggle.addEventListener('click', () => mobileNav.classList.toggle('active'));
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileNav.classList.remove('active'))
    );
  }

  // Horizontal scroll
  const hSection = document.querySelector('.hscroll-section');
  const hTrack = document.querySelector('.hscroll-track');
  if (hSection && hTrack) {
    const panels = hTrack.querySelectorAll('.hscroll-panel');
    window.addEventListener('scroll', () => {
      const rect = hSection.getBoundingClientRect();
      const h = hSection.offsetHeight - window.innerHeight;
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const p = Math.abs(rect.top) / h;
        hTrack.style.transform = `translateX(-${Math.min(p * (panels.length - 1) * 100, (panels.length - 1) * 100)}vw)`;
      }
    }, { passive: true });
  }

  // Scroll reveal
  const els = document.querySelectorAll('.card, .bento-item, .team-member, .section-title');
  els.forEach(el => el.classList.add('reveal'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('.stat-num');
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target, target = +el.dataset.target;
        const start = performance.now();
        (function tick(now) {
          const p = Math.min((now - start) / 1200, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = target >= 1000 ? Math.round(eased * target).toLocaleString() : Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
        })(start);
        cObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cObs.observe(c));

  // Video click
  document.querySelectorAll('.vid').forEach(v => {
    v.addEventListener('click', () => {
      const id = v.dataset.videoId;
      if (!id || id.startsWith('PLACEHOLDER')) {
        window.open('https://www.youtube.com/@ALUTHINKSPHERE', '_blank');
        return;
      }
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;border-radius:inherit;';
      v.innerHTML = '';
      v.appendChild(iframe);
    });
  });

  // Stagger bento
  document.querySelectorAll('.bento-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
});
