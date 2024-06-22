"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseQueue = void 0;
class PromiseQueue {
    constructor() {
        this.last = Promise.resolve();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    next(callback) {
        this.last = this.last.then(callback);
        return this.last;
    }
}
exports.PromiseQueue = PromiseQueue;
//# sourceMappingURL=PromiseQueue.js.map