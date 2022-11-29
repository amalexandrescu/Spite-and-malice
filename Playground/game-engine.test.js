import {
  GameEngine,
  CardsToGo,
  CardsAvailable,
  SideStack,
  CenterStack,
  EmptyCenterStack,
  FullCenterStack,
  DeckOfCards,
} from "./game-engine";

describe("game-engine", () => {
  let gameEngine;
  const customDeck = [10, 20];

  beforeEach(() => {
    gameEngine = new GameEngine([...customDeck]);
  });

  it("should get top card", () => {
    expect(gameEngine.getTopCard()).toEqual(20);
  });

  it("should remove top card", () => {
    gameEngine.removeTopCard();
    expect(gameEngine.getTopCard()).toEqual(10);
  });

  it("should add card on top of deck", () => {
    gameEngine.addCardToDeck(30);
    expect(gameEngine.getTopCard()).toEqual(30);
  });
});

describe("CardsToGo", () => {
  let cardsToGo;
  const customDeck = [
    { number: 7, suit: "diamonds" },
    { number: 4, suit: "hearts" },
  ];

  beforeEach(() => {
    cardsToGo = new CardsToGo([...customDeck]);
  });

  it("should initialize with deck of cards", () => {
    expect(cardsToGo.getRemainingCards()).toEqual(customDeck);
  });

  it("should tell me how many cards are left", () => {
    expect(cardsToGo.countRemainingCardsToGo()).toEqual(2);
  });

  it("should tell you what the top card is", () => {
    expect(cardsToGo.getTopCardToGo()).toEqual({ number: 4, suit: "hearts" });
  });

  it("you should be able to remove the top card", () => {
    cardsToGo.removeTopCardToGo();
    expect(cardsToGo.getRemainingCards()).toEqual([
      { number: 7, suit: "diamonds" },
    ]);
  });
});

describe("CardsAvailable", () => {
  let cardsAvailable;
  const customCardsAvailable = [
    { number: 5, suit: "spades" },
    { number: 10, suit: "diamonds" },
    { number: 4, suit: "spades" },
    { number: 3, suit: "hearts" },
    { number: 2, suit: "clubs" },
  ];

  beforeEach(() => {
    cardsAvailable = new CardsAvailable([...customCardsAvailable]);
  });

  it("should initialize with five cards", () => {
    expect(cardsAvailable.getRemainingAvailableCards()).toEqual(
      customCardsAvailable
    );
  });

  it("should tell me how many cards are left in player's hand", () => {
    expect(cardsAvailable.countRemainingAvailableCards()).toEqual(5);
  });

  it("should be able to remove an element from a given index", () => {
    //the test index is  3

    cardsAvailable.removeIndexElement(3);
    expect(cardsAvailable.getRemainingAvailableCards()).toEqual([
      { number: 5, suit: "spades" },
      { number: 10, suit: "diamonds" },
      { number: 4, suit: "spades" },
      { number: 2, suit: "clubs" },
    ]);
  });

  it("should insert cards in the player's remaining available cards ", () => {
    cardsAvailable.addCardToCardsAvailablePlayer({
      number: 3,
      suit: "hearts",
    });
    expect(cardsAvailable.getRemainingAvailableCards()).toEqual([
      { number: 5, suit: "spades" },
      { number: 10, suit: "diamonds" },
      { number: 4, suit: "spades" },
      { number: 3, suit: "hearts" },
      { number: 2, suit: "clubs" },
      { number: 3, suit: "hearts" },
      //   { number: 6, suit: "diamonds" },
    ]);
  });

  it("should insert array of cards in the player's remaining available cards ", () => {
    cardsAvailable.addCardToCardsAvailablePlayer([
      {
        number: 4,
        suit: "hearts",
      },
      { number: 6, suit: "diamonds" },
    ]);
    expect(cardsAvailable.getRemainingAvailableCards()).toEqual([
      { number: 5, suit: "spades" },
      { number: 10, suit: "diamonds" },
      { number: 4, suit: "spades" },
      { number: 3, suit: "hearts" },
      { number: 2, suit: "clubs" },
      { number: 4, suit: "hearts" },
      { number: 6, suit: "diamonds" },
    ]);
  });
});

