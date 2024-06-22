import { ManagerBot } from '../ManagerBot/ManagerBot';
import type { ReactNode } from 'react';
import type { Express } from 'express';
import type { UrbanBotType, UrbanBot, UrbanChat, UrbanParseMode, UrbanSyntheticEvent } from '../types';
export declare type ChatProps<Bot extends UrbanBot, BotType extends UrbanBotType> = {
    bot: Bot;
    chat: UrbanChat;
    isNewMessageEveryRender: boolean;
    parseMode?: UrbanParseMode;
    $$managerBot: ManagerBot<BotType>;
    children: ReactNode;
    key: string;
};
export declare type RootProps<Bot extends UrbanBot, BotType extends UrbanBotType> = {
    bot: Bot;
    expressApp?: Express;
    children: React.ReactNode;
    sessionTimeSeconds?: number;
    isNewMessageEveryRender?: boolean;
    parseMode?: UrbanParseMode;
    port?: number;
    initialChats?: UrbanChat[];
    onAnyEvent?: (event: UrbanSyntheticEvent<BotType>) => void;
};
export declare function Root<Bot extends UrbanBot = UrbanBot, BotType extends UrbanBotType = UrbanBotType>({ children, bot, sessionTimeSeconds, isNewMessageEveryRender, parseMode, port, expressApp, initialChats, onAnyEvent, }: RootProps<Bot, BotType>): JSX.Element;
