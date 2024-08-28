//Javascript animation
document.addEventListener('DOMContentLoaded', () => {
    const h1Element = document.querySelector('h1'); //select only the items in the H1 tag

    // Array of colors to cycle through
    const colors = ['#A59B94', '#523018', '#7A6759', '#FABB8E', '#332114', '#CFB099']; //use the color palette colors

    let currentColorIndex = 0;

    // Function to change the color
    function changeColor() {
        h1Element.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Change color every 3 seconds
    setInterval(changeColor, 3000);
});
