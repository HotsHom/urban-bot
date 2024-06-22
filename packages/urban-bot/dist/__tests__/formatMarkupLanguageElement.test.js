"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/jsx-key */
const formatMarkupLanguageElement_1 = require("../utils/formatMarkupLanguageElement");
describe('formatMarkupLanguageElement', () => {
    describe('HTML', () => {
        test('plain text', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)('text', formatMarkupLanguageElement_1.HTML_MODE)).toBe('text');
        });
        test('bold', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("b", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text</b>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("strong", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<strong>text</strong>');
        });
        test('italic', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("i", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<i>text</i>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("em", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<em>text</em>');
        });
        test('underscore', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("u", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<u>text</u>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("ins", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<ins>text</ins>');
        });
        test('strikethrough', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("s", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<s>text</s>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("strike", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<strike>text</strike>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("del", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<del>text</del>');
        });
        test('code', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("code", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<code>text</code>');
        });
        test('q', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("q", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<q>text</q>');
        });
        test('pre', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("pre", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<pre>text</pre>');
        });
        test('br', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("br", {}, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('\n');
        });
        test('link', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("a", Object.assign({ href: "http://www.example.com" }, { children: "inline URL" }), void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<a href="http://www.example.com">inline URL</a>');
        });
        it('throw error if tag does not exist', async () => {
            expect(() => 
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("not-exist-tag", { children: "text" }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toThrowErrorMatchingSnapshot();
            expect(() => {
                function Text() {
                    return null;
                }
                return (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)(Text, {}, void 0), formatMarkupLanguageElement_1.HTML_MODE);
            }).toThrowErrorMatchingSnapshot();
        });
        test('react fragment', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("b", { children: "text" }, void 0), (0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0)] }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text</b><b>text2</b>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("b", { children: "text" }, void 0), (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0), " ", (0, jsx_runtime_1.jsx)("b", { children: "text3" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("b", { children: "text4" }, void 0)] }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text</b><b>text2</b> <b>text3</b><b>text4</b>');
        });
        test('numbers', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(1, formatMarkupLanguageElement_1.HTML_MODE)).toBe('1');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)(NaN, formatMarkupLanguageElement_1.HTML_MODE)).toBe('NaN');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)([1, 2], formatMarkupLanguageElement_1.HTML_MODE)).toBe('12');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)([(0, jsx_runtime_1.jsx)("b", { children: 1 }, void 0), (0, jsx_runtime_1.jsx)("b", { children: 2 }, void 0)], formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>1</b><b>2</b>');
        });
        test('flat structure', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)([(0, jsx_runtime_1.jsx)("b", { children: "text" }, void 0), (0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0)], formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text</b><b>text2</b>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)([(0, jsx_runtime_1.jsx)("b", { children: "text" }, void 0), ' ', (0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0)], formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text</b> <b>text2</b>');
        });
        test('deep structure', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsxs)("b", { children: ["text ", (0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0)] }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text <b>text2</b></b>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)([
                (0, jsx_runtime_1.jsxs)("b", { children: ["text ", (0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0)] }, void 0),
                ' ',
                (0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0),
            ], formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text <b>text2</b></b> <b>text2</b>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)([
                (0, jsx_runtime_1.jsxs)("b", { children: ["text ", (0, jsx_runtime_1.jsx)("i", { children: "text2" }, void 0)] }, void 0),
                ' ',
                (0, jsx_runtime_1.jsx)("b", { children: "text2" }, void 0),
            ], formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>text <i>text2</i></b> <b>text2</b>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsxs)("b", { children: ["bold", ' ', (0, jsx_runtime_1.jsxs)("i", { children: ["italic bold ", (0, jsx_runtime_1.jsx)("s", { children: "italic bold strikethrough" }, void 0), " ", (0, jsx_runtime_1.jsx)("u", { children: "underline italic bold" }, void 0)] }, void 0), ' ', "bold"] }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>bold <i>italic bold <s>italic bold strikethrough</s> <u>underline italic bold</u></i> bold</b>');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsxs)("b", { children: ["bold", (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsxs)("i", { children: ["italic bold ", (0, jsx_runtime_1.jsx)("s", { children: "italic bold strikethrough" }, void 0), " ", (0, jsx_runtime_1.jsx)("u", { children: "underline italic bold" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("br", {}, void 0), "bold"] }, void 0), formatMarkupLanguageElement_1.HTML_MODE)).toBe('<b>bold\n<i>italic bold <s>italic bold strikethrough</s> <u>underline italic bold</u></i>\nbold</b>');
        });
    });
    describe('markdown', () => {
        test('plain text', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)('text', formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('text');
        });
        test('bold', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("b", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('**text**');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("strong", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('**text**');
        });
        test('italic', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("i", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('*text*');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("em", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('*text*');
        });
        test('underscore', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("u", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('__text__');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("ins", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('__text__');
        });
        test('strikethrough', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("s", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('~~text~~');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("strike", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('~~text~~');
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("del", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('~~text~~');
        });
        test('code', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("code", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('`text`');
        });
        test('pre', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("pre", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('```text```');
        });
        test('br', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("br", {}, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('\n');
        });
        test('q', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("q", { children: "text" }, void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('> text');
        });
        test('link', () => {
            expect((0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("a", Object.assign({ href: "http://www.example.com" }, { children: "inline URL" }), void 0), formatMarkupLanguageElement_1.MARKDOWN_MODE)).toBe('<http://www.example.com|inline URL>');
        });
    });
    describe('not right parseMode', () => {
        test('throw error if parseMode does npt exist', () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            expect(() => (0, formatMarkupLanguageElement_1.formatMarkupLanguageElement)((0, jsx_runtime_1.jsx)("b", { children: "text" }, void 0), 'notRightParseMode')).toThrowErrorMatchingSnapshot();
        });
    });
});
//# sourceMappingURL=formatMarkupLanguageElement.test.js.map