document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    let color = true;

    setInterval(() => {
        header.style.color = color ? '#ff6347' : '#D99B38';
        color = !color;
    }, 1000);
});