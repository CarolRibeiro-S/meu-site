const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
