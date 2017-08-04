import * as assert from 'assert';
import assertError from 'jscommons/dist/tests/utils/assertError';
import { Warnings } from 'rulr';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_INVALID_ACTIVITY_ID,
  TEST_INVALID_TIMESTAMP,
} from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getProfiles with non-existing agent', () => {
  const service = setup();

  it('should return no profile ids when getting a non-existing activity id', async () => {
    const profilesResult = await service.getProfiles({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
    });
    assert.deepEqual(profilesResult.profileIds, []);
  });

  it('should throw warnings when using an invalid activity id', async () => {
    const promise = service.getProfiles({
      activityId: TEST_INVALID_ACTIVITY_ID,
      client: TEST_CLIENT,
    });
    await assertError(Warnings, promise);
  });

    it('should throw warnings when using an invalid since', async () => {
      const promise = service.getProfiles({
        activityId: TEST_INVALID_ACTIVITY_ID,
        client: TEST_CLIENT,
        since: TEST_INVALID_TIMESTAMP,
      });
      await assertError(Warnings, promise);
    });
});
