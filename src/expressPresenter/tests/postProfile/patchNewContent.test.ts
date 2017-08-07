import assertProfile from '../../../utils/assertProfile';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_CONTENT,
  TEST_INVALID_ACTIVITY_ID,
  TEST_JSON_CONTENT,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
  TEXT_CONTENT_TYPE,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import createImmutableProfile from '../utils/createImmutableProfile';
import setup from '../utils/setup';
import patchContent from './utils/patchContent';

describe('expressPresenter.postProfile with new content', () => {
  const { supertest } = setup();

  it('should error when patching with text content', async () => {
    await patchContent(TEST_CONTENT, TEXT_CONTENT_TYPE).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should error when patching with JSON content', async () => {
    await patchContent(TEST_JSON_CONTENT, JSON_CONTENT_TYPE).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should create when patching with object content', async () => {
    await patchContent(TEST_OBJECT_CONTENT, JSON_CONTENT_TYPE).expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_OBJECT_CONTENT);
  });

  it('should not patch existing models when patching a non-existing model', async () => {
    await createImmutableProfile();
    await patchContent(TEST_OBJECT_CONTENT, JSON_CONTENT_TYPE).expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_OBJECT_CONTENT);
  });

  it('should throw warnings when using an invalid activity id', async () => {
    await supertest
      .post('/xAPI/activities/profile')
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        activityId: TEST_INVALID_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_CONTENT)
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the activity id', async () => {
    await supertest
      .post('/xAPI/activities/profile')
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_CONTENT)
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the profile id', async () => {
    await supertest
      .post('/xAPI/activities/profile')
      .set('Content-Type', TEXT_CONTENT_TYPE)
      .query({
        activityId: TEST_ACTIVITY_ID,
      })
      .send(TEST_CONTENT)
      .expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
