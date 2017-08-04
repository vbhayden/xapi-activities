import {
  TEST_ACTIVITY_ID,
  TEST_INVALID_ACTIVITY_ID,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NOT_FOUND_404_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.getProfile with non-existing model', () => {
  const { supertest } = setup();

  it('should error when getting a non-existing model', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NOT_FOUND_404_HTTP_CODE);
  });

  it('should throw warnings when using an invalid activity id', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .query({
        activityId: TEST_INVALID_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
