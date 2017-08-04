import * as assert from 'assert';
import Forbidden from 'jscommons/dist/errors/Forbidden';
import assertError from 'jscommons/dist/tests/utils/assertError';
import { XAPI_READ } from '../../../utils/scopes';
import { TEST_ACTIVITY_ID, TEST_CLIENT } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getProfiles with scopes', () => {
  const service = setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const scopes = ['invalid_scope'];
    const promise = service.getProfiles({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
    });
    await assertError(Forbidden, promise);
  });

  it('should return no models when using valid scopes', async () => {
    const scopes = [XAPI_READ];
    const getProfilesResult = await service.getProfiles({
      activityId: TEST_ACTIVITY_ID,
      client: { ...TEST_CLIENT, scopes },
    });
    assert.deepEqual(getProfilesResult.profileIds, []);
  });
});
