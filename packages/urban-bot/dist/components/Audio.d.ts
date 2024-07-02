import type { ReactNode, FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData, UrbanFileFormat } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type AudioProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    name?: string;
    title?: ReactNode;
    isNewMessageEveryRender?: boolean;
    duration?: number;
    author?: string;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
};
export declare function Audio({ file, name, author, title, duration, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }: AudioProps): import("react/jsx-runtime").JSX.Element;
