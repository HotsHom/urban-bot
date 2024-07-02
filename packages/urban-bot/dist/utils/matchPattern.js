"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchPattern = void 0;
function matchPattern(text, pattern) {
    const patterns = Array.isArray(pattern) ? pattern : [pattern];
    return patterns.some((pattern) => {
        if (pattern instanceof RegExp) {
            return pattern.test(text);
        }
        return pattern === text;
    });
}
exports.matchPattern = matchPattern;
//# sourceMappingURL=matchPattern.js.map