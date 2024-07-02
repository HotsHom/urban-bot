"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.Poll = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../hooks");
const useBotContext_1 = require("../hooks/useBotContext");
const getButtonsByButtonGroup_1 = require("../utils/getButtonsByButtonGroup");
const formatMarkupLanguageElement_1 = require("../utils/formatMarkupLanguageElement");
const getParseMode_1 = require("../utils/getParseMode");
const formatOptionElement_1 = require("../utils/formatOptionElement");
function Poll({ buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, question, children, isAnonymous, type, withMultipleAnswers, rightOption, explanation, livePeriodSeconds, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }) {
    const { $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderContext, chat, parseMode: parseModeContext, bot, } = (0, useBotContext_1.useBotContext)();
    const finalParseModeQuestion = (0, getParseMode_1.getParseMode)(question, parseMode, parseModeContext, bot.defaultParseMode);
    const finalParseModeExplanation = (0, getParseMode_1.getParseMode)(explanation, parseMode, parseModeContext, bot.defaultParseMode);
    const finalParseMode = finalParseModeQuestion !== null && finalParseModeQuestion !== void 0 ? finalParseModeQuestion : finalParseModeExplanation;
    const formattedQuestion = (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(question, finalParseMode);
    const formattedExplanation = (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(explanation, finalParseMode);
    const formattedButtons = (0, getButtonsByButtonGroup_1.getButtonsByButtonGroup)(buttonGroupElement);
    const options = (0, formatOptionElement_1.formatOptionElement)(children);
    (0, hooks_1.useAction)((ctx) => {
        var _a;
        const { actionId } = ctx;
        const option = options.find(({ id }) => {
            return actionId === id;
        });
        (_a = option === null || option === void 0 ? void 0 : option.onClick) === null || _a === void 0 ? void 0 : _a.call(option, ctx);
    });
    return ((0, jsx_runtime_1.jsx)("urban-poll", { "$$managerBot": $$managerBot, chat: chat, isNewMessageEveryRender: isNewMessageEveryRenderProp !== null && isNewMessageEveryRenderProp !== void 0 ? isNewMessageEveryRenderProp : isNewMessageEveryRenderContext, data: {
            question: formattedQuestion,
            options,
            isAnonymous,
            type,
            withMultipleAnswers,
            rightOption,
            explanation: formattedExplanation,
            livePeriodSeconds,
            disableNotification,
            replyToMessageId,
            forceReply,
            parseMode: finalParseMode,
            buttons: formattedButtons,
            isReplyButtons: buttonGroupElement === null || buttonGroupElement === void 0 ? void 0 : buttonGroupElement.props.isReplyButtons,
            ...otherProps,
        } }, void 0));
}
exports.Poll = Poll;
function Option(_props) {
    return null;
}
exports.Option = Option;
//# sourceMappingURL=Poll.js.map