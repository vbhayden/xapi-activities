import {
  TEST_ACTIVITY_ID,
  TEST_CLIENT,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';
import service from '../../utils/service';
import supertest from '../../utils/supertest';

export default async (content: string, contentType: string, expectedCode: number) => {
  const getProfileResult = await service.getProfile({
    activityId: TEST_ACTIVITY_ID,
    client: TEST_CLIENT,
    profileId: TEST_PROFILE_ID,
  });
  return supertest
    .post('/xAPI/activities/profile')
    .set('Content-Type', contentType)
    .set('If-Match', `"${getProfileResult.etag}"`)
    .query({
      activityId: TEST_ACTIVITY_ID,
      profileId: TEST_PROFILE_ID,
    })
    .send(content)
    .expect(expectedCode);
};
