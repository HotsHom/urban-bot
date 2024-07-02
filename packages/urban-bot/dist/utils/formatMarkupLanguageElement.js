"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMarkupLanguageElement = exports.HTML_MODE = exports.MARKDOWN_MODE = void 0;
const react_1 = __importDefault(require("react"));
exports.MARKDOWN_MODE = 'markdown';
exports.HTML_MODE = 'HTML';
function formatHTMLElement(element, text) {
    switch (element.type) {
        case react_1.default.Fragment: {
            return text;
        }
        case 'b': {
            return `<b>${text}</b>`;
        }
        case 'strong': {
            return `<strong>${text}</strong>`;
        }
        case 'i': {
            return `<i>${text}</i>`;
        }
        case 'em': {
            return `<em>${text}</em>`;
        }
        case 'u': {
            return `<u>${text}</u>`;
        }
        case 'ins': {
            return `<ins>${text}</ins>`;
        }
        case 's': {
            return `<s>${text}</s>`;
        }
        case 'strike': {
            return `<strike>${text}</strike>`;
        }
        case 'del': {
            return `<del>${text}</del>`;
        }
        case 'q': {
            return `<q>${text}</q>`;
        }
        case 'code': {
            return `<code>${text}</code>`;
        }
        case 'pre': {
            return `<pre>${text}</pre>`;
        }
        case 'br': {
            return '\n';
        }
        case 'a': {
            const { href } = element.props;
            return `<a href="${href}">${text}</a>`;
        }
        default: {
            const tag = typeof element.type === 'function' ? element.type.name : element.type;
            throw new Error(`Can't format tag '${tag}'. Please use only <b>, <i>, ...`);
        }
    }
}
function formatMarkdownElement(element, text) {
    switch (element.type) {
        case react_1.default.Fragment: {
            return text;
        }
        case 'b': {
            return `**${text}**`;
        }
        case 'strong': {
            return `**${text}**`;
        }
        case 'i': {
            return `*${text}*`;
        }
        case 'em': {
            return `*${text}*`;
        }
        case 'u': {
            return `__${text}__`;
        }
        case 'ins': {
            return `__${text}__`;
        }
        case 's': {
            return `~~${text}~~`;
        }
        case 'strike': {
            return `~~${text}~~`;
        }
        case 'del': {
            return `~~${text}~~`;
        }
        case 'q': {
            return `> ${text}`;
        }
        case 'code': {
            return `\`${text}\``;
        }
        case 'pre': {
            return `\`\`\`${text}\`\`\``;
        }
        case 'br': {
            return '\n';
        }
        case 'a': {
            const { href } = element.props;
            return `<${href}|${text}>`;
        }
        default: {
            const tag = typeof element.type === 'function' ? element.type.name : element.type;
            throw new Error(`Can't format tag '${tag}'. Please use only <b>, <i>, ...`);
        }
    }
}
function formatMarkupLanguageElement(element, parseMode) {
    if (Array.isArray(element)) {
        return element.map((child) => formatMarkupLanguageElement(child, parseMode)).join('');
    }
    if (typeof element === 'number') {
        return String(element);
    }
    if (typeof element === 'string') {
        return element;
    }
    if (react_1.default.isValidElement(element)) {
        const text = formatMarkupLanguageElement(element.props.children, parseMode);
        switch (parseMode) {
            case exports.MARKDOWN_MODE: {
                return formatMarkdownElement(element, text);
            }
            case exports.HTML_MODE: {
                return formatHTMLElement(element, text);
            }
            default: {
                throw new Error(`parseMode '${parseMode}' doesn't exist. Please provide '${exports.HTML_MODE}' or '${exports.MARKDOWN_MODE}' parseMode`);
            }
        }
    }
    return '';
}
exports.formatMarkupLanguageElement = formatMarkupLanguageElement;
//# sourceMappingURL=formatMarkupLanguageElement.js.map