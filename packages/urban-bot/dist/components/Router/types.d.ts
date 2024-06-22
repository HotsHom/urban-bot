import type { ReactNode } from 'react';
export declare type RouterPath = string | Array<string> | RegExp;
export declare type RouteProps = {
    path: RouterPath;
    description?: string;
    children: ReactNode;
};
export declare type RouterProps = {
    children: ReactNode;
    withInitializeCommands?: boolean;
    historyLength?: number;
    helperComponent?: ReactNode;
};
