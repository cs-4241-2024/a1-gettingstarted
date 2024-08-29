
window.onload = function () {
    let red = 0;
    let green = 207;
    let blue = 234;
    const fnc = function () {
      console.log("test", red);
      document.body.style = "background-color:rgb(" + red + ", " + green + ", " + blue + ")";
      setTimeout(fnc, 50);
      if(red < 50)
        {
          red++;
        }
        if(green > 138)
        {
          green--;
        }
        if(blue > 150)
        {
          blue--;
        }
    };
    setTimeout(fnc, 20);
  };

