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

  countRemainingCards() {
    return this.remainingCards.length;
  }

  getTopCard() {
    return this.remainingCards[this.remainingCards.length - 1];
  }

  removeTopCard() {
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
