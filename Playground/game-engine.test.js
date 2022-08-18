import { GameEngine, CardsToGo } from "./game-engine";

describe("game-engine", () => {
  let gameEngine;
  const customDeck = [10, 20];

  beforeEach(() => {
    gameEngine = new GameEngine(customDeck);
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
    { number: 7, suite: "diamonds" },
    { number: 4, suite: "hearts" },
  ];

  beforeEach(() => {
    cardsToGo = new CardsToGo(customDeck);
  });

  it("should initialize with deck of cards", () => {
    expect(cardsToGo.getRemainingCards()).toEqual(customDeck);
  });

  it("should tell me how many cards are left", () => {
    expect(cardsToGo.countRemainingCards()).toEqual(2);
  });

  it("should tell you what the top card is", () => {
    expect(cardsToGo.getTopCard()).toEqual({ number: 4, suite: "hearts" });
  });

  it("you should be able to remove the top card", () => {
    cardsToGo.removeTopCard();
    expect(cardsToGo.getRemainingCards()).toEqual([
      { number: 7, suite: "diamonds" },
    ]);
  });
});
