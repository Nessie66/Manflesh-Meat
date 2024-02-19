window.onload = function () {
    if (localStorage.getItem("potentialPits") === null){
        localStorage.setItem("potentialPits", 1)
    }
}

console.log(localStorage.getItem("potentialPits"))