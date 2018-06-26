import Profile from '../../models/Profile';
export interface Options {
    readonly profile: Profile;
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
}
declare const _default: ({ profile, ifMatch, ifNoneMatch }: Options) => void;
export default _default;
