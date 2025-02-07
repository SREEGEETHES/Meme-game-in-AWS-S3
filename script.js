document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    const scoreDisplay = document.getElementById('score');
    const attemptsDisplay = document.getElementById('attempts');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let score = 0;
    let attempts = 3;
    let gameStarted = false;

    const cardArray = [
        { name: 'card1', img: 'images/distracted.png' },
        { name: 'card1', img: 'images/distracted.png' },
        { name: 'card2', img: 'images/drake.png' },
        { name: 'card2', img: 'images/drake.png' },
        { name: 'card3', img: 'images/fine.png' },
        { name: 'card3', img: 'images/fine.png' },
        { name: 'card4', img: 'images/rollsafe.png' },
        { name: 'card4', img: 'images/rollsafe.png' },
        { name: 'card5', img: 'images/success.png' },
        { name: 'card5', img: 'images/success.png' },
    ];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        console.log('Game started! Creating board...');
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];
        score = 0;
        attempts = 3;
        gameStarted = true;
        updateScoreAndAttempts();

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
        console.log('Cards added to board:', grid.children.length);
    }

    function flipCard() {
        if (!gameStarted) {
            console.log('Game has not started yet. Click "Start Game" first.');
            return;
        }
        let cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            console.log(`Flipped card: ${cardArray[cardId].name}`);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('#game-board img');
        const firstCardId = cardsChosenId[0];
        const secondCardId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
            console.log('Match found!');
            cards[firstCardId].style.visibility = 'hidden';
            cards[secondCardId].style.visibility = 'hidden';
            cards[firstCardId].removeEventListener('click', flipCard);
            cards[secondCardId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            score += 10;
        } else {
            console.log('No match, reducing attempts.');
            cards[firstCardId].setAttribute('src', 'images/blank.png');
            cards[secondCardId].setAttribute('src', 'images/blank.png');
            attempts--;
        }

        cardsChosen = [];
        cardsChosenId = [];
        updateScoreAndAttempts();

        if (attempts === 0) {
            alert('Game Over! You ran out of attempts.');
            gameStarted = false;
        } else if (cardsWon.length === cardArray.length / 2) {
            alert(`Congratulations! You found them all! Your final score is ${score}`);
        }
    }

    function updateScoreAndAttempts() {
        scoreDisplay.textContent = `Score: ${score}`;
        attemptsDisplay.textContent = `Attempts Left: ${attempts}`;
    }

    startButton.addEventListener('click', () => {
        console.log('Start button clicked!');
        createBoard();
    });
});
