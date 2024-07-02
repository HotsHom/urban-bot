import type { ReactElement } from 'react';
import type { RouteProps, RouterPath } from './types';
export declare const matchPattern: (path: string, pattern: RouterPath, commandPrefix: string) => boolean;
export declare const matchChild: (path: string, commandPrefix: string) => (child: ReactElement<RouteProps>) => boolean;
export declare function getParams(path: string, commandPrefix: string, pattern?: RouterPath): Record<string, any> | undefined;
