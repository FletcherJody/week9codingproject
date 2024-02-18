
//Card Suits and Values
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Create a deck from Suits and Values
let deck = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push({ suit, value });//push method on 'deck' array, without curly braces inside (), array treats suits and values separately, like 104 cards in one deck.
    }
}
console.log(deck)
// console shows 4 suits with cards 2 through Ace

//Function to shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}


// Function to deal the cards
function dealCards() {
    const shuffledDeck = shuffleDeck(deck.slice());
    const playerOne = shuffledDeck.slice(0, 26);
    const playerTwo = shuffledDeck.slice(26);
    return [playerOne, playerTwo];
}


// To Play a Card
function eachPlayerPlaysOneCard(playerOne, playerTwo) {
    const playedCards = [];

    if (playerOne.length > 0 && playerTwo.length > 0) {
        playedCards.push(playerOne.shift());
        playedCards.push(playerTwo.shift());
    } else {
        console.log("One or more players have no more cards");
    }
    return playedCards;
}

function compareAndAwardPoints(playedCards, points) {
    const card1 = cardValue(playedCards[0]);
    const card2 = cardValue(playedCards[1]);
    if (card1 > card2) {
        points.playerOne++;
    } else if (card2 > card1) {
        points.playerTwo++;
    }
}

function cardValue(card) {
    return values.indexOf(card.value);
}

const [playerOne, playerTwo] = dealCards();
let points = { playerOne: 0, playerTwo: 0 };

while (playerOne.length > 0 && playerTwo.length > 0) {
    const playedCards = eachPlayerPlaysOneCard(playerOne, playerTwo);
    console.log("Player One plays:", playedCards[0]);
    console.log("Player Two plays:", playedCards[1]);

    compareAndAwardPoints(playedCards, points);

    console.log("Points:", points);
    console.log("---------------------");
}


let winner;
if (points.playerOne > points.playerTwo) {
    winner = "Player One";
} else if (points.playerTwo > points.playerOne) {
    winner = "Player Two";
} else {
    winner = "It's a Tie!"
}

console.log("Game Over. Final Score:", points);
console.log("Winner:", winner);












