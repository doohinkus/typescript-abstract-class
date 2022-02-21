import { linkedList } from "./SortStrategyPattern";
import { GameFactory } from "./PigDice/Game";
import { JSTimesReader, JSTimes } from "./Observer/observer";
import {
  UniqueArray,
  ImperativeStrategy,
  FunctionalStrategy,
} from "./Strategy/removeDupilcates";
import {
  Drone,
  DroneAdapter,
  Mallard,
  DuckSimulator,
} from "./Adapter/DroneAdapter";
const pigDice = new GameFactory(
  [
    {
      name: "jim",
      score: 0,
      id: 0,
      turn: false,
    },
  ],
  [
    { sides: 6, badSide: 1 },
    { sides: 6, badSide: 1 },
  ],
  20
);

// OBSERVER
const JSTimesOnline = new JSTimes();
const jim = new JSTimesReader("jim");
const karen = new JSTimesReader("karen");

JSTimesOnline.subscribe(jim);
JSTimesOnline.subscribe(karen);
JSTimesOnline.notifySubscribers({ news: "Module Federation!" });
JSTimesOnline.notifySubscribers({ news: "Dynamic modules!!!" });

//STRATEGY
const sample = new UniqueArray([1, 2, 3, 2, 1, 4, 5, 4]);
const sample2 = new UniqueArray([1, 1, 3, 4, 2, 3, 2, 1, 4, 5, 4]);

sample.setRemoveDuplicatesBehavior(new ImperativeStrategy());
sample.removeDuplicates();

sample2.setRemoveDuplicatesBehavior(new FunctionalStrategy());
sample2.removeDuplicates();

//ADAPTER
const drone = new Drone();
const mallard = new Mallard();
const droneAdapter = new DroneAdapter(drone);

const simulateMallard = new DuckSimulator(mallard);
simulateMallard.testDuck();

const similulateDrone = new DuckSimulator(droneAdapter);
similulateDrone.testDuck();
