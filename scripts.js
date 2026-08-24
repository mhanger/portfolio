document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.scroll');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 56, // Adjust for fixed navbar height
                behavior: 'smooth'
            });

            // Collapse the navbar
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});
