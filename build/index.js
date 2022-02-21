"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./PigDice/Game");
// linkedList.add(100);
// linkedList.add(120);
// linkedList.add(10);
// linkedList.add(0);
// linkedList.add(123);
// linkedList.add(27);
// linkedList.sort();
// linkedList.print();
var pigDice = new Game_1.GameFactory([
    {
        name: "jim",
        score: 0,
        id: 0,
        turn: false,
    },
], [
    { sides: 6, badSide: 1 },
    { sides: 6, badSide: 1 },
], 20);
console.log(pigDice);
var game = pigDice.makeGame();
game.startGame();
game.rollDice();
// console.log("after:::", JSON.stringify(game.getGameState()));
// jk
// console.log(JSON.stringify(game.getGameState()));
