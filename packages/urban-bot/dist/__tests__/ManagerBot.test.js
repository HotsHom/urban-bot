"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ManagerBot_1 = require("../ManagerBot/ManagerBot");
const testBot = {
    processUpdate: jest.fn(),
    sendMessage: jest.fn(),
    updateMessage: jest.fn(),
    deleteMessage: jest.fn(),
    type: 'TEST-BOT',
    commandPrefix: '/',
};
const meta = { messageId: 345 };
const chat = { id: '123' };
const newMessage = {
    nodeName: 'urban-text',
    chat,
    data: { text: 'text' },
};
const newMessage2 = {
    nodeName: 'urban-img',
    chat,
    data: { file: 'http://...' },
};
const existingMessage = {
    ...newMessage,
    meta,
};
describe('ManagerBot', () => {
    it('method updateMessage', async () => {
        const managerBot = new ManagerBot_1.ManagerBot(testBot);
        managerBot.updateMessage(existingMessage);
        expect(testBot.updateMessage).toHaveBeenCalledTimes(1);
        expect(testBot.updateMessage).toHaveBeenLastCalledWith(existingMessage);
        managerBot.updateMessage(existingMessage);
        expect(testBot.updateMessage).toHaveBeenCalledTimes(2);
    });
    it('method deleteMessage', () => {
        const managerBot = new ManagerBot_1.ManagerBot(testBot);
        managerBot.deleteMessage(existingMessage);
        expect(testBot.deleteMessage).toHaveBeenCalledTimes(1);
        expect(testBot.deleteMessage).toHaveBeenLastCalledWith(existingMessage);
        managerBot.deleteMessage(existingMessage);
        expect(testBot.deleteMessage).toHaveBeenCalledTimes(2);
    });
    describe('method sendMessage', () => {
        afterEach(() => {
            testBot.sendMessage.mockClear();
        });
        it('send one message', () => {
            const managerBot = new ManagerBot_1.ManagerBot(testBot);
            managerBot.addChat(existingMessage.chat.id);
            testBot.sendMessage.mockReturnValue(Promise.resolve());
            const res = managerBot.sendMessage(existingMessage);
            return res.then(() => {
                expect(testBot.sendMessage).toHaveBeenCalledTimes(1);
                expect(testBot.sendMessage).toHaveBeenLastCalledWith(existingMessage);
            });
        });
        it('send two messages', () => {
            const managerBot = new ManagerBot_1.ManagerBot(testBot);
            managerBot.addChat(newMessage.chat.id);
            testBot.sendMessage.mockReturnValue(Promise.resolve());
            const res1 = managerBot.sendMessage(newMessage);
            const res2 = managerBot.sendMessage(newMessage2);
            return Promise.all([res1, res2]).then(() => {
                expect(testBot.sendMessage).toHaveBeenCalledTimes(2);
                expect(testBot.sendMessage).toHaveBeenCalledWith(newMessage);
                expect(testBot.sendMessage).toHaveBeenCalledWith(newMessage2);
            });
        });
        it('send next message only when previous was finished', () => {
            var _a;
            const managerBot = new ManagerBot_1.ManagerBot(testBot);
            managerBot.addChat(newMessage.chat.id);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            const firstPromise = (_a = managerBot.chats.get(newMessage.chat.id)) === null || _a === void 0 ? void 0 : _a.promiseQueue.last;
            if (firstPromise === undefined) {
                throw new Error('promiseQueue is not found');
            }
            testBot.sendMessage.mockReturnValueOnce(new Promise((resolve) => {
                setTimeout(resolve, 1000);
            }));
            const res1 = managerBot.sendMessage(newMessage);
            testBot.sendMessage.mockReturnValueOnce(Promise.resolve());
            managerBot.sendMessage(newMessage2);
            return firstPromise
                .then(() => {
                expect(testBot.sendMessage).toHaveBeenNthCalledWith(1, newMessage);
                expect(testBot.sendMessage).not.toHaveBeenCalledTimes(2);
                return res1;
            })
                .then(() => {
                expect(testBot.sendMessage).toHaveBeenNthCalledWith(2, newMessage2);
            });
        });
        it('throw error without initializing chatId', () => {
            const managerBot = new ManagerBot_1.ManagerBot(testBot);
            expect(() => managerBot.sendMessage(newMessage)).toThrowErrorMatchingSnapshot();
        });
        it('throw error if send message after delete chatId', async () => {
            const managerBot = new ManagerBot_1.ManagerBot(testBot);
            managerBot.addChat(newMessage.chat.id);
            testBot.sendMessage.mockReturnValue(Promise.resolve());
            await managerBot.sendMessage(newMessage);
            expect(testBot.sendMessage).toHaveBeenCalledTimes(1);
            managerBot.deleteChat(newMessage.chat.id);
            expect(() => managerBot.sendMessage(newMessage2)).toThrowErrorMatchingSnapshot();
        });
    });
});
//# sourceMappingURL=ManagerBot.test.js.map