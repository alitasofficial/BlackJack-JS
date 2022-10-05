let messageEl = document.querySelector(".message-el");
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");
let playerEl = document.querySelector(".player-el")

let cards = [];
let sum = 0;

let message = "";
let hasBlackJack = false;
let isAlive = false;


let player = {
    name: "Player 1",
    chips: 200,
}

function randomNumberGenerator() {
  min = 2;
  max = 12;
  let randomNumber = Math.floor(Math.random() * max + min);

  if (randomNumber > 10) {
    return 11;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// Initialize the game
function startGame() {
    if(isAlive === false) {
        isAlive = true;
        let firstCard = randomNumberGenerator();
        let secondCard = randomNumberGenerator();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        playerEl.textContent = player.name + ": $" + player.chips
        renderGame();
    }
}

// Render the game
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;

  console.log(cards);
}

// Draw a new card
function newCard() {
  if(isAlive === true && hasBlackJack === false) {
    let card = randomNumberGenerator();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    return alert("You are dead")
  }
}
