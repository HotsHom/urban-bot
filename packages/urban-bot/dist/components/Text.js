"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useBotContext_1 = require("../hooks/useBotContext");
const formatMarkupLanguageElement_1 = require("../utils/formatMarkupLanguageElement");
const getParseMode_1 = require("../utils/getParseMode");
function Text({ children, isNewMessageEveryRender: isNewMessageEveryRenderProp, parseMode, disableWebPagePreview, disableNotification, replyToMessageId, forceReply, ...otherProps }) {
    const { $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderContext, chat, parseMode: parseModeContext, bot, } = (0, useBotContext_1.useBotContext)();
    const finalParseMode = (0, getParseMode_1.getParseMode)(children, parseMode, parseModeContext, bot.defaultParseMode);
    const formattedText = (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(children, finalParseMode);
    return ((0, jsx_runtime_1.jsx)("urban-text", { chat: chat, "$$managerBot": $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderProp !== null && isNewMessageEveryRenderProp !== void 0 ? isNewMessageEveryRenderProp : isNewMessageEveryRenderContext, data: {
            disableNotification,
            disableWebPagePreview,
            replyToMessageId,
            forceReply,
            parseMode: finalParseMode,
            text: formattedText,
            ...otherProps,
        } }, void 0));
}
exports.Text = Text;
//# sourceMappingURL=Text.js.map