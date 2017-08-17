import { Request, Response } from 'express';
import { xapiHeaderVersion } from '../utils/constants';
import Config from './Config';
import catchErrors from './utils/catchErrors';
import getActivityId from './utils/getActivityId';
import getClient from './utils/getClient';
import { OK_200_HTTP_CODE } from './utils/httpCodes';

export default (config: Config) => {
  return catchErrors(config, async (req: Request, res: Response): Promise<void> => {
    const client = await getClient(config, req.header('Authorization'));
    const activityId = getActivityId(req.query.activityId);
    const result = await config.service.getFullActivity({ client, activityId });
    res.status(OK_200_HTTP_CODE);
    res.setHeader('X-Experience-API-Version', xapiHeaderVersion);
    res.json(result);
  });
};
