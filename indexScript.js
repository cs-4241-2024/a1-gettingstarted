
function showOrHideExtraText(id){
    let gridContainer = document.getElementById(id)
    let hiddenText = gridContainer.getElementsByClassName("extraTextHidden")
    for(let element of hiddenText){
        if(element.style.display === "none" || element.style.display===""){
            element.style.display = "flex"
        }
        else{
            element.style.display = "none"
        }
    }

}

function fadeOutAndChange(id){
    let image = document.getElementById(id)
    if(image.style.opacity===""){
        image.style.opacity = "1"
    }
    let hidePromise = new Promise((resolve,reject) => {
        let hide = setInterval(function(){
            if(image.style.opacity>0 ){
                image.style.opacity = (parseFloat(image.style.opacity) - 0.0625).toString()
            }
            else{
                let url = image.src.split("/")
                let src = url[url.length-1]
                if(src==="usa.png"){
                    image.src="singapore.png"
                }
                else{
                    image.src="usa.png"
                }
                clearInterval(hide)
                resolve()

            }
        },32)
    })
    hidePromise.then((value)=>{
        let reAppear = setInterval(function(value){
            if(image.style.opacity < 1 ){
                image.style.opacity = (parseFloat(image.style.opacity) + 0.0625).toString()
            }
            else{
                clearInterval(reAppear)
            }
        },32)
    })

}
