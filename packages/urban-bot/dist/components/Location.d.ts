import type { ReactNode, FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type LocationProps = UrbanMessageCommonData & {
    latitude: number;
    longitude: number;
    livePeriodSeconds?: number;
    title?: ReactNode;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
    isNewMessageEveryRender?: boolean;
};
export declare function Location({ latitude, longitude, livePeriodSeconds, title, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }: LocationProps): JSX.Element;
