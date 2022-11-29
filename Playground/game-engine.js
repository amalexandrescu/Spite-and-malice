export class GameEngine {
  deckOfCards;

  constructor(customDeck) {
    this.deckOfCards = customDeck ?? [1, 2, 3, 4];
  }

  getTopCard() {
    return this.deckOfCards[this.deckOfCards.length - 1];
  }

  removeTopCard() {
    // throw new Error("Here")
    return this.deckOfCards.pop();
  }

  addCardToDeck(card) {
    this.deckOfCards.push(card);
  }
}

export class CardsToGo {
  remainingCards;

  constructor(customRemainingCards) {
    this.remainingCards = customRemainingCards;
  }

  getRemainingCards() {
    return this.remainingCards;
  }

  countRemainingCardsToGo() {
    return this.remainingCards.length;
  }

  getTopCardToGo() {
    return this.remainingCards[this.remainingCards.length - 1];
  }

  removeTopCardToGo() {
    return this.remainingCards.pop();
  }
}

export class CardsAvailable {
  cardsAvailable;

  constructor(customCardsAvailable) {
    this.cardsAvailable = customCardsAvailable;
  }

  getRemainingAvailableCards() {
    return this.cardsAvailable;
  }

  countRemainingAvailableCards() {
    return this.cardsAvailable.length;
  }

  removeIndexElement(index) {
    return this.cardsAvailable.splice(index, 1);
  }

  addCardToCardsAvailablePlayer(cards) {
    if (Array.isArray(cards)) {
      this.cardsAvailable.push(...cards);
    } else this.cardsAvailable.push(cards);
  }
}

export class SideStack {
  sideStack;

  constructor(customSideStack) {
    this.sideStack = customSideStack;
  }

  getRemainingSideStack() {
    return this.sideStack;
  }

  countRemainingSideStackCards() {
    return this.sideStack.length;
  }

  addCardToSideStack(card) {
    this.sideStack.push(card);
  }

  removeSideStackCard(card) {
    this.sideStack.pop(card);
  }
}

export class CenterStack {
  centerStack;

  constructor(customCenterStack) {
    this.centerStack = customCenterStack;
  }

  getRemainingCenterStackCards() {
    return this.centerStack;
  }

  countRemainingCenterStackCards() {
    return this.centerStack.length;
  }

  addCardToCenterStack(card) {
    this.centerStack.push(card);
  }

  getCenterStackTopCard() {
    return this.centerStack[this.centerStack.length - 1];
  }

  verifyAddCardToCenterStack(card) {
    let topCard = this.centerStack[this.centerStack.length - 1];
    if (card.number == topCard.number + 1 || card.number == 13) return true;
    else return false;
  }

  verifyAddFirstCardToCenterStack() {
    if (this.centerStack.length == 0) return true;
    else return false;
  }

  verifyFullCenterStack() {
    if (this.centerStack.length == 12) return true;
    else return false;
  }
}

export class EmptyCenterStack {
  emptyCenterStack;

  constructor(customEmptyCenterStack) {
    this.emptyCenterStack = customEmptyCenterStack;
  }

  verifyAddFirstCardToEmptyCenterStack(card) {
    if (
      (this.emptyCenterStack.length == 0 && card.number == 1) ||
      (this.emptyCenterStack.length == 0 && card.number == 13)
    )
      return true;
    else return false;
  }
}

export class FullCenterStack {
  fullCenterStack;

  constructor(customFullCenterStack) {
    this.fullCenterStack = customFullCenterStack;
  }
  copyValuesFromFullCenterStack(fullArray) {
    let copyOfFullArray = [];
    copyOfFullArray = [...fullArray];
    return copyOfFullArray;
  }

  emptyCenterStack(fullArray) {
    fullArray = [];
    return fullArray;
  }
}

export class DeckOfCards {
  deckOfCards = [];
  suits = ["spades", "hearts", "clubs", "diamonds"];

  constructor(customDeckOfCards) {
    for (let deck = 0; deck < 2; deck++) {
      for (let card = 0; card < 13; card++) {
        this.suits.forEach((suit) => {
          this.deckOfCards.push({
            color: suit,
            number: card + 1,
            id: deck + 1,
          });
        });
      }
    }
    // this.deckOfCards = customDeckOfCards;
  }

  getTopCardFromDeckOfCards() {
    return this.deckOfCards[this.deckOfCards.length - 1];
  }

  removeTopCardFromDeckOfCards() {
    this.deckOfCards.pop(this.deckOfCards[this.deckOfCards.length - 1]);
  }

  extractCards(numberOfCards) {
    const extractedCards = [];
    for (let counter = 0; counter < numberOfCards; counter++) {
      extractedCards.push(
        this.deckOfCards.pop(this.deckOfCards[this.deckOfCards.length - 1])
      );
    }

    return extractedCards;
  }

  getRemainingCardsFromDeckOfCards() {
    return this.deckOfCards;
  }

  mergeArrayToDeckOfCards(cards) {
    this.deckOfCards.push(...cards);
  }
}

export class GameEngineAlexis {
  deckOfCards;
  initialPlayerOne;
  initialOpponent;
  centerStacks;

  constructor() {
    initDeck();
    initPlayerOne();
    initPlayerSideStacks();
    initCenterStacks();
    initOpponent();
    initOpponentSideStacks();
  }

