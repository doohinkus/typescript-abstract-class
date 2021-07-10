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

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(120);
linkedList.add(10);
linkedList.add(0);
linkedList.add(123);
linkedList.add(27);

linkedList.sort();
linkedList.print();
