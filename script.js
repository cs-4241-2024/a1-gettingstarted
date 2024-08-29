// Get racing elements
const raceElements = [];
for (let element of document.getElementsByClassName("racer")) {
  raceElements.push({ position: 0, velocity: 0, element: element });
}

// Function that executes one frame of the race
const raceStep = () => {
  let raceOver = false;

  for (let racer of raceElements) {
    // Velocity is changed randomly, must stay above 0
    racer.velocity = Math.max(racer.velocity + Math.random() - 0.5, 0);
    racer.position += racer.velocity;
    racer.element.style = "margin-left: " + racer.position + "px";

    // If the racer is close enough to the right side of the screen, it wins
    if (
      racer.element.getBoundingClientRect().right >=
      document.body.clientWidth - 20
    ) {
      racer.element.style.background = "green";
      raceOver = true;
      break;
    }
  }

  // If the race is still going, step another frame
  if (!raceOver) requestAnimationFrame(raceStep);
};

// Start race on button click
document.getElementsByTagName("button")[0].onclick = () => {
  // Reset race (in case this is not the first time it is being run)
  for (let racer of raceElements) {
    racer.position = 0;
    racer.velocity = 0;
  }

  requestAnimationFrame(raceStep);
};
