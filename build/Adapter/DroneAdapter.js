"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mallard = exports.DuckSimulator = exports.DroneAdapter = exports.Drone = void 0;
var Drone = /** @class */ (function () {
    function Drone() {
    }
    Drone.prototype.beep = function () {
        console.log("beep");
    };
    Drone.prototype.launch = function () {
        console.log("launching");
    };
    Drone.prototype.spin = function () {
        console.log("spinning");
    };
    Drone.prototype.test = function () {
        this.beep();
        this.spin();
        this.launch();
    };
    return Drone;
}());
exports.Drone = Drone;
var DroneAdapter = /** @class */ (function () {
    function DroneAdapter(drone) {
        this.drone = drone;
        this.drone = drone;
    }
    DroneAdapter.prototype.quack = function () {
        this.drone.beep();
    };
    DroneAdapter.prototype.fly = function () {
        this.drone.spin();
        this.drone.launch();
    };
    return DroneAdapter;
}());
exports.DroneAdapter = DroneAdapter;
var DuckSimulator = /** @class */ (function () {
    function DuckSimulator(duck) {
        this.duck = duck;
        this.duck = duck;
    }
    DuckSimulator.prototype.testDuck = function () {
        this.duck.quack();
        this.duck.fly();
    };
    return DuckSimulator;
}());
exports.DuckSimulator = DuckSimulator;
var Mallard = /** @class */ (function () {
    function Mallard() {
    }
    Mallard.prototype.quack = function () {
        console.log("mallard quack");
    };
    Mallard.prototype.fly = function () {
        console.log("mallard fly");
    };
    return Mallard;
}());
exports.Mallard = Mallard;
