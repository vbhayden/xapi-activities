import {
  TEST_ACTIVITY_ID,
  TEST_PROFILE_ID,
} from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (content: string, contentType: string) => {
  return supertest
    .post('/xAPI/activities/profile')
    .set('Content-Type', contentType)
    .query({
      activityId: TEST_ACTIVITY_ID,
      profileId: TEST_PROFILE_ID,
    })
    .send(content);
};
