//reload page on back
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

//reset speech function
function reset() {
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = "";
    div[0].classList.remove("show")
}

function show() {
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    div[0].classList.add("show")
}

//events
const event0 = "img/homepage/homepage.svg";
const event1 = "img/homepage/homepage0.svg";

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

window.onload = function () {
    //visited sets
    if (localStorage.getItem("main") == null){
        console.log("main set")
    }
    if (localStorage.getItem("music") == null){
        console.log("music set")
    }

    //index cont
    // set potential pits so they appear without speech
    if(localStorage.getItem("potentialPits") == null){
        localStorage.setItem("potentialPits", 1)
    }
    // if potential pits visited already, reset speech bubble
    if(localStorage.getItem("potentialPits") == 1){
        localStorage.setItem("homepage", 1)
    }

    //homepage
    if (localStorage.getItem("main") == 1){
        replaceSVG(event1);
        reset();
        console.log("event 1")
    } else if (localStorage.getItem("music") == 1) {
        replaceSVG(event1);
        reset();
        console.log("event 1")
    } else {
        show();
        let svg = document.getElementsByTagName("svg");
        svg[0].classList.add("show")
    }
    
}