  initDeck() {
    this.deckOfCards = new DeckOfCards();
  }

  initPlayerOne() {
    const mycards = this.deckOfCards.extractCards(20);
    const cardsInHand = this.deckOfCards.extractCards(5);
    this.deckOfCards.getRemainingCardsFromDeckOfCards();
    const cardsToGoPlayer = new CardsToGo(mycards);
    cardsToGoPlayer.getRemainingCards();
    const playerHand = new CardsAvailable(cardsInHand);
    playerHand.getRemainingAvailableCards();
    this.initialPlayerOne = {
      hand: playerHand,
      cardsToGo: cardsToGoPlayer,
    };
  }

  initOpponent() {
    const opponentCards = this.deckOfCards.extractCards(20);
    const cardsInOpponentHand = this.deckOfCards.extractCards(5);
    this.deckOfCards.getRemainingCardsFromDeckOfCards();
    const cardsToGoOpponent = new CardsToGo(opponentCards);
    cardsToGoOpponent.getRemainingCards();
    const opponentHand = new CardsAvailable(cardsInOpponentHand);
    opponentHand.getRemainingAvailableCards();
    this.initialOpponent = {
      hand: opponentHand,
      cardsToGo: cardsToGoOpponent,
    };
  }

  initPlayerSideStacks() {
    const playerSideStack1 = new SideStack([]);
    const playerSideStack2 = new SideStack([]);
    const playerSideStack3 = new SideStack([]);
    const playerSideStack4 = new SideStack([]);
    const playerStacks = [
      playerSideStack1,
      playerSideStack2,
      playerSideStack3,
      playerSideStack4,
    ];
    this.initialPlayerOne.sideStacks = playerStacks;
  }

  initOpponentSideStacks() {
    const opponentSideStack1 = new SideStack([]);
    const opponentSideStack2 = new SideStack([]);
    const opponentSideStack3 = new SideStack([]);
    const opponentSideStack4 = new SideStack([]);
    const opponentStacks = [
      opponentSideStack1,
      opponentSideStack2,
      opponentSideStack3,
      opponentSideStack4,
    ];
    this.initialOpponent.sideStacks = opponentStacks;
  }

  initCenterStacks() {
    const centerStack1 = new EmptyCenterStack([]);
    const centerStack2 = new EmptyCenterStack([]);
    const centerStack3 = new EmptyCenterStack([]);
    const centerStack4 = new EmptyCenterStack([]);
    this.centerStacks = [
      centerStack1,
      centerStack2,
      centerStack3,
      centerStack4,
    ];
  }

  shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const copyArrayElement = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = copyArrayElement;
    }
    return array;
  }

  availableCenterStackToMoveCard(card, centerStacksArray) {
    let possibleStacksToMove = [];
    for (
      let counterCenterStack = 0;
      counterCenterStack < 4;
      counterCenterStack++
    ) {
      if (
        centerStacksArray[
          counterCenterStack
        ].verifyAddFirstCardToEmptyCenterStack(card) ||
        centerStacksArray[counterCenterStack].verifyAddCardToCenterStack(card)
      ) {
        possibleStacksToMove.push(counterCenterStack + 1);
      }
    }
    return possibleStacksToMove;
  }

  playerRound() {
    let possibleCenterStacksToMove = [];
    let copyOfFullCenterStack = [];
    let playerTopCardToGo = this.initialPlayerOne.cardsToGo.getTopCardToGo();
    while (
      (this.initialPlayerOne.cardsToGo.length >= 0 &&
        verifyAddFirstCardToEmptyCenterStack(playerTopCardToGo)) ||
      verifyAddCardToCenterStack(playerTopCardToGo)
    ) {
      possibleCenterStacksToMove = availableCenterStackToMoveCard(
        playerTopCardToGo,
        this.centerStacks
      );

      if (possibleCenterStacksToMove.length) {
        this.centerStacks[
          possibleCenterStacksToMove[0 - 1]
        ].addCardToCenterStack(playerTopCardToGo);
        this.initialPlayerOne.cardsToGo.removeTopCardToGo();
        playerTopCardToGo = this.initialPlayerOne.cardsToGo.getTopCardToGo();
        if (
          this.centerStacks[
            [possibleCenterStacksToMove[0] - 1]
          ].verifyFullCenterStack()
        ) {
          copyOfFullCenterStack = copyValuesFromFullCenterStack(
            this.centerStacks[possibleCenterStacksToMove[0] - 1]
          );

          let shuffledCopyOfFullCenterStack = shuffle(copyOfFullCenterStack);
          this.deckOfCards.mergeArrayToDeckOfCards(
            shuffledCopyOfFullCenterStack
          );
          emptyCenterStack(
            this.centerStacks[possibleCenterStacksToMove[0] - 1]
          );
        }
      } else if (possibleCenterStacksToMove.length == 0) {
        this.initialPlayerOne.sideStacks[0].push(this.initialPlayerOne.hand[0]);
        //randul oponentului
      }

      this.initialPlayerOne.hand.getRemainingCards();
      this.initialPlayerOne.cardsToGo.getRemainingCards();
      this.initialPlayerOne.sideStacks.getRemainingCards();
    }
    if (this.initialPlayerOne.cardsToGo.length < 0)
      console.log("Player One won the game");
  }
}
