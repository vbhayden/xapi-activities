import Forbidden from 'jscommons/dist/errors/Forbidden';
import NoModel from 'jscommons/dist/errors/NoModel';
import assertError from 'jscommons/dist/tests/utils/assertError';
import { XAPI_READ } from '../../../utils/scopes';
import { TEST_ACTIVITY_ID, TEST_CLIENT, TEST_PROFILE_ID } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getProfile with scopes', () => {
  const service = setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const scopes = ['invalid_scope'];
    const promise = service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
      profileId: TEST_PROFILE_ID,
    });
    await assertError(Forbidden, promise);
  });

  it('should throw no model error when using valid scopes', async () => {
    const scopes = [XAPI_READ];
    const promise = service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
      profileId: TEST_PROFILE_ID,
    });
    await assertError(NoModel, promise);
  });
});
