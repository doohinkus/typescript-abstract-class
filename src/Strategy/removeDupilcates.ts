interface RemoveDuplicatesBehavior {
  removeDuplicates(arr: Array<number>): Array<number>;
}
export class ImperativeStrategy implements RemoveDuplicatesBehavior {
  removeDuplicates(arr: Array<number>) {
    let end: number = arr.length - 1;
    const result: Array<number> = [];
    while (0 < end) {
      let lastItem = arr[end];
      let isUnique: boolean = true;
      for (let index = 0; index < end; index++) {
        let currentItem = arr[index];
        let isDuplicate = lastItem === currentItem && index !== 0;
        if (isDuplicate) isUnique = false;
      }
      if (isUnique) result.push(lastItem);
      end--;
    }
    console.log("imperative", result);
    return result;
  }
}

export class FunctionalStrategy implements RemoveDuplicatesBehavior {
  removeDuplicates(arr: Array<number>) {
    let result: Array<number> = arr.reduce(
      (unique: Array<any>, item: number) =>
        unique.includes(item) ? unique : [...unique, item],
      []
    );
    console.log("functional", result);
    return result;
  }
}

abstract class RemoveDuplicates {
  removeBehavior: RemoveDuplicatesBehavior | null;
  constructor(public arr: Array<number>) {
    this.removeBehavior = null;
  }
  setRemoveDuplicatesBehavior(removeDups: RemoveDuplicatesBehavior) {
    this.removeBehavior = removeDups;
  }
  removeDuplicates(): Array<number> | null {
    if (this.removeBehavior) {
      return this.removeBehavior.removeDuplicates(this.arr);
    }
    return null;
  }
}

export class UniqueArray extends RemoveDuplicates {
  constructor(a: Array<number>) {
    super(a);
  }
}
