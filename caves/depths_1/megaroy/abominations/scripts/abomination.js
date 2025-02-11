document.getElementById('b1').addEventListener('click', function() {

    var sound1 = document.getElementById('sound1');
    sound1.play(); 
    var abomination = document.getElementById('abomination');
    abomination.src = 'img/puddle.png';  

    abomination.onload = function() { 
        abomination.classList.add('puddle');
    };

    document.querySelector('.misery').style.display = 'block';
    document.querySelector('.default').style.display = 'none';
    document.querySelector('.free').style.display = 'none';

    document.querySelector('.select').style.display = 'none';

    setTimeout(function() {
        window.location.href = '../puzzleroy.html';  
    }, 7000);  
});

document.getElementById('b2').addEventListener('click', function() {

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
