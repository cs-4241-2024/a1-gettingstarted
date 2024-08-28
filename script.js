window.onload = function () {
  const table = document.querySelector('.skill-table');
  let n = 18;
  let forward = 1;
  const fnc = function() {
    if (forward) {
      n++;
    } else {
      n--;
    }
    if (forward && n == 100) {
      forward = 0;
    }
    if (!forward && n == 18) {
      forward = 1;
    }
    table.style.marginLeft = `${n-18}%`;
  };
  setInterval(fnc,50);
};

