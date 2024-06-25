import React from 'react';
import { Button } from '../components/Button/Button';
import { isArrayMatrix } from './isArrayMatrix';
import { getRandomId } from './getRandomId';
import type { ButtonProps } from '../components/Button/types';
import type {
    OtherProps,
    ButtonElement,
    SpreadField,
    UrbanSyntheticEventAction,
    UrbanBotType,
    UrbanNativeEvent,
} from '../types';

export type FormattedButton = OtherProps & {
    id: string;
    text: string;
    onClick?: (
        args: SpreadField<UrbanSyntheticEventAction<UrbanBotType<UrbanNativeEvent<any, any>, any>>, 'payload'>,
    ) => void;
};

export function formatButtonElement(
    element: ButtonElement | ButtonElement[] | ButtonElement[][],
): FormattedButton[] | FormattedButton[][] {
    if (isArrayMatrix(element)) {
        return element.map(formatButtonFlatArray);
    }

    return formatButtonFlatArray(element);
}

function formatButtonFlatArray(element: ButtonElement | ButtonElement[]): FormattedButton[] {
    return React.Children.toArray(element)
        .filter<React.ReactElement<ButtonProps>>(React.isValidElement)
        .map((child) => {
            const { props } = child;

            if (!props || !('onClick' in props && 'children' in props)) {
                throw new Error('Please use only Button components inside ButtonGroup.');
            }

            const { children: text, onClick, id = getRandomId(), ...other } = child.props;

            return { text, onClick, id, ...other };
        });
}
