console.log("Portfolio loaded");

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Animated letter effect for Instagram and LinkedIn links
    const animatedLinks = document.querySelectorAll('.animated-link');

    animatedLinks.forEach(link => {
        const text = link.getAttribute('data-text');
        link.innerHTML = '';

        // Split text into individual letters and wrap each in a span
        text.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            link.appendChild(span);
        });
    });
});
