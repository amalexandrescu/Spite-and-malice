## Big Brother Bootcamp Testing 101

To run this:

1. `npm install`
2. `npm test`

You will see all the tests running and an output like this.

```bash
 FAIL  ./game-engine.test.js
  ● game-engine › should remove top card

    Here

      11 |
      12 |     removeTopCard() {
    > 13 |         throw new Error("Here")
         |               ^
      14 |         // return this.deckOfCards.pop();
      15 |     }
      16 |

      at GameEngine.removeTopCard (game-engine.js:13:15)
      at Object.removeTopCard (game-engine.test.js:16:20)

 PASS  ./sum.test.js

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        0.529 s, estimated 1 s
```

### Things to do

1. Fix the broken test
2. Write your own tests

### Writing a test

1. Create a file with the extension `test.js`
2. Follow some instructions here https://jestjs.io/docs/using-matchers
