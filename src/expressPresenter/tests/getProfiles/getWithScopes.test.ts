import {
  TEST_INVALID_SCOPE_TOKEN,
  TEST_VALID_SCOPE_TOKEN,
} from '../../../utils/testValues';
import { FORBIDDEN_403_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import getProfiles from './utils/getProfiles';

describe('expressPresenter.getProfiles with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    await getProfiles()
      .set('Authorization', TEST_INVALID_SCOPE_TOKEN)
      .expect(FORBIDDEN_403_HTTP_CODE);
  });

  it('should return no models when using valid scopes', async () => {
    await getProfiles()
      .set('Authorization', TEST_VALID_SCOPE_TOKEN)
      .expect(OK_200_HTTP_CODE, []);
  });
});
