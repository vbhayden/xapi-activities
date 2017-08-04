import NoModel from 'jscommons/dist/errors/NoModel';
import assertError from 'jscommons/dist/tests/utils/assertError';
import { Warnings } from 'rulr';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_INVALID_ACTIVITY_ID,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getProfile with non-existing model', () => {
  const service = setup();

  it('should error when getting a non-existing model', async () => {
    const promise = service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    await assertError(NoModel, promise);
  });

  it('should throw warnings when using an invalid activity id', async () => {
    const promise = service.getProfile({
      activityId: TEST_INVALID_ACTIVITY_ID,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    await assertError(Warnings, promise);
  });
});
