import type { ReactNode } from 'react';
export declare type NotificationProps = {
    children: ReactNode;
    intervalSeconds: number;
};
export declare function Notification({ children, intervalSeconds }: NotificationProps): import("react/jsx-runtime").JSX.Element | null;
