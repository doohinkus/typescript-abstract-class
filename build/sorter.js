"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var firstIndex = 0; firstIndex < length; firstIndex++) {
            for (var secondIndex = 0; secondIndex < length - firstIndex - 1; secondIndex++) {
                var previous = secondIndex;
                var next = secondIndex + 1;
                if (this.compare(previous, next)) {
                    this.swap(previous, next);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
