import Forbidden from 'jscommons/dist/errors/Forbidden';
import NoModel from 'jscommons/dist/errors/NoModel';
import assertError from 'jscommons/dist/tests/utils/assertError';
import { XAPI_PROFILE_ALL } from '../../../utils/scopes';
import { TEST_ACTIVITY_ID, TEST_CLIENT, TEST_PROFILE_ID } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('deleteProfile with scopes', () => {
  const service = setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const scopes = ['invalid_scope'];
    const promise = service.deleteProfile({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
      profileId: TEST_PROFILE_ID,
    });
    await assertError(Forbidden, promise);
  });

  it('should not throw any error when using valid scopes on a non-existent profile', async () => {
    const scopes = [XAPI_PROFILE_ALL];
    const promise = service.deleteProfile({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
      profileId: TEST_PROFILE_ID,
    });
  });
});
