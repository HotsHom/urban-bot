import type { UrbanFileFormat } from '../bot';
import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessageVoiceData = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    title?: string;
    duration?: number;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
};
export declare type UrbanMessageVoice = UrbanMessageCommon & {
    nodeName: 'urban-voice';
    data: UrbanMessageVoiceData;
};
