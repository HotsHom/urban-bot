"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatButtonElement = void 0;
const react_1 = __importDefault(require("react"));
const isArrayMatrix_1 = require("./isArrayMatrix");
const getRandomId_1 = require("./getRandomId");
function formatButtonElement(element) {
    if ((0, isArrayMatrix_1.isArrayMatrix)(element)) {
        return element.map(formatButtonFlatArray);
    }
    return formatButtonFlatArray(element);
}
exports.formatButtonElement = formatButtonElement;
function formatButtonFlatArray(element) {
    return react_1.default.Children.toArray(element)
        .filter(react_1.default.isValidElement)
        .map((child) => {
        const { props } = child;
        if (!props || !('children' in props)) {
            throw new Error('Please use only Button components inside ButtonGroup.');
        }
        const { children: text, onClick, id = (0, getRandomId_1.getRandomId)(), ...other } = child.props;
        return { text, onClick, id, ...other };
    });
}
//# sourceMappingURL=formatButtonElement.js.map