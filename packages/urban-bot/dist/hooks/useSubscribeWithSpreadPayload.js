"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSubscribeWithSpreadPayload = void 0;
const react_1 = require("react");
const useBotContext_1 = require("./useBotContext");
function useSubscribe(listener, event) {
    const { chat, $$managerBot } = (0, useBotContext_1.useBotContext)();
    (0, react_1.useEffect)(() => {
        $$managerBot.on(event, listener, chat.id);
        return () => {
            $$managerBot.removeListener(event, listener, chat.id);
        };
    }, [listener, $$managerBot, event, chat]);
}
function useSubscribeWithSpreadPayload(listener, eventType) {
    useSubscribe((event) => {
        const { payload, ...other } = event;
        const eventData = { ...other, ...payload };
        listener(eventData);
    }, eventType);
}
exports.useSubscribeWithSpreadPayload = useSubscribeWithSpreadPayload;
//# sourceMappingURL=useSubscribeWithSpreadPayload.js.map