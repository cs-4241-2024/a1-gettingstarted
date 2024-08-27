//color palette
const palette = ["#AFF04D", "#71E649", "#D2D950", "#F0E24D", "#E6C849"]


var id = null;
window.onload = function () { //need window.onload so that you call the element *after* it's loaded
    var c = document.getElementById("top-left");
    var ctx = c.getContext("2d");
    var size = 0;
    var which_color = 1; //index of current color from palette array, skipping index 0 which is the background
    var how_big = 5; 

    clearInterval(id);

    id = setInterval(frame, 25);
    function frame() {
    if (size == 45) {
        //clearInterval(id); //stop animation
        ctx.clearRect(0, 0, 1000, 1000);
        size = 0;
        how_big = (Math.random() * 25) + 5; //line weight between 5 and 25
        if (which_color != palette.length){
            which_color++;
        }else{
            which_color = 1; //reset if at end of array
        }
    } else {
        ctx.clearRect(0, 0, 1000, 1000);
        //console.log(c.style.width); this is an empty string -- why? even if changed to pxls in style.css
        //ctx.clearRect(c.style.left, c.style.top, c.style.width, c.style.height);
        size++;
        ctx.beginPath();
        ctx.strokeStyle = palette[which_color];
        ctx.lineWidth = how_big;
        ctx.arc(0, 0, size, 0, 2 * Math.PI);
        ctx.stroke();
    }
  }

    
}