/// <reference types="node" />
import { Response } from 'express';
import Config from '../Config';
export interface Options {
    readonly query: any;
    readonly config: Config;
    readonly headers: any;
    readonly res: Response;
    readonly content: NodeJS.ReadableStream;
}
declare const _default: ({ query, config, headers, res, content }: Options) => Promise<void>;
export default _default;
