export declare class PromiseQueue {
    last: Promise<any>;
    constructor();
    next<T>(callback: (...args: any[]) => T | Promise<T>): Promise<T>;
}
