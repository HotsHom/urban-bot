"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatGenericTemplate = exports.formatButtons = exports.formatReplyButtons = void 0;
const array_flatten_1 = require("array-flatten");
function formatReplyButtons(buttons) {
    return (0, array_flatten_1.flatten)(buttons).map((button) => {
        var _a;
        return {
            content_type: (_a = button.type) !== null && _a !== void 0 ? _a : 'text',
            title: button.text,
            payload: button.id,
            image_url: button.image_url,
        };
    });
}
exports.formatReplyButtons = formatReplyButtons;
function formatButtons(buttons) {
    return (0, array_flatten_1.flatten)(buttons).map((button) => {
        if (button.url !== undefined) {
            return {
                type: 'web_url',
                title: button.text,
                url: button.url,
                messenger_extensions: true,
            };
        }
        if (button.phoneNumber !== undefined) {
            return {
                type: 'phone_number',
                title: button.text,
                payload: button.phoneNumber,
            };
        }
        if (button.type === undefined) {
            return { type: 'postback', title: button.text, payload: button.id };
        }
        return button;
    });
}
exports.formatButtons = formatButtons;
function formatGenericTemplate({ title, subtitle, buttons, image_url }) {
    return {
        type: 'template',
        payload: {
            template_type: 'generic',
            elements: [
                {
                    title,
                    subtitle,
                    image_url,
                    buttons: buttons ? formatButtons(buttons) : undefined,
                },
            ],
        },
    };
}
exports.formatGenericTemplate = formatGenericTemplate;
//# sourceMappingURL=format.js.map