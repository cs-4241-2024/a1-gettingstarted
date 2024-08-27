window.onload = function () {
    let red = 0;
    let green = 0;
    let blue = 0;
    let rotation = 10;
    const fnc = function () {
      //console.log("test", red);
      document.body.style =
        "background-color:rgb(" + red + "," + green + ",  255)";
      document.getElementById("funnyImage").style.transform =
        "rotate(" + rotation + "deg)";
      red++;
      rotation = rotation + 2;
      green = green + 2;
      //if 
      //blue = blue + 30;
      setTimeout(fnc, 50);
      red = red % 255;
      green = green % 255;
      //blue = blue % 255;
    };
    setTimeout(fnc, 20);
  };
  