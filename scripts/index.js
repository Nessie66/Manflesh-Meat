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

//events
const event0 = "img/index/pit1.svg";
const event1 = "img/index/pit1event1.svg";

//SVG replacer machine
function replaceSVG(filepath) {
    //load content asynchronously
    fetch(filepath)
    .then(response => response.text())
    .then(data => {
        //replace content
        let oldSVG = document.getElementsByTagName("svg")[0];
        oldSVG.outerHTML = data;
        //show SVG
        let svg = document.getElementsByTagName("svg")[0];
        svg.classList.add("show");
    })
    .catch(error => console.error('Error fetching SVG:', error));
}

window.onload = function () {
    //visited sets
    if (localStorage.getItem("entrance") == null){
        console.log("entrance set")
    }
    if (localStorage.getItem("homepage") == null){
        console.log("homepage set")
    }
    //hasnt visited cont (nested for loading i suppose)
    if (localStorage.getItem("crossroads1") == null){
        console.log("crossroads1set")
        //event 1 if entrance visited
        if (localStorage.getItem("entrance") == 1){
            replaceSVG(event1);
            if (localStorage.getItem("homepage") == null)
            setTimeout(function(){ speech("i wonder whats down there <br> whats down there..."); }, 500);
            console.log("event 1")
        } else {
            let svg = document.getElementsByTagName("svg");
            svg[0].classList.add("show")
        }
    } else {
        console.log("event 0(effectively)")
        let svg = document.getElementsByTagName("svg");
        svg[0].classList.add("show")
    }
    //event 1 if entrance visited
//     if (localStorage.getItem("entrance") == 1){
//         replaceSVG(event1);
//         if (localStorage.getItem("homepage") == null)
//         setTimeout(function(){ speech("i wonder whats down there <br> whats down there..."); }, 500);
//         console.log("event 1")
//     } else {
//         let svg = document.getElementsByTagName("svg");
//         svg[0].classList.add("show")
//     }
}

