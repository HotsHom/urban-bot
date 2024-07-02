import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessageLocationData = UrbanMessageCommonData & {
    latitude: number;
    longitude: number;
    livePeriodSeconds?: number;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
    title?: string;
};
export declare type UrbanMessageLocation = UrbanMessageCommon & {
    nodeName: 'urban-location';
    data: UrbanMessageLocationData;
};
