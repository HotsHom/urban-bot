import type { ReactNode, FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData, UrbanFileFormat } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type FileProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    title?: ReactNode;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
    isNewMessageEveryRender?: boolean;
    name?: string;
};
export declare function File({ file, title, name, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }: FileProps): import("react/jsx-runtime").JSX.Element;
