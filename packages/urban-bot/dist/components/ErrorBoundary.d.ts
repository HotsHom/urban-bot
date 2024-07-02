import { Component } from 'react';
import type { PropsWithChildren } from 'react';
export declare class ErrorBoundary extends Component<PropsWithChildren<{}>> {
    state: {
        hasError: boolean;
    };
    constructor(props: React.PropsWithChildren<{}>);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
    };
    render(): import("react").ReactNode;
}
