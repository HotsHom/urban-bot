"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
const react_1 = require("react");
function useInterval(callback, interval = 0) {
    const savedCallback = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        savedCallback.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(() => {
        const id = setInterval(() => {
            var _a;
            (_a = savedCallback.current) === null || _a === void 0 ? void 0 : _a.call(savedCallback);
        }, interval);
        return () => clearInterval(id);
    }, [interval]);
}
exports.useInterval = useInterval;
//# sourceMappingURL=useInterval.js.map