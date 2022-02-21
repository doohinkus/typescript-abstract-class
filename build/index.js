"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./PigDice/Game");
var observer_1 = require("./Observer/observer");
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
// console.log(pigDice);
// const game = pigDice.makeGame();
// game.startGame();
// game.rollDice();
// console.log("after:::", JSON.stringify(game.getGameState()));
// jk
// console.log(JSON.stringify(game.getGameState()));
var JSTimesOnline = new observer_1.JSTimes();
var jim = new observer_1.JSTimesReader("jim");
var karen = new observer_1.JSTimesReader("karen");
JSTimesOnline.subscribe(jim);
JSTimesOnline.subscribe(karen);
JSTimesOnline.notifySubscribers({ news: "Module Federation!" });
JSTimesOnline.notifySubscribers({ news: "Dynamic modules!!!" });
