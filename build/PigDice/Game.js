"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFactory = void 0;
var Game = /** @class */ (function () {
    function Game(gameState) {
        this.gameState = gameState;
    }
    return Game;
}());
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePlay.prototype.startGame = function () {
        this.updateGameState({
            start: true,
            players: this.gameState.players.map(function (player, index) {
                if (index === 0) {
                    return __assign(__assign({}, player), { turn: true });
                }
                return player;
            }),
        });
        console.log("start", JSON.stringify(this.gameState));
    };
    GamePlay.prototype.endGame = function () {
        this.updateGameState({
            over: true,
            start: false,
        });
    };
    GamePlay.prototype.getGameState = function () {
        return this.gameState;
    };
    GamePlay.prototype.nextPlayerIndex = function () {
        var activePlayerIndex = this.findActivePlayer().index;
        var nextPlayerIndex = 0;
        if (activePlayerIndex < this.gameState.players.length) {
            nextPlayerIndex = activePlayerIndex + 1;
        }
        return nextPlayerIndex;
    };
    GamePlay.prototype.findActivePlayer = function () {
        var activePlayer = this.gameState.players
            .filter(function (player) { return player.turn; })
            .map(function (player, index) { return ({ player: player, index: index }); })[0];
        return __assign({}, activePlayer);
    };
    GamePlay.prototype.updateGameState = function (update) {
        this.gameState = __assign(__assign({}, this.gameState), update);
    };
    GamePlay.prototype.passDice = function () {
        var nextPlayerIndex = this.nextPlayerIndex();
        var activePlayerIndex = this.findActivePlayer().index;
        this.updateGameState({
            players: this.gameState.players.map(function (player, index) {
                if (index === activePlayerIndex) {
                    return __assign(__assign({}, player), { turn: false });
                }
                if (index === nextPlayerIndex) {
                    return __assign(__assign({}, player), { turn: true });
                }
            }),
        });
    };
    GamePlay.prototype.rollDice = function () {
        var activePlayer = this.findActivePlayer();
        var results = this.gameState.dice.map(function (dice) {
            var side = Math.floor(Math.random() * dice.sides + 1);
            if (side === dice.badSide)
                return -1;
            return side;
        });
        var badRoll = results.filter(function (side) { return side !== -1; }).length < this.gameState.dice.length;
        var sum = results.reduce(function (a, b) { return a + b; }, 0);
        var gameOver = activePlayer.player.score >= this.gameState.winningScore;
        console.log("roll: ".concat(results, " sum: ").concat(sum));
        var update;
        if (gameOver)
            this.endGame();
        if (badRoll) {
            update = {
                turn: false,
                score: 0,
            };
        }
        else {
            update = {
                score: activePlayer.player.score + sum,
            };
        }
        this.updateGameState({
            players: this.gameState.players.map(function (player) {
                if (player === activePlayer.player) {
                    return __assign(__assign({}, player), update);
                }
                return player;
            }),
        });
    };
    return GamePlay;
}(Game));
var GameFactory = /** @class */ (function () {
    function GameFactory(players, dice, winningScore) {
        this.players = players;
        this.dice = dice;
        this.winningScore = winningScore;
    }
    GameFactory.prototype.makeGame = function () {
        return new GamePlay({
            players: this.players,
            dice: this.dice,
            start: true,
            over: false,
            winningScore: this.winningScore,
        });
    };
    return GameFactory;
}());
exports.GameFactory = GameFactory;
