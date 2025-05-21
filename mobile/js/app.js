const menuToggle = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link__mobile');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });