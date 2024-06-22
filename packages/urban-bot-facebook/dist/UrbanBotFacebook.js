"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrbanBotFacebook = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const crypto_1 = __importDefault(require("crypto"));
const GraphAPI_1 = require("./GraphAPI");
const format_1 = require("./format");
const { urlencoded, json } = body_parser_1.default;
const defaultOptions = {
    apiUrl: 'https://graph.facebook.com',
    apiUrlVersion: 'v3.2',
};
class UrbanBotFacebook {
    constructor(options) {
        this.type = UrbanBotFacebook.TYPE;
        this.defaultParseMode = 'markdown';
        this.commandPrefix = '/';
        this.verifyRequestSignature = (req, _res, buf) => {
            const signature = req === null || req === void 0 ? void 0 : req.headers['x-hub-signature'];
            if (!signature) {
                console.error("Couldn't validate the signature.");
            }
            else {
                const elements = signature.split('=');
                const signatureHash = elements[1];
                const expectedHash = crypto_1.default.createHmac('sha1', this.options.appSecret).update(buf).digest('hex');
                if (signatureHash != expectedHash) {
                    throw new Error("Couldn't validate the request signature.");
                }
            }
        };
        if (!('pageAccessToken' in options)) {
            throw new Error(`Provide pageAccessToken to @urban-bot/facebook options`);
        }
        if (!('appSecret' in options)) {
            throw new Error(`Provide appSecret to @urban-bot/facebook options`);
        }
        this.options = { ...defaultOptions, ...options };
        this.client = new GraphAPI_1.GraphAPI(this.options);
    }
    initializeServer(expressApp) {
        var _a;
        const pathnamePrefix = (_a = this.options.pathnamePrefix) !== null && _a !== void 0 ? _a : '';
        expressApp.use(`${pathnamePrefix}/facebook/*`, urlencoded({
            extended: true,
        }));
        expressApp.use(`${pathnamePrefix}/facebook/*`, json({ verify: this.verifyRequestSignature }));
        expressApp.get(`${pathnamePrefix}/facebook/webhook`, (req, res) => {
            var _a, _b, _c;
            const mode = (_a = req.query) === null || _a === void 0 ? void 0 : _a['hub.mode'];
            const token = (_b = req.query) === null || _b === void 0 ? void 0 : _b['hub.verify_token'];
            const challenge = (_c = req.query) === null || _c === void 0 ? void 0 : _c['hub.challenge'];
            if (mode && token) {
                if (mode === 'subscribe' && token === this.options.verifyToken) {
                    console.log('webhook verified');
                    res.status(200).send(challenge);
                }
                else {
                    console.error('webhook not verified');
                    res.sendStatus(403);
                }
            }
        });
        expressApp.post('/facebook/webhook', (req, res) => {
            const payload = req.body;
            this.handleEvent(payload);
            res.sendStatus(200);
        });
        if (this.options.pageId !== undefined) {
            console.log('Test your app by messaging:');
            console.log('https://m.me/' + this.options.pageId);
        }
    }
    processUpdate(_event) {
        throw new Error('this method must be overridden');
    }
    handleEvent(payload) {
        const { message, sender, postback } = payload.entry[0].messaging[0];
        const { id } = sender;
        const common = {
            chat: { id },
            nativeEvent: {
                type: UrbanBotFacebook.TYPE,
                payload,
            },
            from: { id },
        };
        if (postback) {
            this.processUpdate({
                ...common,
                type: 'action',
                payload: {
                    actionId: postback.payload,
                },
            });
            return;
        }
        if (message) {
            const { text, attachments } = message;
            if (attachments) {
                const files = attachments.map(({ type, payload }) => ({
                    type,
                    ...payload,
                }));
                const fileEvent = {
                    ...common,
                    payload: {
                        messageId: message.mid,
                        text,
                        files,
                    },
                };
                const isAllImages = files.every(({ type }) => type === 'image');
                const isAllVideo = files.every(({ type }) => type === 'video');
                const isAllAudio = files.every(({ type }) => type === 'audio');
                if (isAllImages) {
                    this.processUpdate({
                        type: 'image',
                        ...fileEvent,
                    });
                }
                else if (isAllVideo) {
                    this.processUpdate({
                        type: 'video',
                        ...fileEvent,
                    });
                }
                else if (isAllAudio) {
                    this.processUpdate({
                        type: 'audio',
                        ...fileEvent,
                    });
                }
                else {
                    this.processUpdate({
                        ...fileEvent,
                        type: 'file',
                    });
                }
            }
            else {
                if (text !== undefined) {
                    if (text[0] === this.commandPrefix) {
                        const [command, ...args] = text.split(' ');
                        this.processUpdate({
                            ...common,
                            type: 'command',
                            payload: {
                                command,
                                messageId: message.mid,
                                argument: args.join(' '),
                            },
                        });
                    }
                    else {
                        this.processUpdate({
                            ...common,
                            type: 'text',
                            payload: { messageId: message.mid, text },
                        });
                    }
                }
            }
        }
    }
    async sendMessage(message) {
        const common = {
            recipient: { id: message.chat.id },
            tag: message.data.tag,
            persona_id: message.data.personaId,
        };
        switch (message.nodeName) {
            case 'urban-text': {
                const requestBody = {
                    ...common,
                    message: { text: message.data.text },
                };
                return this.client.callSendAPI(requestBody);
            }
            case 'urban-buttons': {
                let requestBody;
                if (message.data.isReplyButtons) {
                    requestBody = {
                        ...common,
                        message: {
                            text: message.data.title,
                            quick_replies: (0, format_1.formatReplyButtons)(message.data.buttons),
                        },
                    };
                }
                else {
                    const subtitle = typeof message.data.subtitle === 'string' ? message.data.subtitle : undefined;
                    requestBody = {
                        ...common,
                        message: {
                            attachment: (0, format_1.formatGenericTemplate)({
                                title: message.data.title,
                                subtitle,
                                buttons: message.data.buttons,
                            }),
                        },
                    };
                }
                return this.client.callSendAPI(requestBody);
            }
            case 'urban-img': {
                if (typeof message.data.file !== 'string') {
                    // TODO add file from file system support
                    throw new Error('@urban-bot/facebook support image file only as string');
                }
                if (message.data.isReplyButtons) {
                    throw new Error("@urban-bot/facebook Don't use isReplyButtons with Image component");
                }
                const subtitle = typeof message.data.subtitle === 'string' ? message.data.subtitle : undefined;
                const requestBody = {
                    ...common,
                    message: {
                        attachment: (0, format_1.formatGenericTemplate)({
                            title: message.data.title,
                            subtitle,
                            buttons: message.data.buttons,
                            image_url: message.data.file,
                        }),
                    },
                };
                return this.client.callSendAPI(requestBody);
            }
            case 'urban-audio': {
                if (typeof message.data.file !== 'string') {
                    throw new Error('@urban-bot/facebook support audio file only as string');
                }
                const requestBody = {
                    ...common,
                    message: {
                        attachment: {
                            type: 'audio',
                            payload: {
                                url: message.data.file,
                                is_reusable: message.data.is_reusable,
                            },
                        },
                    },
                };
                return this.client.callSendAPI(requestBody);
            }
            case 'urban-video': {
                if (typeof message.data.file !== 'string') {
                    throw new Error('@urban-bot/facebook support video file only as string');
                }
                const requestBody = {
                    ...common,
                    message: {
                        attachment: {
                            type: 'video',
                            payload: {
                                url: message.data.file,
                                is_reusable: message.data.is_reusable,
                            },
                        },
                    },
                };
                return this.client.callSendAPI(requestBody);
            }
            case 'urban-file': {
                if (typeof message.data.file !== 'string') {
                    throw new Error('@urban-bot/facebook support file only as string');
                }
                const requestBody = {
                    ...common,
                    message: {
                        attachment: {
                            type: 'file',
                            payload: {
                                url: message.data.file,
                                is_reusable: message.data.is_reusable,
                            },
                        },
                    },
                };
                return this.client.callSendAPI(requestBody);
            }
            default: {
                throw new Error(`Tag '${
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                message.nodeName}' is not supported. Please don't use it with facebook bot or add this logic to @urban-bot/facebook.`);
            }
        }
    }
}
exports.UrbanBotFacebook = UrbanBotFacebook;
UrbanBotFacebook.TYPE = 'FACEBOOK';
//# sourceMappingURL=UrbanBotFacebook.js.map