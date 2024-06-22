import React from 'react';
import { ManagerBot } from './ManagerBot/ManagerBot';
import type { UrbanBotType, UrbanBot, UrbanChat, UrbanParseMode } from './types';
export declare type BotContextType<Bot extends UrbanBot, BotType extends UrbanBotType = UrbanBotType> = {
    $$managerBot: ManagerBot<BotType>;
    chat: UrbanChat;
    isNewMessageEveryRender: boolean;
    parseMode?: UrbanParseMode;
    bot: Bot;
};
export declare const BotContext: React.Context<undefined>;
export declare function getBotContext<Bot extends UrbanBot = UrbanBot, BotType extends UrbanBotType = UrbanBotType>(): React.Context<BotContextType<Bot, BotType>>;
export declare type RouterQuery = Record<string, any>;
export declare type Navigate<Q = RouterQuery> = (name: string, query?: Q, replace?: boolean) => void;
export declare type RouterContext<P extends object = {}, Q = RouterQuery> = {
    navigate: Navigate<Q>;
    activePath: string;
    params?: P;
    history: string[];
    query: Q;
};
export declare const RouterContext: React.Context<RouterContext<{}, RouterQuery> | undefined>;
