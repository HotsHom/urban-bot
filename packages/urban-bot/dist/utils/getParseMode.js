"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParseMode = void 0;
const react_1 = __importDefault(require("react"));
function getParseMode(element, parseModeProp, parseModeContext, parseModeDefault) {
    let finalParseMode = parseModeProp !== null && parseModeProp !== void 0 ? parseModeProp : parseModeContext;
    if (react_1.default.isValidElement(element) || Array.isArray(element)) {
        finalParseMode = finalParseMode !== null && finalParseMode !== void 0 ? finalParseMode : parseModeDefault;
    }
    return finalParseMode;
}
exports.getParseMode = getParseMode;
//# sourceMappingURL=getParseMode.js.map