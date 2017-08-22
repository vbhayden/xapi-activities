import { Request, Response } from 'express';
import { xapiHeaderVersion } from '../utils/constants';
import Config from './Config';
import catchErrors from './utils/catchErrors';
import getProfileWriteOpts from './utils/getProfileWriteOpts';
import { NO_CONTENT_204_HTTP_CODE } from './utils/httpCodes';
import validateVersionHeader from './utils/validateVersionHeader';

export default (config: Config) => {
  return catchErrors(config, async (req: Request, res: Response): Promise<void> => {
    const opts = await getProfileWriteOpts(config, req);
    validateVersionHeader(req.header('X-Experience-API-Version'));
    await config.service.overwriteProfile(opts);
    res.status(NO_CONTENT_204_HTTP_CODE);
    res.setHeader('X-Experience-API-Version', xapiHeaderVersion);
    res.send();
  });
};
