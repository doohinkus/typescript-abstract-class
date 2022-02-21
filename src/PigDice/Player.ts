export type player = {
  name: string;
  score: number;
  id: number;
  turn: false;
};
// interface PlayerActions {
//   updatePlayer(update: any): player;
// }
class Player {
  constructor(public player: player) {}
  //   updatePlayer(update: any) {
  //     const playerUpdate = {
  //       ...this.player,
  //       ...update,
  //     };
  //     return playerUpdate;
  //   }
}
