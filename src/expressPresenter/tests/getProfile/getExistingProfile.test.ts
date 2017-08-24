import createJsonProfile from '../../../utils/createJsonProfile';
import createTextProfile from '../../../utils/createTextProfile';
import {
  TEST_CONTENT,
  TEST_JSON_CONTENT,
} from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import getProfile from './utils/getProfile';

describe('expressPresenter.getProfile with existing state', () => {
  setup();

  it('should get when getting text', async () => {
    await createTextProfile();
    await getProfile().expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });

  it('should get when getting json', async () => {
    await createJsonProfile();
    await getProfile().expect(OK_200_HTTP_CODE, JSON.parse(TEST_JSON_CONTENT));
  });
});
