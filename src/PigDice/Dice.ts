export type dice = {
  sides: number;
  badSide: number;
};

class Dice {
  constructor(public dice: dice) {}
}
// class DiceRoller extends Dice implements DiceRoller {}
