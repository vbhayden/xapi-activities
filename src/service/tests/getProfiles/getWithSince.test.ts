import * as assert from 'assert';
import { delay } from 'bluebird';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';

const TEST_DELAY_MS = 2;

describe('getProfiles with since', () => {
  const service = setup();

  const getProfiles = async (timestamp: Date) => {
    return service.getProfiles({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      since: timestamp.toISOString(),
    });
  };

  it('should return no profile ids when updated before since', async () => {
    await createTextProfile();
    await Promise.resolve(delay(TEST_DELAY_MS));
    const timestamp = new Date();
    const getProfilesResult = await getProfiles(timestamp);
    assert.deepEqual(getProfilesResult.profileIds, []);
  });

  it('should return the profile id when updated after since', async () => {
    const timestamp = new Date();
    await Promise.resolve(delay(TEST_DELAY_MS));
    await createTextProfile();
    const getProfilesResult = await getProfiles(timestamp);
    assert.deepEqual(getProfilesResult.profileIds, [TEST_PROFILE_ID]);
  });
});
