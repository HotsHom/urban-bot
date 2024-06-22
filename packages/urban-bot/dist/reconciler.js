"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactReconciler = void 0;
const react_reconciler_1 = __importDefault(require("react-reconciler"));
const constants_1 = require("react-reconciler/constants");
const node_1 = require("./node");
const rootHostContext = {};
const childHostContext = {};
const hostConfig = {
    // schedulePassiveEffects,
    // cancelPassiveEffects,
    now: Date.now,
    getRootHostContext: () => {
        return rootHostContext;
    },
    prepareForCommit: () => ({}),
    resetAfterCommit: () => { },
    getChildHostContext: () => {
        return childHostContext;
    },
    shouldSetTextContent: (_type, _props) => {
        return false;
        // return typeof props.children === 'string' || typeof props.children === 'number';
    },
    createInstance: node_1.createNode,
    createTextInstance: () => { },
    resetTextContent: (_node) => { },
    getPublicInstance: (instance) => instance,
    appendInitialChild: node_1.appendChildNode,
    appendChild: node_1.appendChildNode,
    insertBefore: node_1.insertBeforeNode,
    finalizeInitialChildren: () => false,
    supportsMutation: true,
    appendChildToContainer: node_1.appendChildNode,
    insertInContainerBefore: node_1.insertBeforeNode,
    removeChildFromContainer: node_1.removeChildNode,
    prepareUpdate: () => true,
    commitUpdate: node_1.updateNode,
    commitTextUpdate: (_node, _oldText, _newText) => { },
    removeChild: node_1.removeChildNode,
    shouldDeprioritizeSubtree: () => false,
    scheduleDeferredCallback: () => { },
    cancelDeferredCallback: () => { },
    setTimeout: () => { },
    clearTimeout: () => { },
    noTimeout: () => { },
    isPrimaryRenderer: false,
    supportsPersistence: false,
    supportsHydration: false,
    preparePortalMount: () => { },
    scheduleTimeout: () => { },
    cancelTimeout: () => { },
    getCurrentEventPriority: () => {
        return constants_1.DefaultEventPriority;
    },
    getInstanceFromNode: () => {
        return undefined;
    },
    beforeActiveInstanceBlur: () => { },
    afterActiveInstanceBlur: () => { },
    prepareScopeUpdate: () => { },
    getInstanceFromScope: () => { },
    detachDeletedInstance: () => { },
    clearContainer: () => { },
};
exports.reactReconciler = (0, react_reconciler_1.default)(hostConfig);
//# sourceMappingURL=reconciler.js.map