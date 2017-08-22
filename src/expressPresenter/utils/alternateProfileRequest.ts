/* tslint:disable:no-magic-numbers */
import { Request, Response } from 'express';
import InvalidContentType from '../../errors/InvalidContentType';
import InvalidMethod from '../../errors/InvalidMethod';
import Config from '../Config';
import getActivityId from './getActivityId';
import getAlternateProfileWriteOpts from './getAlternateProfileWriteOpts';
import getClient from './getClient';
import getHeader from './getHeader';
import getProfileFromService from './getProfileFromService';
import getProfileId from './getProfileId';
import getProfilesFromService from './getProfilesFromService';

export interface Options {
  readonly config: Config;
  readonly method: string;
  readonly req: Request;
  readonly res: Response;
}

export default async ({ config, method, req, res }: Options) => {
  if (req.header('Content-Type') !== 'application/x-www-form-urlencoded') {
    throw new InvalidContentType(req.header('Content-Type'));
  }

  switch (method) {
    case 'POST': {
      const client = await getClient(config, getHeader(req, 'Authorization'));
      const opts = await getAlternateProfileWriteOpts(req);
      await config.service.patchProfile({ client, ...opts });
      res.status(204).send();
      return;
    }
    case 'GET': {
      const client = await getClient(config, getHeader(req, 'Authorization'));
      const activityId = getActivityId(req.body.activityId);

      if (req.body.profileId === undefined) {
        await getProfilesFromService({ config, res, activityId, client });
        return;
      } else {
        const profileId = req.body.profileId;
        await getProfileFromService({ config, res, activityId, client, profileId });
        return;
      }
    }
    case 'PUT': {
      const client = await getClient(config, getHeader(req, 'Authorization'));
      const opts = await getAlternateProfileWriteOpts(req);
      await config.service.overwriteProfile({ client, ...opts });
      res.status(204).send();
      return;
    }
    case 'DELETE': {
      const client = await getClient(config, getHeader(req, 'Authorization'));
      const ifMatch = getHeader(req, 'If-Match');
      const profileId = getProfileId(req.body.profileId);
      const activityId = getActivityId(req.body.activityId);

      await config.service.deleteProfile({ activityId, client, profileId, ifMatch });
      res.status(204).send();
      return;
    }
    default: {
      throw new InvalidMethod(method);
    }
  }
};
