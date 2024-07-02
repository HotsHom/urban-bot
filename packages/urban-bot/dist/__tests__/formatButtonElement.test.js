"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/jsx-key */
const Button_1 = require("../components/Button/Button");
const formatButtonElement_1 = require("../utils/formatButtonElement");
const array_flatten_1 = require("array-flatten");
describe('formatButtonElement', () => {
    it('return right response for one button', () => {
        const text = 'test name';
        const id = String(Math.random());
        const onClick = () => { };
        const element = ((0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: onClick, id: id }, { children: text }), void 0));
        expect((0, formatButtonElement_1.formatButtonElement)(element)).toEqual([{ text, onClick, id }]);
    });
    it('return right response for two buttons', () => {
        const text1 = 'test name';
        const text2 = 'test name2';
        const id1 = String(Math.random());
        const id2 = String(Math.random());
        const onClick1 = () => { };
        const onClick2 = () => { };
        const element = [
            (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: onClick1, id: id1 }, { children: text1 }), void 0),
            (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: onClick2, id: id2 }, { children: text2 }), void 0),
        ];
        expect((0, formatButtonElement_1.formatButtonElement)(element)).toEqual([
            { text: text1, onClick: onClick1, id: id1 },
            { text: text2, onClick: onClick2, id: id2 },
        ]);
    });
    it('add additional props to response', () => {
        const text = 'test name';
        const onClick = () => { };
        const id = String(Math.random());
        const customProp = true;
        const element = ((0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: onClick, customProp: customProp, id: id }, { children: text }), void 0));
        expect((0, array_flatten_1.flatten)((0, formatButtonElement_1.formatButtonElement)(element))[0].customProp).toBe(customProp);
    });
    it('add random id by default', () => {
        const text = 'test name';
        const element = (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: () => { } }, { children: text }), void 0);
        expect((0, array_flatten_1.flatten)((0, formatButtonElement_1.formatButtonElement)(element))[0].id).toEqual(expect.any(String));
    });
    it('throw error if passed not Button', () => {
        function Text(_props) {
            return null;
        }
        const text = 'test name';
        const element = (0, jsx_runtime_1.jsx)(Text, { children: text }, void 0);
        expect(() => (0, formatButtonElement_1.formatButtonElement)(element)).toThrowErrorMatchingSnapshot();
    });
});
//# sourceMappingURL=formatButtonElement.test.js.map