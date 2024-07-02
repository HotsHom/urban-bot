"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listen = exports.getExpressApp = void 0;
const express_1 = __importDefault(require("express"));
const expressAppMap = new Map();
function getExpressApp(port, expressApp = (0, express_1.default)()) {
    if (!expressAppMap.has(port)) {
        expressAppMap.set(port, { app: expressApp, isStarted: false });
    }
    return expressAppMap.get(port);
}
exports.getExpressApp = getExpressApp;
function listen(port) {
    const app = getExpressApp(port);
    if (!app.isStarted) {
        app.app.listen(port);
        app.isStarted = true;
    }
}
exports.listen = listen;
//# sourceMappingURL=expressApp.js.map