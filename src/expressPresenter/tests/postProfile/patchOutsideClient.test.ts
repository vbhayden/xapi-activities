import assertProfile from '../../../utils/assertProfile';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_OBJECT_CONTENT,
  TEST_OUTSIDE_ORG_TOKEN,
  TEST_OUTSIDE_STORE_TOKEN,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import patchContent from './utils/patchContent';

describe('expressPresenter.postProfile when outside client', () => {
  const { supertest } = setup();

  const patchOutsideProfile = async (token: string) => {
    await supertest
      .post('/xAPI/activities/profile')
      .set('Authorization', token)
      .set('Content-Type', JSON_CONTENT_TYPE)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send('{"bar":2}')
      .expect(NO_CONTENT_204_HTTP_CODE);
  };

  it('should not overwrite existing model when using a different organisation', async () => {
    await patchContent(TEST_OBJECT_CONTENT, JSON_CONTENT_TYPE);
    await patchOutsideProfile(TEST_OUTSIDE_ORG_TOKEN);
    await assertProfile(TEST_OBJECT_CONTENT);
  });

  it('should not overwrite existing model when using a different store', async () => {
    await patchContent(TEST_OBJECT_CONTENT, JSON_CONTENT_TYPE);
    await patchOutsideProfile(TEST_OUTSIDE_STORE_TOKEN);
    await assertProfile(TEST_OBJECT_CONTENT);
  });
});
