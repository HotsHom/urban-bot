import type { OtherProps, ButtonElement } from '../types';
export declare type FormattedButton = OtherProps & {
    id: string;
    text: string;
    onClick?: (...args: unknown[]) => unknown;
};
export declare function formatButtonElement(element: ButtonElement | ButtonElement[] | ButtonElement[][]): FormattedButton[] | FormattedButton[][];
