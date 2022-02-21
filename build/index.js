"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./PigDice/Game");
var observer_1 = require("./Observer/observer");
var removeDupilcates_1 = require("./Strategy/removeDupilcates");
var DroneAdapter_1 = require("./Adapter/DroneAdapter");
var pigDice = new Game_1.GameFactory([
    {
        name: "jim",
        score: 0,
        id: 0,
        turn: false,
    },
], [
    { sides: 6, badSide: 1 },
    { sides: 6, badSide: 1 },
], 20);
// OBSERVER
var JSTimesOnline = new observer_1.JSTimes();
var jim = new observer_1.JSTimesReader("jim");
var karen = new observer_1.JSTimesReader("karen");
JSTimesOnline.subscribe(jim);
JSTimesOnline.subscribe(karen);
JSTimesOnline.notifySubscribers({ news: "Module Federation!" });
JSTimesOnline.notifySubscribers({ news: "Dynamic modules!!!" });
//STRATEGY
var sample = new removeDupilcates_1.UniqueArray([1, 2, 3, 2, 1, 4, 5, 4]);
var sample2 = new removeDupilcates_1.UniqueArray([1, 1, 3, 4, 2, 3, 2, 1, 4, 5, 4]);
sample.setRemoveDuplicatesBehavior(new removeDupilcates_1.ImperativeStrategy());
sample.removeDuplicates();
sample2.setRemoveDuplicatesBehavior(new removeDupilcates_1.FunctionalStrategy());
sample2.removeDuplicates();
//ADAPTER
var drone = new DroneAdapter_1.Drone();
var mallard = new DroneAdapter_1.Mallard();
var droneAdapter = new DroneAdapter_1.DroneAdapter(drone);
var simulateMallard = new DroneAdapter_1.DuckSimulator(mallard);
simulateMallard.testDuck();
var similulateDrone = new DroneAdapter_1.DuckSimulator(droneAdapter);
similulateDrone.testDuck();
