window.onload = function() {
    fetch("youWouldn'tReadTheBibleInProgress.txt")
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        var phrases = text.split('\n').filter(function(phrase) {
            return phrase.trim() !== '';
        });

        displayRandomPhrases(phrases, num);
    })
    .catch(function(error) {
        console.error('Error fetching phrases:', error);
    });
};

const num = 200;

function displayRandomPhrases(phrases, numberOfPhrases) {
    var phraseContainer = document.getElementById('phrase-container');
    phraseContainer.innerHTML = '';

    var selectedPhrases = [];
    while (selectedPhrases.length < numberOfPhrases) {
        
        phrases.sort(function() {
            return Math.random() - 0.5;
        });

        // Select a random phrase
        var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        selectedPhrases.push(randomPhrase);
    }

    var allPhrases = selectedPhrases.join(' ');

    var paragraph = document.createElement('p');
    paragraph.textContent = allPhrases;
    phraseContainer.appendChild(paragraph);
}


