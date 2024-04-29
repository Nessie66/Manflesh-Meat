// Form Stuff

const scriptURL = 'https://script.google.com/macros/s/AKfycbyvtosW1EAYUWEBbVgnrWHqzialz_FqyO96cODVYFQCA14uuTFigKd0cPXGYyX22itP/exec';
const form = document.forms['horror-question-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));

    const monster1 = document.getElementById('monster_1').value;
    const monster2 = document.getElementById('monster_2').value;
    const monster3 = document.getElementById('monster_3').value;
    const monster4 = document.getElementById('monster_4').value;

    // Check if the order is correct (Werewolf, Zombie, Vampire, Ghost)
    if (monster1 === 'werewolf' && monster2 === 'zombie' && monster3 === 'vampire' && monster4 === 'ghost') {
    // Redirect to another webpage if the order is correct
    window.location.href = 'correct_answer.html';
    } else {
        
    }
});