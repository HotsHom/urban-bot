"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const node_1 = require("./node");
const reconciler_1 = require("./reconciler");
function render(reactElement, callback = () => null) {
    const node = (0, node_1.createNode)('root');
    return reconciler_1.reactReconciler.updateContainer(reactElement, reconciler_1.reactReconciler.createContainer(node, 0, null, false, null, '', () => { }, null), null, callback);
}
exports.render = render;
//# sourceMappingURL=render.js.map