import { TEST_ACTIVITY_ID } from '../../../utils/testValues';
import { NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import createJsonProfile from '../utils/createJsonProfile';
import createTextProfile from '../utils/createTextProfile';
import setup from '../utils/setup';
import assertDeleted from './utils/assertDeleted';
import deleteProfile from './utils/deleteProfile';

describe('expressPresenter.deleteProfile with existing profile', () => {
  setup();

  it('should delete when deleting text', async () => {
    await createTextProfile();
    await deleteProfile(TEST_ACTIVITY_ID).expect(NO_CONTENT_204_HTTP_CODE);
    await assertDeleted();
  });

  it('should delete when deleting json', async () => {
    await createJsonProfile();
    await deleteProfile(TEST_ACTIVITY_ID).expect(NO_CONTENT_204_HTTP_CODE);
    await assertDeleted();
  });
});
