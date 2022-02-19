import { Sortable, Sorter } from "./sorter";

export class NumbersCollection extends Sorter implements Sortable {
  //   data: number[];
  //   constructor(data: number[]) {
  //     this.data = data;
  //   }
  constructor(public data: number[]) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftData = this.data[leftIndex];
    const rightData = this.data[rightIndex];
    this.data[leftIndex] = rightData;
    this.data[rightIndex] = leftData;
  }
}
