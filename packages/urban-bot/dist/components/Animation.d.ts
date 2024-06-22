import type { ReactNode, FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData, UrbanFileFormat } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type AnimationProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    name?: string;
    title?: ReactNode;
    duration?: number;
    width?: number;
    height?: number;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
    isNewMessageEveryRender?: boolean;
};
export declare function Animation({ file, name, height, width, buttons: buttonGroupElement, disableNotification, duration, forceReply, isNewMessageEveryRender: isNewMessageEveryRenderProp, parseMode, replyToMessageId, title, ...otherProps }: AnimationProps): JSX.Element;
