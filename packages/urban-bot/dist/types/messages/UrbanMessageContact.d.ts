import type { UrbanButton } from './UrbanMessageButtons';
import type { UrbanMessageCommon, UrbanMessageCommonData } from './UrbanMessageCommon';
export declare type UrbanMessageContactData = UrbanMessageCommonData & {
    phoneNumber?: string | number;
    firstName?: string;
    lastName?: string;
    vCard?: string;
    username?: string;
    buttons?: UrbanButton[] | UrbanButton[][];
    isReplyButtons?: boolean;
};
export declare type UrbanMessageContact = UrbanMessageCommon & {
    nodeName: 'urban-contact';
    data: UrbanMessageContactData;
};
