import GetProfileContentOptions from '../repoFactory/options/GetProfileContentOptions';
import GetProfileContentResult from '../repoFactory/results/GetProfileContentResult';
import Config from './Config';
declare const _default: (config: Config) => (opts: GetProfileContentOptions) => Promise<GetProfileContentResult>;
export default _default;
