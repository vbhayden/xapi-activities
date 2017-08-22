import { xapiHeaderVersion } from '../../../utils/constants';
import {
  ALTERNATE_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
} from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';

describe('expressPresenter.getProfiles using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should return no profile ids when getting a non-existing activity id', async () => {
    await supertest
      .post('/xAPI/activities/profile')
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({ method: 'GET' })
      .send({ activityId: TEST_ACTIVITY_ID })
      .expect(OK_200_HTTP_CODE, []);
  });
});
