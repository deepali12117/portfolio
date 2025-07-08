document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more JavaScript here later, such as:
    // - A "scroll to top" button
    // - Simple animations on scroll (e.g., revealing sections)
    // - A hamburger menu for mobile navigation
});