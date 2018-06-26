import ClientModel from '../../models/ClientModel';
import Profile from '../../models/Profile';
export interface Options {
    readonly client: ClientModel;
    readonly activityId: string;
    readonly profile: Profile;
}
declare const _default: ({ client, activityId, profile }: Options) => boolean;
export default _default;
