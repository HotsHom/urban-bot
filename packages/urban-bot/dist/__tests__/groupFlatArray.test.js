"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groupFlatArray_1 = require("../utils/groupFlatArray");
describe('groupFlatArray', () => {
    it("can't pass zero", () => {
        expect(() => (0, groupFlatArray_1.groupFlatArray)([1, 2, 3], 0)).toThrowErrorMatchingSnapshot();
    });
    it("can't pass less than zero", () => {
        expect(() => (0, groupFlatArray_1.groupFlatArray)([1, 2, 3], -1)).toThrowErrorMatchingSnapshot();
    });
    it('return empty array', () => {
        expect((0, groupFlatArray_1.groupFlatArray)([], 1)).toEqual([]);
    });
    it('return group array with one element', () => {
        expect((0, groupFlatArray_1.groupFlatArray)([1], 1)).toEqual([[1]]);
        expect((0, groupFlatArray_1.groupFlatArray)([1], 2)).toEqual([[1]]);
    });
    it('return group array with two elements', () => {
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2], 1)).toEqual([[1], [2]]);
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2], 2)).toEqual([[1, 2]]);
    });
    it('return group array with three elements', () => {
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    });
    it('return group array with four elements', () => {
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2, 3, 4], 2)).toEqual([
            [1, 2],
            [3, 4],
        ]);
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
        expect((0, groupFlatArray_1.groupFlatArray)([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
    });
});
//# sourceMappingURL=groupFlatArray.test.js.map