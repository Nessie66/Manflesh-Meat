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

const num = 230; //250
const phrasesBuffer = 50; //50

function displayRandomPhrases(phrases, numberOfPhrases) {
    var phraseContainer = document.getElementById('phrase-container');
    phraseContainer.innerHTML = '';

    var selectedPhrases = [];
    var recentlySelected = new Set();

    while (selectedPhrases.length < numberOfPhrases) {
        phrases.sort(function() {
            return Math.random() - 0.5;
        });

        var randomIndex = Math.floor(Math.random() * phrases.length);
        var randomPhrase = phrases[randomIndex];

        if (!recentlySelected.has(randomPhrase)) {
            selectedPhrases.push(randomPhrase);
            
            recentlySelected.add(randomPhrase);

            if (recentlySelected.size > phrasesBuffer) {
                var oldestPhrase = selectedPhrases[selectedPhrases.length - phrasesBuffer - 1];
                recentlySelected.delete(oldestPhrase);
            }
        }

        
    }

    var allPhrases = selectedPhrases.join(' ');

    var randomPosition = Math.floor(Math.random() * (allPhrases.length/3));
    allPhrases = allPhrases.slice(0, randomPosition) + '<a class="link" href="immitation_crab_meat.html">&nbspHEY MAN SHUTUP YOURE JUST SPOUTING EMPTY WORDS AND RHYMES&nbsp</a>' + allPhrases.slice(randomPosition);

    var paragraph = document.createElement('p');
    paragraph.textContent = allPhrases;
    paragraph.innerHTML = allPhrases; 
    phraseContainer.appendChild(paragraph);
}
