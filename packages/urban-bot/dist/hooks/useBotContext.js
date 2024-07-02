"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBotContext = void 0;
const react_1 = require("react");
const context_1 = require("../context");
function useBotContext() {
    const BotContext = (0, context_1.getBotContext)();
    const botContext = (0, react_1.useContext)(BotContext);
    if (botContext === undefined) {
        throw new Error('You should use useBotContext only under Root component');
    }
    return botContext;
}
exports.useBotContext = useBotContext;
//# sourceMappingURL=useBotContext.js.map