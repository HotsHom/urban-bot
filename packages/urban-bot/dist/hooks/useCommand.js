"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommand = void 0;
const matchPattern_1 = require("../utils/matchPattern");
const useSubscribeWithSpreadPayload_1 = require("./useSubscribeWithSpreadPayload");
function useCommand(listener, pattern) {
    const listenerGuard = (event) => {
        if (pattern !== undefined) {
            const isTextMatchPattern = (0, matchPattern_1.matchPattern)(event.command, pattern);
            if (!isTextMatchPattern) {
                return;
            }
        }
        listener(event);
    };
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listenerGuard, 'command');
}
exports.useCommand = useCommand;
//# sourceMappingURL=useCommand.js.map