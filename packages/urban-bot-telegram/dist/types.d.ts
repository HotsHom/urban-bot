/// <reference types="node" />
import TelegramBot from 'node-telegram-bot-api';
import type { UrbanFile } from '@urban-bot/core';
export declare type TELEGRAM = 'TELEGRAM';
export declare type TelegramBotLostMessage = {
    dice?: {
        value: number;
    };
};
export declare type TelegramBotMessage = TelegramBot.Message & TelegramBotLostMessage;
export declare type TelegramPayload = TelegramBotMessage | TelegramBot.CallbackQuery;
export declare type TelegramMessageMeta = TelegramBotMessage;
export declare type InputMedia = TelegramBot.InputMedia;
export declare type InputVideoNote = TelegramBot.InputMediaBase & {
    type: 'video_note';
    duration?: number;
    media?: string;
};
export declare type InputVoice = TelegramBot.InputMediaBase & {
    type: 'voice';
    duration?: number;
    title?: string;
};
export declare type InputMediaAudio = TelegramBot.InputMediaBase & {
    type: 'audio';
    duration?: number;
    performer?: string;
    title?: string;
};
export declare type InputMediaFile = TelegramBot.InputMediaBase & {
    type: 'document';
    title?: string;
};
export declare type InputMediaAnimation = TelegramBot.InputMediaBase & {
    type: 'animation';
    duration?: number;
    title?: string;
};
export declare type UrbanNativeEventTelegram<Payload = TelegramPayload> = {
    type: TELEGRAM;
    payload?: Payload;
};
export declare type UrbanBotTelegramType<Payload = TelegramPayload> = {
    NativeEvent: UrbanNativeEventTelegram<Payload>;
    MessageMeta: TelegramMessageMeta;
};
export declare type TelegramOptions = {
    token: string;
    isPolling?: boolean;
    pathnamePrefix?: string;
    [key: string]: any;
};
export declare type MediaGroupCollector = {
    timeoutId: NodeJS.Timeout | null;
    mediaGroupId: string | null;
    text: string;
    files: UrbanFile[];
};
