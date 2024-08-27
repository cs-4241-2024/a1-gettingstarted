
var id = null;
window.onload = function () { //need window.onload so that you call the element *after* it's loaded
    var c = document.getElementById("top-left");
    var ctx = c.getContext("2d");

    var size = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (size == 350) {
      clearInterval(id);
    } else {
        ctx.clearRect(0, 0, 1000, 1000);
        //console.log(c.style.width); this is an empty string -- why? even if changed to pxls in style.css
      //ctx.clearRect(c.style.left, c.style.top, c.style.width, c.style.height);
        size++;
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, 2 * Math.PI);
        ctx.stroke();
    }
  }

    
}