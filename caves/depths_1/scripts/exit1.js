const flesh = document.getElementById('flesh');

// reload page on back
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();

const pages = [
    "img/misc/beefeater/beefeater.html",
    "img/misc/boyinagirlway/boyinagirlway.html",
    "img/misc/brainwire/brainwire.html",
    "img/misc/cat/cat.html",
    "img/misc/chickenhunt/chickenhunt.html",
    "img/misc/down/down.html",
    "img/misc/freshflesh/freshflesh.html",
    "img/misc/gutless/gutless.html",
    "img/misc/horse/horse.html",
    "img/misc/idontwannaknow/idontwannaknow.html",
    "img/misc/iwonteat/iwonteat.html",
    "img/misc/jenko/jenko.html",
    "img/misc/lackofbalance/lackofbalance.html",
    "img/misc/manimitchy/manimitchy.html",
    "img/misc/orlok/orlok.html",
    "img/misc/spacemines/spacemines.html",
    "img/misc/volatileshore/volatileshore.html",
    "img/misc/waybacktothecar/waybacktothecar.html",
    "img/misc/wheel/wheel.html",
    "img/misc/wolf/wolf.html",
    "img/misc/wrong/wrong.html"
];


function randomPage() {
    console.log("sometimes I'll see, who'll I'll never be");
    let randomIndex = Math.floor(Math.random() * pages.length);
    let randomPage = pages[randomIndex];


    while (randomPage === localStorage.getItem("previous1") || randomPage === localStorage.getItem("previous2") || randomPage === localStorage.getItem("previous3") || randomPage === localStorage.getItem("previous4") || randomPage === localStorage.getItem("previous5")) {
        console.log("reroll")
        randomIndex = Math.floor(Math.random() * pages.length);
        randomPage = pages[randomIndex];
        console.log("new page selected is " + randomPage)
    }
    // this all disgusts me
    localStorage.setItem("previous5", localStorage.getItem("previous4"));
    localStorage.setItem("previous4", localStorage.getItem("previous3"));
    localStorage.setItem("previous3", localStorage.getItem("previous2"));
    localStorage.setItem("previous2", localStorage.getItem("previous1"));
    localStorage.setItem("previous1", randomPage);

    setTimeout(function() { window.location.href = randomPage; }, 1000);
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

function guts () {
    console.log("guts") 
    console.log("flesh")
    flesh.muted = false;
    flesh.play();

    if(localStorage.getItem("guts") == null){    
        showSpeech();
        if(localStorage.getItem("guts") != 1){
            button1.classList.add("show");
        }
        button1.addEventListener("click", function() {
            button1.classList.remove("show");
            button2.classList.add("show");
            speech("but i have thoughts worth revealing.<br>do you know how it feels to put concept on a feeling?&nbsp&nbsp<br>to take a word and change the meaning?")
            localStorage.setItem("guts", 1) 
            button2.addEventListener("click", function() {
                button2.classList.remove("show")
                randomPage();
                localStorage.setItem("guts", 2)  
            });
        });
        
    }
    
}

window.onload = function() {
    if(localStorage.getItem("guts") == 2){  
        talk.classList.add("more");
        button1.classList.remove("show");
        speech("")
        button3.classList.add("show");
        button3.addEventListener("click", function() {
            button3.classList.remove("show");
            randomPage();
        });
    }
}
