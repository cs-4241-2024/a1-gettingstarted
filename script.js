document.addEventListener("DOMContentLoaded", function () {
    const name = document.getElementById("name");
    let green = 0
    setInterval(function () {
        green = (green + 10) % 255
        let g;
        if (green > 255 / 2) {
            g = 255 - green;
        } else {
            g = green;
        }
        console.log(g);
        name.style.color = "rgb(0," + g + ",255)"
    }, 100)
})