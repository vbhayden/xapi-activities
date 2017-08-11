import { Response } from 'express';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
import { OK_200_HTTP_CODE } from './httpCodes';

export interface Options {
  readonly activityId: string;
  readonly client: ClientModel;
  readonly config: Config;
  readonly profileId: string;
  readonly res: Response;
}

export default async ({ activityId, client, config, profileId, res }: Options) => {
  const getProfileResult = await config.service.getProfile({ activityId, client, profileId });
  res.status(OK_200_HTTP_CODE);
  res.setHeader('ETag', `"${getProfileResult.etag}"`);
  res.setHeader('Last-Modified', getProfileResult.updatedAt.toISOString());
  res.setHeader('X-Experience-API-Version', '1.0.0');
  res.setHeader('Content-Type', getProfileResult.contentType);
  getProfileResult.content.pipe(res);
  return;
};
