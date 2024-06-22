"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getButtonsByButtonGroup = void 0;
const react_1 = __importDefault(require("react"));
const ButtonGroup_1 = require("../components/Button/ButtonGroup");
function getButtonsByButtonGroup(buttonGroupElement) {
    if (buttonGroupElement === undefined) {
        return undefined;
    }
    if (!react_1.default.Children.only(buttonGroupElement) && buttonGroupElement.type !== ButtonGroup_1.ButtonGroup) {
        throw new Error('Pass only one ButtonGroup component to buttons');
    }
    const buttonsElementChildren = buttonGroupElement.type(buttonGroupElement.props);
    if (buttonsElementChildren === null) {
        throw new Error('ButtonGroup component should return children');
    }
    const { data } = buttonsElementChildren.props;
    return data.buttons;
}
exports.getButtonsByButtonGroup = getButtonsByButtonGroup;
//# sourceMappingURL=getButtonsByButtonGroup.js.map