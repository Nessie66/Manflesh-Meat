function hideImage() {
    const image = document.getElementById('entry');

    setTimeout(function() {
        image.style.display = 'none';
    }, 3000);
}


hideImage();

