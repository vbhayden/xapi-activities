import GetProfilesOptions from '../serviceFactory/options/GetProfilesOptions';
import GetProfilesResult from '../serviceFactory/results/GetProfilesResult';
import Config from './Config';
declare const _default: (config: Config) => (opts: GetProfilesOptions) => Promise<GetProfilesResult>;
export default _default;
