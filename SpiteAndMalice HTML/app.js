// making a clone of the original array theDeck. If you change something in clone array, the original array theDeck will not be changed //


// creating a function that shuffles the elements of an array //
const shuffle = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const copyArrayElement = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = copyArrayElement;
  }
  return array;
};

// the length of my object 'theDeck' //
// console.log(Object.keys(theDeck).length);

const cardsToGoPlayer = [];
const cardsToGoOpponent = [];
const cardsAvailablePlayer = [];
const cardsAvailableOpponent = [];

// Creating a function that gives 20 shuffled cards to someone and removes those cards from the shuffled deck.
const startGameShuffle = (array, cardsToGo, cardsAvailable) => {
  for (let numCard = 0; numCard < 25; numCard++) {
    if (numCard < 20) {
      cardsToGo.push(array[numCard]);
    } else {
      cardsAvailable.push(array[numCard]);
    }
  }
  console.log(cardsToGo);
  console.log(cardsAvailable);
  for (let counter = 0; counter < 25; counter++) {
    console.log(array[counter]);
    array.shift(array[0]);
  }
};

startGameShuffle(shuffledClone, cardsToGoPlayer, cardsAvailablePlayer);

const playerCardElements = document.getElementsByClassName(
  "cards-available-player"
)[0].children;

const opponentCardElements = document.getElementsByClassName(
  "cards-available-opponent"
)[0].children;

function highlight(event) {
  console.log(event);
  const el = event.target;

  // TODO: If card already selected, deselect it.
  // TODO: If another card is already selected, deselect it and select the new one.

  el.classList.add("glow-style");
}

function unhighlight(event) {
  const el = event.target;
  el.classList.remove("glow-style");
}

for (let el of playerCardElements) {
  el.addEventListener("click", highlight);
}

const testArray = [
  { number: 1, suit: "spades" },
  { number: 2, suit: "diamonds" },
  { number: 3, suit: "diamonds" },
  { number: 4, suit: "spades" },
  { number: 5, suit: "hearts" },
];

for (let i = 0; i <= 4; i++) {
  let number = testArray[i].number;
  let suit = testArray[i].suit;
  console.log(number);
  console.log(suit);
  playerCardElements[
    i
  ].style.backgroundImage = `url(Photos/${number}-${suit}.png)`;
}


      



clasa de GameEngine: constructor: 20 cardstogo, 5cardsavailable




/*
const player = {
  hand: new PlayerHand(),
  sideStacks: [new SideStack(), new SideStack()],
  cardToGo: new CardTOGo
}

getPlayerHand() => PlayerHand

daca cardIndex este -1 atunci getMoves for top card din cardsToGo
getMovesForCard(cardIndex) => array cu care center stacks se poate

playCardToCenterStack(cardIndex, centerStackIndex) 

functia asta treuie sa schimbi si jucatoru 
playCardToSideStack(cardIndex, sideStackIndex)


se uita prin center stacks si apoi daca e unu plin il baga inapoi in pachet si face clearImmediat
flushCenterStacks() 



*/

// let opponentsCards = document.querySelectorAll("player-hand-opponent");
// console.log(opponentsCards);

/*
 * logic (functions) --> updates state
 * state --> updates graphics (via render)
 */
