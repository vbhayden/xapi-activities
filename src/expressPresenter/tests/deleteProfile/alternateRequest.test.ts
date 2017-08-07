import {
  ALTERNATE_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';
import assertDeleted from './utils/assertDeleted';

describe('expressPresenter.deleteProfile using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should delete when deleting text', async () => {
    await createTextProfile();
    await supertest
      .post('/xAPI/activities/profile')
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .query({ method: 'DELETE' })
      .send({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .expect(NO_CONTENT_204_HTTP_CODE);
    await assertDeleted();
  });
});
