"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useBotContext_1 = require("../hooks/useBotContext");
const getButtonsByButtonGroup_1 = require("../utils/getButtonsByButtonGroup");
const formatMarkupLanguageElement_1 = require("../utils/formatMarkupLanguageElement");
const getParseMode_1 = require("../utils/getParseMode");
function Image({ file, title, alt, name, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, parseMode, disableNotification, replyToMessageId, forceReply, ...otherProps }) {
    const { $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderContext, chat, parseMode: parseModeContext, bot, } = (0, useBotContext_1.useBotContext)();
    const finalParseMode = (0, getParseMode_1.getParseMode)(title, parseMode, parseModeContext, bot.defaultParseMode);
    const formattedTitle = (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(title, finalParseMode);
    const formattedButtons = (0, getButtonsByButtonGroup_1.getButtonsByButtonGroup)(buttonGroupElement);
    return ((0, jsx_runtime_1.jsx)("urban-img", { "$$managerBot": $$managerBot, chat: chat, isNewMessageEveryRender: isNewMessageEveryRenderProp !== null && isNewMessageEveryRenderProp !== void 0 ? isNewMessageEveryRenderProp : isNewMessageEveryRenderContext, data: {
            disableNotification,
            replyToMessageId,
            forceReply,
            isReplyButtons: buttonGroupElement === null || buttonGroupElement === void 0 ? void 0 : buttonGroupElement.props.isReplyButtons,
            parseMode: finalParseMode,
            buttons: formattedButtons,
            title: formattedTitle,
            alt,
            file,
            name,
            ...otherProps,
        } }, void 0));
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map