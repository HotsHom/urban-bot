"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useBotContext_1 = require("../hooks/useBotContext");
const getButtonsByButtonGroup_1 = require("../utils/getButtonsByButtonGroup");
const formatMarkupLanguageElement_1 = require("../utils/formatMarkupLanguageElement");
const getParseMode_1 = require("../utils/getParseMode");
function Location({ latitude, longitude, livePeriodSeconds, title, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }) {
    const { $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderContext, chat, parseMode: parseModeContext, bot, } = (0, useBotContext_1.useBotContext)();
    const finalParseMode = (0, getParseMode_1.getParseMode)(title, parseMode, parseModeContext, bot.defaultParseMode);
    const formattedTitle = (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(title, finalParseMode);
    const formattedButtons = (0, getButtonsByButtonGroup_1.getButtonsByButtonGroup)(buttonGroupElement);
    return ((0, jsx_runtime_1.jsx)("urban-location", { "$$managerBot": $$managerBot, chat: chat, isNewMessageEveryRender: isNewMessageEveryRenderProp !== null && isNewMessageEveryRenderProp !== void 0 ? isNewMessageEveryRenderProp : isNewMessageEveryRenderContext, data: {
            latitude,
            longitude,
            livePeriodSeconds,
            title: formattedTitle,
            buttons: formattedButtons,
            isReplyButtons: buttonGroupElement === null || buttonGroupElement === void 0 ? void 0 : buttonGroupElement.props.isReplyButtons,
            parseMode: finalParseMode,
            disableNotification,
            replyToMessageId,
            forceReply,
            ...otherProps,
        } }, void 0));
}
exports.Location = Location;
//# sourceMappingURL=Location.js.map