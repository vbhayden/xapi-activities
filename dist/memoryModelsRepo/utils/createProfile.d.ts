import ClientModel from '../../models/ClientModel';
import Profile from '../../models/Profile';
import Config from '../Config';
export interface Options {
    readonly client: ClientModel;
    readonly content: any;
    readonly contentType: string;
    readonly etag: string;
    readonly activityId: string;
    readonly profileId: string;
}
declare const _default: (config: Config, opts: Options) => Profile;
export default _default;
