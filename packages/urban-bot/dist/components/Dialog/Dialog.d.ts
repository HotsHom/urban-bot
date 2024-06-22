import type { DialogContextType, DialogProps } from './types';
export declare function useDialog(): DialogContextType;
export declare function Dialog({ children, onFinish, finishedContent }: DialogProps): JSX.Element;
