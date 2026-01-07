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
const event3 = "img/drag/empty.jpg";
const fullRes = "img/drag/drag1.gif";
 
button1 = document.getElementById("next");

talk = document.getElementById("talk");

speech_ = document.getElementById("talk");


if((localStorage.getItem("DEQ") == 1)){
    speech("Argh! You scared me, what are you doing here?<br><br>Girlwolf decade destroyer?<br>Where did you hear about that? Why do you want to know?")  
}

if(localStorage.getItem("dead_end1") == null){   
    setTimeout(function(){ showSpeech(); }, 500); 
    setTimeout(function(){  button1.classList.add("show");; }, 500); 
}

window.onload = function () {
    if(localStorage.getItem("dead_end1") == null){     
        button1.addEventListener("click", function() {
            changeImage(event1);
            talk.classList.add("killyourselfcss");
            button1.classList.remove("show");
            speech("So be it... I hear she lurks around the potential pits, if you can make it that far.<br> I'd be wary of venturing any deeper. Horrid things lurk down there. Muligastric above and multigastric below you see. We're trapped.")
            localStorage.setItem("dead_end1", 1)  
        });
    }
    if((localStorage.getItem("dead_end1") == 1) && (localStorage.getItem("DEQ") == 1)){
        speech("Arck! You startled me. Where on earth did you come from?")
        speech_.classList.add("DEQ");
        showSpeech()
        localStorage.setItem("DEQ", 2)  
    }

    console.log(localStorage.getItem("DEQ"))

    console.log((localStorage.getItem("dead_end1") == 1) && (localStorage.getItem("DEQ") == 1))
    }


