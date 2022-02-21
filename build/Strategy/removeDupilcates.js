"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueArray = exports.FunctionalStrategy = exports.ImperativeStrategy = void 0;
var ImperativeStrategy = /** @class */ (function () {
    function ImperativeStrategy() {
    }
    ImperativeStrategy.prototype.removeDuplicates = function (arr) {
        var end = arr.length - 1;
        var result = [];
        while (0 < end) {
            var lastItem = arr[end];
            var isUnique = true;
            for (var index = 0; index < end; index++) {
                var currentItem = arr[index];
                var isDuplicate = lastItem === currentItem && index !== 0;
                if (isDuplicate)
                    isUnique = false;
            }
            if (isUnique)
                result.push(lastItem);
            end--;
        }
        console.log("imperative", result);
        return result;
    };
    return ImperativeStrategy;
}());
exports.ImperativeStrategy = ImperativeStrategy;
var FunctionalStrategy = /** @class */ (function () {
    function FunctionalStrategy() {
    }
    FunctionalStrategy.prototype.removeDuplicates = function (arr) {
        var result = arr.reduce(function (unique, item) {
            return unique.includes(item) ? unique : __spreadArray(__spreadArray([], unique, true), [item], false);
        }, []);
        console.log("functional", result);
        return result;
    };
    return FunctionalStrategy;
}());
exports.FunctionalStrategy = FunctionalStrategy;
var RemoveDuplicates = /** @class */ (function () {
    function RemoveDuplicates(arr) {
        this.arr = arr;
        this.removeBehavior = null;
    }
    RemoveDuplicates.prototype.setRemoveDuplicatesBehavior = function (removeDups) {
        this.removeBehavior = removeDups;
    };
    RemoveDuplicates.prototype.removeDuplicates = function () {
        if (this.removeBehavior) {
            return this.removeBehavior.removeDuplicates(this.arr);
        }
        return null;
    };
    return RemoveDuplicates;
}());
var UniqueArray = /** @class */ (function (_super) {
    __extends(UniqueArray, _super);
    function UniqueArray(a) {
        return _super.call(this, a) || this;
    }
    return UniqueArray;
}(RemoveDuplicates));
exports.UniqueArray = UniqueArray;
