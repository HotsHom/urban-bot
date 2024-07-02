import type { UrbanMessageMediaData } from '../types';
export declare type MediaProps = UrbanMessageMediaData & {
    isNewMessageEveryRender?: boolean;
};
export declare function Media({ title, files, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }: MediaProps): import("react/jsx-runtime").JSX.Element;
