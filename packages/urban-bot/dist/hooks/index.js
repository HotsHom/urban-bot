"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAction = exports.useDice = exports.useMediaGroup = exports.useVideoNote = exports.useVoice = exports.useVideo = exports.usePoll = exports.useImage = exports.useLocation = exports.useInvoice = exports.useFile = exports.useContact = exports.useAudio = exports.useAnimation = exports.useSticker = exports.useAnyEvent = void 0;
const useSubscribeWithSpreadPayload_1 = require("./useSubscribeWithSpreadPayload");
function useAnyEvent(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'any');
}
exports.useAnyEvent = useAnyEvent;
function useSticker(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'sticker');
}
exports.useSticker = useSticker;
function useAnimation(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'animation');
}
exports.useAnimation = useAnimation;
function useAudio(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'audio');
}
exports.useAudio = useAudio;
function useContact(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'contact');
}
exports.useContact = useContact;
function useFile(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'file');
}
exports.useFile = useFile;
function useInvoice(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'invoice');
}
exports.useInvoice = useInvoice;
function useLocation(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'location');
}
exports.useLocation = useLocation;
function useImage(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'image');
}
exports.useImage = useImage;
function usePoll(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'poll');
}
exports.usePoll = usePoll;
function useVideo(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'video');
}
exports.useVideo = useVideo;
function useVoice(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'voice');
}
exports.useVoice = useVoice;
function useVideoNote(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'video_note');
}
exports.useVideoNote = useVideoNote;
function useMediaGroup(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'media_group');
}
exports.useMediaGroup = useMediaGroup;
function useDice(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'dice');
}
exports.useDice = useDice;
function useAction(listener) {
    (0, useSubscribeWithSpreadPayload_1.useSubscribeWithSpreadPayload)(listener, 'action');
}
exports.useAction = useAction;
//# sourceMappingURL=index.js.map