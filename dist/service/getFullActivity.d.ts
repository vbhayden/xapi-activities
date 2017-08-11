import GetFullActivityOptions from '../serviceFactory/options/GetFullActivityOptions';
import GetFullActivityResult from '../serviceFactory/results/GetFullActivityResult';
import Config from './Config';
declare const _default: (_config: Config) => (opts: GetFullActivityOptions) => Promise<GetFullActivityResult>;
export default _default;
