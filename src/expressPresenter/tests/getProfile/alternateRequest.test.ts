import {
  ALTERNATE_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CONTENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';

describe('expressPresenter.getProfile using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should get when getting text', async () => {
    await createTextProfile();
    await supertest
      .post('/xAPI/activities/profile')
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .query({ method: 'GET' })
      .send({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });
});
