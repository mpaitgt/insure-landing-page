const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu-content');
  const navLinks = document.querySelectorAll('.nav-link');
  const page = document.querySelector('.section-one');

  burger.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    page.classList.toggle('section-one-nav-active');
  })

  nav.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    page.classList.toggle('section-one-nav-active');
  })
}

window.onload = function() {
  navSlide();
}