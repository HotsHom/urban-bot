import type { UrbanFileFormat } from '../bot';
import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessageVideoData = UrbanMessageCommonData & {
    title?: string;
    file: UrbanFileFormat;
    name?: string;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
    duration?: number;
    width?: number;
    height?: number;
    author?: string;
};
export declare type UrbanMessageVideo = UrbanMessageCommon & {
    nodeName: 'urban-video';
    data: UrbanMessageVideoData;
};
