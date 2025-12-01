console.log("Portfolio loaded");

document.addEventListener('DOMContentLoaded', () => {
    const projectsLink = document.getElementById('projects-link');

    if (projectsLink) {
        projectsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
