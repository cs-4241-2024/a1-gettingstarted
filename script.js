//color palette
const palette = ["#4D2E5C", "#77279C", "#70862D", "#9600DB", "#A5DB00"]


var id = null;
window.onload = function () { //need window.onload so that you call the element *after* it's loaded
    //setup
    var draw_blob = function(which_color, how_big, radius, context){
        context.beginPath();
        context.strokeStyle = palette[which_color] || which_color; //in case i want to input a color for testing rn
        context.lineWidth = how_big;
        context.arc(-25, -25, radius, 0, 2 * Math.PI); //if at (0,0), line weight of 25 looks like it just appears on the page
        context.stroke();
    }

    //viewport units
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let max_view_dimen = Math.max(vw || vh);

    //blob start values
        var dist = 0; //this won't change -- original radius

        //non-rand color and updater
        var which_color = 1; //index of current color from palette array, skipping index 0 which is the background
        function next_color(){
            if (which_color < palette.length-1){
                which_color++;
            }else{
                which_color = 1;
            }
        }

        //size and randomizer
        var how_big = 5; 
        function rand_size(){
            how_big = (Math.random()*23) + 5;
        }

        //rand color + updater
        var rand_color = Math.floor((Math.random()*4) + 1);
        function update_rand_color(){ 
            rand_color = Math.floor((Math.random()*4) + 1); //index 1-4, exclude 0 (bg)
        }
   
    //static info blob
        var static = document.getElementById("static-canvas");
        var info = static.getContext("2d");

        draw_blob(0, 90, 200, info); //0 index in palette is bg color

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

                if(dist > max_view_dimen/2-400){ //why is this so jank
                    //console.log(max_view_dimen);
                    clearInterval(start_animation); //stop animating a blob once it gets off the screen
                                                    //i'd like to use viewport units for these.....
                }
            }
        }
        
        bg = setInterval(spawn_blob, 950) //let bg? is this only so you can clear interval later? best practice
                                          //also mathematically how to find the right ms interval so that blobs don't overlap (too much brain rn)
        function spawn_blob(){
            animate_blob(dist, which_color, how_big)
            next_color();
            rand_size();
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