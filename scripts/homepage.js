window.onload = function () {
    if(localStorage.getItem("potentialPits") == 1){
        if (localStorage.getItem("homepage") == null){
            localStorage.setItem("homepage", 1)
        }
    }
}
