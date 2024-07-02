"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNode = exports.insertBeforeNode = exports.removeChildNode = exports.appendChildNode = exports.createNode = void 0;
const debounce_promise_1 = __importDefault(require("debounce-promise"));
const shallowEqual_1 = require("./utils/shallowEqual");
function createNode(nodeName, props) {
    if (nodeName === 'root' || nodeName === 'chat') {
        return { nodeName, childNodes: [] };
    }
    if (props === undefined) {
        throw new Error('props are necessary for every node');
    }
    const { $$managerBot, chat, isNewMessageEveryRender, data, debounceDelay = 50 } = props;
    const node = {
        nodeName,
        $$managerBot,
        chat,
        isNewMessageEveryRender,
        sendMessage: (0, debounce_promise_1.default)($$managerBot.sendMessage.bind($$managerBot), debounceDelay),
        updateMessage: (0, debounce_promise_1.default)($$managerBot.updateMessage.bind($$managerBot), debounceDelay),
        deleteMessage: $$managerBot.deleteMessage.bind($$managerBot),
    };
    return {
        ...node,
        childNodes: [],
        data,
    };
}
exports.createNode = createNode;
function appendChildNode(parentNode, childNode) {
    // FIXME: fix types.
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    parentNode.childNodes.push(childNode);
    if (childNode.nodeName === 'chat') {
        return;
    }
    const message = {
        nodeName: childNode.nodeName,
        chat: childNode.chat,
        data: childNode.data,
    };
    childNode.meta = childNode.sendMessage(message);
}
exports.appendChildNode = appendChildNode;
function removeChildNode(parentNode, removedNode) {
    parentNode.childNodes = parentNode.childNodes.filter((node) => node !== removedNode);
    if (removedNode.nodeName === 'chat') {
        return;
    }
    if (removedNode.isNewMessageEveryRender) {
        return;
    }
    if (removedNode.meta === undefined) {
        throw new Error('sendMessage should return Promise with message meta data to enable removing it.');
    }
    removedNode.meta.then((meta) => {
        const message = {
            nodeName: removedNode.nodeName,
            chat: removedNode.chat,
            data: removedNode.data,
            meta,
        };
        removedNode.deleteMessage(message);
    });
}
exports.removeChildNode = removeChildNode;
function insertBeforeNode(node, newChildNode, beforeChildNode) {
    if (node.nodeName === 'root') {
        appendChildNode(node, newChildNode);
        return;
    }
    const beforeChildNodeIndex = node.childNodes.findIndex((childNode) => childNode === beforeChildNode);
    const nodesAfterInserted = node.childNodes.filter((_childNode, index) => index >= beforeChildNodeIndex);
    nodesAfterInserted.forEach((nodeAfterInserted) => {
        removeChildNode(node, nodeAfterInserted);
    });
    appendChildNode(node, newChildNode);
    nodesAfterInserted.forEach((nodeAfterInserted) => {
        appendChildNode(node, nodeAfterInserted);
    });
}
exports.insertBeforeNode = insertBeforeNode;
function updateNode(node, _updatePayload, _type, oldProps, newProps) {
    if (node.nodeName === 'chat') {
        return;
    }
    const { data: oldPropsData, ...oldPropsWithoutData } = oldProps;
    const { data: newPropsData, ...newPropsWithoutData } = newProps;
    if (!newProps.isNewMessageEveryRender &&
        (0, shallowEqual_1.shallowEqual)(oldPropsWithoutData, newPropsWithoutData) &&
        (0, shallowEqual_1.shallowEqual)(oldPropsData, newPropsData)) {
        return;
    }
    const newNode = { ...node, isNewMessageEveryRender: newProps.isNewMessageEveryRender, data: newProps.data };
    const message = {
        nodeName: newNode.nodeName,
        chat: newNode.chat,
        data: newNode.data,
    };
    if (newNode.isNewMessageEveryRender) {
        node.meta = newNode.sendMessage(message);
    }
    else {
        if (node.meta === undefined) {
            throw new Error('sendMessage should return Promise with message meta data to enable updating it.');
        }
        node.meta.then(async (meta) => {
            const existingMessage = { ...message, meta };
            const newUpdatedMessage = newNode.updateMessage(existingMessage);
            if (await newUpdatedMessage) {
                node.meta = newUpdatedMessage;
            }
        });
    }
}
exports.updateNode = updateNode;
//# sourceMappingURL=node.js.map