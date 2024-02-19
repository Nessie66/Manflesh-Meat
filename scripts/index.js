reload page on back
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();

//speech bubble changer/shower
function speech(message) {
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = message;
    div[0].classList.add("show")
}

//reset function
function reset() {
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = "";
    div[0].classList.remove("show")
}

//visited
window.onload = function () {
    if (localStorage.getItem("potentialPits") == null){
        console.log("potential pits set")
    }
    if (localStorage.getItem("homepage") == null){
        console.log("homepage set")
    }
    //event 1
    if (localStorage.getItem("potentialPits") == 1){
        replaceSVG(event1);
        speech("I wonder what's down there.");
        console.log("event 1")
        //reset
        if (localStorage.getItem("homepage") == 1){
            reset();
            console.log("reset")
        }
    } else {
        let svg = document.getElementsByTagName("svg");
        svg[0].classList.add("show")
    }
}

//events
const event0 = "img/index/pit1.svg";
const event1 = "img/index/pit1event1.svg";

//SVG replacer machine
function replaceSVG(filepath) {
    //load content asynchronously
    fetch(filepath)
    .then(response => response.text())
    .then(data => {
        //replace content
        let oldSVG = document.getElementsByTagName("svg")[0];
        oldSVG.outerHTML = data;
        //show SVG
        let svg = document.getElementsByTagName("svg")[0];
        svg.classList.add("show");
    })
    .catch(error => console.error('Error fetching SVG:', error));
}
