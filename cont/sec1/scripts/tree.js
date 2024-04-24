function test() {
    console.log("TEST")
} 

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

button1 = document.getElementById("button1");

function showButton() {
    button1.classList.add("show")
}

function hideButton() {
    button1.classList.remove("show")
}

window.onload = function() {
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, user-scalable=no, initial-scale='+(1/window.devicePixelRatio)+'');
    window.scrollTo(420, 0);

    button1.addEventListener("click", function() {
        button1.classList.remove("show");
        speech("and now its just open road. being eaten up by the car for reasons it doesn't understand.");
    });
}



//pages

const fly = "img/misc/otherfliesare/otherfliesare.html"

//speech functions
function lounging(){
    hideButton();
    speech("I survived a rod in my neck and hooks in my hands and feet and actually they rodded up my entire body and they posed me in different ways. Anyway I survived  and so I'm sure I'll survive this.");
}

function dangling(){
    hideButton();
    speech("did you know they dont even build the staircases into the building anymore they just build the building then put the staircase in later? you probably did. yeah.. sorry i don't mean to treat you like an idiot.");
}

function reaching(){
    hideButton();
    speech("six degrees of separation you still exist to me<br> without you i can never be");
}

function climbing(){
    hideButton();
    speech("Will Ya marry me?");
}

function pushing(){
    hideButton();
    speech("i dont remember your birthday<br> so thats one less day i have to think of you<br> and i think of you everyday");
}

function clinging(){
    speech("quick. find something profound to look at for this bit, here this dripping exhaust pipe'll do yeah the uh water drips represent the sadness dripping out of you and. and uh the silver of the metal represents your lycanthropy");
    showButton();
}

function dragging(){
    hideButton();
    speech("trapped between a rock and a lard place.<br> the rock pushes you into the lard and now you're stuck in a block of lard.<br> while pondering how you could see the bright side of this, the lard starts to melt and you begin to sink into it.<br> you dont worry too much though as blocks of lard usually have a bottom.");
}

function hanging(){
    hideButton();
    speech("Why do flies suicide themselves into your eyes?<br>just not a productive use of their time is it")
    setTimeout(function(){ redirect(fly); }, 3500);
}

function bending(){
    hideButton();
    speech("please don't unleash wild animals.<br>you know why.<br><br>what a horrible day.<br>what a horrible name");
}
