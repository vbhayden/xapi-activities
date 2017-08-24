import createTextProfile from '../../../utils/createTextProfile';
import { TEST_PROFILE_ID } from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import getProfiles from './utils/getProfiles';

describe('expressPresenter.getProfiles with existing model', () => {
  setup();

  it('should return profile ids when getting a existing model', async () => {
    await createTextProfile();
    await getProfiles().expect(OK_200_HTTP_CODE, [TEST_PROFILE_ID]);
  });
});
