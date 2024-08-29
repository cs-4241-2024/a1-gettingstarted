document.addEventListener('DOMContentLoaded', function() {
  const animatedBox = document.querySelector('.animated-box');

  animatedBox.addEventListener('click', function() {
    // Add the 'bounce' class to trigger the animation
    animatedBox.classList.add('bounce');

    // Remove the 'bounce' class after animation completes (1 second)
    setTimeout(function() {
      animatedBox.classList.remove('bounce');
    }, 1000);
  });
});
