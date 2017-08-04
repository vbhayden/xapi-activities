import * as streamToString from 'stream-to-string';
import OverwriteProfileOptions from '../serviceFactory/options/OverwriteProfileOptions';
import Config from './Config';
import checkProfileWriteScopes from './utils/checkProfileWriteScopes';
import createEtag from './utils/createEtag';
import validateActivityId from './utils/validateActivityId';

export default (config: Config) => {
  return async (opts: OverwriteProfileOptions) => {
    checkProfileWriteScopes(opts.client.scopes);
    validateActivityId(opts.activityId);

    // Update or create Profile.
    const etag = createEtag();
    const jsonContent = (
      opts.contentType === 'application/json'
      ? JSON.parse(await streamToString(opts.content))
      : undefined
    );
    const overwriteProfileResult = await config.repo.overwriteProfile({
      activityId: opts.activityId,
      client: opts.client,
      content: jsonContent,
      contentType: opts.contentType,
      etag,
      ifMatch: opts.ifMatch,
      ifNoneMatch: opts.ifNoneMatch,
      profileId: opts.profileId,
    });

    if (opts.contentType !== 'application/json') {
      await config.repo.storeProfileContent({
        content: opts.content,
        key: overwriteProfileResult.id,
      });
    }

    return;
  };
};
