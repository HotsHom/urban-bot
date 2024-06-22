export declare type FacebookNLPEntity = {
    confidence: number;
    suggested?: boolean;
    value: string;
};
export declare type FacebookNLP = {
    entities: {
        sentiment?: FacebookNLPEntity;
        greetings?: FacebookNLPEntity;
        thanks?: FacebookNLPEntity;
        bye?: FacebookNLPEntity;
        datetime?: FacebookNLPEntity;
        amount_of_money?: FacebookNLPEntity;
        phone_number?: FacebookNLPEntity;
        email?: FacebookNLPEntity;
        distance?: FacebookNLPEntity;
        quantity?: FacebookNLPEntity;
        temperature?: FacebookNLPEntity;
        volume?: FacebookNLPEntity;
        location?: FacebookNLPEntity;
        duration?: FacebookNLPEntity;
    };
    detected_locales?: string[];
};
export declare type FacebookAttachment = {
    type: string;
    payload: {
        url?: string;
    };
};
export declare type FacebookMessage = {
    mid: string;
    text?: string;
    attachments?: FacebookAttachment[];
    nlp?: FacebookNLP;
};
export declare type FacebookPostback = {
    title: string;
    payload: string;
};
export declare type FacebookMessaging = {
    sender: {
        id: string;
    };
    recipient: {
        id: string;
    };
    timestamp: number;
    message?: FacebookMessage;
    postback?: FacebookPostback;
};
export declare type FacebookEntry = {
    id: string;
    time: number;
    messaging: FacebookMessaging[];
};
export declare type FacebookEventType = 'page' | string;
export declare type FacebookPayload = {
    object: FacebookEventType;
    entry: FacebookEntry[];
};
export declare type FacebookMessageMeta = {
    recipient_id: string;
    message_id: string;
};
