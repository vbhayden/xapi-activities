import { delay } from 'bluebird';
import { xapiHeaderVersion } from '../../../utils/constants';
import { TEST_ACTIVITY_ID, TEST_PROFILE_ID } from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';
import supertest from '../utils/supertest';

const TEST_DELAY_MS = 2;

describe('expressPresenter.getProfiles with since', () => {
  setup();

  const getProfiles = (timestamp: Date) => {
    return supertest
      .get('/xAPI/activities/profile')
      .set('Authorization', 'valid_scope_client')
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({
        activityId: TEST_ACTIVITY_ID,
        since: timestamp.toISOString(),
      });
  };

  it('should return no profile ids when updated before since', async () => {
    await createTextProfile();
    await Promise.resolve(delay(TEST_DELAY_MS));
    const timestamp = new Date();
    await getProfiles(timestamp).expect(OK_200_HTTP_CODE, []);
  });

  it('should return the profile id when updated after since', async () => {
    const timestamp = new Date();
    await Promise.resolve(delay(TEST_DELAY_MS));
    await createTextProfile();
    await getProfiles(timestamp).expect(OK_200_HTTP_CODE, [TEST_PROFILE_ID]);
  });
});
