import { TEST_ACTIVITY_ID, TEST_PROFILE_ID } from '../../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../../utils/httpCodes';
import supertest from '../../utils/supertest';

export default async () => {
  const activityId = TEST_ACTIVITY_ID;
  const profileId = TEST_PROFILE_ID;
  await supertest
    .delete('/xAPI/activities/profile')
    .query({ activityId, profileId })
    .expect(NO_CONTENT_204_HTTP_CODE);
};
