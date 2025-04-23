const grid = document.querySelector('.grid');

const characters = [
    'alligator',
    'bear',
    'bull',
    'cow',
    'elephant',
    'emu',
    'fox',
    'frog',
    'giraffe',
    'goat',
    'gorilla',
    'hippo',
    'lion',
    'mole',
    'monkey',
    'moose',
    'mouse',
    'ounce',
    'pork',
    'rabbit',
    'sheep',
    'snake',
    'tiger',
    'tortoise',
    'zebra'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};


let firstCard ='';
let secondCard = '';

const checkCards = () => {

}

const revealCard = ({target}) => {

    if (!target.parentNode.contains('reveal-card')){
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

   
}
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

loadGame();


