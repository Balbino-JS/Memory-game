const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'bull',
    'cow',
    'elephant',
    'fox',
    'giraffe',
    'gorilla',
    'lion',
    'monkey',
    'mouse',
    'ounce',
    'tiger',
    'tortoise',
    'snake',
    'zebra'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};


let firstCard ='';
let secondCard = '';

const checkEndGame = () =>{
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 40) {
        clearInterval(this.loop)
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi ${timer.innerHTML}`);
    }
}
const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }
};

const revealCard = ({target}) => {

    if (!target.classList.contains('face')){
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

   
};

const createCard = (character) => {
    const card = createElement('div', 'card'); 
    const front = createElement('div','face front');
    const back = createElement('div', 'face back');

    // Corrigido: extensão .jpg e caminho correto
    front.style.backgroundImage = `url('../src/img/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
};

const loadGame = () => {

    const duplicateCharacters  = [ ...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() -0.5);

    duplicateCharacters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
};

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000);

}

window.onload = () => {
    
    const playerName = localStorage.getItem('player');

    spanPlayer.innerHTML = playerName;
    startTimer();
    loadGame();
}



