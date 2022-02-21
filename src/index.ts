import { linkedList } from "./SortStrategyPattern";
import { GameFactory } from "./PigDice/Game";
import { JSTimesReader, JSTimes } from "./Observer/observer";
const pigDice = new GameFactory(
  [
    {
      name: "jim",
      score: 0,
      id: 0,
      turn: false,
    },
  ],
  [
    { sides: 6, badSide: 1 },
    { sides: 6, badSide: 1 },
  ],
  20
);
// console.log(pigDice);
// const game = pigDice.makeGame();
// game.startGame();
// game.rollDice();
// console.log("after:::", JSON.stringify(game.getGameState()));
// jk
// console.log(JSON.stringify(game.getGameState()));
const JSTimesOnline = new JSTimes();
const jim = new JSTimesReader("jim");
const karen = new JSTimesReader("karen");

JSTimesOnline.subscribe(jim);
JSTimesOnline.subscribe(karen);
JSTimesOnline.notifySubscribers({ news: "Module Federation!" });
JSTimesOnline.notifySubscribers({ news: "Dynamic modules!!!" });
