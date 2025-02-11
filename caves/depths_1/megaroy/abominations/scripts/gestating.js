if((localStorage.getItem("win") == 1) && (localStorage.getItem("heart") == 1)){
    localStorage.setItem("win", 0)
    localStorage.setItem("heart", 0)
    setTimeout(function() {
        window.location.href = 'megaroy.html'; 
    }, 3000);
}else if(localStorage.getItem("win") == 1){
    localStorage.setItem("win", 0)
    setTimeout(function() {
        window.location.href = 'megawrong.html'; 
    }, 3000);
}else if(localStorage.getItem("lose") == 1){
    localStorage.setItem("lose", 0)
    setTimeout(function() {
        var randomPage = Math.floor(Math.random() * 5) + 1; 
        window.location.href = 'movement' + randomPage + '.html';
    }, 3000);
} else {
    window.location.href = '../puzzleroy.html';
}
