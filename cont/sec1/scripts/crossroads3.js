//reload page on back
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();

function showSVG() {
    let svg = document.getElementsByTagName("svg");
    svg[0].classList.add("show")
}
//events
const event0 = "img/svg/c3/c3.svg";

const event1 = "img/svg/c3/c3_1.svg";
const event2 = "img/svg/c3/c3_2.svg";
const event3 = "img/svg/c3/c3_3.svg";
const event4 = "img/svg/c3/c3_4.svg";
const event5 = "img/svg/c3/c3_5.svg";
const event6 = "img/svg/c3/c3_6.svg";
const event7 = "img/svg/c3/c3_7.svg";

//random number
const randomNumber = Math.floor(Math.random() * 7);

//random events
let randomEvent;
    switch (randomNumber) {
        case 0:
            randomEvent = event1;
            break;
        case 1:
            randomEvent = event2;
            break;
        case 2:
            randomEvent = event3;
            break;
        case 3:
            randomEvent = event4;
            break;
        case 4:
            randomEvent = event5;
            break;
        case 5:
            randomEvent = event6;
            break;
        case 6:
            randomEvent = event7;
            break;
        default:
            randomEvent = event0;
            break;
    }

//SVG replacer machine (with timeout)
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
        // setTimeout(function(){ svg.classList.add("show"); }, 500);
        svg.classList.add("show");
        
    })
    .catch(error => console.error('Error fetching SVG:', error));
}


//pick random on reload
window.onload = function () {
    replaceSVG(randomEvent);
}