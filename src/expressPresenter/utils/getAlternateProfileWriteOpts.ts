import { Request } from 'express';
import * as stringToStream from 'string-to-stream';
import getActivityId from './getActivityId';
import getContentType from './getContentType';
import getEtag from './getEtag';
import getHeader from './getHeader';
import getProfileId from './getProfileId';

export interface Result {
  readonly activityId: string;
  readonly content: NodeJS.ReadableStream;
  readonly contentType: string;
  readonly ifMatch?: string;
  readonly ifNoneMatch?: string;
  readonly profileId: string;
}

export default async (req: Request): Promise<Result> => {
  const ifMatch = getEtag(getHeader(req, 'If-Match', undefined));
  const ifNoneMatch = getEtag(getHeader(req, 'If-None-Match', undefined));
  const profileId = getProfileId(req.body.profileId);
  const activityId = getActivityId(req.body.activityId);
  const contentType = getContentType(req.body['Content-Type']);
  const content = stringToStream(req.body.content);

  return { activityId, content, contentType, ifMatch, ifNoneMatch, profileId };
};
