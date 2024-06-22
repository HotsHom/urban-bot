import { UrbanBot, UrbanMessage, UrbanSyntheticEvent, UrbanParseMode, UrbanExistingMessage, UrbanCommand } from '@urban-bot/core';
import { Client, Message, TextChannel, Interaction, ClientOptions } from 'discord.js';
export declare type DISCORD = 'DISCORD';
export declare type DiscordPayload = Message | Interaction;
export declare type DiscordMessageMeta = Message;
export declare type UrbanNativeEventDiscord<Payload = DiscordPayload> = {
    type: DISCORD;
    payload?: Payload;
};
export declare type UrbanBotDiscordType<Payload = DiscordPayload> = {
    NativeEvent: UrbanNativeEventDiscord<Payload>;
    MessageMeta: DiscordMessageMeta;
};
export declare type DiscordOptions = ClientOptions & {
    token: string;
    commandPrefix?: string;
    withDeletionInteractionCommand?: boolean;
    clientId?: string;
};
export declare class UrbanBotDiscord implements UrbanBot<UrbanBotDiscordType> {
    static TYPE: DISCORD;
    type: DISCORD;
    defaultParseMode: UrbanParseMode;
    client: Client;
    options: DiscordOptions;
    commandPrefix: string;
    constructor(options: DiscordOptions);
    processUpdate(_event: UrbanSyntheticEvent<UrbanBotDiscordType>): void;
    handleInteraction: (interaction: Interaction) => Promise<void>;
    handleMessage: (message: Message) => void;
    sendMessage(message: UrbanMessage): Promise<DiscordMessageMeta>;
    updateMessage(message: UrbanExistingMessage<UrbanBotDiscordType>): Promise<Message> | undefined;
    deleteMessage(message: UrbanExistingMessage<UrbanBotDiscordType>): Promise<Message>;
    simulateTyping(channel: TextChannel, simulateTyping?: number): Promise<void>;
    initializeCommands(commands: UrbanCommand[]): Promise<void>;
}
