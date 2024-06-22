"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const array_flatten_1 = require("array-flatten");
const hooks_1 = require("../../hooks");
const useBotContext_1 = require("../../hooks/useBotContext");
const formatMarkupLanguageElement_1 = require("../../utils/formatMarkupLanguageElement");
const formatButtonElement_1 = require("../../utils/formatButtonElement");
const getParseMode_1 = require("../../utils/getParseMode");
const groupFlatArray_1 = require("../../utils/groupFlatArray");
const isArrayMatrix_1 = require("../../utils/isArrayMatrix");
function ButtonGroup({ children, title, isNewMessageEveryRender: isNewMessageEveryRenderProp, parseMode, disableNotification, replyToMessageId, forceReply, maxColumns, isReplyButtons = false, ...otherProps }) {
    const { $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderContext, chat, parseMode: parseModeContext, bot, } = (0, useBotContext_1.useBotContext)();
    let buttons = (0, formatButtonElement_1.formatButtonElement)(children);
    if (typeof maxColumns === 'number') {
        if (!(0, isArrayMatrix_1.isArrayMatrix)(buttons)) {
            buttons = (0, groupFlatArray_1.groupFlatArray)(buttons, maxColumns);
        }
        else {
            console.error('When you use "maxColumns" the buttons children must be flatten array');
        }
    }
    const finalParseMode = (0, getParseMode_1.getParseMode)(title, parseMode, parseModeContext, bot.defaultParseMode);
    const formattedTitle = (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(title, finalParseMode);
    (0, hooks_1.useAction)((ctx) => {
        var _a;
        const { actionId } = ctx;
        const button = (0, array_flatten_1.flatten)(buttons).find(({ id }) => {
            return actionId === id;
        });
        (_a = button === null || button === void 0 ? void 0 : button.onClick) === null || _a === void 0 ? void 0 : _a.call(button, ctx);
    });
    return ((0, jsx_runtime_1.jsx)("urban-buttons", { chat: chat, "$$managerBot": $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderProp !== null && isNewMessageEveryRenderProp !== void 0 ? isNewMessageEveryRenderProp : isNewMessageEveryRenderContext, data: {
            disableNotification,
            replyToMessageId,
            forceReply,
            parseMode: finalParseMode,
            buttons,
            title: formattedTitle,
            isReplyButtons,
            ...otherProps,
        } }, void 0));
}
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map