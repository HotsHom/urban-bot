import React from 'react';
export declare const MARKDOWN_MODE = "markdown";
export declare const HTML_MODE = "HTML";
export declare function formatMarkupLanguageElement(element: React.ReactNode, parseMode?: typeof HTML_MODE | typeof MARKDOWN_MODE): string;
