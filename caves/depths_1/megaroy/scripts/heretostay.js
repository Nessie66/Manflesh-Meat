function hideImage() {
    const gif = document.getElementById('entry');

    const image = document.getElementById('main');

    const divS = document.getElementById('select');

    setTimeout(function() {
        image.style.visibility = 'visible';
        divS.style.visibility = 'visible';
        gif.style.visibility = 'hidden';
    }, 3000);
}


hideImage();

window.onload = function () {
    if(localStorage.getItem("megaroy") == null){
        localStorage.setItem("megaroy", 1)  
    }

}

