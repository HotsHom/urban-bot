import type { OtherProps } from '../common';
import type { UrbanChat, UrbanParseMode } from '../bot';
export declare type UrbanMessageCommon = {
    chat: UrbanChat;
};
export declare type UrbanMessageCommonData = OtherProps & {
    parseMode?: UrbanParseMode;
    disableNotification?: boolean;
    replyToMessageId?: string | number;
    forceReply?: boolean;
    personaId?: string | number;
    simulateTyping?: number;
    isRemoveKeyboard?: boolean;
    onSent?: (data: any) => any;
};
