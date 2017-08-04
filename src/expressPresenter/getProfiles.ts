/* tslint:disable:no-magic-numbers */
import { Request, Response } from 'express';
import Config from './Config';
import catchErrors from './utils/catchErrors';
import getActivityId from './utils/getActivityId';
import getClient from './utils/getClient';
import getProfileFromService from './utils/getProfileFromService';
import getProfilesFromService from './utils/getProfilesFromService';

export default (config: Config) => {
  return catchErrors(config, async (req: Request, res: Response): Promise<void> => {
    const client = await getClient(config, req.header('Authorization'));
    const activityId = getActivityId(req.query.activityId);
    const since = req.query.since;

    if (req.query.profileId === undefined) {
      await getProfilesFromService({ config, res, activityId, client, since });
      return;
    } else {
      const profileId = req.query.profileId;
      await getProfileFromService({ config, res, activityId, client, profileId });
      return;
    }
  });
};
