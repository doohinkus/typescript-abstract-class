export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // constructor(public collection: Sortable) {}
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  sort(): void {
    // const {
    //   collection,
    //   collection: { length },
    // } = this;

    // let secondIndex = 1;
    // for (let firstIndex = 0; firstIndex < length; firstIndex++) {
    //   if (collection.compare(firstIndex, secondIndex + firstIndex)) {
    //     collection.swap(firstIndex, secondIndex + firstIndex);
    //   }
    // }
    const { length } = this;
    for (let firstIndex = 0; firstIndex < length; firstIndex++) {
      for (
        let secondIndex = 0;
        secondIndex < length - firstIndex - 1;
        secondIndex++
      ) {
        let previous = secondIndex;
        let next = secondIndex + 1;

        if (this.compare(previous, next)) {
          this.swap(previous, next);
        }
      }
    }
  }
}
