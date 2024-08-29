window.onload = function () {
  const table = document.querySelector('.skill-table');
  let n = 1;
  let forward = 1;
  const fnc = function() {
    if (forward) {
      n += 0.5;
    } else {
      n -= 0.5;
    }
    if (forward && n == 90) {
      forward = 0;
    }
    if (!forward && n == 0) {
      forward = 1;
    }
    table.style.marginLeft = `${n}%`;
  };
  setInterval(fnc,100);
};

