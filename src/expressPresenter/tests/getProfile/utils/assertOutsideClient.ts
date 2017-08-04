import { TEST_ACTIVITY_ID, TEST_PROFILE_ID } from '../../../../utils/testValues';
import { NOT_FOUND_404_HTTP_CODE } from '../../../utils/httpCodes';
import supertest from '../../utils/supertest';

export default async () => {
  const activityId = TEST_ACTIVITY_ID;
  const profileId = TEST_PROFILE_ID;
  await supertest
    .get('/xAPI/activities/profile')
    .query({ activityId, profileId })
    .expect(NOT_FOUND_404_HTTP_CODE);
};
