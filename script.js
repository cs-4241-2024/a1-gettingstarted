//color palette
const palette = ["#4D2E5C", "#77279C", "#70862D", "#9600DB", "#A5DB00"]


var id = null;
window.onload = function () { //need window.onload so that you call the element *after* it's loaded
    //setup
    var draw_blob = function(which_color, how_big, radius, context){
        context.beginPath();
        context.strokeStyle = palette[which_color] || which_color; //in case i want to input a color for testing rn
        context.lineWidth = how_big;
        context.arc(0, 0, radius, 0, 2 * Math.PI);
        context.stroke();
    }

    //blob start values
    var dist = 0;
    var which_color = 1; //index of current color from palette array, skipping index 0 which is the background
    var how_big = 5; 

    //rand color + updater
    var rand_color = Math.floor((Math.random()*4) + 1);
    function update_rand_color(){ 
        rand_color = Math.floor((Math.random()*4) + 1); //index 1-4, exclude 0 (bg)
    }
   
    //static info blob
    var static = document.getElementById("static-canvas");
    var info = static.getContext("2d");

    draw_blob("blue", 75, 175, info); //change blue to 0; 0 index in palette is bg color

    //animated blobs
    var animation = document.getElementById("animation-canvas");
    var anim = animation.getContext("2d");

    function animate_blob(dist, color, how_big){

        let start_animation = setInterval(erase_and_draw, 25);

        function erase_and_draw(){
            draw_blob(palette[0], how_big + 1, dist, anim); //clear
            //anim.clearRect(0, 0, 1000, 1000); //see above (to get multiple blobs at once, clear right away by immediately redrawing over it in bg color)
            //console.log(c.style.width); this is an empty string -- why? even if changed to pxls in style.css
            //anim.clearRect(c.style.left, c.style.top, c.style.width, c.style.height);
            dist++;
            draw_blob(color, how_big, dist, anim); //draw
            console.log(rand_color);

            if(dist > 450){
                clearInterval(start_animation);
            }
        }
    }

    bg = setInterval(animate_background, 500)
    function animate_background(){
        animate_blob(dist, rand_color, how_big)
        update_rand_color();
    }

    //setInterval(animate_blob(dist, rand_color, how_big), 10);

    //id = setInterval(frame, 25);
/*
    function frame() {
    if (dist == 45) {
        //clearInterval(id); //stop animation
        //anim.clearRect(0, 0, 1000, 1000);
        draw_blob(palette[0], how_big + 3, dist, anim);
        dist = 0;
        how_big = (Math.random() * 25) + 5; //line weight between 5 and 25
        if (which_color != palette.length-1){
            which_color++;
        }else{
            which_color = 1; //reset if at end of array
        }
    } else {
        //draw_blob(palette[0], how_big + 3, dist, anim); //clear
        //anim.clearRect(0, 0, 1000, 1000); //see above (to get multiple blobs at once, clear right away by immediately redrawing over it in bg color)
        //console.log(c.style.width); this is an empty string -- why? even if changed to pxls in style.css
        //anim.clearRect(c.style.left, c.style.top, c.style.width, c.style.height);
        //dist++;
        //draw_blob(which_color, how_big, dist, anim); //draw
        
    }
    
  }*/


    
}