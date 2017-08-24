import { delay } from 'bluebird';
import createTextProfile from '../../../utils/createTextProfile';
import { TEST_PROFILE_ID } from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import getProfiles from './utils/getProfiles';

const TEST_DELAY_MS = 2;

describe('expressPresenter.getProfiles with since', () => {
  setup();

  it('should return no profile ids when updated before since', async () => {
    await createTextProfile();
    await Promise.resolve(delay(TEST_DELAY_MS));
    const timestamp = new Date();
    await getProfiles({ since: timestamp.toISOString() }).expect(OK_200_HTTP_CODE, []);
  });

  it('should return the profile id when updated after since', async () => {
    const timestamp = new Date();
    await Promise.resolve(delay(TEST_DELAY_MS));
    await createTextProfile();
    await getProfiles({
      since: timestamp.toISOString(),
    }).expect(OK_200_HTTP_CODE, [TEST_PROFILE_ID]);
  });
});
