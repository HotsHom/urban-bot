"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatButtons = void 0;
const discord_js_1 = require("discord.js");
function getRandomId() {
    return String(Math.random());
}
function formatUrbanButton(urbanButton, row) {
    var _a, _b;
    const newButton = new discord_js_1.MessageButton().setLabel(urbanButton.text);
    if (urbanButton.url) {
        newButton.setURL(urbanButton.url);
        newButton.setStyle('LINK');
    }
    else {
        newButton.setCustomId((_a = urbanButton.id) !== null && _a !== void 0 ? _a : getRandomId());
        newButton.setStyle((_b = urbanButton.style) !== null && _b !== void 0 ? _b : 'PRIMARY');
    }
    if (urbanButton.isDisabled) {
        newButton.setDisabled(true);
    }
    if (urbanButton.emoji) {
        newButton.setEmoji(urbanButton.emoji);
    }
    row.addComponents(newButton);
}
function formatButtons(urbanButtons) {
    const formattedButtons = [];
    if (Array.isArray(urbanButtons[0])) {
        urbanButtons.forEach((urbanButtonInner) => {
            const urbanButtonsArray = Array.isArray(urbanButtonInner) ? urbanButtonInner : [urbanButtonInner];
            const row = new discord_js_1.MessageActionRow();
            urbanButtonsArray.forEach((urbanButton) => formatUrbanButton(urbanButton, row));
            formattedButtons.push(row);
        });
    }
    else {
        const row = new discord_js_1.MessageActionRow();
        urbanButtons.forEach((urbanButton) => formatUrbanButton(urbanButton, row));
        formattedButtons.push(row);
    }
    return formattedButtons;
}
exports.formatButtons = formatButtons;
//# sourceMappingURL=format.js.map