import { xapiHeaderVersion } from '../../../../utils/constants';
import { TEST_ACTIVITY_ID } from '../../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../../utils/httpCodes';
import supertest from '../../utils/supertest';

export default async () => {
  const activityId = TEST_ACTIVITY_ID;
  await supertest
    .get('/xAPI/activities/profile')
    .set('X-Experience-API-Version', xapiHeaderVersion)
    .query({ activityId })
    .expect(OK_200_HTTP_CODE, []);
};
