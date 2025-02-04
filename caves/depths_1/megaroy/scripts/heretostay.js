function hideImage() {
    const image = document.getElementById('entry');

    const divS = document.getElementById('select');

    setTimeout(function() {
        divS.style.visibility = 'visible';
        image.style.visibility = 'hidden';
    }, 3000);
}


hideImage();

