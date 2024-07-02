import type { FunctionComponentElement } from 'react';
import type { UrbanMessageCommonData } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type ContactProps = UrbanMessageCommonData & {
    phoneNumber?: string | number;
    username?: string;
    firstName?: string;
    lastName?: string;
    vCard?: string;
    isNewMessageEveryRender?: boolean;
    buttons?: FunctionComponentElement<ButtonGroupProps>;
};
export declare function Contact({ phoneNumber, username, firstName, lastName, vCard, buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, disableNotification, forceReply, replyToMessageId, ...otherProps }: ContactProps): import("react/jsx-runtime").JSX.Element;
