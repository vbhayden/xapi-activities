import { Response } from 'express';
import Config from '../Config';
export interface Options {
    readonly query: any;
    readonly config: Config;
    readonly headers: any;
    readonly res: Response;
}
declare const _default: ({ query, config, headers, res }: Options) => Promise<void>;
export default _default;
