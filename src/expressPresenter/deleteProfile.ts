import { Request, Response } from 'express';
import Config from './Config';
import catchErrors from './utils/catchErrors';
import getActivityId from './utils/getActivityId';
import getClient from './utils/getClient';
import getEtag from './utils/getEtag';
import getProfileId from './utils/getProfileId';
import { NO_CONTENT_204_HTTP_CODE } from './utils/httpCodes';

export default (config: Config) => {
  return catchErrors(config, async (req: Request, res: Response): Promise<void> => {
    const client = await getClient(config, req.header('Authorization'));
    const ifMatch = getEtag(req.header('If-Match'));
    const profileId = getProfileId(req.query.profileId);
    const activityId = getActivityId(req.query.activityId);

    await config.service.deleteProfile({ activityId, client, profileId, ifMatch });
    res.status(NO_CONTENT_204_HTTP_CODE);
    res.setHeader('X-Experience-API-Version', '1.0.0');
    res.send();
  });
};
