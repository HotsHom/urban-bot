import type { ReactNode } from 'react';
import type {
    ButtonElement,
    OtherProps,
    SpreadField,
    UrbanBotType,
    UrbanButtonStyle,
    UrbanMessageCommonData,
    UrbanNativeEvent,
    UrbanSyntheticEventAction,
} from '../../types';

export type ButtonGroupProps = UrbanMessageCommonData & {
    title?: ReactNode;
    isReplyButtons?: boolean;
    isResizedKeyboard?: boolean;
    disableWebPagePreview?: boolean;
    isNewMessageEveryRender?: boolean;
    maxColumns?: number;
    children: ButtonElement | ButtonElement[] | ButtonElement[][];
};

export type ButtonProps = OtherProps & {
    id?: string;
    children: string;
    style?: UrbanButtonStyle;
    url?: string;
    webApp?: { url: string };
    phoneNumber?: string | number;
    isDisabled?: boolean;
    onClick?: (
        args: SpreadField<UrbanSyntheticEventAction<UrbanBotType<UrbanNativeEvent<any, any>, any>>, 'payload'>,
    ) => void;
};
