window.onload = function() {
    fetch("fortunes.txt")
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        var fortunes = text.split('\n').filter(function(phrase) {
            return phrase.trim() !== '';
        });

        tellFortune(fortunes);
    })
    .catch(function(error) {
        console.error('Error fetching fortunes:', error);
    });
};

function tellFortune(fortunes) {
    var fortune = document.getElementById('fortune');
    fortune.innerHTML = '';

    var randomIndex = Math.floor(Math.random() * fortunes.length);
    var randomFortune = fortunes[randomIndex];

    console.log(localStorage.getItem("try"))

    if (localStorage.getItem("try") == 4){
        fortune.innerHTML = "OK thats it you're really starting to bug me now. Go Away!";

    }

    if (localStorage.getItem("try") == 3){
        if (localStorage.getItem("sameFortune") == randomFortune){

            tellFortune(fortunes)
        } else {
    
            fortune.innerHTML = randomFortune;
            localStorage.setItem("sameFortune", randomFortune)
            localStorage.setItem("try", 4)
        }   
    }

    if (localStorage.getItem("try") == 2) {
        fortune.innerHTML = 'alright fine. I give in, I am just a manfly after all. <br> <a href="fortune.html">YOUR FORTUNE FORETOLD. AGAIN.</a>';
        localStorage.setItem("try", 3)
    }

    if (localStorage.getItem("try") == 1){
        fortune.innerHTML = "Nice Try! I already did your fortune. You pull this again and there will be hell to pay.";
        localStorage.setItem("try", 2)
    }

    if (localStorage.getItem("sameFortune") == null){

        fortune.innerHTML = randomFortune;
        localStorage.setItem("sameFortune", randomFortune)
        localStorage.setItem("try", 1)
    }

}
