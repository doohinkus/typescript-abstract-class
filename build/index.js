"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var Node_1 = require("./Node");
var numbersCollection = new NumbersCollection_1.NumbersCollection([
    13, 12, 2, 0, 9, 5123, 273, 3, 12, 24, 12, -9,
]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection("some wordsK JS bacszz");
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new Node_1.LinkedList();
linkedList.add(100);
linkedList.add(120);
linkedList.add(10);
linkedList.add(0);
linkedList.add(123);
linkedList.add(27);
linkedList.sort();
linkedList.print();
