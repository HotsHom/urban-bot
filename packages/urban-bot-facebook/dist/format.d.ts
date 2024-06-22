import { UrbanButton } from '@urban-bot/core';
export declare function formatReplyButtons(buttons: UrbanButton[] | UrbanButton[][]): {
    content_type: unknown;
    title: string;
    payload: string | undefined;
    image_url: unknown;
}[];
export declare function formatButtons(buttons: UrbanButton[] | UrbanButton[][]): (UrbanButton | {
    type: string;
    title: string;
    url: string;
    messenger_extensions: boolean;
    payload?: undefined;
} | {
    type: string;
    title: string;
    payload: string | number;
    url?: undefined;
    messenger_extensions?: undefined;
} | {
    type: string;
    title: string;
    payload: string | undefined;
    url?: undefined;
    messenger_extensions?: undefined;
})[];
export declare type GenericTemplateProps = {
    title?: string;
    subtitle?: string;
    image_url?: string;
    buttons?: UrbanButton[] | UrbanButton[][];
};
export declare function formatGenericTemplate({ title, subtitle, buttons, image_url }: GenericTemplateProps): {
    type: string;
    payload: {
        template_type: string;
        elements: {
            title: string | undefined;
            subtitle: string | undefined;
            image_url: string | undefined;
            buttons: (UrbanButton | {
                type: string;
                title: string;
                url: string;
                messenger_extensions: boolean;
                payload?: undefined;
            } | {
                type: string;
                title: string;
                payload: string | number;
                url?: undefined;
                messenger_extensions?: undefined;
            } | {
                type: string;
                title: string;
                payload: string | undefined;
                url?: undefined;
                messenger_extensions?: undefined;
            })[] | undefined;
        }[];
    };
};
