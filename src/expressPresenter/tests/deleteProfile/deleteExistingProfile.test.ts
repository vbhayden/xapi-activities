import * as assert from 'assert';
import NoModel from 'jscommons/dist/errors/NoModel';
import assertError from 'jscommons/dist/tests/utils/assertError';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import createJsonProfile from '../utils/createJsonProfile';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';
import deleteProfile from './utils/deleteProfile';

describe('expressPresenter.deleteProfile with existing profile', () => {
  const { service } = setup();

  const assertDeleted = async () => {
    // Asserts that the agent has no profiles.
    const getProfilesResult = await service.getProfiles({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
    });
    assert.deepEqual([], getProfilesResult.profileIds);

    // Asserts that the profile does not exist.
    const getProfilePromise = service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    await assertError(NoModel, getProfilePromise);
  };

  it('should delete when deleting text', async () => {
    await createTextProfile();
    await deleteProfile(TEST_ACTIVITY_ID).expect(NO_CONTENT_204_HTTP_CODE);
    await assertDeleted();
  });

  it('should delete when deleting json', async () => {
    await createJsonProfile();
    await deleteProfile(TEST_ACTIVITY_ID).expect(NO_CONTENT_204_HTTP_CODE);
    await assertDeleted();
  });
});
