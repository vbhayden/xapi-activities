import * as streamToString from 'stream-to-string';
import Conflict from '../errors/Conflict';
import MissingEtags from '../errors/MissingEtags';
import OverwriteProfileOptions from '../serviceFactory/options/OverwriteProfileOptions';
import Config from './Config';
import checkProfileWriteScopes from './utils/checkProfileWriteScopes';
import createEtag from './utils/createEtag';
import validateActivityId from './utils/validateActivityId';

export default (config: Config) => {
  return async (opts: OverwriteProfileOptions) => {
    checkProfileWriteScopes(opts.client.scopes);
    validateActivityId(opts.activityId);

    const etag = createEtag();

    if (opts.ifMatch === undefined && opts.ifNoneMatch === undefined) {
      const { hasProfile } = await config.repo.hasProfile({
        activityId: opts.activityId,
        client: opts.client,
        profileId: opts.profileId,
      });
      if (hasProfile) {
        throw new Conflict();
      } else {
        throw new MissingEtags();
      }
    }

    // Update or create Profile.
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
