"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSTimesReader = exports.JSTimes = void 0;
var JSTimes = /** @class */ (function () {
    function JSTimes() {
        this.subscribers = [];
    }
    JSTimes.prototype.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    JSTimes.prototype.unSubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (element) { return subscriber.name !== element.name; });
    };
    JSTimes.prototype.notifySubscribers = function (data) {
        this.subscribers.forEach(function (subscriber) { return subscriber.update(data); });
    };
    return JSTimes;
}());
exports.JSTimes = JSTimes;
var JSTimesReader = /** @class */ (function () {
    function JSTimesReader(name) {
        this.name = name;
        this.state = {};
    }
    JSTimesReader.prototype.update = function (data) {
        this.state = data;
        this.display();
    };
    JSTimesReader.prototype.display = function () {
        console.log("".concat(this.name, " received: ").concat(JSON.stringify(this.state)));
    };
    return JSTimesReader;
}());
exports.JSTimesReader = JSTimesReader;
