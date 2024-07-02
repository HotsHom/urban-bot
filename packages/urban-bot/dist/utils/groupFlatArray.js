"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupFlatArray = void 0;
function groupFlatArray(arr, groupLength) {
    if (groupLength < 1) {
        throw new Error(`groupLength should be more than zero`);
    }
    const groupArray = [];
    for (let startSliceIndex = 0, groupArrayIndex = 0; startSliceIndex < arr.length; startSliceIndex += groupLength) {
        groupArray[groupArrayIndex] = arr.slice(startSliceIndex, startSliceIndex + groupLength);
        groupArrayIndex += 1;
    }
    return groupArray;
}
exports.groupFlatArray = groupFlatArray;
//# sourceMappingURL=groupFlatArray.js.map