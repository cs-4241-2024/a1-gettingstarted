
    function myMove() {

        let id = null;
        const elem = document.getElementById("animate");  
  
        let pos = 0;
        let neg = 630;
        let lap = 0;
        
     
        clearInterval(id);
  
        id = setInterval(frame, 2);
        
  
        function frame() {
            if (pos == 630) {
              lap = 1;
            } else {
              pos++; 
              elem.style.left = pos + "px"; 
            }
          if(lap == 1){
            if(neg >= 1){
              neg--; 
              elem.style.left = neg + "px"; 
            } else {
              lap = 0;
              pos = 0;
              neg = 630;
              frame();
            } 
        }
      }
  
      
    } 
  
  