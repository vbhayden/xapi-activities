import ClientModel from '../../models/ClientModel';
import Profile from '../../models/Profile';

interface Options {
  readonly client: ClientModel;
  readonly activityId: string;
  readonly profile: Profile;
}

export default ({ client, activityId, profile }: Options) => {
  return (
    profile.organisation === client.organisation &&
    profile.lrs === client.lrs_id &&
    profile.activityId === activityId
  );
};
