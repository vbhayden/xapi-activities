import { Response } from 'express';
import ClientModel from '../../models/ClientModel';
import { xapiHeaderVersion } from '../../utils/constants';
import Config from '../Config';
import { OK_200_HTTP_CODE } from './httpCodes';

export interface Options {
  readonly activityId: string;
  readonly client: ClientModel;
  readonly config: Config;
  readonly res: Response;
  readonly since?: string;
}

export default async ({ activityId, client, config, res, since }: Options) => {
  const getProfilesResult = await config.service.getProfiles({ activityId, client, since });
  res.status(OK_200_HTTP_CODE);
  res.setHeader('X-Experience-API-Version', xapiHeaderVersion);
  res.json(getProfilesResult.profileIds);
  return;
};
