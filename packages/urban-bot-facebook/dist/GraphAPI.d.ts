/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 * Based on https://github.com/fbsamples/original-coast-clothing/blob/master/services/graph-api.js
 */
import { FacebookOptions } from './UrbanBotFacebook';
export declare class GraphAPI {
    options: FacebookOptions;
    constructor(options: FacebookOptions);
    callSendAPI(requestBody: any): import("bluebird")<any>;
    callMessengerProfileAPI(requestBody: any): import("bluebird")<any>;
    callSubscriptionsAPI(customFields: string): import("bluebird")<any>;
    callSubscribedApps(customFields: string): import("bluebird")<any>;
    getUserProfile(senderPsid: string): Promise<any>;
    callUserProfileAPI(senderPsid: string): import("bluebird")<any>;
    getPersonaAPI(): import("bluebird")<any>;
    postPersonaAPI(name: string, profile_picture_url: string): import("bluebird")<any>;
    callNLPConfigsAPI(): import("bluebird")<any>;
    callFBAEventsAPI(senderPsid: string, eventName: string): import("bluebird")<any>;
}
