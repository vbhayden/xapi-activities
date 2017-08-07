import * as assert from 'assert';
import * as streamToString from 'stream-to-string';
import service from './testService';
import { TEST_ACTIVITY_ID, TEST_CLIENT, TEST_PROFILE_ID } from './testValues';

export default async (content: string) => {
  const expectedProfileIds = [TEST_PROFILE_ID];

  // Checks the profileIds.
  const activityProfilesResult = await service.getProfiles({
    activityId: TEST_ACTIVITY_ID,
    client: TEST_CLIENT,
  });
  const actualProfileIds = activityProfilesResult.profileIds;
  assert.deepEqual(actualProfileIds, expectedProfileIds);

  // Checks the content.
  const agentProfileResult = await service.getProfile({
    activityId: TEST_ACTIVITY_ID,
    client: TEST_CLIENT,
    profileId: TEST_PROFILE_ID,
  });
  const actualContent = await streamToString(agentProfileResult.content);
  assert.equal(actualContent, content);
  assert.equal(agentProfileResult.contentType.constructor, String);
  assert.equal(agentProfileResult.updatedAt.constructor, Date);
  assert.equal(agentProfileResult.etag.constructor, String);
};
