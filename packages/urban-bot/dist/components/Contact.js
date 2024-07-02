"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useBotContext_1 = require("../hooks/useBotContext");
const getButtonsByButtonGroup_1 = require("../utils/getButtonsByButtonGroup");
function Contact({ phoneNumber, username, firstName, lastName, vCard, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, replyToMessageId, ...otherProps }) {
    const { $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderContext, chat } = (0, useBotContext_1.useBotContext)();
    const formattedButtons = (0, getButtonsByButtonGroup_1.getButtonsByButtonGroup)(buttonGroupElement);
    return ((0, jsx_runtime_1.jsx)("urban-contact", { "$$managerBot": $$managerBot, chat: chat, isNewMessageEveryRender: isNewMessageEveryRenderProp !== null && isNewMessageEveryRenderProp !== void 0 ? isNewMessageEveryRenderProp : isNewMessageEveryRenderContext, data: {
            phoneNumber,
            username,
            firstName,
            lastName,
            vCard,
            buttons: formattedButtons,
            isReplyButtons: buttonGroupElement === null || buttonGroupElement === void 0 ? void 0 : buttonGroupElement.props.isReplyButtons,
            disableNotification,
            replyToMessageId,
            forceReply,
            ...otherProps,
        } }, void 0));
}
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map