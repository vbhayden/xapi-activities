import { TEST_PROFILE_ID, TEXT_CONTENT_TYPE } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (activityId: string, content: string) => {
  const profileId = TEST_PROFILE_ID;
  return supertest
    .put('/xAPI/activities/profile')
    .set('Content-Type', TEXT_CONTENT_TYPE)
    .query({ activityId, profileId })
    .send(content);
};
