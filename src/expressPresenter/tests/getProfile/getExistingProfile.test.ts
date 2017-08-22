import { xapiHeaderVersion } from '../../../utils/constants';
import {
  TEST_ACTIVITY_ID,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { TEST_CONTENT, TEST_JSON_CONTENT } from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import createJsonProfile from '../utils/createJsonProfile';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';

describe('expressPresenter.getProfile with existing profile', () => {
  const { supertest } = setup();

  it('should get when getting text', async () => {
    await createTextProfile();
    await supertest
      .get('/xAPI/activities/profile')
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });

  it('should get when getting json', async () => {
    await createJsonProfile();
    await supertest
      .get('/xAPI/activities/profile')
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(OK_200_HTTP_CODE, JSON.parse(TEST_JSON_CONTENT));
  });
});
