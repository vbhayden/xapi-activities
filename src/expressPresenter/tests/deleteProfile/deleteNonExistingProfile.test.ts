import { TEST_INVALID_ACTIVITY_ID } from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import deleteProfile from './utils/deleteProfile';

describe('expressPresenter.deleteProfile with non-existing state', () => {
  setup();

  it('should error when deleting', async () => {
    await deleteProfile().expect(NO_CONTENT_204_HTTP_CODE);
  });

  it('should throw warnings when using an invalid activityId', async () => {
    await deleteProfile({
      activityId: TEST_INVALID_ACTIVITY_ID,
    }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the profile id', async () => {
    await deleteProfile({ profileId: undefined }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });

  it('should throw warnings when missing the activityId', async () => {
    await deleteProfile({ activityId: undefined }).expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
