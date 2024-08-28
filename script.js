//color palette
const palette = ["#4D2E5C", "#77279C", "#70862D", "#9600DB", "#A5DB00"]

//dont ever use var -- let for changeable stuff, const for constant
window.onload = function () { //need window.onload so that you call the element *after* it's loaded
    //setup
    const radial_center = 0;
    const draw_blob = function(which_color, how_big, radius, context){
        context.beginPath();
        context.strokeStyle = palette[which_color] || which_color; //in case i want to input a color for testing rn
        context.lineWidth = how_big;
        context.arc(radial_center, radial_center, radius, 0, (3 * Math.PI)/2); //if at (0,0), line weight of 25 looks like it just appears on the page
        context.stroke();
    }

    //viewport units
    //drawing offscreen prob doesnt use proccessing power
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let max_view_dimen = Math.max(vw || vh);

    //blob start values
        const dist = 0; //this won't change -- original radius

        //non-rand color and updater
        let which_color = 1; //index of current color from palette array, skipping index 0 which is the background
        const next_color = function() { //const name = function(){} is newer/more preferred than function name(){}
            if (which_color < palette.length-1){
                which_color++;
            }else{
                which_color = 1;
            }
        }

        //size and randomizer
        let how_big = 5; 
        const rand_size = function(){
            how_big = (Math.random()*23) + 5;
        }

        //rand color + updater
        let rand_color = Math.floor((Math.random()*4) + 1);
        const update_rand_color = function(){ 
            rand_color = Math.floor((Math.random()*4) + 1); //index 1-4, exclude 0 (bg)
        }
   
    //static info blob
        const static = document.getElementById("static-canvas");
        const info = static.getContext("2d");

        draw_blob(0, 92, 170, info); //0 index in palette is bg color

    //animated blobs
        const animation = document.getElementById("animation-canvas");
        const anim = animation.getContext("2d");

        const animate_blob = function(dist, color, how_big){

            let start_animation = setInterval(erase_and_draw, 25);

            //if rename as variable like below, have to call it to start 
              //but this is an unnecessary line of code since it is not called anywhere else
              //so in this case it's more efficient to just define as function
            //const erase_and_draw = function(){
            //let erase_and_draw = function(){

            function erase_and_draw(){ //drawing over is actually prob more efficient than clearing
                draw_blob(palette[0], how_big + 1, dist, anim); //clear
                dist++;
                draw_blob(color, how_big, dist, anim); //draw

                if(dist > max_view_dimen/2-400){ //why is this so jank
                    //console.log(max_view_dimen);
                    clearInterval(start_animation); //stop animating a blob once it gets off the screen
                                                    //i'd like to use viewport units for these.....
                }
            }
        }
        
        let bg = setInterval(spawn_blob, 950) //let bg? is this only so you can clear interval later? best practice
                                          //also mathematically how to find the right ms interval so that blobs don't overlap (too much brain rn)
        
        //neither of these work, even if i separately call spawn_blob()
          //does setInterval() only work with functions not defined as variables? is it depreciated? how would i know that?
        //const spawn_blob = function(){    
        //let spawn_blob = function(){                                 
        function spawn_blob(){
            animate_blob(dist, which_color, how_big)
            next_color();
            rand_size();
        }

        //spawn_blob();

    //setInterval(animate_blob(dist, rand_color, how_big), 10);
    
}