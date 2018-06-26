import GetProfileOptions from '../serviceFactory/options/GetProfileOptions';
import GetProfileResult from '../serviceFactory/results/GetProfileResult';
import Config from './Config';
declare const _default: (config: Config) => (opts: GetProfileOptions) => Promise<GetProfileResult>;
export default _default;
