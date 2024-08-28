document.addEventListener('DOMContentLoaded', () => {
    const listOfButtons = document.querySelectorAll('.button');

    listOfButtons.forEach(button => {
        let isEnlarged = false; 
        button.addEventListener('click', () => {
            const textElement = button.parentElement;
            if (isEnlarged == false) {
                textElement.style.fontSize = `${32}px`;
                isEnlarged = true;
            } else {
                textElement.style.fontSize = `${16}px`;
                isEnlarged = false;
            }
        });
    });
});
