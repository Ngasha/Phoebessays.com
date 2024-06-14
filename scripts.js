document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
      hamburger.classList.toggle('open');
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
          mobileNav.classList.remove('show');
          hamburger.classList.remove('open');
      }
  });
});
