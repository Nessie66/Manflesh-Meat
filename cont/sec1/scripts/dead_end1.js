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

talk = document.getElementById("talk");

speech_ = document.getElementById("talk");

window.onload = function () {
    console.log(localStorage.getItem("dead_end1"))
    console.log(localStorage.getItem("DEQ"))
    if(localStorage.getItem("dead_end1") == null){
        if((localStorage.getItem("DEQ") == 1)){
            speech("Argh! You scared me, where on earth did you come from?<br><br>Girlwolf decade destroyer?<br>Where did you hear about that? Why do you want to know?")  
        }
        showSpeech()
        button1.classList.add("show");
        button1.addEventListener("click", function() {
            talk.classList.add("killyourselfcss");
            changeImage(event1);
            button1.classList.remove("show");
            speech("So be it... I hear she lurks around the potential pits, if you can make it that far. I'd be wary of venturing any deeper, horrid things lurk down there. Muligastric above and multigastric below you see. We're trapped.")
            localStorage.setItem("dead_end1", 1)  
        });
    }
    if((localStorage.getItem("dead_end1") == 1) && (localStorage.getItem("DEQ") == 1)){
        speech("Argh! You scared me, where on earth did you come from?")
        speech_.classList.add("DEQ");
        showSpeech()
        localStorage.setItem("DEQ", 2)  
    }
}