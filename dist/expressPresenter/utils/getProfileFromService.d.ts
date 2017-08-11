/// <reference types="express" />
import { Response } from 'express';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
export interface Options {
    readonly activityId: string;
    readonly client: ClientModel;
    readonly config: Config;
    readonly profileId: string;
    readonly res: Response;
}
declare const _default: ({activityId, client, config, profileId, res}: Options) => Promise<void>;
export default _default;
