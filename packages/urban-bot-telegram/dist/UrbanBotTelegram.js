"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrbanBotTelegram = void 0;
/* eslint-disable @typescript-eslint/camelcase */
const express_1 = __importDefault(require("express"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const utils_1 = require("./utils");
const format_1 = require("./format");
class UrbanBotTelegram {
    constructor(options) {
        this.options = options;
        this.type = UrbanBotTelegram.TYPE;
        this.defaultParseMode = 'HTML';
        this.commandPrefix = '/';
        this.mediaGroupCollector = (0, utils_1.getDefaultCollectorState)();
        this.handleMessage = (type, ctx) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (!ctx.chat) {
                console.error("Chat information didn't come from Telegram event");
                console.error('Message type', type);
                console.error('Message context', ctx);
                return;
            }
            const common = {
                chat: {
                    id: String(ctx.chat.id),
                    type: ctx.chat.type,
                    title: ctx.chat.title,
                    username: ctx.chat.username,
                    firstName: ctx.chat.first_name,
                    lastName: ctx.chat.last_name,
                    description: ctx.chat.description,
                    inviteLink: ctx.chat.invite_link,
                },
                from: {
                    id: String((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id),
                    username: (_b = ctx.from) === null || _b === void 0 ? void 0 : _b.username,
                    firstName: (_c = ctx.from) === null || _c === void 0 ? void 0 : _c.first_name,
                    lastName: (_d = ctx.from) === null || _d === void 0 ? void 0 : _d.last_name,
                    isBot: (_e = ctx.from) === null || _e === void 0 ? void 0 : _e.is_bot,
                },
                nativeEvent: {
                    type: UrbanBotTelegram.TYPE,
                    payload: ctx,
                },
            };
            switch (type) {
                case 'text': {
                    if (!ctx.text) {
                        break;
                    }
                    if (ctx.text[0] === this.commandPrefix) {
                        const [command, ...args] = ctx.text.split(' ');
                        const adaptedContext = {
                            ...common,
                            type: 'command',
                            payload: {
                                command,
                                messageId: String(ctx.message_id),
                                argument: args.join(' '),
                            },
                        };
                        this.processUpdate(adaptedContext);
                    }
                    else {
                        const adaptedContext = {
                            ...common,
                            type: 'text',
                            payload: {
                                messageId: String(ctx.message_id),
                                text: ctx.text,
                            },
                        };
                        this.processUpdate(adaptedContext);
                    }
                    break;
                }
                case 'dice': {
                    if (!ctx.dice) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'dice',
                        payload: {
                            messageId: String(ctx.message_id),
                            value: ctx.dice.value,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'poll': {
                    if (ctx.poll === undefined) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'poll',
                        payload: {
                            id: ctx.poll.id,
                            messageId: String(ctx.message_id),
                            question: ctx.poll.question,
                            options: ctx.poll.options.map((option) => {
                                return { text: option.text, count: option.voter_count };
                            }),
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'sticker': {
                    if (!ctx.sticker) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'sticker',
                        payload: {
                            messageId: String(ctx.message_id),
                            emoji: ctx.sticker.emoji,
                            id: ctx.sticker.file_id,
                            width: ctx.sticker.width,
                            height: ctx.sticker.height,
                            name: ctx.sticker.set_name,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'animation': {
                    if (!ctx.animation) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'animation',
                        payload: {
                            messageId: String(ctx.message_id),
                            fileId: ctx.animation.file_id,
                            duration: ctx.animation.duration,
                            name: ctx.animation.file_name,
                            mimeType: ctx.animation.mime_type,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'audio': {
                    if (!ctx.audio) {
                        break;
                    }
                    const name = `${(_f = ctx.audio.performer) !== null && _f !== void 0 ? _f : ''} ${(_g = ctx.audio.title) !== null && _g !== void 0 ? _g : ''}`.trim();
                    const adaptedContext = {
                        ...common,
                        type: 'audio',
                        payload: {
                            messageId: String(ctx.message_id),
                            fileId: ctx.audio.file_id,
                            text: ctx.caption,
                            files: [
                                {
                                    duration: ctx.audio.duration,
                                    id: ctx.audio.file_id,
                                    size: ctx.audio.file_size,
                                    name,
                                    mimeType: ctx.audio.mime_type,
                                },
                            ],
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'contact': {
                    if (!ctx.contact) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'contact',
                        payload: {
                            messageId: String(ctx.message_id),
                            firstName: ctx.contact.first_name,
                            phoneNumber: ctx.contact.phone_number,
                            lastName: ctx.contact.last_name,
                            userId: ctx.contact.user_id,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'file': {
                    if (!ctx.document) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'file',
                        payload: {
                            messageId: String(ctx.message_id),
                            fileId: ctx.document.file_id,
                            text: ctx.caption,
                            files: [
                                {
                                    id: ctx.document.file_id,
                                    name: ctx.document.file_name,
                                    size: ctx.document.file_size,
                                    mimeType: ctx.document.mime_type,
                                },
                            ],
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'invoice': {
                    if (!ctx.invoice) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'invoice',
                        payload: {
                            messageId: String(ctx.message_id),
                            currency: ctx.invoice.currency,
                            description: ctx.invoice.description,
                            title: ctx.invoice.title,
                            startParameter: ctx.invoice.start_parameter,
                            totalAmount: ctx.invoice.total_amount,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'location': {
                    if (!ctx.location) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'location',
                        payload: {
                            messageId: String(ctx.message_id),
                            latitude: ctx.location.latitude,
                            longitude: ctx.location.longitude,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'image': {
                    if (!ctx.photo) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'image',
                        payload: {
                            messageId: String(ctx.message_id),
                            fileId: (_h = ctx.photo) === null || _h === void 0 ? void 0 : _h[0].file_id,
                            text: ctx.caption,
                            files: ctx.photo.map((photo) => ({
                                id: photo.file_id,
                                size: photo.file_size,
                                width: photo.width,
                                height: photo.height,
                            })),
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'video': {
                    if (!ctx.video) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'video',
                        payload: {
                            messageId: String(ctx.message_id),
                            fileId: ctx.video.file_id,
                            text: ctx.caption,
                            files: [
                                {
                                    duration: ctx.video.duration,
                                    id: ctx.video.file_id,
                                    size: ctx.video.file_size,
                                    mimeType: ctx.video.mime_type,
                                },
                            ],
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'voice': {
                    if (!ctx.voice) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'voice',
                        payload: {
                            messageId: String(ctx.message_id),
                            fileId: ctx.voice.file_id,
                            duration: ctx.voice.duration,
                            mimeType: ctx.voice.mime_type,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'video_note': {
                    if (!ctx.video_note) {
                        break;
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'video_note',
                        payload: {
                            messageId: String(ctx.message_id),
                            fileId: ctx.video_note.file_id,
                            duration: ctx.video_note.duration,
                            length: ctx.video_note.length,
                        },
                    };
                    this.processUpdate(adaptedContext);
                    break;
                }
                case 'media_group': {
                    if (!ctx.media_group_id) {
                        break;
                    }
                    if (!this.mediaGroupCollector.mediaGroupId) {
                        this.mediaGroupCollector.mediaGroupId = ctx.media_group_id;
                    }
                    if (!this.mediaGroupCollector.text) {
                        this.mediaGroupCollector.text = (_j = ctx.caption) !== null && _j !== void 0 ? _j : '';
                    }
                    if (this.mediaGroupCollector.mediaGroupId === ctx.media_group_id) {
                        if (ctx.photo) {
                            // take the last one because of the best quality
                            const photo = ctx.photo[ctx.photo.length - 1];
                            const file = {
                                id: photo.file_id,
                                size: photo.file_size,
                                width: photo.width,
                                height: photo.height,
                                type: 'image',
                            };
                            this.mediaGroupCollector.files.push(file);
                        }
                        if (ctx.video) {
                            const { video } = ctx;
                            const file = {
                                id: video.file_id,
                                duration: video.duration,
                                size: video.file_size,
                                mimeType: video.mime_type,
                                type: 'video',
                            };
                            this.mediaGroupCollector.files.push(file);
                        }
                        if (ctx.audio) {
                            const { audio } = ctx;
                            const name = `${(_k = ctx.audio.performer) !== null && _k !== void 0 ? _k : ''} ${(_l = ctx.audio.title) !== null && _l !== void 0 ? _l : ''}`.trim();
                            const file = {
                                name,
                                id: audio.file_id,
                                duration: audio.duration,
                                size: audio.file_size,
                                mimeType: audio.mime_type,
                                type: 'audio',
                            };
                            this.mediaGroupCollector.files.push(file);
                        }
                        if (ctx.animation) {
                            const { animation } = ctx;
                            const file = {
                                id: animation.file_id,
                                duration: animation.duration,
                                name: animation.file_name,
                                mimeType: animation.mime_type,
                                type: 'animation',
                            };
                            this.mediaGroupCollector.files.push(file);
                        }
                        if (ctx.document) {
                            const { document } = ctx;
                            const file = {
                                id: document.file_id,
                                name: document.file_name,
                                size: document.file_size,
                                mimeType: document.mime_type,
                                type: 'file',
                            };
                            this.mediaGroupCollector.files.push(file);
                        }
                    }
                    if (this.mediaGroupCollector.timeoutId && this.mediaGroupCollector.mediaGroupId) {
                        clearTimeout(this.mediaGroupCollector.timeoutId);
                    }
                    const adaptedContext = {
                        ...common,
                        type: 'media_group',
                        payload: {
                            mediaGroupId: this.mediaGroupCollector.mediaGroupId,
                            files: this.mediaGroupCollector.files,
                            text: this.mediaGroupCollector.text,
                        },
                    };
                    const mediaGroupCallback = () => {
                        this.processUpdate(adaptedContext);
                        this.mediaGroupCollector = (0, utils_1.getDefaultCollectorState)();
                    };
                    this.mediaGroupCollector.timeoutId = setTimeout(mediaGroupCallback, 1000);
                    break;
                }
            }
        };
        this.handleCallbackQuery = (ctx) => {
            var _a, _b, _c, _d, _e;
            if (((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.chat) !== undefined && ctx.data !== undefined) {
                const adaptedContext = {
                    type: 'action',
                    chat: {
                        id: String(ctx.message.chat.id),
                        type: ctx.message.chat.type,
                        title: ctx.message.chat.title,
                        username: ctx.message.chat.username,
                        firstName: ctx.message.chat.first_name,
                        lastName: ctx.message.chat.last_name,
                        description: ctx.message.chat.description,
                        inviteLink: ctx.message.chat.invite_link,
                    },
                    from: {
                        id: String((_b = ctx.from) === null || _b === void 0 ? void 0 : _b.id),
                        username: (_c = ctx.from) === null || _c === void 0 ? void 0 : _c.username,
                        firstName: (_d = ctx.from) === null || _d === void 0 ? void 0 : _d.first_name,
                        lastName: (_e = ctx.from) === null || _e === void 0 ? void 0 : _e.last_name,
                    },
                    payload: {
                        actionId: ctx.data,
                    },
                    nativeEvent: {
                        type: UrbanBotTelegram.TYPE,
                        payload: ctx,
                    },
                };
                this.processUpdate(adaptedContext);
            }
        };
        const { isPolling, token, ...otherOptions } = options;
        this.client = new node_telegram_bot_api_1.default(token, isPolling ? { polling: true, ...otherOptions } : undefined);
        this.client.on('text', (ctx) => this.handleMessage('text', ctx));
        this.client.on('callback_query', this.handleCallbackQuery);
        this.client.on('sticker', (ctx) => this.handleMessage('sticker', ctx));
        this.client.on('animation', (ctx) => this.handleMessage('animation', ctx));
        this.client.on('audio', (ctx) => this.handleMessage('audio', ctx));
        this.client.on('contact', (ctx) => this.handleMessage('contact', ctx));
        this.client.on('document', (ctx) => this.handleMessage('file', ctx));
        this.client.on('invoice', (ctx) => this.handleMessage('invoice', ctx));
        this.client.on('location', (ctx) => this.handleMessage('location', ctx));
        this.client.on('photo', (ctx) => this.handleMessage('image', ctx));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.client.on('poll', (ctx) => this.handleMessage('poll', ctx));
        this.client.on('video', (ctx) => this.handleMessage('video', ctx));
        this.client.on('voice', (ctx) => this.handleMessage('voice', ctx));
        this.client.on('video_note', (ctx) => this.handleMessage('video_note', ctx));
        this.client.on('message', (ctx) => {
            const ctxWithDice = ctx;
            if (ctxWithDice.dice !== undefined) {
                this.handleMessage('dice', ctxWithDice);
                return;
            }
        });
        this.client.on('animation', (ctx) => this.handleMessage('media_group', ctx));
        this.client.on('audio', (ctx) => this.handleMessage('media_group', ctx));
        this.client.on('photo', (ctx) => this.handleMessage('media_group', ctx));
        this.client.on('video', (ctx) => this.handleMessage('media_group', ctx));
        this.client.on('document', (ctx) => this.handleMessage('media_group', ctx));
    }
    initializeServer(expressApp) {
        var _a;
        if (this.options.isPolling) {
            return;
        }
        const pathnamePrefix = (_a = this.options.pathnamePrefix) !== null && _a !== void 0 ? _a : '';
        expressApp.use(`${pathnamePrefix}/telegram/*`, express_1.default.json());
        expressApp.post(`${pathnamePrefix}/telegram/bot${this.options.token}`, (req, res) => {
            this.client.processUpdate(req.body);
            res.sendStatus(200);
        });
    }
    processUpdate(_event) {
        throw new Error('this method must be overridden');
    }
    async sendMessage(message) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        await this.simulateTyping(message.chat.id, message.data.simulateTyping);
        switch (message.nodeName) {
            case 'urban-text': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendMessage(message.chat.id, message.data.text, params);
                (_b = (_a = message.data).onSent) === null || _b === void 0 ? void 0 : _b.call(_a, response);
                return response;
            }
            case 'urban-img': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendPhoto(message.chat.id, message.data.file, {
                    ...params,
                    caption: message.data.title,
                });
                (_d = (_c = message.data).onSent) === null || _d === void 0 ? void 0 : _d.call(_c, response);
                return response;
            }
            case 'urban-buttons': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                if (!message.data.title) {
                    throw new Error('@urban-bot/telegram Specify title prop to ButtonGroup');
                }
                const response = await this.client.sendMessage(message.chat.id, message.data.title, params);
                (_f = (_e = message.data).onSent) === null || _f === void 0 ? void 0 : _f.call(_e, response);
                return response;
            }
            case 'urban-audio': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendAudio(message.chat.id, message.data.file, {
                    ...params,
                    caption: message.data.title,
                    duration: message.data.duration,
                    performer: message.data.author,
                    title: message.data.name,
                });
                (_h = (_g = message.data).onSent) === null || _h === void 0 ? void 0 : _h.call(_g, response);
                return response;
            }
            case 'urban-voice': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendVoice(message.chat.id, message.data.file, {
                    ...params,
                    caption: message.data.title,
                    duration: message.data.duration,
                });
                (_k = (_j = message.data).onSent) === null || _k === void 0 ? void 0 : _k.call(_j, response);
                return response;
            }
            case 'urban-video': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendVideo(message.chat.id, message.data.file, {
                    ...params,
                    caption: message.data.title,
                    duration: message.data.duration,
                    width: message.data.width,
                    height: message.data.height,
                });
                (_m = (_l = message.data).onSent) === null || _m === void 0 ? void 0 : _m.call(_l, response);
                return response;
            }
            case 'urban-video-note': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendVideoNote(message.chat.id, message.data.file, {
                    ...params,
                    duration: message.data.duration,
                });
                (_p = (_o = message.data).onSent) === null || _p === void 0 ? void 0 : _p.call(_o, response);
                return response;
            }
            case 'urban-animation': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendAnimation(message.chat.id, message.data.file, {
                    ...params,
                    caption: message.data.title,
                    duration: message.data.duration,
                    width: message.data.width,
                    height: message.data.height,
                });
                (_r = (_q = message.data).onSent) === null || _r === void 0 ? void 0 : _r.call(_q, response);
                return response;
            }
            case 'urban-file': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendDocument(message.chat.id, message.data.file, {
                    ...params,
                    caption: message.data.title,
                }, {
                    ...(message.data.filename ? { filename: message.data.filename } : {}),
                });
                (_t = (_s = message.data).onSent) === null || _t === void 0 ? void 0 : _t.call(_s, response);
                return response;
            }
            case 'urban-location': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendLocation(message.chat.id, message.data.latitude, message.data.longitude, {
                    ...params,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore @types/node-telegram-bot-api bug. live_period is existed
                    live_period: message.data.livePeriodSeconds,
                });
                (_v = (_u = message.data).onSent) === null || _v === void 0 ? void 0 : _v.call(_u, response);
                return response;
            }
            case 'urban-media': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const media = message.data.files.map((fileData, index) => {
                    const { type, file, ...other } = fileData;
                    const common = {
                        media: file,
                        parse_mode: message.data.parseMode,
                        // This trick allow to attach text to media group message
                        caption: index === 0 ? message.data.title : '',
                        ...other,
                    };
                    switch (type) {
                        case 'image': {
                            return {
                                type: 'photo',
                                ...common,
                            };
                        }
                        case 'video': {
                            return {
                                type: 'video',
                                ...common,
                            };
                        }
                        default: {
                            throw new Error(`urban-media type '${type}' doesn't support`);
                        }
                    }
                });
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore @types/node-telegram-bot-api bug. File could be not only string
                const response = await this.client.sendMediaGroup(message.chat.id, media, params);
                (_x = (_w = message.data).onSent) === null || _x === void 0 ? void 0 : _x.call(_w, response);
                return response;
            }
            case 'urban-contact': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const response = await this.client.sendContact(message.chat.id, String(message.data.phoneNumber), (_y = message.data.firstName) !== null && _y !== void 0 ? _y : '', {
                    ...params,
                    last_name: message.data.lastName,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore @types/node-telegram-bot-api bug. Doesn't have vcard type
                    vcard: message.data.vCard,
                });
                (_0 = (_z = message.data).onSent) === null || _0 === void 0 ? void 0 : _0.call(_z, response);
                return response;
            }
            case 'urban-poll': {
                const params = (0, format_1.formatParamsForNewMessage)(message);
                const options = message.data.options.map(({ text }) => text);
                const response = await this.client.sendPoll(message.chat.id, message.data.question, options, {
                    ...params,
                    is_anonymous: message.data.isAnonymous,
                    type: message.data.type,
                    allows_multiple_answers: message.data.withMultipleAnswers,
                    correct_option_id: Number(message.data.rightOption),
                    explanation: message.data.explanation,
                    explanation_parse_mode: params.parse_mode,
                    open_period: message.data.livePeriodSeconds,
                    close_date: message.data.close_time,
                });
                (_2 = (_1 = message.data).onSent) === null || _2 === void 0 ? void 0 : _2.call(_1, response);
                return response;
            }
            default: {
                throw new Error(`Tag '${
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                message.nodeName}' is not supported. Please don't use it with telegram bot or add this logic to @urban-bot/telegram.`);
            }
        }
    }
    updateMessage(message) {
        if (message.data.isReplyButtons === true) {
            throw new Error('Reply buttons can not edited. You could send a new message every time for this message.');
        }
        switch (message.nodeName) {
            case 'urban-text': {
                const metaToEdit = {
                    chat_id: message.meta.chat.id,
                    message_id: message.meta.message_id,
                };
                const params = (0, format_1.formatParamsForExistingMessage)(message);
                this.client.editMessageText(message.data.text, { ...params, ...metaToEdit });
                break;
            }
            case 'urban-img': {
                this.editMedia(message);
                break;
            }
            case 'urban-audio': {
                this.editMedia(message);
                break;
            }
            case 'urban-voice': {
                return this.editVoice(message);
            }
            case 'urban-video': {
                this.editMedia(message);
                break;
            }
            case 'urban-video-note': {
                return this.editVideoNote(message);
            }
            case 'urban-animation': {
                this.editMedia(message);
                break;
            }
            case 'urban-file': {
                this.editMedia(message);
                break;
            }
            case 'urban-buttons': {
                const metaToEdit = {
                    chat_id: message.meta.chat.id,
                    message_id: message.meta.message_id,
                };
                const params = (0, format_1.formatParamsForExistingMessage)(message);
                this.client.editMessageText(message.data.title, { ...params, ...metaToEdit });
                break;
            }
            case 'urban-location': {
                const metaToEdit = {
                    chat_id: message.meta.chat.id,
                    message_id: message.meta.message_id,
                };
                const params = (0, format_1.formatParamsForExistingMessage)(message);
                this.client.editMessageLiveLocation(message.data.latitude, message.data.longitude, {
                    ...params,
                    ...metaToEdit,
                });
                break;
            }
            default: {
                throw new Error(`Tag '${
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                message.nodeName}' is not supported to update the message for @urban-bot/telegram. You could send a new message every time for this tag.`);
            }
        }
    }
    deleteMessage(message) {
        var _a, _b;
        if (Array.isArray(message.meta)) {
            message.meta.forEach(({ chat, message_id }) => {
                (chat === null || chat === void 0 ? void 0 : chat.id) && this.client.deleteMessage(chat.id, String(message_id));
            });
        }
        else {
            ((_b = (_a = message === null || message === void 0 ? void 0 : message.meta) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.id) && this.client.deleteMessage(message.meta.chat.id, String(message.meta.message_id));
        }
    }
    initializeCommands(commands) {
        // FIXME this methods should be fixed in node-telegram-bot-api
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return this.client._request('setMyCommands', {
            form: {
                commands: JSON.stringify(commands),
            },
        });
    }
    editMedia(message) {
        const metaToEdit = {
            chat_id: message.meta.chat.id,
            message_id: message.meta.message_id,
        };
        const params = (0, format_1.formatParamsForExistingMessage)(message);
        const media = (0, format_1.getTelegramMedia)(message, 'parse_mode' in params ? params.parse_mode : undefined);
        if (typeof message.data.file !== 'string') {
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                const fileData = this.client._formatSendData('file', message.data.file);
                const { file } = fileData[0];
                this.editMessageMedia({ ...media, media: `attach://file` }, { ...params, ...metaToEdit }, { file });
            }
            catch (e) {
                console.error('Something wrong with edit file message.');
                console.error(e);
            }
            return;
        }
        this.editMessageMedia({ ...media, media: message.data.file }, { ...params, ...metaToEdit });
    }
    async editVoice(message) {
        const metaToEdit = {
            chat_id: message.meta.chat.id,
            message_id: message.meta.message_id,
        };
        const params = (0, format_1.formatParamsForExistingMessage)(message);
        const media = (0, format_1.getTelegramMedia)(message, 'parse_mode' in params ? params.parse_mode : undefined);
        if (media.type !== 'voice') {
            return;
        }
        const { chat_id, message_id } = metaToEdit;
        const options = { ...params, caption: message.data.title };
        try {
            await this.client.deleteMessage(chat_id, String(message_id));
            return await this.client.sendVoice(chat_id, message.data.file, options);
        }
        catch (e) {
            console.log('error', e);
        }
    }
    async editVideoNote(message) {
        const metaToEdit = {
            chat_id: message.meta.chat.id,
            message_id: message.meta.message_id,
        };
        const params = (0, format_1.formatParamsForExistingMessage)(message);
        const media = (0, format_1.getTelegramMedia)(message, 'parse_mode' in params ? params.parse_mode : undefined);
        if (media.type !== 'video_note') {
            return;
        }
        const { chat_id, message_id } = metaToEdit;
        try {
            await this.client.deleteMessage(chat_id, String(message_id));
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            return await this.client.sendVideoNote(chat_id, message.data.file, params);
        }
        catch (e) {
            console.log('error', e);
        }
    }
    // FIXME this methods should be fixed in node-telegram-bot-api
    editMessageMedia(media, options, formData) {
        const qs = { ...options, media: JSON.stringify(media) };
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return this.client._request('editMessageMedia', { qs, formData });
    }
    simulateTyping(chatId, simulateTyping) {
        return new Promise((resolve) => {
            if (typeof simulateTyping === 'number') {
                this.client.sendChatAction(chatId, 'typing').catch((e) => {
                    console.error('Error with simulate typing');
                    console.error(e);
                    resolve();
                });
                setTimeout(resolve, simulateTyping);
            }
            else {
                resolve();
            }
        });
    }
}
exports.UrbanBotTelegram = UrbanBotTelegram;
UrbanBotTelegram.TYPE = 'TELEGRAM';
//# sourceMappingURL=UrbanBotTelegram.js.map