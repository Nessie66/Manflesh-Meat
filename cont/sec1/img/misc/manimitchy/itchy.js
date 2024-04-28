function showSpeech() {
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    div[0].classList.add("show")
    // let svg = document.getElementsByTagName("svg");
    // svg[0].classList.add("show")
}

function speech(message) {
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = message;
    div[0].classList.add("show")
}


talk = document.getElementById("talk");

speech_ = document.getElementById("talk");


const button1 = document.getElementById("button"); 


window.onload = function () {
    button1.addEventListener("click", function() {
        button1.classList.remove("show");
        speech("A commentary on modern life? I dunno")
    });
}
    