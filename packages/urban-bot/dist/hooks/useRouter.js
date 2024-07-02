"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const react_1 = require("react");
const context_1 = require("../context");
function useRouter() {
    const routerContext = (0, react_1.useContext)(context_1.RouterContext);
    if (routerContext === undefined) {
        throw new Error('You should use useBotContext only under Router component');
    }
    return routerContext;
}
exports.useRouter = useRouter;
//# sourceMappingURL=useRouter.js.map