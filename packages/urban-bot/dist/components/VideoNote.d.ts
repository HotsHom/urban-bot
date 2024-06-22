import type { FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData, UrbanFileFormat } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type VideoNoteProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    duration?: number;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
    isNewMessageEveryRender?: boolean;
};
export declare function VideoNote({ file, buttons: buttonGroupElement, disableNotification, duration, forceReply, isNewMessageEveryRender: isNewMessageEveryRenderProp, replyToMessageId, ...otherProps }: VideoNoteProps): JSX.Element;
