import type { UrbanFileFormat } from '../bot';
import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessageAnimationData = UrbanMessageCommonData & {
    title?: string;
    file: UrbanFileFormat;
    name?: string;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
    duration?: number;
    width?: number;
    height?: number;
};
export declare type UrbanMessageAnimation = UrbanMessageCommon & {
    nodeName: 'urban-animation';
    data: UrbanMessageAnimationData;
};
