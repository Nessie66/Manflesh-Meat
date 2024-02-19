//reload page on back
// (function () {
// 	window.onpageshow = function(event) {
// 		if (event.persisted) {
// 			window.location.reload();
// 		}
// 	};
// })();

//speech function
function speech(message){
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = message;
    div[0].classList.add("show")
}

//potentialPits visited
window.onload = function () {
    window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
    if (localStorage.getItem("potentialPits") == null){
        console.log("initial set")
    }
    //event 1
    if (localStorage.getItem("potentialPits") == 1){
        speech("i wonder whats down there");
        console.log("event 1")
        replaceSVG(event1);
    }
}

//list of evernts
const event0 = "img/pits/pit1.svg";
const event1 = "img/homepage/homepage.svg";

//svg replacer machine
function replaceSVG(filepath) {
    //Get svg to replace
    let oldSVG = document.getElementById("event0");
    // Load content
    let xhr = new XMLHttpRequest();
    xhr.open("GET", filepath, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //Replace content
            oldSVG.outerHTML = xhr.responseText;
        }
    };
    xhr.send();
}