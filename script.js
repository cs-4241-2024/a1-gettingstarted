
const animateBox = document.getElementById('animateBox');


let position = 0; // Starting position
let requestId; // To store the requestAnimationFrame ID


function animate() {
    if (position < window.innerWidth - 100) {
        position += 2; // Speed of the animation
        animateBox.style.left = position + 'px';
        requestId = requestAnimationFrame(animate);
    } else {
        cancelAnimationFrame(requestId);
    }
}

animateBox.addEventListener('click', function () {
    position = 0;
    cancelAnimationFrame(requestId);
    animate();
});