describe("SideStack", () => {
  let sideStack;
  const customSideStack = [
    { number: 5, suit: "spades" },
    { number: 10, suit: "diamonds" },
    { number: 4, suit: "spades" },
    { number: 3, suit: "hearts" },
    { number: 2, suit: "clubs" },
    { number: 6, suit: "diamonds" },
  ];

  beforeEach(() => {
    sideStack = new SideStack(customSideStack);
  });

  it("should initialize the side stack with cards", () => {
    expect(sideStack.getRemainingSideStack()).toEqual(customSideStack);
  });

  it("should tell me how many cards are left in the side stack", () => {
    expect(sideStack.countRemainingSideStackCards()).toEqual(6);
  });

  it("should insert a card at the end of the side stack", () => {
    sideStack.addCardToSideStack({ number: 8, suit: "clubs" });
    expect(sideStack.getRemainingSideStack()).toEqual([
      { number: 5, suit: "spades" },
      { number: 10, suit: "diamonds" },
      { number: 4, suit: "spades" },
      { number: 3, suit: "hearts" },
      { number: 2, suit: "clubs" },
      { number: 6, suit: "diamonds" },
      { number: 8, suit: "clubs" },
    ]);
  });

  it("should remove the last card from the side stack", () => {
    sideStack.removeSideStackCard();
    expect(sideStack.getRemainingSideStack()).toEqual([
      { number: 5, suit: "spades" },
      { number: 10, suit: "diamonds" },
      { number: 4, suit: "spades" },
      { number: 3, suit: "hearts" },
      { number: 2, suit: "clubs" },
      { number: 6, suit: "diamonds" },
    ]);
  });
});

describe("CenterStack", () => {
  let centerStack;

  const customCenterStack = [
    { number: 1, suit: "diamonds" },
    { number: 2, suit: "hearts" },
    { number: 3, suit: "clubs" },
    { number: 4, suit: "hearts" },
    { number: 5, suit: "spades" },
  ];

  beforeEach(() => {
    centerStack = new CenterStack([...customCenterStack]);
  });

  it("should getRemainingCenterStackCards", () => {
    expect(centerStack.getRemainingCenterStackCards()).toEqual([
      { number: 1, suit: "diamonds" },
      { number: 2, suit: "hearts" },
      { number: 3, suit: "clubs" },
      { number: 4, suit: "hearts" },
      { number: 5, suit: "spades" },
    ]);
  });

  it("should return the length of the center stack", () => {
    expect(centerStack.countRemainingCenterStackCards()).toEqual(5);
  });

  it("should be able to add a card", () => {
    centerStack.addCardToCenterStack({ number: 6, suit: "hearts" });
    expect(centerStack.getRemainingCenterStackCards()).toEqual([
      { number: 1, suit: "diamonds" },
      { number: 2, suit: "hearts" },
      { number: 3, suit: "clubs" },
      { number: 4, suit: "hearts" },
      { number: 5, suit: "spades" },
      { number: 6, suit: "hearts" },
    ]);
  });

  it("should give the top card from centerStack", () => {
    expect(centerStack.getCenterStackTopCard()).toEqual({
      number: 5,
      suit: "spades",
    });
  });

  it("should verify if a card can be added", () => {
    expect(
      centerStack.verifyAddCardToCenterStack({ number: 7, suit: "clubs" })
    ).toEqual(false);
  });

  it("should verify if you can add a first card in the center stack", () => {
    expect(centerStack.verifyAddFirstCardToCenterStack()).toEqual(false);
  });

  it("should tell me if a center stack is full", () => {
    expect(centerStack.verifyFullCenterStack()).toEqual(false);
  });
});

describe("EmptyCenterStack", () => {
  let emptyCenterStack;

  const customEmptyCenterStack = [];

  beforeEach(() => {
    emptyCenterStack = new EmptyCenterStack([...customEmptyCenterStack]);
  });

  it("should verify if a certain card can be added to an empty center stack", () => {
    expect(
      emptyCenterStack.verifyAddFirstCardToEmptyCenterStack({
        number: 1,
        suit: "hearts",
      })
    ).toEqual(true);
  });
});

