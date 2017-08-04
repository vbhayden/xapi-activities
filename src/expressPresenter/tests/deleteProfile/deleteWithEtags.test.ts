import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import {
  NO_CONTENT_204_HTTP_CODE,
  PRECONDITION_FAILED_412_HTTP_CODE,
} from '../../utils/httpCodes';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';

describe('expressPresenter.deleteProfile with etags', () => {
  const { service, supertest } = setup();

  it('should allow deletion when using a correct etag', async () => {
    await createTextProfile();
    const getProfileResult = await service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    await supertest
      .delete('/xAPI/activities/profile')
      .set('If-Match', `"${getProfileResult.etag}"`)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw precondition error when using an incorrect ifMatch', async () => {
    await createTextProfile();
    await supertest
      .delete('/xAPI/activities/profile')
      .set('If-Match', `"incorrect_etag"`)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(PRECONDITION_FAILED_412_HTTP_CODE);
  });

  it('should allow deletion when not using an IfMatch', async () => {
    await createTextProfile();
    await supertest
      .delete('/xAPI/activities/profile')
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NO_CONTENT_204_HTTP_CODE);
  });
});
