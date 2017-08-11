import ClientModel from '../../models/ClientModel';
import Profile from '../../models/Profile';
export interface Options {
    readonly client: ClientModel;
    readonly activityId: string;
    readonly profile: Profile;
    readonly profileId: string;
}
declare const _default: ({client, activityId, profile, profileId}: Options) => boolean;
export default _default;
