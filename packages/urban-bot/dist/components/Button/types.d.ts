import type { ReactNode } from 'react';
import type { ButtonElement, OtherProps, UrbanButtonStyle, UrbanMessageCommonData } from '../../types';
export declare type ButtonGroupProps = UrbanMessageCommonData & {
    title?: ReactNode;
    isReplyButtons?: boolean;
    isResizedKeyboard?: boolean;
    disableWebPagePreview?: boolean;
    isNewMessageEveryRender?: boolean;
    maxColumns?: number;
    children: ButtonElement | ButtonElement[] | ButtonElement[][];
};
export declare type ButtonProps = OtherProps & {
    id?: string;
    children: string;
    style?: UrbanButtonStyle;
    url?: string;
    webApp?: {
        url: string;
    };
    phoneNumber?: string | number;
    isDisabled?: boolean;
    onClick?: (...args: unknown[]) => unknown;
};
