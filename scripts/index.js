//setting up speech 1
function speech1(speech) {
    var text = document.createElement("h1");
    text.innerHTML = speech;
    document.body.append(text);
    console.log("edited")
}

//reload page on back
if(performance.navigation.type == 2){
    location.reload(true);
 }

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