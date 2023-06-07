document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling to section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Toggle mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navigationMenu = document.querySelector('.navigation-menu');
  
    navToggle.addEventListener('click', () => {
      navigationMenu.classList.toggle('show');
    });
  });
  