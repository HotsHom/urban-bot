import type { UrbanFileFormat } from '../bot';
import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessageVideoNoteData = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    duration?: number;
    title?: string;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
};
export declare type UrbanMessageVideoNote = UrbanMessageCommon & {
    nodeName: 'urban-video-note';
    data: UrbanMessageVideoNoteData;
};
