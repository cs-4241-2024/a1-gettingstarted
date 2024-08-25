document.addEventListener("DOMContentLoaded", function() {
    // Bounce animation for headers
    const headers = document.querySelectorAll('h1, h2');

    headers.forEach(header => {
        let position = 0;
        let direction = 1;
        const amplitude = 30; 
        const speed = 0.2; 
        
        function bounce() {
            position += direction * speed;
            if (position >= amplitude || position <= 0) {
                direction *= -1;
            }
            header.style.transform = `translateY(${position}px)`;
            requestAnimationFrame(bounce);
        }
        bounce();
    });

    // Dropdown toggle functionality
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        const dropdownContent = button.nextElementSibling;
        dropdownContent.style.display = "none"; // Ensure the dropdown is hidden initially
        
        button.addEventListener('click', function() {
            if (dropdownContent.style.display === "none") {
                dropdownContent.style.display = "block";
                this.innerHTML = "▲";
            } else {
                dropdownContent.style.display = "none";
                this.innerHTML = "▼";
            }
        });
    });
});
