import {
  TEST_ACTIVITY_ID,
  TEST_CONTENT,
  TEST_INVALID_ACTIVITY_ID,
} from '../../../utils/testValues';
import { CLIENT_ERROR_400_HTTP_CODE, NO_CONTENT_204_HTTP_CODE } from '../../utils/httpCodes';
import assertProfile from '../utils/assertProfile';
import setup from '../utils/setup';
import overwriteProfile from './utils/overwriteProfile';

describe('expressPresenter.putProfile with non-existing model', () => {
  setup();

  it('should create when using valid activity id', async () => {
    await overwriteProfile(TEST_ACTIVITY_ID, TEST_CONTENT).expect(NO_CONTENT_204_HTTP_CODE);
    await assertProfile(TEST_CONTENT);
  });

  it('should throw warnings when using an invalid activity id', async () => {
    await overwriteProfile(
      TEST_INVALID_ACTIVITY_ID,
      TEST_CONTENT,
    ).expect(CLIENT_ERROR_400_HTTP_CODE);
  });
});
