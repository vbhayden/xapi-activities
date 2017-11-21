import assertProfile from '../../../utils/assertProfile';
import { route, xapiHeaderVersion } from '../../../utils/constants';
import {
  JSON_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_OBJECT_CONTENT,
  TEST_PROFILE_ID,
} from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

// These are regression tests for LearningLocker/learninglocker#999.
describe(__filename, () => {
  const { supertest } = setup();

  it('should not error when using a charset for JSON ', async () => {
    await supertest
      .put(route)
      .set('Content-Type', `${JSON_CONTENT_TYPE}; charset=UTF-8`)
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .set('If-None-Match', '*')
      .query({
        activityId: TEST_ACTIVITY_ID,
        profileId: TEST_PROFILE_ID,
      })
      .send(TEST_OBJECT_CONTENT)
      .expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_OBJECT_CONTENT);
  });
});
