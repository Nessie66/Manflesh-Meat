//reload page on back
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

//speech function
function speech(message){
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = message;
    div[0].classList.add("show")
}

function reset(){
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = "";
    div[0].classList.remove("show")

}

//visited
window.onload = function () {
    if (localStorage.getItem("potentialPits") == null){
        console.log("potential pits set")
    }
    if (localStorage.getItem("homepage") == null){
        console.log("homepage set")
    }
    //event 1
    if (localStorage.getItem("potentialPits") == 1){
        replaceSVG(event1);
        speech("i wonder whats down there. down <br>therIw onder whats down there..");
        console.log("event 1")
        //reset
        if (localStorage.getItem("homepage") == 1){
            reset();
            console.log("reset")
        }
    }
    else {
        let svg = document.getElementsByTagName("svg");
        svg[0].classList.add("show")
    }
}

//list of evernts
const event0 = "img/index/pit1.svg";
const event1 = "img/index/pit1event1.svg";

//svg replacer machine
function replaceSVG(filepath) {
    //Get svg to replace
    let oldSVG = document.getElementsByTagName("svg");
    // Load content
    let xhr = new XMLHttpRequest();
    xhr.open("GET", filepath, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //Replace content
            oldSVG[0].outerHTML = xhr.responseText;
            //show SVG
            let svg = document.getElementsByTagName("svg");
            svg[0].classList.add("show")
        }
    };
    xhr.send();
}

