import type { UrbanBotType, UrbanEventListener } from '../types';
export declare type Pattern = string | RegExp;
export declare function useText<BotType extends UrbanBotType>(listener: UrbanEventListener<BotType, 'text'>, pattern?: Pattern | Pattern[]): void;
