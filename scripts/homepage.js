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

function showSpeech() {
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    div[0].classList.add("show")
    let svg = document.getElementsByTagName("svg");
    svg[0].classList.add("show")
}

function showSVG() {
    let svg = document.getElementsByTagName("svg");
    svg[0].classList.add("show")
}
//events
const event0 = "img/homepage/homepage.svg";
const event1 = "img/homepage/homepage0.svg";

//SVG replacer machine (with timeout)
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
        // setTimeout(function(){ svg.classList.add("show"); }, 500);
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
    // set entrance so they appear without speech
    if(localStorage.getItem("entrance") == null){
        localStorage.setItem("entrance", 1)
    }
    // if entrance visited already, reset speech bubble
    if(localStorage.getItem("entrance") == 1){
        localStorage.setItem("homepage", 1)
    }

    
    //homepage
    if (localStorage.getItem("main") == 1){
        reset();
        console.log("remove m1")
        
    } else if (localStorage.getItem("music") == 1) {
        reset();
        console.log("remove m1")
        
    } else if (localStorage.getItem("crossroads1") == 1) {
        reset();
        console.log("remove m1")
    } else {
        showSpeech();
        
    }
    if (localStorage.getItem("crossroads1") == null){
        showSVG();
    }
    if (localStorage.getItem("crossroads1") == 1){
        replaceSVG(event1);
        console.log("event 1")
    } else {
        let svg = document.getElementsByTagName("svg");
        svg[0].classList.add("show")
    }
}

function wirral() {
        window.location.href = 'caves/depths_1/hallway3.html'; 
        localStorage.setItem("wirral", 1)

}