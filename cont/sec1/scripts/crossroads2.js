window.onload = function() {
    if(localStorage.getItem("hallway3") == 1){
        if(localStorage.getItem("clickme") == null){
            localStorage.setItem("clickme", 1)
        }
    }
}