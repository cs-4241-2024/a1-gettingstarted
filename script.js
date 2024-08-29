document.addEventListener("DOMContentLoaded", () => {
  const circleOutline = document.querySelector(".circle-outline");
  const circleOutline2 = document.querySelector(".circle-outline2");

  let angle = 0;
  let reverseAngle = 0;
  let animationFrameId;

  function rotate() {
    angle += 0.1; // Rotation speed
    reverseAngle -= 0.1; // Reverse rotation

    if (circleOutline) {
      circleOutline.style.transform = `rotate(${angle}deg)`;
    }
    if (circleOutline2) {
      circleOutline2.style.transform = `rotate(${reverseAngle}deg)`;
    }

    animationFrameId = requestAnimationFrame(rotate);
  }

  // Start animation on hover
  document.querySelector(".main_img").addEventListener("mouseenter", () => {
    animationFrameId = requestAnimationFrame(rotate);
  });

  // Stop animation on mouse leave
  document.querySelector(".main_img").addEventListener("mouseleave", () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    if (circleOutline) {
      circleOutline.style.transform = ""; // Reset rotation
    }
    if (circleOutline2) {
      circleOutline2.style.transform = ""; // Reset rotation
    }
    angle = 0; // Reset angle
    reverseAngle = 0; // Reset reverse angle
  });
});
