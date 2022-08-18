import {GameEngine} from "./game-engine";

describe('game-engine', () => {
    let gameEngine;
    const customDeck = [10, 20];

    beforeEach(() => {
        gameEngine = new GameEngine(customDeck);
    })

    it('should get top card', () => {
        expect(gameEngine.getTopCard()).toEqual(20);
    })

    it('should remove top card', () => {
        gameEngine.removeTopCard();
        expect(gameEngine.getTopCard()).toEqual(10);
    })

    it('should add card on top of deck', () => {
        gameEngine.addCardToDeck(30);
        expect(gameEngine.getTopCard()).toEqual(30);
    })
})
