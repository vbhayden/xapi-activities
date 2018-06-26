import GetProfilesOptions from '../repoFactory/options/GetProfilesOptions';
import GetProfilesResult from '../repoFactory/results/GetProfilesResult';
import Config from './Config';
declare const _default: (config: Config) => (opts: GetProfilesOptions) => Promise<GetProfilesResult>;
export default _default;
