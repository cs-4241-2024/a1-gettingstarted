document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    let colors = ["#FFB6C1", "#ADD8E6", "#98FB98", "#FFD700"]; // You can customize these colors
    let currentIndex = 0;
  
    function changeBackgroundColor() {
      body.style.transition = "background-color 2s ease-in-out";
      body.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }
  
    setInterval(changeBackgroundColor, 4000); // Change color every 4 seconds
  });