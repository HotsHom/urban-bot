"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatOptionElement = void 0;
const react_1 = __importDefault(require("react"));
const Poll_1 = require("../components/Poll");
const getRandomId_1 = require("./getRandomId");
// TODO combine with formatButtonElement?
function formatOptionElement(element) {
    return react_1.default.Children.map(element, (child) => {
        if (child.type !== Poll_1.Option) {
            throw new Error('Please use only Option components inside Poll.');
        }
        const { children: text, onClick, id = (0, getRandomId_1.getRandomId)(), ...other } = child.props;
        return { text, onClick, id, ...other };
    });
}
exports.formatOptionElement = formatOptionElement;
//# sourceMappingURL=formatOptionElement.js.map