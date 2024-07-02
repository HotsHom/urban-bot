import type { ReactElement, FunctionComponentElement, ReactChild } from 'react';
import type { UrbanMessageCommonData, OtherProps } from '../types';
import type { ButtonGroupProps } from './Button/types';
export declare type PollProps = UrbanMessageCommonData & {
    question: string;
    children: ReactElement<OptionProps> | ReactElement<OptionProps>[];
    buttons?: FunctionComponentElement<ButtonGroupProps>;
    isNewMessageEveryRender?: boolean;
    isAnonymous?: boolean;
    type?: string;
    withMultipleAnswers?: boolean;
    rightOption?: string | number;
    explanation?: ReactChild;
    livePeriodSeconds?: number;
};
export declare function Poll({ buttons: buttonGroupElement, isNewMessageEveryRender: isNewMessageEveryRenderProp, question, children, isAnonymous, type, withMultipleAnswers, rightOption, explanation, livePeriodSeconds, disableNotification, forceReply, parseMode, replyToMessageId, ...otherProps }: PollProps): import("react/jsx-runtime").JSX.Element;
export declare type OptionProps = OtherProps & {
    id?: string;
    children: string;
    onClick?: (...args: unknown[]) => unknown;
};
export declare function Option(_props: OptionProps): null;
