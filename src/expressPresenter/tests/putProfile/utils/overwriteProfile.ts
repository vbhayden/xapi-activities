import { Test } from 'supertest';
import { xapiHeaderVersion } from '../../../../utils/constants';
import { TEST_PROFILE_ID, TEXT_CONTENT_TYPE } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

export default (activityId: string, content: string): Test => {
  const profileId = TEST_PROFILE_ID;
  return supertest
    .put('/xAPI/activities/profile')
    .set('X-Experience-API-Version', xapiHeaderVersion)
    .set('Content-Type', TEXT_CONTENT_TYPE)
    .query({ activityId, profileId })
    .send(content);
};
