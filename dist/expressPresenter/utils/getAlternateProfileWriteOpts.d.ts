/// <reference types="node" />
/// <reference types="express" />
import { Request } from 'express';
export interface Result {
    readonly activityId: string;
    readonly content: NodeJS.ReadableStream;
    readonly contentType: string;
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
    readonly profileId: string;
}
declare const _default: (req: Request) => Promise<Result>;
export default _default;
