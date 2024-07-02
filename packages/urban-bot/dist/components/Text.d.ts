import type { ReactNode } from 'react';
import type { UrbanMessageCommonData } from '../types';
export declare type TextProps = UrbanMessageCommonData & {
    children: ReactNode;
    disableWebPagePreview?: boolean;
    isNewMessageEveryRender?: boolean;
};
export declare function Text({ children, isNewMessageEveryRender: isNewMessageEveryRenderProp, parseMode, disableWebPagePreview, disableNotification, replyToMessageId, forceReply, ...otherProps }: TextProps): import("react/jsx-runtime").JSX.Element;
