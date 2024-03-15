//reload page on back
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();


window.onload = function () {
    let link = document.getElementById("click")
    if(localStorage.getItem("hallway3") == 1){
        link.classList.add("show")
        link.addEventListener("click", function() {
            console.log("clicked")
            localStorage.setItem("clickme", 1)  
        });
        if(localStorage.getItem("clickme") == 1){
            link.classList.remove("show")
        }
    }
}