window.onload = function () {
    let red = 0;
    let green = 0;
    let blue = 0;
    let rotation = 10;
    let topValue = false;
    const fnc = function () {
      //console.log("test", red);
      document.body.style = "background-color:rgb(" + red + "," + green + ",  255)";
      document.getElementById("funnyImage").style.transform = "rotate(" + rotation + "deg)";
      if(topValue == false)
      {
        red++;
        green++;
        if(red == 255)
        {
          topValue = true; 
        }
      }
      else{
        topValue = true;
        red--;
        green--;
      }
      rotation = rotation + 2;
      if(red == 0)
      {
        topValue = false;
      }
      //if 
      //blue = blue + 30;
      setTimeout(fnc, 50);
      //red = red % 255;
      //green = green % 255;
      //blue = blue % 255;
    };
    setTimeout(fnc, 20);
  };
  