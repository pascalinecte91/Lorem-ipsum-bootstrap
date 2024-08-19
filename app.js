
document.addEventListener('DOMContentLoaded', function() {
    new bootstrap.Carousel(document.getElementById('carouselContent'), {
      interval: 3000,
      pause: false
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();   // new date recupere l'annee en cours
    document.getElementById('currentYear').textContent = currentYear;
});

document.addEventListener('DOMContentLoaded', function() {
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-item .nav-link');
  let isExpanded = false;

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          if (this.textContent.trim().toLowerCase() === 'accueil') {
              if (!isExpanded) {
                  mainNav.classList.add('expanded');
                  isExpanded = true;
              }
          } else {
              mainNav.classList.remove('expanded');
              isExpanded = false;
          }

          // Retire la classe 'active' de tous les liens
          navLinks.forEach(l => l.classList.remove('active'));
          
          // Ajoute la classe 'active' au lien cliqué
          this.classList.add('active');

          // Fait défiler jusqu'à la section correspondante
          const targetId = this.getAttribute('href');
          document.querySelector(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});