"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoNote = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useBotContext_1 = require("../hooks/useBotContext");
const getButtonsByButtonGroup_1 = require("../utils/getButtonsByButtonGroup");
function VideoNote({ file, buttons: buttonGroupElement, disableNotification, duration, forceReply, isNewMessageEveryRender: isNewMessageEveryRenderProp, replyToMessageId, ...otherProps }) {
    const { $$managerBot, isNewMessageEveryRender: isNewMessageEveryRenderContext, chat } = (0, useBotContext_1.useBotContext)();
    const formattedButtons = (0, getButtonsByButtonGroup_1.getButtonsByButtonGroup)(buttonGroupElement);
    return ((0, jsx_runtime_1.jsx)("urban-video-note", { "$$managerBot": $$managerBot, chat: chat, isNewMessageEveryRender: isNewMessageEveryRenderProp !== null && isNewMessageEveryRenderProp !== void 0 ? isNewMessageEveryRenderProp : isNewMessageEveryRenderContext, data: {
            disableNotification,
            replyToMessageId,
            forceReply,
            buttons: formattedButtons,
            isReplyButtons: buttonGroupElement === null || buttonGroupElement === void 0 ? void 0 : buttonGroupElement.props.isReplyButtons,
            file,
            duration,
            ...otherProps,
        } }, void 0));
}
exports.VideoNote = VideoNote;
//# sourceMappingURL=VideoNote.js.map