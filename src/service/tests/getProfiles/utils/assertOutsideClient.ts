import * as assert from 'assert';
import service from '../../../../utils/testService';
import { TEST_ACTIVITY_ID, TEST_CLIENT } from '../../../../utils/testValues';

export default async () => {
  const profilesResult = await service.getProfiles({
    activityId: TEST_ACTIVITY_ID,
    client: TEST_CLIENT,
  });
  assert.deepEqual(profilesResult.profileIds, []);
};
