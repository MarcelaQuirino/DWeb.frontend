const menuContainer = document.querySelector('.menu-container');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
  menuContainer.classList.toggle('active');
});