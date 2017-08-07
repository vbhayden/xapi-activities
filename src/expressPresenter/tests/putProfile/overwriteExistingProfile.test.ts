import assertProfile from '../../../utils/assertProfile';
import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import createImmutableProfile from '../utils/createImmutableProfile';
import setup from '../utils/setup';
import overwriteProfile from './utils/overwriteProfile';

describe('expressPresenter.putProfile with existing model', () => {
  const { service, supertest } = setup();

  it('should overwrite model when overwriting an existing model', async () => {
    // Creates model with initial content.
    const initialContent = 'initial_dummy_content';
    await overwriteProfile(TEST_ACTIVITY_ID, initialContent);

    // Overwrites model with expected content.
    const getProfileResult = await service.getProfile({
      activityId: TEST_ACTIVITY_ID,
      client: TEST_CLIENT,
      profileId: TEST_PROFILE_ID,
    });
    await supertest
      .put('/xAPI/activities/profile')
      .set('If-Match', `"${getProfileResult.etag}"`)
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_CONTENT)
      .expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_CONTENT);
  });

  it('should not overwrite existing models when using a non-existing model', async () => {
    await createImmutableProfile();
    await overwriteProfile(TEST_ACTIVITY_ID, TEST_CONTENT).expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_CONTENT);
  });
});
