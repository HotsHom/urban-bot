import type { UrbanParseMode } from '../bot';
import type { UrbanOption } from './UrbanOption';
import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessagePollData = UrbanMessageCommonData & {
    question: string;
    options: UrbanOption[];
    isAnonymous?: boolean;
    type?: string;
    withMultipleAnswers?: boolean;
    rightOption?: string | number;
    explanation?: string;
    parseMode?: UrbanParseMode;
    livePeriodSeconds?: number;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
};
export declare type UrbanMessagePoll = UrbanMessageCommon & {
    nodeName: 'urban-poll';
    data: UrbanMessagePollData;
};
