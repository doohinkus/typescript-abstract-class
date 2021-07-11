export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // the methods required for this class
  // the classes that extend this method, MUST HAVE THEIR IMPLEMENTATION OF METHODS DEFINED
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  sort(): void {
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
