import type { OtherProps, ButtonElement, SpreadField, UrbanSyntheticEventAction, UrbanBotType, UrbanNativeEvent } from '../types';
export declare type FormattedButton = OtherProps & {
    id: string;
    text: string;
    onClick?: (args: SpreadField<UrbanSyntheticEventAction<UrbanBotType<UrbanNativeEvent<any, any>, any>>, 'payload'>) => void;
};
export declare function formatButtonElement(element: ButtonElement | ButtonElement[] | ButtonElement[][]): FormattedButton[] | FormattedButton[][];
