import type { ReactNode, FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData, UrbanFileFormat } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type VoiceProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    title?: ReactNode;
    duration?: number;
    isNewMessageEveryRender?: boolean;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
};
export declare function Voice({ file, title, duration, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }: VoiceProps): JSX.Element;
