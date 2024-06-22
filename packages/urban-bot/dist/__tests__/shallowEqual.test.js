"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shallowEqual_1 = require("../utils/shallowEqual");
describe('shallowEqual', () => {
    it('number compare', () => {
        expect((0, shallowEqual_1.shallowEqual)({ a: 1 }, { a: 1 })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: 1 }, { a: 2 })).toBe(false);
    });
    it('string compare', () => {
        expect((0, shallowEqual_1.shallowEqual)({ a: 'hello' }, { a: 'hello' })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: 'hello' }, { a: 'hell' })).toBe(false);
    });
    it('undefined null NaN compare', () => {
        expect((0, shallowEqual_1.shallowEqual)({ a: undefined }, { a: undefined })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: null }, { a: null })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: null }, { a: undefined })).toBe(false);
        expect((0, shallowEqual_1.shallowEqual)({ a: NaN }, { a: NaN })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: NaN }, { a: null })).toBe(false);
    });
    it('object compare', () => {
        const obj = {};
        expect((0, shallowEqual_1.shallowEqual)({ a: obj }, { a: obj })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: {} }, { a: {} })).toBe(false);
        const arr = [1, 2];
        expect((0, shallowEqual_1.shallowEqual)({ a: arr }, { a: arr })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: [1, 2] }, { a: [1, 2] })).toBe(false);
    });
    it('combine compare', () => {
        expect((0, shallowEqual_1.shallowEqual)({ a: 1 }, { b: 1 })).toBe(false);
        expect((0, shallowEqual_1.shallowEqual)({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: 1, b: 2 }, { a: 1, b: 1 })).toBe(false);
        expect((0, shallowEqual_1.shallowEqual)({ a: 'hello', b: 'world' }, { a: 'hello', b: 'world' })).toBe(true);
        expect((0, shallowEqual_1.shallowEqual)({ a: 'hello', b: 'world' }, { a: 'hello', b: 'worl' })).toBe(false);
        expect((0, shallowEqual_1.shallowEqual)({ a: 'hello', b: [] }, { a: [], b: 'hello' })).toBe(false);
    });
    it('compare the same ', () => {
        const obj = { a: 1 };
        expect((0, shallowEqual_1.shallowEqual)(obj, obj)).toBe(true);
    });
    it('compare empty ', () => {
        const obj1 = {};
        const obj2 = {};
        expect((0, shallowEqual_1.shallowEqual)(obj1, obj2)).toBe(true);
    });
    it('compare with different length', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1, b: 1 };
        expect((0, shallowEqual_1.shallowEqual)(obj1, obj2)).toBe(false);
    });
});
//# sourceMappingURL=shallowEqual.test.js.map