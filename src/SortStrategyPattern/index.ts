import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./Node";

const numbersCollection = new NumbersCollection([
  13, 12, 2, 0, 9, 5123, 273, 3, 12, 24, 12, -9,
]);
numbersCollection.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("some wordsK JS bacszz");
charactersCollection.sort();
console.log(charactersCollection.data);

export const linkedList = new LinkedList();
