window.onload = function () {
    if(localStorage.getItem("crossroads1") == null){
        localStorage.setItem("crossroads1", 1)
    }
    if (localStorage.getItem("dead_end1") == null){
        console.log("dead_end1")
    }
    if (localStorage.getItem("hallway3") == null){
        console.log("hallway3")
    }
}

