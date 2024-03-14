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
    // let svg = document.getElementsByTagName("svg");
    // svg[0].classList.add("show")
}

//image changer
function changeImage(a) {
    document.getElementById("dragon").src=a;
}


//events
const event0 = "img/jpg/h3v1";
const event1 = "img/jpg/h3v3";
const event3 = "img/jpg/h3";

button1 = document.getElementById("next");


talk = document.getElementById("talk");

window.onload = function () {
    if(localStorage.getItem("hallway3") == null){
        showSpeech()
        localStorage.setItem("hallway3", 1)  
    }
}