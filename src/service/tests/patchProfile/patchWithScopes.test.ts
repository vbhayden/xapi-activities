import Forbidden from 'jscommons/dist/errors/Forbidden';
import assertError from 'jscommons/dist/tests/utils/assertError';
import * as stringToStream from 'string-to-stream';
import { XAPI_PROFILE_ALL } from '../../../utils/scopes';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import setup from '../utils/setup';

describe('patchProfile with scopes', () => {
  const service = setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const scopes = ['invalid_scope'];
    const promise = service.patchProfile({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
      content: stringToStream(TEST_OBJECT_CONTENT),
      contentType: JSON_CONTENT_TYPE,
      profileId: TEST_PROFILE_ID,
    });
    await assertError(Forbidden, promise);
  });

  it('should not throw an error when using valid scopes', async () => {
    const scopes = [XAPI_PROFILE_ALL];
    await service.patchProfile({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
      content: stringToStream(TEST_OBJECT_CONTENT),
      contentType: JSON_CONTENT_TYPE,
      profileId: TEST_PROFILE_ID,
    });
  });
});
