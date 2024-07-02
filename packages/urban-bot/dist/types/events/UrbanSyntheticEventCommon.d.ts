import type { UrbanBotType, UrbanChat, UrbanFrom } from '../bot';
export declare type UrbanSyntheticEventCommon<BotType extends UrbanBotType> = {
    chat: UrbanChat;
    from: UrbanFrom;
    nativeEvent: BotType['NativeEvent'];
};
