import type { ReactNode, FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData, UrbanFileFormat } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type VideoProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    name?: string;
    title?: ReactNode;
    duration?: number;
    author?: string;
    width?: number;
    height?: number;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
    isNewMessageEveryRender?: boolean;
};
export declare function Video({ file, name, author, height, width, buttons: buttonGroupElement, disableNotification, duration, forceReply, isNewMessageEveryRender: isNewMessageEveryRenderProp, parseMode, replyToMessageId, title, ...otherProps }: VideoProps): JSX.Element;
