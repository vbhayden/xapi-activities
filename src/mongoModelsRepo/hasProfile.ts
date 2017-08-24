import { ObjectID } from 'mongodb';
import HasProfileOptions from '../repoFactory/options/HasProfileOptions';
import HasProfileResult from '../repoFactory/results/HasProfileResult';
import Config from './Config';

export default (config: Config) => {
  return async (opts: HasProfileOptions): Promise<HasProfileResult> => {
    const collection = (await config.db).collection('activityProfiles');

    const filter = {
      activityId: opts.activityId,
      lrs: new ObjectID(opts.client.lrs_id),
      organisation: new ObjectID(opts.client.organisation),
      profileId: opts.profileId,
    };

    // Docs: http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOne
    const document = await collection.findOne(filter, {
      fields: {
        _id: 0,
      },
    });

    const hasProfile = document !== null && document !== undefined;
    return { hasProfile };
  };
};
