
const eyeB = "img/eyeball_it.jpg"

function eyeball() {
    console.log("eyeball it!")
    let logo = document.getElementsByClassName("title")[0];
    logo.outerHTML = '<div class="title"> <img src="img/eyeball_it.jpg"> </div>';
    let drag = document.getElementById("avirex");
    drag.outerHTML = '<img id="avirex" src="img/handsforballs.gif">';
    let head1 = document.getElementsByTagName("h1")[0];
    head1.innerHTML = 'Monogastric Eyeball Arousal';
    let poem = document.getElementsByClassName("poem")[0];
    poem.innerHTML = '"i dont know man. just eyeball it"';
    let poet = document.getElementsByClassName("poem")[1];
    poet.innerHTML = 'why you askin me?';
}