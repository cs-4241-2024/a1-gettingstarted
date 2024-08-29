document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('top-header');

    // Set initial position
    header.style.transform = 'translateY(-100%)';
    header.style.opacity = '0';

    // Trigger the animation after a short delay
    setTimeout(() => {
        header.style.transition = 'transform 0.5s, opacity 0.5s';
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }, 100);
});