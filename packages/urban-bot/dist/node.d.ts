import { ManagerBot } from './ManagerBot/ManagerBot';
import type { UrbanBotType, UrbanExistingMessage, UrbanMessageNodeName } from './types';
export declare type UrbanNode<BotType extends UrbanBotType = UrbanBotType> = Omit<UrbanExistingMessage<BotType>, 'meta'> & {
    $$managerBot: ManagerBot<BotType>;
    isNewMessageEveryRender?: boolean;
    debounceDelay?: number;
    meta?: Promise<BotType['MessageMeta']>;
    sendMessage: ManagerBot<BotType>['sendMessage'];
    updateMessage: ManagerBot<BotType>['updateMessage'];
    deleteMessage: ManagerBot<BotType>['deleteMessage'];
    childNodes: Array<UrbanNode<BotType>>;
};
export declare type UrbanNodeChat = {
    nodeName: 'chat';
    childNodes: Array<UrbanNode>;
};
export declare type UrbanNodeRoot = {
    nodeName: 'root';
    childNodes: Array<UrbanNodeChat>;
};
declare type Props<BotType extends UrbanBotType> = Omit<UrbanNode<BotType>, 'nodeName'>;
export declare function createNode<BotType extends UrbanBotType>(nodeName: UrbanMessageNodeName | 'root' | 'chat', props?: Props<BotType>): UrbanNode<BotType> | UrbanNodeRoot | UrbanNodeChat;
export declare function appendChildNode<BotType extends UrbanBotType>(parentNode: UrbanNode<BotType> | UrbanNodeRoot | UrbanNodeChat, childNode: UrbanNode<BotType> | UrbanNodeChat): void;
export declare function removeChildNode<BotType extends UrbanBotType>(parentNode: UrbanNode<BotType> | UrbanNodeRoot | UrbanNodeChat, removedNode: UrbanNode<BotType> | UrbanNodeChat): void;
export declare function insertBeforeNode(node: UrbanNode | UrbanNodeRoot | UrbanNodeChat, newChildNode: UrbanNode | UrbanNodeChat, beforeChildNode: UrbanNode | UrbanNodeChat): void;
export declare function updateNode<BotType extends UrbanBotType>(node: UrbanNode<BotType> | UrbanNodeChat, _updatePayload: unknown, _type: unknown, oldProps: Props<BotType>, newProps: Props<BotType>): void;
export {};
