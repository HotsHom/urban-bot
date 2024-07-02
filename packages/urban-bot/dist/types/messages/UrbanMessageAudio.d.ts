import type { UrbanFileFormat } from '../bot';
import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessageAudioData = UrbanMessageCommonData & {
    title?: string;
    file: UrbanFileFormat;
    name?: string;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
    duration?: number;
    author?: string;
};
export declare type UrbanMessageAudio = UrbanMessageCommon & {
    nodeName: 'urban-audio';
    data: UrbanMessageAudioData;
};
