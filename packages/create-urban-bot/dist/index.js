#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const outDir = process.argv[2] || 'urban-bot-app';
const template = getTemplate();
const commands = [
    `git clone https://github.com/urban-bot/urban-bot-starter-${template}.git ${outDir}`,
    'npx rimraf .git',
    'npm i',
];
commands.forEach((command, i) => {
    const dir = i > 0 ? outDir : '';
    const cwd = path_1.default.resolve(process.cwd(), dir);
    (0, child_process_1.execSync)(command, {
        stdio: [0, 1, 2],
        cwd, // path to where you want to save the file
    });
});
renameEnvFile();
function renameEnvFile() {
    const cwd = path_1.default.resolve(process.cwd(), outDir);
    fs_1.default.renameSync(cwd + '/.env.example', cwd + '/.env');
}
function getTemplate() {
    const templateKeyIndex = process.argv.findIndex((arg) => {
        return arg === '--template';
    });
    if (templateKeyIndex === -1) {
        return 'typescript';
    }
    const templateShortName = process.argv[templateKeyIndex + 1];
    switch (templateShortName) {
        case 'js': {
            return 'javascript';
        }
        case 'ts': {
            return 'typescript';
        }
        default: {
            throw new Error('Template is not found. Use "ts" or "js"');
        }
    }
}
//# sourceMappingURL=index.js.map