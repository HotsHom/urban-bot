import type { BotContextType } from '../context';
import type { UrbanBot, UrbanBotType } from '../types';
export declare function useBotContext<Bot extends UrbanBot = UrbanBot, BotType extends UrbanBotType = UrbanBotType>(): BotContextType<Bot, BotType>;
