document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("top-header");

    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";

    setTimeout(() => {
        header.style.transition = "transform 0.5s, opacity 0.5s";
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
    }, 100);
});
