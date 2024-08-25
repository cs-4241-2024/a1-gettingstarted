document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('wiggle-header');
    let angle = 0;
    let isWiggling = false;

    function wiggle() {
        if (isWiggling) {
            angle += 0.3;
            header.style.transform = `rotate(${Math.sin(angle) * 2}deg)`;

            if (angle > Math.PI * 2) {
                isWiggling = false;
                angle = 0;
                header.style.transform = 'rotate(0deg)';
            } else {
                requestAnimationFrame(wiggle);
            }
        }
    }

    function startWiggle() {
        if (!isWiggling) {
            isWiggling = true;
            wiggle();
        }
    }

    setInterval(startWiggle, 3000);
});