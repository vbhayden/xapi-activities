import GetProfileOptions from '../repoFactory/options/GetProfileOptions';
import GetProfileResult from '../repoFactory/results/GetProfileResult';
import Config from './Config';
declare const _default: (config: Config) => (opts: GetProfileOptions) => Promise<GetProfileResult>;
export default _default;
