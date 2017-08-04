import * as assert from 'assert';
import { TEST_ACTIVITY_ID, TEST_CLIENT } from '../../../../utils/testValues';
import service from '../../utils/service';

export default async () => {
  const profilesResult = await service.getProfiles({
    activityId: TEST_ACTIVITY_ID,
    client: TEST_CLIENT,
  });
  assert.deepEqual(profilesResult.profileIds, []);
};
