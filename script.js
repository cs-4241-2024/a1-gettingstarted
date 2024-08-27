//color palette
const palette = ["#AFF04D", "#71E649", "#D2D950", "#F0E24D", "#E6C849"]


var id = null;
window.onload = function () { //need window.onload so that you call the element *after* it's loaded
    //setup
    var draw_blob = function(which_color, how_big, radius, context){
        context.beginPath();
        context.strokeStyle =  which_color;
        context.lineWidth = how_big;
        context.arc(0, 0, radius, 0, 2 * Math.PI);
        context.stroke();
    }
   
    //static info blob
    var static = document.getElementById("static-canvas");
    var info = static.getContext("2d");

    draw_blob("blue", 25, 100, info); //ok its working but it's getting cleared

    //animated blobs
    var animation = document.getElementById("animation-canvas");
    var anim = animation.getContext("2d");
    var size = 0;
    var which_color = 1; //index of current color from palette array, skipping index 0 which is the background
    var how_big = 5; 

    //clearInterval(id);

    id = setInterval(frame, 25);
    function frame() {
    if (size == 450) {
        //clearInterval(id); //stop animation
        anim.clearRect(0, 0, 1000, 1000);
        size = 0;
        how_big = (Math.random() * 25) + 5; //line weight between 5 and 25
        if (which_color != palette.length){
            which_color++;
        }else{
            which_color = 1; //reset if at end of array
        }
    } else {
        anim.clearRect(0, 0, 1000, 1000);
        //console.log(c.style.width); this is an empty string -- why? even if changed to pxls in style.css
        //anim.clearRect(c.style.left, c.style.top, c.style.width, c.style.height);
        size++;
        draw_blob(which_color, how_big, size, anim); 
    }
  }

    
}