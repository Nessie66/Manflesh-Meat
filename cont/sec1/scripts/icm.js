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
const phraseBuffer = 25; 

var usedPhrases = [];

function displayRandomPhrases(phrases, numberOfPhrases) {
    var phraseContainer = document.getElementById('phrase-container');
    phraseContainer.innerHTML = '';

    var selectedPhrases = [];
    while (selectedPhrases.length < numberOfPhrases) {
        
        phrases.sort(function() {
            return Math.random() - 0.5;
        });

        // Select a random phrase that hasn't been used recently
        var randomPhrase = getRandomUnusedPhrase(phrases);
        selectedPhrases.push(randomPhrase);
        usedPhrases.push(randomPhrase);

        if (usedPhrases.length > phraseBuffer) {
            usedPhrases.shift(); // Remove oldest phrase from buffer
        }
    }

    var allPhrases = selectedPhrases.join(' ');

    var paragraph = document.createElement('p');
    paragraph.textContent = allPhrases;
    phraseContainer.appendChild(paragraph);
}

function getRandomUnusedPhrase(phrases) {
    var unusedPhrases = phrases.filter(function(phrase) {
        return !usedPhrases.includes(phrase);
    });
    return unusedPhrases[Math.floor(Math.random() * unusedPhrases.length)];
}
