"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useText = void 0;
const matchPattern_1 = require("../utils/matchPattern");
const useSubscribeWithSpreadPayload_1 = require("./useSubscribeWithSpreadPayload");
function useText(listener, pattern) {
    const listenerGuard = (event) => {
        if (pattern) {
            const isTextMatchPattern = (0, matchPattern_1.matchPattern)(event.text, pattern);
            if (!isTextMatchPattern) {
                return;
            }
        }
        listener(event);
    };
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listenerGuard, 'text');
}
exports.useText = useText;
//# sourceMappingURL=useText.js.map