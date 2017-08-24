import { Request, Response } from 'express';
import { xapiHeaderVersion } from '../utils/constants';
import Config from './Config';
import alternateProfileRequest from './utils/alternateProfileRequest';
import catchErrors from './utils/catchErrors';
import getProfileWriteOpts from './utils/getProfileWriteOpts';
import { NO_CONTENT_204_HTTP_CODE } from './utils/httpCodes';
import validateVersionHeader from './utils/validateVersionHeader';

export default (config: Config) => {
  return catchErrors(config, async (req: Request, res: Response): Promise<void> => {
    const method = req.query.method;

    if (method !== undefined) {
      return alternateProfileRequest({ config, method, req, res });
    }

    const opts = await getProfileWriteOpts(config, req);
    validateVersionHeader(req.header('X-Experience-API-Version'));
    await config.service.patchProfile(opts);
    res.status(NO_CONTENT_204_HTTP_CODE);
    res.setHeader('X-Experience-API-Version', xapiHeaderVersion);
    res.send();
  });
};
