import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import { EditMessageOptions } from './format';
import type { UrbanSyntheticEvent, UrbanSyntheticEventType, UrbanBot, UrbanExistingMessage, UrbanMessage, UrbanCommand, UrbanParseMode, UrbanExistingMessageByType } from '@urban-bot/core';
import type { TelegramBotMessage, InputMedia, InputMediaAudio, InputVoice, InputMediaFile, InputVideoNote, InputMediaAnimation, UrbanBotTelegramType, TelegramOptions, MediaGroupCollector } from './types';
export declare class UrbanBotTelegram implements UrbanBot<UrbanBotTelegramType> {
    options: TelegramOptions;
    static TYPE: "TELEGRAM";
    type: "TELEGRAM";
    defaultParseMode: UrbanParseMode;
    commandPrefix: string;
    client: TelegramBot;
    mediaGroupCollector: MediaGroupCollector;
    constructor(options: TelegramOptions);
    initializeServer(expressApp: express.Express): void;
    processUpdate(_event: UrbanSyntheticEvent<UrbanBotTelegramType>): void;
    handleMessage: (type: UrbanSyntheticEventType<UrbanBotTelegramType>, ctx: TelegramBotMessage) => void;
    handleCallbackQuery: (ctx: TelegramBot.CallbackQuery) => void;
    sendMessage(message: UrbanMessage): Promise<TelegramBot.Message>;
    updateMessage(message: UrbanExistingMessage<UrbanBotTelegramType>): Promise<TelegramBot.Message | undefined> | undefined;
    deleteMessage(message: UrbanExistingMessage<UrbanBotTelegramType>): void;
    initializeCommands(commands: UrbanCommand[]): Promise<boolean>;
    editMedia(message: UrbanExistingMessageByType<UrbanBotTelegramType, 'urban-img' | 'urban-audio' | 'urban-video' | 'urban-file' | 'urban-animation'>): void;
    editVoice(message: UrbanExistingMessageByType<UrbanBotTelegramType, 'urban-voice'>): Promise<TelegramBot.Message | undefined>;
    editVideoNote(message: UrbanExistingMessageByType<UrbanBotTelegramType, 'urban-video-note'>): Promise<TelegramBot.Message | undefined>;
    editMessageMedia(media: InputMedia | InputMediaAudio | InputMediaAnimation | InputMediaFile | InputVideoNote | InputVoice, options: EditMessageOptions, formData?: unknown): any;
    simulateTyping(chatId: string, simulateTyping?: number): Promise<void>;
}
