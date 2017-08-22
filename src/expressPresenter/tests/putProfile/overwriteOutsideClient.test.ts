import assertProfile from '../../../utils/assertProfile';
import { xapiHeaderVersion } from '../../../utils/constants';
import {
  TEST_ACTIVITY_ID,
  TEST_CONTENT,
  TEST_OUTSIDE_ORG_TOKEN,
  TEST_OUTSIDE_STORE_TOKEN,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import overwriteProfile from './utils/overwriteProfile';

describe('expressPresenter.putProfile when outside client', () => {
  const { supertest } = setup();

  const overwriteOutsideProfile = async (token: string) => {
    await supertest
      .put('/xAPI/activities/profile')
      .set('Authorization', token)
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send('unused_content')
      .expect(NO_CONTENT_204_HTTP_CODE);
  };

  it('should not overwrite existing model when using a different organisation', async () => {
    await overwriteProfile(TEST_ACTIVITY_ID, TEST_CONTENT).expect(NO_CONTENT_204_HTTP_CODE);
    await overwriteOutsideProfile(TEST_OUTSIDE_ORG_TOKEN);
    await assertProfile(TEST_CONTENT);
  });

  it('should not overwrite existing model when using a different store', async () => {
    await overwriteProfile(TEST_ACTIVITY_ID, TEST_CONTENT).expect(NO_CONTENT_204_HTTP_CODE);
    await overwriteOutsideProfile(TEST_OUTSIDE_STORE_TOKEN);
    await assertProfile(TEST_CONTENT);
  });
});
