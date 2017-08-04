import { TEST_PROFILE_ID } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (activityId: string) => {
  const profileId = TEST_PROFILE_ID;
  return supertest
    .delete('/xAPI/activities/profile')
    .query({ activityId, profileId });
};
