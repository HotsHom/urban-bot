"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowEqual = void 0;
function shallowEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    return keys1.every((key1) => {
        return Object.is(obj1[key1], obj2[key1]);
    });
}
exports.shallowEqual = shallowEqual;
//# sourceMappingURL=shallowEqual.js.map