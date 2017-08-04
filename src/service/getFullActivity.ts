import GetFullActivityOptions from '../serviceFactory/options/GetFullActivityOptions';
import GetFullActivityResult from '../serviceFactory/results/GetFullActivityResult';
import Config from './Config';
import checkProfileReadScopes from './utils/checkProfileReadScopes';
import validateActivityId from './utils/validateActivityId';

export default (_config: Config) => {
  return async (opts: GetFullActivityOptions): Promise<GetFullActivityResult> => {
    checkProfileReadScopes(opts.client.scopes);
    validateActivityId(opts.activityId);
    return { id: opts.activityId };
  };
};
