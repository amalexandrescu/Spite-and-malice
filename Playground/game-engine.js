export class GameEngine {
    deckOfCards;

    constructor(customDeck) {
        this.deckOfCards = customDeck ?? [1, 2, 3, 4];
    }

    getTopCard() {
        return this.deckOfCards[this.deckOfCards.length - 1];
    }

    removeTopCard() {
        throw new Error("Here")
        // return this.deckOfCards.pop();
    }

    addCardToDeck(card) {
        this.deckOfCards.push(card);
    }
}
