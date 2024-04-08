
const eyeB = "img/eyeball_it.jpg"

function eyeball() {
    console.log("eyeball it!")
    let logo = document.getElementsByClassName("title")[0];
    logo.outerHTML = '<img src="img/eyeball_it.jpg">';
    let drag = document.getElementById("avirex");
    drag.outerHTML = '<img src="img/handsforballs.gif">';
    let head1 = document.getElementsByTagName("h1")[0];
    head1.innerHTML = 'Monogastric Eyeball Arousal';
}