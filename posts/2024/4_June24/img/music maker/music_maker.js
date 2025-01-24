const sounds = [
    'g1.mp3',
    'g2.mp3',
    'g3.mp3',
    'g4.mp3',
    'g5.mp3',
    'g6.mp3',
    'g7.mp3',
    'g8.mp3',
    'g9.mp3',
    'g10.mp3',
    'g11.mp3',
    'g12.mp3',
    'g13.mp3',
    'g14.mp3',
    'g15.mp3',
    'g16.mp3',
    'g17.mp3',
    'g18.mp3',
    'g19.mp3',
    'g20.mp3',
    'g21.mp3',
    'g22.mp3',
    'g23.mp3',
    'g24.mp3',
    'g25.mp3',
    'g26.mp3',
    'g27.mp3',
    'g28.mp3'
];

function guitar() {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const selectedSound = sounds[randomIndex];

    const audioPlayer = document.createElement('audio');
    audioPlayer.src = `sound/${selectedSound}`;
    audioPlayer.autoplay = true; 
    
    audioPlayer.addEventListener('ended', function() {
        audioPlayer.remove();
    });
    
    const audioContainer = document.getElementById('audioContainer');
    audioContainer.appendChild(audioPlayer);
}


const drum1 = document.getElementById('drum1');
const drumbeatAudio = document.getElementById('drum1A');

drum1.addEventListener('change', function() {
    if (this.checked) {
      drum1A.play();
    } else {
      drum1A.pause();
      drum1A.currentTime = 0; 
    }
});


const svgContainer = document.getElementById('svgCont'); 
const rotateCheckbox = document.getElementById('rotate');

rotateCheckbox.addEventListener('change', function() {
    if (this.checked) {
        svgContainer.classList.add('rotate');
    } else {
        svgContainer.classList.remove('rotate');
    }
});
