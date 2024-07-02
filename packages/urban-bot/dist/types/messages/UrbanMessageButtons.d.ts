import type { ReactElement } from 'react';
import type { ButtonProps } from '../../components/Button/types';
import type { OtherProps } from '../common';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanButtonStyle = 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER' | 'LINK';
export declare type ButtonElement = ReactElement<ButtonProps> | boolean | null | undefined;
export declare type UrbanButton = OtherProps & {
    text: string;
    id?: string;
    url?: string;
    phoneNumber?: string | number;
    webApp?: {
        url: string;
    };
    style?: UrbanButtonStyle;
    isDisabled?: boolean;
};
export declare type UrbanMessageButtonsData = UrbanMessageCommonData & {
    title: string;
    buttons: UrbanButton[] | UrbanButton[][];
    isReplyButtons: boolean;
    isResizedKeyboard?: boolean;
};
export declare type UrbanMessageButtons = UrbanMessageCommon & {
    nodeName: 'urban-buttons';
    data: UrbanMessageButtonsData;
};
