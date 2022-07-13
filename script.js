// Toggle Menu
const navToggle = document.getElementById('nav-toggle');
const navToggleOpen = document.getElementById('nav-open');
const navToggleClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');
function revealMenu() {
  if (navToggleOpen.style.display === 'none') {
    navToggleClose.style.display = 'none';
    navToggleOpen.style.display = 'block';
    navMenu.classList.remove('show');
  } else {
    navMenu.classList.add('show');
    navToggleClose.style.display = 'block';
    navToggleOpen.style.display = 'none';
  }
}

navToggle.addEventListener('click', revealMenu);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}
