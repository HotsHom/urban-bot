"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrbanBotDiscord = void 0;
const discord_js_1 = require("discord.js");
const lodash_groupby_1 = __importDefault(require("lodash.groupby"));
const format_1 = require("./format");
const v9_1 = require("discord-api-types/v9");
const rest_1 = require("@discordjs/rest");
class UrbanBotDiscord {
    constructor(options) {
        this.type = UrbanBotDiscord.TYPE;
        this.defaultParseMode = 'markdown';
        this.handleInteraction = async (interaction) => {
            const isPrivateChat = !interaction.guildId;
            const common = {
                chat: {
                    id: String(interaction.channelId),
                    ...(isPrivateChat ? { username: interaction.user.username } : undefined),
                },
                from: {
                    id: String(interaction.user.id),
                    username: interaction.user.username,
                    ...(interaction.user.avatar ? { avatars: [interaction.user.avatar] } : undefined),
                },
                nativeEvent: {
                    type: UrbanBotDiscord.TYPE,
                    payload: interaction,
                },
            };
            if (interaction.isButton()) {
                const adaptedContext = {
                    ...common,
                    type: 'action',
                    payload: {
                        actionId: interaction.customId,
                    },
                };
                this.processUpdate(adaptedContext);
                return interaction.deferUpdate();
            }
            if (interaction.isCommand()) {
                const adaptedContext = {
                    ...common,
                    type: 'command',
                    payload: {
                        messageId: interaction.commandId,
                        command: `${this.commandPrefix}${interaction.commandName}`,
                    },
                };
                this.processUpdate(adaptedContext);
                if (this.options.withDeletionInteractionCommand) {
                    await interaction.deferReply();
                    return interaction.deleteReply();
                }
            }
        };
        this.handleMessage = (message) => {
            const isPrivateChat = !message.guildId;
            const common = {
                chat: {
                    id: String(message.channelId),
                    ...(isPrivateChat ? { username: message.author.username } : undefined),
                },
                from: {
                    id: String(message.author.id),
                    username: message.author.username,
                    isBot: message.author.bot,
                },
                nativeEvent: {
                    type: UrbanBotDiscord.TYPE,
                    payload: message,
                },
            };
            switch (message.type) {
                case 'DEFAULT': {
                    if (message.author.bot) {
                        return;
                    }
                    if (message.attachments.size === 0) {
                        if (message.content[0] === this.commandPrefix) {
                            const [command, ...args] = message.content.split(' ');
                            const adaptedContext = {
                                ...common,
                                type: 'command',
                                payload: {
                                    messageId: message.id,
                                    command,
                                    argument: args.join(' '),
                                },
                            };
                            this.processUpdate(adaptedContext);
                            return;
                        }
                        const adaptedContext = {
                            ...common,
                            type: 'text',
                            payload: {
                                messageId: message.id,
                                text: message.content,
                            },
                        };
                        this.processUpdate(adaptedContext);
                        return;
                    }
                    const formattedAttachments = Array.from(message.attachments.values()).map(({ id, url, name, size, width, height, contentType, ...rest }) => {
                        return {
                            id,
                            url,
                            name: name !== null && name !== void 0 ? name : undefined,
                            size,
                            width: width !== null && width !== void 0 ? width : undefined,
                            height: height !== null && height !== void 0 ? height : undefined,
                            mimeType: contentType !== null && contentType !== void 0 ? contentType : undefined,
                            ...rest,
                        };
                    });
                    const groupedAttachments = (0, lodash_groupby_1.default)(formattedAttachments, ({ mimeType }) => {
                        if (mimeType === null || mimeType === void 0 ? void 0 : mimeType.startsWith('image')) {
                            return 'images';
                        }
                        if (mimeType === null || mimeType === void 0 ? void 0 : mimeType.startsWith('video')) {
                            return 'videos';
                        }
                        if (mimeType === null || mimeType === void 0 ? void 0 : mimeType.startsWith('audio')) {
                            return 'audios';
                        }
                        return 'files';
                    });
                    const { images, videos, audios, files } = groupedAttachments;
                    if (images && images.length > 0) {
                        const adaptedContext = {
                            ...common,
                            type: 'image',
                            payload: {
                                messageId: message.id,
                                text: message.content,
                                files: images,
                            },
                        };
                        this.processUpdate(adaptedContext);
                    }
                    if (videos && videos.length > 0) {
                        const adaptedContext = {
                            ...common,
                            type: 'video',
                            payload: {
                                messageId: message.id,
                                text: message.content,
                                files: videos,
                            },
                        };
                        this.processUpdate(adaptedContext);
                    }
                    if (audios && audios.length > 0) {
                        const adaptedContext = {
                            ...common,
                            type: 'audio',
                            payload: {
                                messageId: message.id,
                                text: message.content,
                                files: audios,
                            },
                        };
                        this.processUpdate(adaptedContext);
                    }
                    if (files && files.length > 0) {
                        const adaptedContext = {
                            ...common,
                            type: 'file',
                            payload: {
                                messageId: message.id,
                                text: message.content,
                                files,
                            },
                        };
                        this.processUpdate(adaptedContext);
                    }
                    return;
                }
            }
        };
        const { token, commandPrefix = '/', withDeletionInteractionCommand = true, ...discordOptions } = options;
        this.commandPrefix = commandPrefix;
        this.options = {
            token,
            withDeletionInteractionCommand,
            ...discordOptions,
        };
        if (!token) {
            throw new Error(`Provide token to @urban-bot/discord options`);
        }
        this.client = new discord_js_1.Client(discordOptions);
        this.client.on('messageCreate', this.handleMessage);
        this.client.on('interactionCreate', this.handleInteraction);
        this.client.login(token);
    }
    // initializeServer(expressApp: express.Express) {
    // }
    processUpdate(_event) {
        throw new Error('this method must be overridden');
    }
    async sendMessage(message) {
        const channel = this.client.channels.cache.get(message.chat.id);
        if (!channel) {
            throw new Error('Channel is not found @urban-bot/discord');
        }
        await this.simulateTyping(channel, message.data.simulateTyping);
        switch (message.nodeName) {
            case 'urban-text': {
                return channel.send({ content: message.data.text });
            }
            case 'urban-buttons': {
                return channel.send({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                });
            }
            case 'urban-img': {
                if (typeof message.data.file !== 'string') {
                    throw new Error('@urban-bot/discord support image file only as string');
                }
                return channel.send({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-audio': {
                if (typeof message.data.file !== 'string') {
                    throw new Error('@urban-bot/discord support audio file only as string');
                }
                return channel.send({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-video': {
                if (typeof message.data.file !== 'string') {
                    throw new Error('@urban-bot/discord support video file only as string');
                }
                return channel.send({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-file': {
                if (typeof message.data.file !== 'string') {
                    throw new Error('@urban-bot/discord support file file only as string');
                }
                return channel.send({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-media': {
                return channel.send({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: message.data.files.map(({ file }) => {
                        if (typeof file !== 'string') {
                            throw new Error('@urban-bot/discord support media file only as string');
                        }
                        return file;
                    }),
                });
            }
            default: {
                throw new Error(`Tag '${
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                message.nodeName}' is not supported. Please don't use it with discord bot or add this logic to @urban-bot/discord.`);
            }
        }
    }
    updateMessage(message) {
        switch (message.nodeName) {
            case 'urban-text': {
                return message.meta.edit(message.data.text);
            }
            case 'urban-buttons': {
                return message.meta.edit({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                });
            }
            case 'urban-img': {
                return message.meta.edit({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-video': {
                return message.meta.edit({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-audio': {
                return message.meta.edit({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-file': {
                return message.meta.edit({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: [message.data.file],
                });
            }
            case 'urban-media': {
                return message.meta.edit({
                    ...(message.data.title ? { content: message.data.title } : undefined),
                    ...(message.data.buttons ? { components: (0, format_1.formatButtons)(message.data.buttons) } : undefined),
                    files: message.data.files.map(({ file }) => {
                        if (typeof file !== 'string') {
                            throw new Error('@urban-bot/discord support media file only as string');
                        }
                        return file;
                    }),
                });
            }
        }
    }
    deleteMessage(message) {
        return message.meta.delete();
    }
    async simulateTyping(channel, simulateTyping) {
        if (typeof simulateTyping !== 'number') {
            return;
        }
        if (!channel.sendTyping) {
            console.error('sendTyping does not exist');
            return;
        }
        return new Promise((resolve) => {
            channel
                .sendTyping()
                .then(() => {
                setTimeout(resolve, simulateTyping);
            })
                .catch((e) => {
                console.error('Error with simulate typing');
                console.error(e);
                resolve();
            });
        });
    }
    async initializeCommands(commands) {
        const { clientId, token } = this.options;
        if (!clientId) {
            throw new Error('Provide clientId to UrbanBotDiscord to initialize commands');
        }
        const rest = new rest_1.REST({ version: '9' }).setToken(token);
        try {
            const body = commands.map(({ command, description }) => ({ name: command.slice(1), description }));
            await rest.put(v9_1.Routes.applicationCommands(clientId), {
                body,
            });
            console.log('Successfully initialized commands. They can start showing after an hour');
        }
        catch (error) {
            console.error('Error with initialize commands');
            console.error(error);
        }
    }
}
exports.UrbanBotDiscord = UrbanBotDiscord;
UrbanBotDiscord.TYPE = 'DISCORD';
//# sourceMappingURL=UrbanBotDiscord.js.map