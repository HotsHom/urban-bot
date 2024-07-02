import type { ReactNode, FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData, UrbanFileFormat } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type ImageProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    name?: string;
    title?: ReactNode;
    alt?: string;
    isNewMessageEveryRender?: boolean;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
};
export declare function Image({ file, title, alt, name, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, parseMode, disableNotification, replyToMessageId, forceReply, ...otherProps }: ImageProps): import("react/jsx-runtime").JSX.Element;
