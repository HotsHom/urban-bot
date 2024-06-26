"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphAPI = void 0;
const request_promise_1 = __importDefault(require("request-promise"));
const camelcase_1 = __importDefault(require("camelcase"));
// TODO specify GraphAPI types
class GraphAPI {
    constructor(options) {
        this.options = options;
    }
    callSendAPI(requestBody) {
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/me/messages`,
            qs: {
                access_token: this.options.pageAccessToken,
            },
            method: 'POST',
            json: requestBody,
        }).catch((error) => {
            console.error('Unable to send message:', error);
        });
    }
    callMessengerProfileAPI(requestBody) {
        // Send the HTTP request to the Messenger Profile API
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/me/messenger_profile`,
            qs: {
                access_token: this.options.pageAccessToken,
            },
            method: 'POST',
            json: requestBody,
        }).catch((error) => {
            console.error('Unable to send message:', error);
        });
    }
    callSubscriptionsAPI(customFields) {
        // Send the HTTP request to the Subscriptions Edge to configure your webhook
        // You can use the Graph API's /{app-id}/subscriptions edge to configure and
        // manage your app's Webhooks product
        // https://developers.facebook.com/docs/graph-api/webhooks/subscriptions-edge
        let fields = 'messages, messaging_postbacks, messaging_optins, \
      message_deliveries, messaging_referrals';
        if (customFields !== undefined) {
            fields = fields + ', ' + customFields;
        }
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/${this.options.appId}/subscriptions`,
            qs: {
                access_token: this.options.appId + '|' + this.options.appSecret,
                object: 'page',
                callback_url: this.options.webhookUrl,
                verify_token: this.options.verifyToken,
                fields: fields,
                include_values: 'true',
            },
            method: 'POST',
        }).catch((error) => {
            console.error('Unable to send message:', error);
        });
    }
    callSubscribedApps(customFields) {
        // Send the HTTP request to subscribe an app for Webhooks for Pages
        // You can use the Graph API's /{page-id}/subscribed_apps edge to configure
        // and manage your pages subscriptions
        // https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps
        let fields = 'messages, messaging_postbacks, messaging_optins, \
      message_deliveries, messaging_referrals';
        if (customFields !== undefined) {
            fields = fields + ', ' + customFields;
        }
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/${this.options.pageId}/subscribed_apps`,
            qs: {
                access_token: this.options.pageAccessToken,
                subscribed_fields: fields,
            },
            method: 'POST',
        }).catch((error) => {
            console.error('Unable to send message:', error);
        });
    }
    async getUserProfile(senderPsid) {
        try {
            const userProfile = (await this.callUserProfileAPI(senderPsid));
            for (const key in userProfile) {
                const camelizedKey = (0, camelcase_1.default)(key);
                const value = userProfile[key];
                delete userProfile[key];
                userProfile[camelizedKey] = value;
            }
            return userProfile;
        }
        catch (err) {
            console.error('Fetch failed:', err);
        }
    }
    callUserProfileAPI(senderPsid) {
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/${senderPsid}`,
            qs: {
                access_token: this.options.pageAccessToken,
                fields: 'first_name, last_name, gender, locale, timezone',
            },
            method: 'GET',
        }).catch((error) => {
            console.error('Unable to fetch profile:' + error);
        });
    }
    getPersonaAPI() {
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/me/personas`,
            qs: {
                access_token: this.options.pageAccessToken,
            },
            method: 'GET',
        }).catch((error) => {
            console.error('Unable to fetch personas:' + error);
        });
    }
    postPersonaAPI(name, profile_picture_url) {
        const requestBody = {
            name,
            profile_picture_url,
        };
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/me/personas`,
            qs: {
                access_token: this.options.pageAccessToken,
            },
            method: 'POST',
            json: requestBody,
        }).catch((error) => {
            console.error('Unable to create a persona', error);
        });
    }
    callNLPConfigsAPI() {
        // Send the HTTP request to the Built-in NLP Configs API
        // https://developers.facebook.com/docs/graph-api/reference/page/nlp_configs/
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/me/nlp_configs`,
            qs: {
                access_token: this.options.pageAccessToken,
                nlp_enabled: true,
            },
            method: 'POST',
        }).catch((error) => {
            console.error('Unable to activate built-in NLP:', error);
        });
    }
    callFBAEventsAPI(senderPsid, eventName) {
        // Construct the message body
        const requestBody = {
            event: 'CUSTOM_APP_EVENTS',
            custom_events: JSON.stringify([
                {
                    _eventName: 'postback_payload',
                    _value: eventName,
                    _origin: 'original_coast_clothing',
                },
            ]),
            advertiser_tracking_enabled: 1,
            application_tracking_enabled: 1,
            extinfo: JSON.stringify(['mb1']),
            page_id: this.options.pageId,
            page_scoped_user_id: senderPsid,
        };
        // Send the HTTP request to the Activities API
        return (0, request_promise_1.default)({
            uri: `${this.options.apiUrl}/${this.options.appId}/activities`,
            method: 'POST',
            form: requestBody,
        }).catch((error) => {
            console.error(`Unable to send FBA event '${eventName}':` + error);
        });
    }
}
exports.GraphAPI = GraphAPI;
//# sourceMappingURL=GraphAPI.js.map