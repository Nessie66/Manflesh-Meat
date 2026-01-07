document.getElementById('b1').addEventListener('click', function() {
    var breathingSound = document.getElementById('b');
    breathingSound.pause(); // Stop the audio
    breathingSound.currentTime = 0; // Reset the audio to the beginning

    breathingSound.src = ''; // Optional: Clear the source

    var sound1 = document.getElementById('sound1');
    
    var abomination = document.getElementById('abomination');
    abomination.src = 'img/pixelpuddle.png';  

    abomination.onload = function() { 
        sound1.play(); 
        abomination.classList.add('puddle');
        abomination.classList.remove('m2');
        abomination.classList.remove('m3');
        abomination.classList.remove('m4');
        abomination.classList.remove('m5');
    };

    document.querySelector('.misery').style.display = 'block';
    document.querySelector('.default').style.display = 'none';
    document.querySelector('.free').style.display = 'none';
    document.querySelector('.select').style.display = 'none';

    setTimeout(function() {
        window.location.href = '../puzzleroy.html';  
    }, 7022200);  
});

document.getElementById('b2').addEventListener('click', function() {
    var breathingSound = document.getElementById('b');
    breathingSound.pause(); // Stop the audio
    breathingSound.currentTime = 0; // Reset the audio to the beginning

    breathingSound.src = ''; // Optional: Clear the source

    var sound2 = document.getElementById('sound2');
    sound2.play();

    var abomination = document.getElementById('abomination');
    abomination.style.transition = 'opacity 3s ease-out';
    abomination.style.opacity = '0'; 

    document.querySelector('.free').style.display = 'block';
    document.querySelector('.default').style.display = 'none';
    document.querySelector('.misery').style.display = 'none';
    document.querySelector('.select').style.display = 'none';

    setTimeout(function() {
        window.location.href = '../puzzleroy.html';  
    }, 7000);  
});