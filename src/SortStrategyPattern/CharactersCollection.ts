import { Sortable, Sorter } from "./sorter";
export class CharactersCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    let lowerCase = this.data.toLocaleLowerCase();
    return lowerCase[leftIndex] > lowerCase[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    let characters = this.data.split("");
    const leftData = characters[leftIndex];
    const rightData = characters[rightIndex];
    characters[leftIndex] = rightData;
    characters[rightIndex] = leftData;
    this.data = characters.join("");
  }
}
