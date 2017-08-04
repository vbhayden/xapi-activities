import Forbidden from 'jscommons/dist/errors/Forbidden';
import assertError from 'jscommons/dist/tests/utils/assertError';
import * as stringToStream from 'string-to-stream';
import { XAPI_PROFILE_ALL } from '../../../utils/scopes';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import setup from '../utils/setup';

describe('overwriteProfile with scopes', () => {
  const service = setup();

  const overwriteProfileWithScopes = (scopes: string[]) => {
    return service.overwriteProfile({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
      content: stringToStream(TEST_CONTENT),
      contentType: TEXT_CONTENT_TYPE,
      profileId: TEST_PROFILE_ID,
    });
  };

  it('should throw forbidden error when using invalid scope', async () => {
    const scopes = ['invalid_scope'];
    const promise = overwriteProfileWithScopes(scopes);
    await assertError(Forbidden, promise);
  });

  it('should not throw an error when using valid scopes', async () => {
    const scopes = [XAPI_PROFILE_ALL];
    await overwriteProfileWithScopes(scopes);
  });
});
