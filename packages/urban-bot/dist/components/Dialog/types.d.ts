import type { ReactNode } from 'react';
export declare type DialogProps = {
    children?: ReactNode;
    finishedContent?: ReactNode;
    onFinish?: (answers: DialogAnswers) => void;
};
export declare type DialogAnswers = {
    [id: string]: string;
};
export declare type DialogAddAnswer = (id: string, answer: string) => void;
export declare type DialogContextType = {
    onFinish: () => void;
    finishedContent?: ReactNode;
    addAnswer: DialogAddAnswer;
};
export declare type DialogValidation = (answer: string) => ReactNode;
export declare type DialogStepProps = {
    id?: string;
    children?: ((answer: string) => ReactNode) | ReactNode;
    content: ReactNode;
    match?: string | RegExp;
    validation?: DialogValidation;
    type?: 'checkbox';
    onNext?: (answer: string) => void;
};
