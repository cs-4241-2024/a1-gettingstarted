function main() {
    const body_div = document.getElementById('body_div');
    let angle = 0;
    function rotate_body_div() {
        angle += 1; // Increase the angle (1 degree per frame)
        body_div.style.transform = `rotate(${angle}deg)`; // Apply rotation
        if (angle === 360) angle = 0;
        requestAnimationFrame(rotate_body_div);
    }

    rotate_body_div ();
}

