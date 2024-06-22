"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = exports.useDialog = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DialogContext = (0, react_1.createContext)({});
function useDialog() {
    return (0, react_1.useContext)(DialogContext);
}
exports.useDialog = useDialog;
function Dialog({ children, onFinish, finishedContent }) {
    const [answers, setAnswers] = (0, react_1.useState)({});
    const onFinishCallback = (0, react_1.useCallback)(() => {
        onFinish === null || onFinish === void 0 ? void 0 : onFinish(answers);
    }, [answers, onFinish]);
    const addAnswer = (id, answer) => {
        setAnswers({ ...answers, [id]: answer });
    };
    return ((0, jsx_runtime_1.jsx)(DialogContext.Provider, Object.assign({ value: { onFinish: onFinishCallback, finishedContent, addAnswer } }, { children: children }), void 0));
}
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map