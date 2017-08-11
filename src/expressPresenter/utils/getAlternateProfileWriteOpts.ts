import { Request } from 'express';
import * as stringToStream from 'string-to-stream';
import ClientModel from '../../models/ClientModel';
import Config from '../Config';
import getActivityId from './getActivityId';
import getClient from './getClient';
import getContentType from './getContentType';
import getEtag from './getEtag';
import getProfileId from './getProfileId';

export interface Result {
  readonly activityId: string;
  readonly client: ClientModel;
  readonly content: NodeJS.ReadableStream;
  readonly contentType: string;
  readonly ifMatch?: string;
  readonly ifNoneMatch?: string;
  readonly profileId: string;
}

export default async (config: Config, req: Request): Promise<Result> => {
  const client = await getClient(config, req.body.Authorization);
  const ifMatch = getEtag(req.body['If-Match']);
  const ifNoneMatch = getEtag(req.body['If-None-Match']);
  const profileId = getProfileId(req.body.profileId);
  const activityId = getActivityId(req.body.activityId);
  const contentType = getContentType(req.body['Content-Type']);
  const content = stringToStream(req.body.content);

  return { activityId, client, content, contentType, ifMatch, ifNoneMatch, profileId };
};
