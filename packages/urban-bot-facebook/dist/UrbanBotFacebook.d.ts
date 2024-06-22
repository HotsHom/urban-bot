import { UrbanBot, UrbanMessage, UrbanSyntheticEvent, UrbanParseMode } from '@urban-bot/core';
import express from 'express';
import { GraphAPI } from './GraphAPI';
import { FacebookMessageMeta, FacebookPayload } from './types';
export declare type FACEBOOK = 'FACEBOOK';
export declare type UrbanNativeEventFacebook<Payload = FacebookPayload> = {
    type: FACEBOOK;
    payload?: Payload;
};
export declare type UrbanBotFacebookType<Payload = FacebookPayload> = {
    NativeEvent: UrbanNativeEventFacebook<Payload>;
    MessageMeta: FacebookMessageMeta;
};
export declare type FacebookOptions = {
    pageAccessToken: string;
    appSecret: string;
    verifyToken: string;
    pageId?: string;
    appId?: string;
    webhookUrl?: string;
    apiUrl?: string;
    apiUrlVersion?: string;
    pathnamePrefix?: string;
};
export declare class UrbanBotFacebook implements UrbanBot<UrbanBotFacebookType> {
    static TYPE: FACEBOOK;
    type: FACEBOOK;
    defaultParseMode: UrbanParseMode;
    commandPrefix: string;
    client: GraphAPI;
    options: FacebookOptions;
    constructor(options: FacebookOptions);
    initializeServer(expressApp: express.Express): void;
    processUpdate(_event: UrbanSyntheticEvent<UrbanBotFacebookType>): void;
    handleEvent(payload: FacebookPayload): void;
    sendMessage(message: UrbanMessage): Promise<FacebookMessageMeta>;
    verifyRequestSignature: (req: any, _res: any, buf: any) => void;
}
