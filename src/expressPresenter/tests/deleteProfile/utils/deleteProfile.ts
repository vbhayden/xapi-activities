import { Test } from 'supertest';
import { xapiHeaderVersion } from '../../../../utils/constants';
import { TEST_PROFILE_ID } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (activityId: string): Test => {
  const profileId = TEST_PROFILE_ID;
  return supertest
    .delete('/xAPI/activities/profile')
    .set('X-Experience-API-Version', xapiHeaderVersion)
    .query({ activityId, profileId });
};
