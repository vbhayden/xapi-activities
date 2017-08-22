import { xapiHeaderVersion } from '../../../utils/constants';
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
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NOT_FOUND_404_HTTP_CODE);
  });

  it('should throw warnings when using an invalid activity id', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_INVALID_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  // Could have tested that 400s are returned when missing activity ID and profile ID.
  // However, when missing profile ID, the express presenter will use getProfiles.
  // The missing actvitiy ID case is covered in the getProfiles tests.
});
