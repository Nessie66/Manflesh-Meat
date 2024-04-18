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

const num = 300;
const phraseBuffer = 25; 

var usedPhrases = [];

function displayRandomPhrases(phrases, numberOfPhrases) {
    var phraseContainer = document.getElementById('phrase-container');
    phraseContainer.innerHTML = '';

    // Initialize a counter object to keep track of phrase occurrences
    var phraseCounters = {};

    for (var i = 0; i < phrases.length; i++) {
        phraseCounters[phrases[i]] = 0;
    }

    var selectedPhrases = [];
    while (selectedPhrases.length < numberOfPhrases) {
        phrases.sort(function() {
            return Math.random() - 0.5;
        });

        // Select a random phrase
        var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        
        // Check if the phrase can be displayed based on its counter
        if (phraseCounters[randomPhrase] < 10) { // Change 10 to your desired limit
            selectedPhrases.push(randomPhrase);
            phraseCounters[randomPhrase]++;
        }
    }

    var allPhrases = selectedPhrases.join(' ');

    // Inserting <a> tag at a random position in the paragraph
    var randomPosition = Math.floor(Math.random() * allPhrases.length);
    allPhrases = allPhrases.slice(0, randomPosition) + '<a class="link" href="immitation_crab_meat.html">&nbspHEY MAN SHUTUP YOURE JUST SPOUTING EMPTY WORDS AND RHYMES!&nbsp</a>' + allPhrases.slice(randomPosition);

    var paragraph = document.createElement('p');
    paragraph.innerHTML = allPhrases; // Use innerHTML to insert HTML tags
    phraseContainer.appendChild(paragraph);
}

