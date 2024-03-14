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
const event0 = "img/drag/drag1opt.gif";
const event1 = "img/drag/drag2opt.gif";
const event3 = "img/drag/empty";

button1 = document.getElementById("next");

dragon = document.getElementById("next");

talk = document.getElementById("talk");

window.onload = function () {
    if(localStorage.getItem("dead_end1") == null){
        showSpeech()
        button1.classList.add("show");
        button1.addEventListener("click", function() {
            talk.classList.add("killyourselfcss");
            changeImage(event1);
            button1.classList.remove("show");
            speech("So be it... Perhaps check the potential pits. If you can find them.<br>But I'd be wary of going any deeper if I were you...")
            localStorage.setItem("dead_end1", 1)  
        });
    }
}