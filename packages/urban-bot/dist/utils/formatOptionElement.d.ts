import React from 'react';
import type { OptionProps } from '../components/Poll';
import type { OtherProps } from '../types';
declare type FormattedOption = OtherProps & {
    text: string;
    onClick?: (...args: unknown[]) => unknown;
    id: string;
};
export declare function formatOptionElement(element: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[]): FormattedOption[];
export {};
