"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterContext = exports.getBotContext = exports.BotContext = void 0;
const react_1 = __importDefault(require("react"));
exports.BotContext = react_1.default.createContext(undefined);
function getBotContext() {
    return exports.BotContext;
}
exports.getBotContext = getBotContext;
exports.RouterContext = react_1.default.createContext(undefined);
//# sourceMappingURL=context.js.map