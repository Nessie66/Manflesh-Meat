//reload page on back
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

function speech(message){
    let div = document.getElementsByClassName("speech")
    let text = div[0].getElementsByTagName("p")
    text[0].innerHTML = message;
    div[0].classList.add("show")
    console.log("working")
}

//potentialPits visited
window.onload = function () {
    if (localStorage.getItem("potentialPits") == null){
        console.log("initial set")
    }
    if (localStorage.getItem("potentialPits") == 1){
        speech("i wonder whats down there");

    }
}