let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Generates random numbers.
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  // Sets 1 to 11, 10-13 to 10 and 2-9 to their exact value.
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

// Calls renderGame() when sum-el btn clicked and assign vlaues to cards.
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secendCard = getRandomCard();
  cards = [firstCard, secendCard];
  sum = firstCard + secendCard;
  renderGame();
}

// Renders the game by checking the logic and showing messages, cards and sum.
function renderGame() {
  sumEl.textContent = "sum: " + sum;
  cardsEl.textContent = "Cards: "; // Whitout this code the for loop blew would duplicate the cards each time startGame() called!?

  // This for loop goes throu cards array and shows it in the browser.
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

// Adds an other new card isAlive=true and hasBlackJack=false and call renderGame() if the user clicks new card btn.
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += cards[2];
    renderGame();
  }
}
