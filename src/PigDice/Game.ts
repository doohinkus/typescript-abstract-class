import { dice } from "./Dice";
import { player } from "./Player";

type gameState = {
  players: player[];
  dice: dice[];
  start: boolean;
  over: boolean;
  winningScore: number;
};

interface GameActions {
  startGame(): void;
  endGame(): void;
  passDice(): void;
  rollDice(): void;
  updateGameState(update: any): void;
  getGameState(): gameState;
  findActivePlayer(): { player: player; index: number };
  nextPlayerIndex(): number;
}

class Game {
  constructor(public gameState: gameState) {}
}
class GamePlay extends Game implements GameActions {
  startGame(): void {
    this.updateGameState({
      start: true,
      players: this.gameState.players.map((player, index) => {
        if (index === 0) {
          return {
            ...player,
            turn: true,
          };
        }
        return player;
      }),
    });
    console.log("start", JSON.stringify(this.gameState));
  }
  endGame(): void {
    throw new Error("Method not implemented.");
  }
  getGameState() {
    return this.gameState;
  }
  nextPlayerIndex(): number {
    const activePlayerIndex = this.findActivePlayer().index;
    let nextPlayerIndex: number = 0;
    if (activePlayerIndex < this.gameState.players.length - 1) {
      nextPlayerIndex = activePlayerIndex + 1;
    }
    return nextPlayerIndex;
  }
  findActivePlayer() {
    const activePlayer = this.gameState.players
      .filter((player) => player.turn)
      .map((player, index) => ({ player, index }))[0];
    return {
      ...activePlayer,
    };
  }
  updateGameState(update: any) {
    this.gameState = {
      ...this.gameState,
      ...update,
    };
  }
  passDice() {
    const nextPlayerIndex = this.nextPlayerIndex();
    const activePlayerIndex = this.findActivePlayer().index;

    this.updateGameState({
      players: this.gameState.players.map((player, index) => {
        if (index === activePlayerIndex) {
          return {
            ...player,
            turn: false,
          };
        }
        if (index === nextPlayerIndex) {
          return {
            ...player,
            turn: true,
          };
        }
      }),
    });
  }
  rollDice() {
    const activePlayer = this.findActivePlayer();
    const results = this.gameState.dice.map((dice) => {
      const side = Math.floor(Math.random() * dice.sides + 1);
      if (side === dice.badSide) return -1;
      return side;
    });
    const badRoll =
      results.filter((side) => side !== -1).length < this.gameState.dice.length;
    const sum: number = results.reduce((a, b) => a + b, 0);
    const gameOver = activePlayer.player.score >= this.gameState.winningScore;
    console.log(`roll: ${results} sum: ${sum}`);
    let update: any;
    if (badRoll) {
      update = {
        turn: false,
        score: 0,
      };
    } else {
      update = {
        score: activePlayer.player.score + sum,
        over: gameOver,
        start: !gameOver,
      };
    }
    this.updateGameState({
      players: this.gameState.players.map((player) => {
        if (player === activePlayer.player) {
          return {
            ...player,
            ...update,
          };
        }
        return player;
      }),
    });
  }
}

export class GameFactory {
  constructor(public players: player[], public dice: dice[]) {}
  makeGame() {
    return new GamePlay({
      players: this.players,
      dice: this.dice,
      start: true,
      over: false,
      winningScore: 20,
    });
  }
}
