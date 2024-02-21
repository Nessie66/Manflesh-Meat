window.onload = function () {
    // set potential pits so they appear without speech
    if(localStorage.getItem("potentialPits") == null){
        localStorage.setItem("potentialPits", 1)
    }
    // if potential pits visited already, reset speech bubble
    if(localStorage.getItem("potentialPits") == 1){
        localStorage.setItem("homepage", 1)
    }
    
}