describe("FullCenterStack", () => {
  let fullCenterStack;

  const customFullCenterStack = [
    { number: 1, suit: "diamonds" },
    { number: 2, suit: "hearts" },
    { number: 3, suit: "clubs" },
    { number: 4, suit: "hearts" },
    { number: 5, suit: "spades" },
    { number: 6, suit: "hearts" },
    { number: 7, suit: "clubs" },
    { number: 8, suit: "diamonds" },
    { number: 9, suit: "hearts" },
    { number: 10, suit: "spades" },
    { number: 11, suit: "hearts" },
    { number: 12, suit: "clubs" },
  ];

  beforeEach(() => {
    fullCenterStack = new FullCenterStack([...customFullCenterStack]);
  });

  it("should copy the values from a full center stack in a different array", () => {
    expect(
      fullCenterStack.copyValuesFromFullCenterStack([
        { number: 1, suit: "diamonds" },
        { number: 2, suit: "hearts" },
        { number: 3, suit: "clubs" },
        { number: 4, suit: "hearts" },
        { number: 5, suit: "spades" },
        { number: 6, suit: "hearts" },
        { number: 7, suit: "clubs" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "hearts" },
        { number: 10, suit: "spades" },
        { number: 11, suit: "hearts" },
        { number: 12, suit: "clubs" },
      ])
    ).toEqual([
      { number: 1, suit: "diamonds" },
      { number: 2, suit: "hearts" },
      { number: 3, suit: "clubs" },
      { number: 4, suit: "hearts" },
      { number: 5, suit: "spades" },
      { number: 6, suit: "hearts" },
      { number: 7, suit: "clubs" },
      { number: 8, suit: "diamonds" },
      { number: 9, suit: "hearts" },
      { number: 10, suit: "spades" },
      { number: 11, suit: "hearts" },
      { number: 12, suit: "clubs" },
    ]);
  });

  it("should empty the center stack if full", () => {
    expect(
      fullCenterStack.emptyCenterStack([
        { number: 1, suit: "diamonds" },
        { number: 2, suit: "hearts" },
        { number: 3, suit: "clubs" },
        { number: 4, suit: "hearts" },
        { number: 5, suit: "spades" },
        { number: 6, suit: "hearts" },
        { number: 7, suit: "clubs" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "hearts" },
        { number: 10, suit: "spades" },
        { number: 11, suit: "hearts" },
        { number: 12, suit: "clubs" },
      ])
    ).toEqual([]);
  });
});

describe("DeckOfCards", () => {
  let deckOfCards;

  const customDeckOfCards = [
    { number: 5, suit: "hearts" },
    { number: 10, suit: "clubs" },
    { number: 7, suit: "diamonds" },
    { number: 4, suit: "spades" },
  ];

  beforeEach(() => {
    deckOfCards = new DeckOfCards([...customDeckOfCards]);
  });

  it("should get the top card", () => {
    expect(deckOfCards.getTopCardFromDeckOfCards()).toEqual({
      number: 4,
      suit: "spades",
    });
  });

  it("should remove the top card", () => {
    deckOfCards.removeTopCardFromDeckOfCards();
    expect(deckOfCards.getRemainingCardsFromDeckOfCards()).toEqual([
      { number: 5, suit: "hearts" },
      { number: 10, suit: "clubs" },
      { number: 7, suit: "diamonds" },
    ]);
  });

  it("should extract a number of cards from the deck", () => {
    expect(deckOfCards.extractCards(3)).toEqual([
      { number: 4, suit: "spades" },
      { number: 7, suit: "diamonds" },
      { number: 10, suit: "clubs" },
    ]);
    expect(deckOfCards.getRemainingCardsFromDeckOfCards()).toEqual([
      { number: 5, suit: "hearts" },
    ]);
  });

  it("should merge a new array to the deck of cards", () => {
    deckOfCards.mergeArrayToDeckOfCards([
      { number: 6, suit: "hearts" },
      { number: 1, suit: "hearts" },
    ]);
    expect(deckOfCards.getRemainingCardsFromDeckOfCards()).toEqual([
      { number: 5, suit: "hearts" },
      { number: 10, suit: "clubs" },
      { number: 7, suit: "diamonds" },
      { number: 4, suit: "spades" },
      { number: 6, suit: "hearts" },
      { number: 1, suit: "hearts" },
    ]);
  });
});
