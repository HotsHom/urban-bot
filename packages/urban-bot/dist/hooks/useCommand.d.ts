import type { UrbanBotType, UrbanEventListener } from '../types';
export declare type Pattern = string | RegExp;
export declare function useCommand<BotType extends UrbanBotType>(listener: UrbanEventListener<BotType, 'command'>, pattern?: Pattern | Pattern[]): void;
