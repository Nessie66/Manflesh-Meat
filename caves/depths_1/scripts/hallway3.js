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

function redirect(link) {
    window.location.href = link;
}

//door function
function doorOpen() {
    changeImage(event1)
}

function doorClose() {
    changeImage(event0)
}

const doorcreak = document.getElementById('doorcreak');

function creak(){
    doorcreak.muted = false;
    doorcreak.play();
}

//image changer
function changeImage(a) {
    document.getElementById("door").src=a;
}

//mobile4creak
function isMobile() {
    return window.innerWidth <= 480;  
  }

const way = "megaroy/ontheway!.html";

function door() {
    if (isMobile() == true){
        setTimeout(function(){ redirect(way); }, 1700);
    } else {
        redirect(way); 
    }
}

//events
const event0 = "img/door/full0.png";
const event1 = "img/door/full1.png";

button1 = document.getElementById("next");
 

talk = document.getElementById("talk");

window.onload = function () {
    talk.classList.add("m2");
    if(localStorage.getItem("hallway3") == null){
        showSpeech()
        localStorage.setItem("hallway3", 1)  
    }

    if(localStorage.getItem("hallway5") == null){
        console.log("hallway5")
    }

    if(localStorage.getItem("hallway5") == 1){
        talk.classList.add("m2");
        speech("what you nosing around for, you a pervert or something? nothing interesting round here except rats with bad teeth and failures withering away. its like they say, you wont find a painless way to die man. still, beats being out in the hills, cant complain!");
        localStorage.setItem("hallway5", 2)  

    }

}