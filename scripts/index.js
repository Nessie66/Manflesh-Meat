//setting up speech 1
function speech1(speech) {
    var text = document.createElement("h1");
    text.innerHTML = speech;
    document.body.append(text);
    console.log("edited")
}

//reload page on back
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

//potentialPits visited
window.onload = function () {
    console.log(localStorage.getItem("potentialPits"))
    if (localStorage.getItem("potentialPits") == null){
        console.log("initial set")
    }
    if (localStorage.getItem("potentialPits") == 1){
        console.log("ready")
        speech1("test");
    }
}