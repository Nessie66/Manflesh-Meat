// reload page on back
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();

// pages
const pages = [
    "img/misc/beefeater/beefeater.html",
    "img/misc/birdy/birdy.html",
    "img/misc/cat/cat.html",
    "img/misc/chickenhunt/chickenhunt.html",
    "img/misc/down/down.html",
    "img/misc/drum/drum.html",
    "img/misc/gutless/gutless.html",
    "img/misc/idontwannaknow/idontwannaknow.html",
    "img/misc/iwonteat/iwonteat.html",
    "img/misc/jenko/jenko.html",
    "img/misc/lackofbalance/lackofbalance.html",
    "img/misc/orlok/orlok.html",
    "img/misc/volatileshore/volatileshore.html",
    "img/misc/waybacktothecar/waybacktothecar.html",
    "img/misc/wheel/wheel.html",
    "img/misc/wolf/wolf.html",
    "img/misc/wrong/wrong.html"
];

var previous = -1;

function randomPage() {
    console.log("sometimes i'll see, who'll I'll never be");
    let randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];

    if (previous == randomPage){
        randomPage();
    }

    previous = randomPage;

    setTimeout(function() { window.location.href = randomPage; }, 1000);
}


function guts(){
    console.log("guts")
    
}


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



talk = document.getElementById("talk");

speech_ = document.getElementById("talk");


const button1 = document.getElementById("nothing"); 
const button2 = document.getElementById("showme");
const button3 = document.getElementById("showmemore");

window.onload = function () {
    if(localStorage.getItem("guts") == 1){  
        talk.classList.add("more");
        button1.classList.remove("show");
        speech("")
        button3.classList.add("show");
        button3.addEventListener("click", function() {
            randomPage();
        });
    }

    if(localStorage.getItem("guts") == null){    
        showSpeech();
        button1.classList.add("show");
        button1.addEventListener("click", function() {
            button1.classList.remove("show");
            button2.classList.add("show");
            speech("but i have thoughts worth revealing.<br>do you know how it feels to put concept on a feeling?&nbsp&nbsp<br>to take a word and change the meaning?")
            button2.addEventListener("click", function() {
                button2.classList.remove("show")
                randomPage();
                localStorage.setItem("guts", 1)  
            });
        });
        
    }
    
}

// window.onload = function () {
//     if(localStorage.getItem("dead_end1") == null){     
//         button1.addEventListener("click", function() {
//             changeImage(event1);
//             talk.classList.add("killyourselfcss");
//             button1.classList.remove("show");
//             speech("So be it... I hear she lurks around the potential pits, if you can make it that far.<br> I'd be wary of venturing any deeper. Horrid things lurk down there. Muligastric above and multigastric below you see. We're trapped.")
//             localStorage.setItem("dead_end1", 1)  
//         });
//     }
//     if((localStorage.getItem("dead_end1") == 1) && (localStorage.getItem("DEQ") == 1)){
//         speech("Arck! You jumped me. Where on earth did you come from?")
//         speech_.classList.add("DEQ");
//         showSpeech()
//         localStorage.setItem("DEQ", 2)  
//     }

//     console.log(localStorage.getItem("DEQ"))

//     console.log((localStorage.getItem("dead_end1") == 1) && (localStorage.getItem("DEQ") == 1))
//     }